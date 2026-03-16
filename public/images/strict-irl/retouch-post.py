#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "pillow>=10.0.0",
#     "numpy>=1.24.0",
# ]
# ///
"""
StrictFood Post Retoucher — DA-compliant post-processing.

Applies:
  1. Kodak Portra 400 color grading (warm shift, lifted blacks)
  2. Cuivre Braise warmth in highlights
  3. Charbon warm blacks (never pure #000)
  4. Subtle film grain
  5. Lens vignetting
  6. Crop + resize to exact Instagram dimensions

Usage:
    uv run retouch-post.py input.png [--formats 4x5,1x1,16x9] [--output-dir .]
"""

import argparse
import numpy as np
from pathlib import Path
from PIL import Image, ImageFilter, ImageEnhance


# --- StrictFood DA Color Constants ---
# Charbon: oklch(0.14 0.008 60) ≈ RGB(20, 18, 16) — warm off-black
CHARBON_R, CHARBON_G, CHARBON_B = 20, 18, 16
# Cuivre Braise: oklch(0.67 0.15 68) ≈ RGB(191, 133, 34)
CUIVRE_R, CUIVRE_G, CUIVRE_B = 191, 133, 34


# --- Instagram Exact Dimensions ---
INSTAGRAM_FORMATS = {
    "4x5": (1080, 1350),
    "1x1": (1080, 1080),
    "16x9": (1080, 566),
}


def apply_portra_curves(img_array: np.ndarray) -> np.ndarray:
    """Apply Kodak Portra 400-style color curves.

    Portra characteristics:
    - Lifted shadows (no true blacks)
    - Warm skin tones (slight red/yellow push in mids)
    - Slightly desaturated highlights
    - Soft contrast (S-curve less aggressive than Ektar)
    """
    result = img_array.astype(np.float64)

    # --- Channel-specific curves ---
    for ch in range(3):
        channel = result[:, :, ch]

        # Normalize to 0-1
        c = channel / 255.0

        if ch == 0:  # Red — warm push in mids, lift shadows
            # Lift blacks to ~18/255, slight S-curve, warm mid push
            c = 0.07 + 0.93 * c  # lift floor
            c = c * (1.0 + 0.06 * (0.5 - np.abs(c - 0.5)))  # subtle mid push
        elif ch == 1:  # Green — very slight warm lift
            c = 0.06 + 0.94 * c  # lift floor slightly less than red
            c = c * (1.0 + 0.02 * (0.5 - np.abs(c - 0.5)))
        else:  # Blue — pull down slightly (warm = less blue)
            c = 0.05 + 0.92 * c  # lift floor least, compress range most
            # Slight reduction in highlights (Portra desaturates blues in highlights)
            c = np.where(c > 0.7, c * 0.97, c)

        result[:, :, ch] = np.clip(c * 255, 0, 255)

    return result.astype(np.uint8)


def apply_cuivre_warmth(img_array: np.ndarray, strength: float = 0.08) -> np.ndarray:
    """Add subtle Cuivre Braise warmth to highlights.

    Shifts highlights toward copper/golden tones without affecting shadows.
    """
    result = img_array.astype(np.float64)
    luminance = 0.299 * result[:, :, 0] + 0.587 * result[:, :, 1] + 0.114 * result[:, :, 2]

    # Only affect highlights (luminance > 160)
    highlight_mask = np.clip((luminance - 140) / 80, 0, 1)  # ramp 140-220

    # Shift toward cuivre: add warmth (red+, green slightly+, blue-)
    result[:, :, 0] += highlight_mask * strength * 40   # red push
    result[:, :, 1] += highlight_mask * strength * 15   # slight green
    result[:, :, 2] -= highlight_mask * strength * 20   # blue pull

    return np.clip(result, 0, 255).astype(np.uint8)


def apply_charbon_blacks(img_array: np.ndarray) -> np.ndarray:
    """Ensure no pure blacks — lift to warm Charbon tone.

    StrictFood DA: never #000000, always oklch(0.14 0.008 60) ≈ (20, 18, 16).
    """
    result = img_array.astype(np.float64)

    # Lift each channel's floor to Charbon values
    for ch, floor in enumerate([CHARBON_R, CHARBON_G, CHARBON_B]):
        channel = result[:, :, ch]
        # Only affect very dark pixels (0-30 range), blend smoothly
        dark_mask = np.clip(1.0 - channel / 40, 0, 1)
        result[:, :, ch] = channel + dark_mask * (floor - channel * (floor / 40))

    return np.clip(result, 0, 255).astype(np.uint8)


def add_film_grain(img_array: np.ndarray, intensity: float = 8.0, seed: int = 42) -> np.ndarray:
    """Add organic film grain (Portra 400 — fine grain, slightly warm).

    Uses Gaussian noise with luminance-dependent intensity:
    grain is more visible in midtones, less in shadows/highlights.
    """
    rng = np.random.default_rng(seed)
    h, w, c = img_array.shape

    # Generate monochromatic grain (more natural than per-channel)
    grain = rng.normal(0, intensity, (h, w))

    # Luminance-dependent: stronger in midtones
    luminance = (0.299 * img_array[:, :, 0] + 0.587 * img_array[:, :, 1] +
                 0.114 * img_array[:, :, 2]) / 255.0
    mid_mask = 1.0 - 2.0 * np.abs(luminance - 0.5)  # peak at 0.5
    mid_mask = np.clip(mid_mask * 1.5, 0.3, 1.0)  # never fully zero

    grain = grain * mid_mask

    result = img_array.astype(np.float64)
    for ch in range(3):
        # Slight warmth in grain: red grain slightly stronger
        ch_factor = [1.05, 1.0, 0.92][ch]
        result[:, :, ch] += grain * ch_factor

    return np.clip(result, 0, 255).astype(np.uint8)


def add_vignette(img_array: np.ndarray, strength: float = 0.35, radius: float = 0.85) -> np.ndarray:
    """Add natural lens vignetting (darkened corners).

    Simulates real lens falloff — elliptical, centered, smooth gradient.
    """
    h, w = img_array.shape[:2]
    Y, X = np.ogrid[:h, :w]

    # Normalized coordinates centered at image center
    cx, cy = w / 2, h / 2
    # Elliptical distance (account for aspect ratio)
    dist = np.sqrt(((X - cx) / cx) ** 2 + ((Y - cy) / cy) ** 2)

    # Vignette: smooth falloff from radius to edges
    vignette = 1.0 - strength * np.clip((dist - radius) / (1.4 - radius), 0, 1) ** 1.5

    result = img_array.astype(np.float64)
    for ch in range(3):
        result[:, :, ch] *= vignette

    return np.clip(result, 0, 255).astype(np.uint8)


def smart_crop(img: Image.Image, target_w: int, target_h: int) -> Image.Image:
    """Crop image to target aspect ratio, then resize.

    Centers the crop, biased slightly upward (faces/subjects tend to be upper).
    """
    src_w, src_h = img.size
    target_ratio = target_w / target_h
    src_ratio = src_w / src_h

    if src_ratio > target_ratio:
        # Source is wider — crop sides
        new_w = int(src_h * target_ratio)
        new_h = src_h
        left = (src_w - new_w) // 2
        top = 0
    else:
        # Source is taller — crop top/bottom (bias upward 40/60)
        new_w = src_w
        new_h = int(src_w / target_ratio)
        left = 0
        top = int((src_h - new_h) * 0.35)  # bias upward

    box = (left, top, left + new_w, top + new_h)
    cropped = img.crop(box)

    # Resize to exact Instagram dimensions using high-quality Lanczos
    return cropped.resize((target_w, target_h), Image.LANCZOS)


def apply_subtle_contrast(img: Image.Image, factor: float = 1.08) -> Image.Image:
    """Slight contrast boost — Portra has soft but present contrast."""
    enhancer = ImageEnhance.Contrast(img)
    return enhancer.enhance(factor)


def apply_subtle_saturation(img: Image.Image, factor: float = 0.94) -> Image.Image:
    """Slight desaturation — Portra 400 is not punchy, it's elegant."""
    enhancer = ImageEnhance.Color(img)
    return enhancer.enhance(factor)


def retouch(input_path: str, formats: list[str], output_dir: str):
    """Full retouching pipeline."""
    img = Image.open(input_path).convert("RGB")
    stem = Path(input_path).stem

    print(f"Source: {input_path} ({img.size[0]}x{img.size[1]})")
    print(f"Formats: {', '.join(formats)}")
    print()

    # --- Step 1: Color grading (on full-res before crop) ---
    print("[1/6] Kodak Portra 400 curves...")
    arr = np.array(img)
    arr = apply_portra_curves(arr)

    print("[2/6] Cuivre Braise highlight warmth...")
    arr = apply_cuivre_warmth(arr, strength=0.08)

    print("[3/6] Charbon warm blacks (no pure #000)...")
    arr = apply_charbon_blacks(arr)

    print("[4/6] Film grain (Portra 400 fine)...")
    arr = add_film_grain(arr, intensity=7.0)

    print("[5/6] Lens vignetting...")
    arr = add_vignette(arr, strength=0.30, radius=0.80)

    # Convert back to PIL
    graded = Image.fromarray(arr)

    # Subtle contrast + desaturation
    graded = apply_subtle_contrast(graded, factor=1.06)
    graded = apply_subtle_saturation(graded, factor=0.95)

    # --- Step 2: Crop + resize for each format ---
    print("[6/6] Crop & resize to Instagram dimensions...")
    print()

    out_dir = Path(output_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    for fmt in formats:
        if fmt not in INSTAGRAM_FORMATS:
            print(f"  [SKIP] Unknown format: {fmt}")
            continue

        w, h = INSTAGRAM_FORMATS[fmt]
        result = smart_crop(graded, w, h)

        out_name = f"{stem}-graded-{fmt}.png"
        out_path = out_dir / out_name
        result.save(str(out_path), "PNG", optimize=True)
        print(f"  [{fmt}] {w}x{h} → {out_path}")

    print("\nDone.")


def main():
    parser = argparse.ArgumentParser(description="StrictFood Post Retoucher")
    parser.add_argument("input", help="Input image path")
    parser.add_argument(
        "--formats", "-f",
        default="4x5,1x1,16x9",
        help="Comma-separated formats: 4x5, 1x1, 16x9 (default: all three)"
    )
    parser.add_argument(
        "--output-dir", "-o",
        default=".",
        help="Output directory (default: current dir)"
    )
    args = parser.parse_args()

    formats = [f.strip() for f in args.formats.split(",")]
    retouch(args.input, formats, args.output_dir)


if __name__ == "__main__":
    main()
