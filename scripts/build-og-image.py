"""Build the deterministic social sharing image from approved site assets."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
OUTPUT = ASSETS / "og-facebook-2026-v2.jpg"
WIDTH, HEIGHT = 1200, 630


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(Path("C:/Windows/Fonts") / name), size)


def contain(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    copy = image.copy()
    copy.thumbnail(size, Image.Resampling.LANCZOS)
    return copy


def rounded_rectangle_mask(size: tuple[int, int], radius: int) -> Image.Image:
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size[0], size[1]), radius=radius, fill=255)
    return mask


canvas = Image.new("RGB", (WIDTH, HEIGHT), "#071D38")

# Use the approved exterior image as a full-bleed background. The crop preserves
# the complete vehicle while the navy fade creates a predictable text safe area.
vehicle = Image.open(ASSETS / "hero-vehicle.webp").convert("RGB")
crop_height = round(vehicle.width * HEIGHT / WIDTH)
crop_top = max(0, min(vehicle.height - crop_height, 95))
vehicle = vehicle.crop((0, crop_top, vehicle.width, crop_top + crop_height))
vehicle = vehicle.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
canvas.paste(vehicle, (0, 0))

# Darken and cool the full image, then add a left-to-right safe-area gradient.
cool = Image.new("RGBA", (WIDTH, HEIGHT), (5, 28, 55, 30))
canvas = Image.alpha_composite(canvas.convert("RGBA"), cool)
fade = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
fade_px = fade.load()
for x in range(WIDTH):
    if x <= 600:
        alpha = 244
    elif x <= 885:
        alpha = round(244 * (1 - (x - 600) / 285))
    else:
        alpha = 0
    for y in range(HEIGHT):
        fade_px[x, y] = (4, 24, 48, alpha)
canvas = Image.alpha_composite(canvas, fade)

# Subtle signal glows connect the artwork to the site's intelligent UI language.
glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow)
for radius, alpha in ((150, 18), (95, 24), (46, 34)):
    glow_draw.ellipse((995 - radius, 105 - radius, 995 + radius, 105 + radius), fill=(35, 132, 255, alpha))
glow = glow.filter(ImageFilter.GaussianBlur(26))
canvas = Image.alpha_composite(canvas, glow)
draw = ImageDraw.Draw(canvas)

# Logo capsule protects the original brand mark against every share surface.
logo_box = (48, 38, 450, 144)
draw.rounded_rectangle(logo_box, radius=24, fill=(255, 255, 255, 242), outline=(255, 255, 255, 255), width=2)
logo = Image.open(ASSETS / "logo.webp").convert("RGBA")
logo = contain(logo, (354, 82))
canvas.alpha_composite(logo, (72, 50 + (82 - logo.height) // 2))

# Compact operational badge; intentionally large enough to survive feed scaling.
badge = (48, 172, 320, 217)
draw.rounded_rectangle(badge, radius=23, fill=(230, 241, 255, 245), outline=(101, 169, 255, 210), width=2)
draw.ellipse((66, 188, 77, 199), fill="#188038")
draw.text((89, 183), "KZN  •  24/7 DISPATCH", font=font("segoeuib.ttf", 18), fill="#0B57D0")

headline = font("segoeuib.ttf", 55)
draw.text((48, 244), "Refrigerated transport", font=headline, fill="white", stroke_width=1, stroke_fill=(7, 29, 56, 180))
draw.text((48, 311), "for human remains", font=headline, fill="white", stroke_width=1, stroke_fill=(7, 29, 56, 180))

draw.rounded_rectangle((48, 401, 119, 407), radius=3, fill="#2B83F6")
draw.text((48, 429), "Dedicated B2B transfers", font=font("segoeuib.ttf", 28), fill="#E8F1FF")
draw.text((48, 466), "Direct collection  •  Signed handover", font=font("segoeui.ttf", 23), fill="#C9D9EE")

# High-contrast contact band stays inside common platform crop-safe margins.
band = Image.new("RGBA", (WIDTH - 64, 74), (4, 23, 45, 230))
band.putalpha(rounded_rectangle_mask(band.size, 18))
canvas.alpha_composite(band, (32, 538))
draw = ImageDraw.Draw(canvas)
draw.text((58, 557), "bodytransportsolutions.co.za", font=font("segoeuib.ttf", 23), fill="white")
draw.text((884, 557), "+27 61 589 1505", font=font("segoeuib.ttf", 23), fill="white")

# A small four-colour KZN/community line mirrors the live site's visual system.
segments = ("#188038", "#F9AB00", "#D93025", "#174EA6")
segment_x = 772
for colour in segments:
    draw.rounded_rectangle((segment_x, 580, segment_x + 22, 585), radius=2, fill=colour)
    segment_x += 25

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
canvas.convert("RGB").save(OUTPUT, "JPEG", quality=91, optimize=True, progressive=True)
print(OUTPUT)
