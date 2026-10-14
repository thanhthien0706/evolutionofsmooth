# Page Topology — evolutionofsmooth.com (homepage)

Top to bottom:

1. Announcement bar — lime (#e0f25f) sticky-above-header strip, "holiday perk: no minimum spend required"
2. Site header — sticky, white bg, eos logo (pink circle), nav (BODY/SHAVE/LIP/HOLIDAY GIFT GUIDE/FRAGRANCE/SALE/ABOUT/SUPPORT), search/account/cart icons
3. Hero banner — full-bleed image, "glow all the way" headline (commuter font), subtitle, "shop the shimmers" CTA
4. Bestsellers — horizontal product carousel, 10 cards (badges, image, title, star rating, category, price, 5 color swatches, add to cart)
5. Collections grid — 6 cards (glaze / hydrate / cleanse / swipe / spritz / shave)
6. Badges marquee — infinite horizontal scroll of product claims
7. Mission hero carousel — 5 full-bleed slides (vanilla cashmere, fresh & cozy, pink champagne, crème de pistachio, coconut waters/vacation), dot nav
8. Mission/Ingredients/Sustainability tabs — left image, right pink panel with 3 click-to-switch tabs
9. Ambassador banner — lime bg, "welcome to the smooth social club"
10. Social proof grid — gradient bg, grid of UGC tiles with "Learn More" hover overlay
11. Footer — magenta bg, newsletter signup, social icons, 3 link columns, giant "stay smooth" marquee

## Interaction models
- Hero / mission hero: carousel, dot-driven + auto-advance (5s), pause on hover
- Bestseller carousel: native horizontal scroll with snap
- Mission tabs: click-to-switch (confirmed via live DOM interaction)
- Marquee (badges + footer wordmark): CSS keyframe auto-scroll, infinite
- Header: sticky positioning (scroll-state class hook present, no visual change confirmed live)
- Social grid tiles: hover reveals "Learn More" label
