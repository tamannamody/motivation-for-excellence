# Redesign: what changed and why

Built 6 October 2026 from the findings in `audit/README.md`.

## What peer foundations do

| Site | Pattern worth borrowing |
|---|---|
| **EdelGive Foundation** | Separate paths for funders and NGOs, a band of four headline numbers, and a reports section |
| **Rohini Nilekani Philanthropies** | Philosophy-led hero, fields of work as visual cards, registration number and policies in the footer |
| **A.T.E. Chandra Foundation** | A named framework (their "5C") as the core message, and plain statements about what they are and are not |
| **Dasra** | A short list of pillars instead of long copy; programmes as an image card grid |
| **MacArthur Foundation** | A searchable grantee database, and legacy numbers ("orgs, awarded, countries") as social proof |

**What MFE can own that the others cannot:**

- **A founder story:** R.G. Manudhane, a "rags to riches" life lived in pursuit of values-based excellence.
- **A five-part test:** Values, Effectiveness, Validation, Innovation, Excellence.
- **A line that names the idea:** John Gardner's "however humble the activity".

The redesign builds on these three.

## Structure

| Old site | New site |
|---|---|
| Home (six-slide slider with one repeated line) | **Home:** hero, four numbers, mission and founder, four areas, five tests, three field stories, partner marquee, Gardner quote, call to action |
| About Us | **About:** founder and tribute, approach, trustees with expandable bios, advisors |
| Our Portfolio → 4 thin photo grids | **What we fund** with an overview and four area pages, each with real copy, places, spotlight partners and the full list |
| 67 `/project/` pages (15 of them demo) and 41 gallery pages | **Partners:** one directory filterable by area, state and name, plus 51 clean partner pages |
| Philanthropy Partners | Folded into **Partners** and **Work with us** as co-funders |
| (none) | **Work with us:** a page each for NGOs and co-funders, and what to send |
| Contact Us (fake phone, lorem ipsum) | **Contact:** real address and email, a form with a topic picker, and a map link |
| (none) | **Privacy** notice |
| ~110 demo pages | Gone, redirected (see `public/_redirects`) |

## Design

- **Kept:** the logo, navy `#1C3C8C` and teal `#42C0B6` (sampled from the logo), and MFE's field photography.
- **New:**
  - **Type:** Fraunces (editorial serif) for headings with Inter for body text, both self-hosted.
  - **Brand motif:** the logo's diagonal stripes, reused as a texture.
  - **Layout:** a bento grid for the four areas and rounded cards.
  - **Motion:** a sticky translucent header and scroll reveals that switch off for people who prefer reduced motion.
- **Photos:** every image is MFE's own. The old homepage used three stock photos (a boy writing, seedlings, hands holding a heart), and those are dropped.

## Results (Lighthouse, local, 6 Oct 2026)

| Page | Old mobile perf | New mobile perf | Old mobile LCP | New mobile LCP | New a11y | New SEO |
|---|---|---|---|---|---|---|
| Home | 52 | 94 | 8.0 s | 3.1 s | 96 → fixed | 100 |
| About | 72 | 99 | 5.1 s | 2.0 s | 96 → fixed | 100 |
| Karuna Trust | 69 | 99 | 5.2 s | 1.9 s | 100 | 100 |

Desktop scores 99 to 100 across all tested pages. Homepage weight drops from 1.6 MB and 122 requests to about 0.5 MB.

## SEO built in

- **Per-page metadata:** a unique title and description on every page, a canonical URL, and an Open Graph image (each partner's own photo).
- **Structured data:** `NGO` schema with `alternateName` for MFE, the Motivation for Excellence Initiative and the RG Manudhane Foundation. Partner pages also carry breadcrumb schema.
- **Sitemap and robots:** a sitemap of the 62 real pages only, and a `robots.txt` that points to it.
- **Redirects:** 301s for every real old URL. Demo URLs redirect to the homepage, because Cloudflare Pages cannot send a 410. On Netlify they can be switched to 410.
- **Analytics:** not added yet. Choose GA4 or Plausible and add it to `src/layouts/Base.astro` before launch.
