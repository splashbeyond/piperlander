# Piper — piperbooking.com

The Piper landing page, ready to deploy to any static host.

## What's in this folder

| File | Purpose |
|---|---|
| `index.html` | The landing page. Single self-contained file (CSS + JS inline). References `./daisy.png` for the logo. |
| `daisy.png` | Optimized 512×512 logo (used by the page). 263 KB. |
| `daisy@2x.png` | High-DPI 1024×1024 logo (use for retina or download links). |
| `daisy-original.png` | Your original uploaded logo, byte-for-byte unchanged. Archive. |
| `og.png` | OpenGraph / Twitter card image (1200×630) for social sharing. |
| `favicon-32.png`, `favicon-192.png`, `favicon-512.png` | Favicon set referenced by `index.html` and `site.webmanifest`. |
| `og.png` | Social-card preview when the page is shared on Slack, iMessage, X, LinkedIn, Facebook, etc. |
| `site.webmanifest` | Web App Manifest — used when someone "Add to Home Screen" on iOS / Android. |
| `robots.txt` | Tells search-engine crawlers what they can index. Allows everything. |
| `sitemap.xml` | XML sitemap referenced from `robots.txt`. Keep `<lastmod>` current when you update the page. |

## Deploy in 60 seconds

### Option A — Vercel
```bash
npx vercel deploy --prod
```
Drag the folder onto vercel.com or run the command above. That's it.

### Option B — Netlify
Drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop). Or:
```bash
npx netlify deploy --prod --dir .
```

### Option C — Cloudflare Pages
[pages.cloudflare.com](https://pages.cloudflare.com) → "Create a project" → upload folder.

### Option D — Any static host
Any host that serves files (S3, GitHub Pages, your own server, etc.) will work. Just upload everything in this folder and point your domain at it.

## After deploy: SEO checklist

1. **Verify domain ownership** in [Google Search Console](https://search.google.com/search-console). Add the property `https://piperbooking.com` and verify (DNS or HTML file).
2. **Submit the sitemap** in Search Console → Sitemaps → enter `sitemap.xml`. Google will crawl within hours.
3. **Verify the structured data** at [search.google.com/test/rich-results](https://search.google.com/test/rich-results) — you should see Organization, Service, and FAQPage results.
4. **Test the social card** at [opengraph.xyz](https://www.opengraph.xyz/) — paste your URL, confirm the OG image renders.
5. **Set up a Google Business Profile** for Piper (Phoenix HQ). Link it back to piperbooking.com. This is your most important local SEO signal.
6. **Connect Google Analytics 4** — add the GA4 snippet to `index.html` just before `</head>`. We left a clean spot for it.

## Targeted search terms

The page is optimized for these queries (organic, no paid):

- `local SEO services`
- `local SEO agency`
- `automated Google reviews`
- `Google reviews automation tool`
- `website + SEO + reviews bundle`
- `all-in-one local marketing`
- `Google Business Profile optimization`
- `local SEO for appointment businesses`
- `growth engine for local business`
- `done-for-you local marketing`

## What to update before launch

- Replace the placeholder customer cards (Glow Med Spa, Bright Family Dental, etc.) with real customers when you sign them.
- Update `dashboard` numbers in the hero with real-feeling values for the demo screenshot.
- Replace `og.png` with a custom image if you want richer social previews.
- Update `<lastmod>` in `sitemap.xml` whenever you push a content change.

## Performance notes

- HTML is ~86 KB (uncompressed). Should gzip to ~22 KB.
- One external image (`daisy.png`, 263 KB) — cached after first load.
- Google Fonts loaded via `<link>` with `preconnect` hints. Replace with self-hosted versions (`/fonts/...`) for sub-100ms FCP if you want maximum speed.
- All inline `<style>` and `<script>` — zero render-blocking external CSS.
- No third-party trackers, analytics, or chat widgets out of the box. Add what you actually need.

---

Built for piperbooking.com.
