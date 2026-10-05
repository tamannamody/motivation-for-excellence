# motivation-for-excellence

Rebuild of [motivationforexcellence.org](https://motivationforexcellence.org): a fast static site in Astro that replaces the WordPress build.

- `audit/` holds the audit of the old site, with its evidence.
- `docs/redesign.md` covers what changed and why, including the peer review.
- `docs/content-gaps.md` lists what MFE needs to confirm before launch.

## Run it

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve dist/
```

## Where things live

| Path | What |
|---|---|
| `src/data/partners.json` | All 51 partner profiles, migrated from the old site. Edit text here. |
| `src/lib/site.ts` | Site-wide content: areas of work, values, trustees, advisors, co-funders, contact details. |
| `src/assets/` | Photos (partners, team, site) and logos. Astro resizes them at build time. |
| `src/pages/` | One file per page. Partner and area pages are generated from the data. |
| `src/styles/global.css` | Design tokens (navy `#1C3C8C` and teal `#42C0B6` from the logo), type and shared styles. |
| `public/_redirects` | 301s from every old WordPress URL to its new home (Netlify / Cloudflare Pages format). |

## Adding a partner

1. Add an entry to `src/data/partners.json`. Copy an existing one for the shape.
2. Put the photos in `src/assets/partners/<slug>/1.webp`, `2.webp` and so on, and list them in `images`.
3. Run `npm run build`. The partner page, directory card, area page listing and sitemap update automatically.
