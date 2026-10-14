# Behaviors — evolutionofsmooth.com (homepage)

## Fonts (extracted from live base.css @font-face rules)
- Body/UI: "Buenos Aires" (weights 100–900) + "Buenos Aires Book" — self-hosted woff2
- Display headings: "commuter" (3-part glyph-range split file) — self-hosted woff2

## Colors (extracted from :root CSS custom properties on live site)
- Background: #ffffff · Text: #000000
- Accent / hover / announcement bar: #e0f25f (lime)
- Footer: deep magenta/pink
- Borders: rgba(0,0,0,.13)

## Buttons
- Primary: white bg, 1px black border, lowercase label, hover → lime (#e0f25f) fill
- Ghost link: underline, no border

## Product card badges
- Pill shape, border-radius ~62px, white bg, lowercase text, 12.5px font-size

## Known gaps (documented, not fabricated)
- Bestseller carousel swatch colors captured for 9 of 10 cards via computed styles; 10th card approximated from the repeating palette pattern.
- Social proof grid uses 50 dynamically-loaded third-party (dashsocial.com) UGC images delivered via base64-encoded, signed proxy URLs — not resolvable to stable static files. Rebuilt as a representative gradient-tile grid with the real "Learn More" hover label and real heading copy instead of fabricating image content.
- Mission/Ingredients/Sustainability tab copy for all 3 states was captured by clicking each tab live and reading the rendered panel text.
