#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "openai>=1.75.0",
#     "pillow>=10.0.0",
# ]
# ///
"""
Generate or edit images using OpenAI GPT Image via the Responses API.

Usage:
    uv run generate_gpt_image.py --prompt "description" --filename "output.png" [--input-image path] [--size 1024x1024] [--quality high]
"""

import argparse
import base64
import os
import sys
from pathlib import Path


def get_api_key(provided_key: str | None) -> str | None:
    if provided_key:
        return provided_key
    return os.environ.get("OPENAI_API_KEY")


def main():
    parser = argparse.ArgumentParser(
        description="Generate or edit images using OpenAI GPT Image"
    )
    parser.add_argument(
        "--prompt", "-p", required=True,
        help="Image description/editing prompt"
    )
    parser.add_argument(
        "--filename", "-f", required=True,
        help="Output filename (e.g., output.png)"
    )
    parser.add_argument(
        "--input-image", "-i",
        help="Input image path for editing (omit for text-to-image)"
    )
    parser.add_argument(
        "--size", "-s",
        choices=["auto", "1024x1024", "1536x1024", "1024x1536", "1792x1024", "1024x1792"],
        default="1024x1024",
        help="Output size (default: 1024x1024)"
    )
    parser.add_argument(
        "--quality", "-q",
        choices=["auto", "low", "medium", "high"],
        default="high",
        help="Output quality (default: high)"
    )
    parser.add_argument(
        "--api-key", "-k",
        help="OpenAI API key (overrides OPENAI_API_KEY env var)"
    )

    args = parser.parse_args()

    api_key = get_api_key(args.api_key)
    if not api_key:
        print("Error: No API key. Set OPENAI_API_KEY or use --api-key.", file=sys.stderr)
        sys.exit(1)

    from openai import OpenAI
    from PIL import Image as PILImage
    from io import BytesIO

    client = OpenAI(api_key=api_key)

    output_path = Path(args.filename)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Build input content
    content = []

    if args.input_image:
        input_path = Path(args.input_image)
        if not input_path.exists():
            print(f"Error: Input image not found: {input_path}", file=sys.stderr)
            sys.exit(1)

        # Encode image to base64
        with open(input_path, "rb") as f:
            b64 = base64.standard_b64encode(f.read()).decode("utf-8")

        # Detect mime type
        suffix = input_path.suffix.lower()
        mime = {"png": "image/png", "jpg": "image/jpeg", "jpeg": "image/jpeg", "webp": "image/webp"}.get(suffix.lstrip("."), "image/png")

        content.append({
            "type": "input_image",
            "image_url": f"data:{mime};base64,{b64}",
        })
        print(f"Loaded input image: {args.input_image}")
        print(f"Editing with GPT Image (size={args.size}, quality={args.quality})...")
    else:
        print(f"Generating with GPT Image (size={args.size}, quality={args.quality})...")

    content.append({"type": "input_text", "text": args.prompt})

    try:
        response = client.responses.create(
            model="gpt-4o",
            input=[{"role": "user", "content": content}],
            tools=[{
                "type": "image_generation",
                "size": args.size,
                "quality": args.quality,
            }],
        )
    except Exception as e:
        print(f"Error calling OpenAI API: {e}", file=sys.stderr)
        sys.exit(1)

    # Extract generated image from response
    image_saved = False
    for item in response.output:
        if item.type == "image_generation_call":
            image_data = base64.standard_b64decode(item.result)
            image = PILImage.open(BytesIO(image_data))
            image.convert("RGB").save(str(output_path), "PNG")
            image_saved = True
            print(f"\nImage saved: {output_path.resolve()}")
            print(f"Dimensions: {image.size[0]}x{image.size[1]}")
            break

    if not image_saved:
        # Check for text responses (refusals, etc.)
        for item in response.output:
            if hasattr(item, "content"):
                for block in item.content:
                    if hasattr(block, "text"):
                        print(f"Model response: {block.text}", file=sys.stderr)
        print("Error: No image was generated.", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
