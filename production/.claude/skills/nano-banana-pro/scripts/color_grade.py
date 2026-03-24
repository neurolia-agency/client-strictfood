#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "pillow>=10.0.0",
#     "numpy>=1.24.0",
# ]
# ///
"""
Color grading script pour le pipeline StrictFood.
Applique la DA Dark Food Premium a toute image generee par Gemini/GPT.

Usage:
  uv run production/.claude/skills/nano-banana-pro/scripts/color_grade.py \
    --input brouillons/image.png \
    --output brouillons/image-graded.png \
    [--intensity medium]     # light | medium | heavy
    [--grain]                # Ajouter grain film
    [--vignette]             # Ajouter vignette organique
"""

import argparse
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter


# --- Charbon target for shadow pull ---
CHARBON_RGB = np.array([20, 18, 16], dtype=np.float64)  # #141210

# --- Intensity presets ---
PRESETS = {
    "light": {
        "warm_red_boost": 0.02,       # +2% rouge
        "warm_blue_cut": 0.015,       # -1.5% bleu
        "shadow_threshold": 0.25,     # luminosite < 25%
        "shadow_pull_strength": 0.3,  # force du pull vers charbon
        "food_sat_boost": 0.10,       # +10% saturation food hues
        "other_sat_cut": 0.03,        # -3% saturation hors food
        "contrast_strength": 0.15,    # S-curve legere
        "grain_opacity": 0.02,        # grain tres subtil
        "vignette_strength": 0.25,    # vignette legere
    },
    "medium": {
        "warm_red_boost": 0.04,
        "warm_blue_cut": 0.025,
        "shadow_threshold": 0.30,
        "shadow_pull_strength": 0.45,
        "food_sat_boost": 0.20,
        "other_sat_cut": 0.05,
        "contrast_strength": 0.25,
        "grain_opacity": 0.035,
        "vignette_strength": 0.35,
    },
    "heavy": {
        "warm_red_boost": 0.07,
        "warm_blue_cut": 0.03,
        "shadow_threshold": 0.35,
        "shadow_pull_strength": 0.55,
        "food_sat_boost": 0.30,
        "other_sat_cut": 0.08,
        "contrast_strength": 0.35,
        "grain_opacity": 0.04,
        "vignette_strength": 0.45,
    },
}

# Food hue ranges (in degrees 0-360)
# Greens: 80-160, Oranges: 20-45, Browns: 15-35
FOOD_HUE_RANGES = [
    (15, 45),    # oranges + browns (warm food tones)
    (80, 160),   # greens (salad, herbs, mache)
]


def rgb_to_hsl(img_array: np.ndarray) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    """Convert RGB float array (0-1) to H (0-360), S (0-1), L (0-1)."""
    r, g, b = img_array[:, :, 0], img_array[:, :, 1], img_array[:, :, 2]
    cmax = np.maximum(np.maximum(r, g), b)
    cmin = np.minimum(np.minimum(r, g), b)
    delta = cmax - cmin

    # Lightness
    lightness = (cmax + cmin) / 2.0

    # Saturation
    saturation = np.zeros_like(lightness)
    mask = delta > 0
    low_l = lightness <= 0.5
    saturation[mask & low_l] = delta[mask & low_l] / (2.0 * lightness[mask & low_l] + 1e-10)
    saturation[mask & ~low_l] = delta[mask & ~low_l] / (2.0 - 2.0 * lightness[mask & ~low_l] + 1e-10)

    # Hue
    hue = np.zeros_like(lightness)
    r_max = (cmax == r) & mask
    g_max = (cmax == g) & mask
    b_max = (cmax == b) & mask
    hue[r_max] = 60.0 * (((g[r_max] - b[r_max]) / (delta[r_max] + 1e-10)) % 6)
    hue[g_max] = 60.0 * (((b[g_max] - r[g_max]) / (delta[g_max] + 1e-10)) + 2)
    hue[b_max] = 60.0 * (((r[b_max] - g[b_max]) / (delta[b_max] + 1e-10)) + 4)
    hue = hue % 360

    return hue, saturation, lightness


def is_food_hue(hue: np.ndarray) -> np.ndarray:
    """Return boolean mask for pixels whose hue falls in food ranges."""
    mask = np.zeros(hue.shape, dtype=bool)
    for low, high in FOOD_HUE_RANGES:
        mask |= (hue >= low) & (hue <= high)
    return mask


def apply_warm_shift(img: np.ndarray, red_boost: float, blue_cut: float) -> np.ndarray:
    """Shift color temperature toward warm copper tones."""
    result = img.copy()
    result[:, :, 0] = np.clip(result[:, :, 0] * (1.0 + red_boost), 0, 255)  # Red up
    result[:, :, 2] = np.clip(result[:, :, 2] * (1.0 - blue_cut), 0, 255)   # Blue down
    return result


def apply_shadow_boost(img: np.ndarray, threshold: float, strength: float) -> np.ndarray:
    """Pull dark pixels toward Charbon (#141210)."""
    result = img.copy().astype(np.float64)
    # Compute per-pixel luminosity (0-1)
    luminosity = (0.299 * result[:, :, 0] + 0.587 * result[:, :, 1] + 0.114 * result[:, :, 2]) / 255.0

    # Pixels below threshold get pulled toward charbon
    shadow_mask = luminosity < threshold
    # Strength ramps from full at luminosity=0 to zero at luminosity=threshold
    pull_factor = np.zeros_like(luminosity)
    pull_factor[shadow_mask] = strength * (1.0 - luminosity[shadow_mask] / threshold)

    for c in range(3):
        channel = result[:, :, c]
        channel[shadow_mask] = (
            channel[shadow_mask] * (1.0 - pull_factor[shadow_mask])
            + CHARBON_RGB[c] * pull_factor[shadow_mask]
        )
        result[:, :, c] = channel

    return np.clip(result, 0, 255).astype(np.uint8)


def apply_selective_saturation(img: np.ndarray, food_boost: float, other_cut: float) -> np.ndarray:
    """Boost saturation on food hues, slightly desaturate everything else."""
    # Convert to float 0-1
    img_f = img.astype(np.float64) / 255.0
    hue, sat, light = rgb_to_hsl(img_f)

    food_mask = is_food_hue(hue)

    # Convert to HSV via PIL for easier saturation manipulation
    pil_img = Image.fromarray(img)
    hsv = np.array(pil_img.convert("HSV"), dtype=np.float64)

    # HSV saturation channel is index 1 (0-255 in PIL HSV)
    s_channel = hsv[:, :, 1]

    # Boost food hues
    s_channel[food_mask] = np.clip(s_channel[food_mask] * (1.0 + food_boost), 0, 255)
    # Cut non-food hues
    s_channel[~food_mask] = np.clip(s_channel[~food_mask] * (1.0 - other_cut), 0, 255)

    hsv[:, :, 1] = s_channel
    result_hsv = Image.fromarray(hsv.astype(np.uint8), mode="HSV")
    return np.array(result_hsv.convert("RGB"))


def apply_s_curve(img: np.ndarray, strength: float) -> np.ndarray:
    """Apply an S-curve for contrast: darken shadows, brighten highlights."""
    # Build lookup table with sigmoid-based S-curve
    lut = np.arange(256, dtype=np.float64) / 255.0
    # S-curve: midpoint at 0.5, strength controls steepness
    # Formula: x + strength * sin(2*pi*x) / (2*pi) — smooth S-curve
    curve = lut + strength * np.sin(2.0 * np.pi * lut) / (2.0 * np.pi)
    curve = np.clip(curve * 255.0, 0, 255).astype(np.uint8)

    result = img.copy()
    for c in range(3):
        result[:, :, c] = curve[result[:, :, c]]
    return result


def apply_grain(img: np.ndarray, opacity: float) -> np.ndarray:
    """Add film grain noise with overlay blending."""
    h, w = img.shape[:2]
    rng = np.random.default_rng(42)
    noise = rng.normal(128, 40, (h, w)).astype(np.float64)
    noise = np.clip(noise, 0, 255)

    result = img.astype(np.float64)
    # Overlay blend per channel
    for c in range(3):
        base = result[:, :, c] / 255.0
        blend = noise / 255.0
        # Overlay formula: if base < 0.5: 2*base*blend, else: 1 - 2*(1-base)*(1-blend)
        low = 2.0 * base * blend
        high = 1.0 - 2.0 * (1.0 - base) * (1.0 - blend)
        overlay = np.where(base < 0.5, low, high)
        # Mix with opacity
        result[:, :, c] = (base * (1.0 - opacity) + overlay * opacity) * 255.0

    return np.clip(result, 0, 255).astype(np.uint8)


def apply_vignette(img: np.ndarray, strength: float) -> np.ndarray:
    """Apply an elliptical vignette, slightly offset downward for organic feel."""
    h, w = img.shape[:2]

    # Create coordinate grids
    y_coords = np.linspace(0, 1, h)
    x_coords = np.linspace(0, 1, w)
    xx, yy = np.meshgrid(x_coords, y_coords)

    # Ellipse center shifted slightly down (55% from top instead of 50%)
    cx, cy = 0.5, 0.55
    # Ellipse radii (wider horizontally for natural feel)
    rx, ry = 0.65, 0.55

    # Distance from center (elliptical)
    dist = np.sqrt(((xx - cx) / rx) ** 2 + ((yy - cy) / ry) ** 2)
    # Smooth falloff
    vignette = 1.0 - np.clip(dist - 0.4, 0, None) * strength * 1.5
    vignette = np.clip(vignette, 1.0 - strength, 1.0)
    # Smooth with gaussian-like falloff
    vignette = np.power(vignette, 1.5)

    result = img.astype(np.float64)
    for c in range(3):
        result[:, :, c] *= vignette
    return np.clip(result, 0, 255).astype(np.uint8)


def compute_stats(img: np.ndarray) -> dict:
    """Compute average brightness and saturation stats."""
    # Brightness (luminosity)
    luminosity = 0.299 * img[:, :, 0] + 0.587 * img[:, :, 1] + 0.114 * img[:, :, 2]
    avg_brightness = float(np.mean(luminosity))

    # Saturation via HSV
    pil_img = Image.fromarray(img)
    hsv = np.array(pil_img.convert("HSV"))
    avg_saturation = float(np.mean(hsv[:, :, 1]))

    return {
        "brightness": avg_brightness,
        "saturation": avg_saturation,
    }


def main():
    parser = argparse.ArgumentParser(
        description="Color grading Dark Food Premium pour images StrictFood"
    )
    parser.add_argument(
        "--input", "-i", required=True,
        help="Chemin vers l'image source (PNG/JPG)"
    )
    parser.add_argument(
        "--output", "-o", required=True,
        help="Chemin vers l'image de sortie (PNG)"
    )
    parser.add_argument(
        "--intensity", choices=["light", "medium", "heavy"],
        default="medium",
        help="Niveau d'intensite du grading (default: medium)"
    )
    parser.add_argument(
        "--grain", action="store_true",
        help="Ajouter un grain film analogique"
    )
    parser.add_argument(
        "--vignette", action="store_true",
        help="Ajouter une vignette organique (elliptique, decalee vers le bas)"
    )

    args = parser.parse_args()

    # Load preset
    preset = PRESETS[args.intensity]

    # Heavy mode auto-enables vignette
    apply_vig = args.vignette or (args.intensity == "heavy")

    # Load image
    input_path = Path(args.input)
    if not input_path.exists():
        print(f"Erreur: image introuvable: {input_path}", file=sys.stderr)
        sys.exit(1)

    img = Image.open(input_path).convert("RGB")
    img_array = np.array(img)
    print(f"Image chargee: {input_path} ({img.size[0]}x{img.size[1]})")

    # Stats avant
    stats_before = compute_stats(img_array)

    # --- Pipeline de grading ---
    print(f"Intensite: {args.intensity}")

    # 1. Warm shift
    print("  [1/4] Warm shift (tons cuivre)...")
    img_array = apply_warm_shift(img_array, preset["warm_red_boost"], preset["warm_blue_cut"])

    # 2. Shadow boost toward Charbon
    print("  [2/4] Shadow boost (pull vers Charbon #141210)...")
    img_array = apply_shadow_boost(img_array, preset["shadow_threshold"], preset["shadow_pull_strength"])

    # 3. Selective saturation
    print("  [3/4] Saturation selective (boost food hues)...")
    img_array = apply_selective_saturation(img_array, preset["food_sat_boost"], preset["other_sat_cut"])

    # 4. S-curve contrast
    print("  [4/4] Contraste S-curve...")
    img_array = apply_s_curve(img_array, preset["contrast_strength"])

    # Optional: grain
    if args.grain:
        print("  [+] Grain film analogique...")
        img_array = apply_grain(img_array, preset["grain_opacity"])

    # Optional: vignette
    if apply_vig:
        print("  [+] Vignette organique...")
        img_array = apply_vignette(img_array, preset["vignette_strength"])

    # Stats apres
    stats_after = compute_stats(img_array)

    # Save
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    result = Image.fromarray(img_array)
    result.save(str(output_path), "PNG")
    print(f"\nImage sauvegardee: {output_path.resolve()}")

    # Display stats
    print(f"\n--- Stats avant/apres ---")
    print(f"Luminosite moyenne : {stats_before['brightness']:.1f} -> {stats_after['brightness']:.1f} "
          f"({stats_after['brightness'] - stats_before['brightness']:+.1f})")
    print(f"Saturation moyenne : {stats_before['saturation']:.1f} -> {stats_after['saturation']:.1f} "
          f"({stats_after['saturation'] - stats_before['saturation']:+.1f})")


if __name__ == "__main__":
    main()
