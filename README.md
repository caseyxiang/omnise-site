# Omnise Site (Astro + Cloudflare Pages)

This project hosts:
- Landing page (React component rendered via Astro)
- Legal pages for Omnise + BloomSense / PoolSense / FoodSense / MilkSense

## Local dev
```bash
npm install
npm run dev
```

## Deploy to Cloudflare Pages
In Cloudflare Pages:
- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`

## Routes
- `/` (homepage)
- `/legal/privacy`, `/legal/terms`
- `/bloomsense/privacy`, `/bloomsense/terms`
- `/poolsense/privacy`, `/poolsense/terms`
- `/foodsense/privacy`, `/foodsense/terms`
- `/milksense/privacy`, `/milksense/terms`
- `/waitlist`
