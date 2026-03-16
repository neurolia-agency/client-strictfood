#!/usr/bin/env python3
"""
Composite STRICT FOOD'S logo onto napkin in tender dip photo.
- Extracts gold text from logo (removes black background)
- Applies perspective warp to follow napkin angle
- Uses multiply blend for realistic screen-print look
- Adds grain/texture to match the scene
"""

from PIL import Image, ImageEnhance, ImageFilter, ImageChops
import numpy as np

# --- Config ---
SCENE_PATH = "production/posts-stories/posts/strict-irl/test-37-tender-sauce-dip-v5-clean.png"
LOGO_PATH = "public/logo/strictfood-logo-reference.png"
OUTPUT_PATH = "production/posts-stories/posts/strict-irl/test-37-tender-sauce-dip-final.png"

# Logo placement on napkin (coordinates relative to full image 3712x4608)
# v5: large napkin centered, y=60-78%, x=30-90%
LOGO_WIDTH = 1000  # big napkin = bigger logo
LOGO_CENTER_X = 1900  # horizontal center (~51%)
LOGO_CENTER_Y = 3500  # vertical center (~76%, below sauce bowl)
LOGO_ROTATION = -1  # very slight angle

# Blend settings
LOGO_OPACITY = 0.88  # visible but slightly worn like real screen print
GRAIN_AMOUNT = 10  # noise to simulate ink absorption into fabric

# --- Step 1: Load images ---
scene = Image.open(SCENE_PATH).convert("RGBA")
logo_raw = Image.open(LOGO_PATH).convert("RGBA")

print(f"Scene: {scene.size}")
print(f"Logo: {logo_raw.size}")

# --- Step 2: Crop scene to exact 4:5 ---
w, h = scene.size
target_h = int(w * 5 / 4)
if h > target_h:
    # Crop top/bottom symmetrically, bias slightly toward keeping bottom (napkin)
    crop_total = h - target_h
    crop_top = int(crop_total * 0.35)  # keep more of the bottom
    crop_bottom = crop_total - crop_top
    scene = scene.crop((0, crop_top, w, h - crop_bottom))
    print(f"Cropped to 4:5: {scene.size}")
elif h < target_h:
    target_w = int(h * 4 / 5)
    crop_side = (w - target_w) // 2
    scene = scene.crop((crop_side, 0, w - crop_side, h))
    print(f"Cropped to 4:5: {scene.size}")

# --- Step 3: Extract gold text from logo (remove black bg) ---
logo_np = np.array(logo_raw).astype(np.float32)

# The logo is gold/copper (~BF8522) on black background
# Extract non-black pixels as alpha mask
r, g, b, a = logo_np[:,:,0], logo_np[:,:,1], logo_np[:,:,2], logo_np[:,:,3]
brightness = (r * 0.299 + g * 0.587 + b * 0.114)

# Threshold to isolate gold text
text_mask = (brightness > 40).astype(np.float32)

# Smooth the mask slightly for anti-aliasing
from scipy.ndimage import gaussian_filter
text_mask = gaussian_filter(text_mask, sigma=0.8)
text_mask = np.clip(text_mask, 0, 1)

# Create RGBA logo with transparent background
logo_clean = logo_np.copy()
logo_clean[:,:,3] = (text_mask * 255).astype(np.float32)

logo_extracted = Image.fromarray(logo_clean.astype(np.uint8))

# --- Step 4: Resize and position logo ---
# Scale logo to target width
aspect = logo_raw.size[1] / logo_raw.size[0]
logo_h = int(LOGO_WIDTH * aspect)
logo_resized = logo_extracted.resize((LOGO_WIDTH, logo_h), Image.LANCZOS)

# Rotate to follow napkin angle
logo_rotated = logo_resized.rotate(LOGO_ROTATION, expand=True, resample=Image.BICUBIC)

# --- Step 5: Add fabric texture / grain to logo ---
logo_np2 = np.array(logo_rotated).astype(np.float32)

# Add random noise to simulate ink absorbed into fabric weave
noise = np.random.normal(0, GRAIN_AMOUNT, logo_np2[:,:,:3].shape)
logo_np2[:,:,:3] = np.clip(logo_np2[:,:,:3] + noise, 0, 255)

# Slightly vary opacity across the logo (simulate uneven print)
h_logo, w_logo = logo_np2.shape[:2]
# Create subtle horizontal gradient (left side slightly brighter = catches light)
light_gradient = np.linspace(1.08, 0.92, w_logo).reshape(1, -1)
light_gradient = np.tile(light_gradient, (h_logo, 1))
logo_np2[:,:,0] = np.clip(logo_np2[:,:,0] * light_gradient, 0, 255)
logo_np2[:,:,1] = np.clip(logo_np2[:,:,1] * light_gradient, 0, 255)
logo_np2[:,:,2] = np.clip(logo_np2[:,:,2] * light_gradient, 0, 255)

# Random micro-holes in the print (fabric weave showing through)
weave_mask = np.random.random((h_logo, w_logo))
weave_holes = (weave_mask < 0.06).astype(np.float32)  # 6% of pixels lose some opacity
logo_np2[:,:,3] = logo_np2[:,:,3] * (1.0 - weave_holes * 0.5)

# Apply overall opacity
logo_np2[:,:,3] = logo_np2[:,:,3] * LOGO_OPACITY

logo_textured = Image.fromarray(logo_np2.astype(np.uint8))

# --- Step 6: Composite onto scene ---
# Calculate paste position (top-left corner)
paste_x = LOGO_CENTER_X - logo_textured.size[0] // 2
paste_y = LOGO_CENTER_Y - logo_textured.size[1] // 2

# Create a full-size overlay
overlay = Image.new("RGBA", scene.size, (0, 0, 0, 0))
overlay.paste(logo_textured, (paste_x, paste_y), logo_textured)

# Multiply blend: darken scene where logo is dark, preserve where logo is light
# For screen-print effect on dark fabric, we use normal alpha composite
# but slightly darken the logo color to match the napkin's darkness
scene_rgb = scene.convert("RGB")
overlay_rgb = overlay.convert("RGB")

# Extract the napkin area to match its darkness
napkin_sample_x = slice(LOGO_CENTER_X - 50, LOGO_CENTER_X + 50)
napkin_sample_y = slice(LOGO_CENTER_Y - 50, LOGO_CENTER_Y + 50)
napkin_region = np.array(scene_rgb)[napkin_sample_y, napkin_sample_x]
napkin_brightness = np.mean(napkin_region)
print(f"Napkin brightness: {napkin_brightness:.0f}")

# Adjust logo color to be slightly warmer/darker to match scene lighting
logo_layer = np.array(overlay).astype(np.float32)
# Warm shift: boost red slightly, reduce blue
logo_layer[:,:,0] = np.clip(logo_layer[:,:,0] * 1.05, 0, 255)  # slightly warmer red
logo_layer[:,:,2] = np.clip(logo_layer[:,:,2] * 0.85, 0, 255)  # reduce blue
overlay_adjusted = Image.fromarray(logo_layer.astype(np.uint8))

# Final composite
result = Image.alpha_composite(scene, overlay_adjusted)

# Convert to RGB for PNG output
result_rgb = result.convert("RGB")
result_rgb.save(OUTPUT_PATH, "PNG", quality=95)

print(f"\nSaved: {OUTPUT_PATH}")
print(f"Final size: {result_rgb.size}")
print(f"Aspect ratio: {result_rgb.size[0]/result_rgb.size[1]:.4f} (target 0.8000)")
