# Handoff

Where the site stands and how to pick it up. Last updated 6 October 2026.

## Run it

```sh
cd ~/motivation-for-excellence
npx astro dev --port 4321      # http://localhost:4321
npx astro build                # 63 pages into dist/
```

If a page shows old or missing styles after an edit, Vite is serving a stale
cached style module. Fix: `npx astro dev stop`, `rm -rf node_modules/.vite`,
start again. `astro preview` serves the last build and never updates, so use
`astro dev` while editing.

## Visual pass, 6 October 2026

All changes are CSS and markup; no content or data changed except the lines
noted below.

**Shared**

- **Section backgrounds** (`src/styles/global.css`, `.bgfx` classes): soft
  teal and navy glows (`bgfx--teal`, `bgfx--navy`), a dot field that fades
  out, plus one motif per section: concentric rings (`bgfx--ring`) or contour
  lines (`bgfx--contour`). The dot position can be moved per section with
  `style="--dots-at: X% Y%"`. Named `bgfx`, not `deco`, because `deco` is a
  local class in PageHero, CtaBand and the partner page.
- **Buttons** (`.btn` in `global.css`): gradient fill, coloured glow, light
  sweep on hover, arrow in a round chip. New modifiers: `btn--lg` (bigger)
  and `btn--pulse` (slow glow, used only on the three main CTAs: header
  "Partner with us", home hero "Meet our partners", CtaBand "Work with us").
  Motion is cut by the reduced-motion rule.
- **CtaBand**: gradient navy background with teal glow, equal-width buttons.
- **PageHero with an image** (About, Work with us, the four area pages): arch
  photo frame, teal circle and navy orbit ring behind it, teal page
  background, and an optional `caption` prop shown as a pill on the photo.
  Only Work with us has a caption so far.

**Pages**

- **Home**: "What we fund" tiles in one row of four portrait tiles (2 by 2 on
  tablet, 1 on phone). Backgrounds on mission, areas and stories sections.
- **What we fund** (`/what-we-fund/`): rebuilt. Proof numbers in the hero,
  sticky jump bar, each area with outlined numeral, photo badge ("13 partners
  since 2015"), three highlighted partner cards with photo, "Also:" list, and
  a "five tests" section. New hero lead line: "We go deep rather than wide.
  Every grant goes to a partner already proven on the ground, and the same
  five tests apply in every area." Check with MFE that this claim is fine.
- **Partners** (`/partners/`): hero network graphic, a "51 partners" hub
  linked to six partner photos, hidden under 1100px.
- **Work with us**: caption "Palavee early childhood training, Amravati"
  (place read from the banner in the photo, Tivsa, Amravati district).

## Publishing

- **Live preview:** https://tamannamody.github.io/motivation-for-excellence/
  (public repo since 6 October 2026, marked `noindex`).
- **To publish changes:** commit and push `main`, then run
  `sh scripts/deploy-pages.sh`. It builds with the base path and force-pushes
  `dist/` to the `gh-pages` branch, which Pages serves.
- **All internal links go through `link()`** in `src/lib/url.ts` so they work
  under `/motivation-for-excellence/`. Use `link('/path/')` for every new
  root-relative href, src or CSS background (backgrounds via a `--img` custom
  property set inline, see the mission card on the homepage).
- **Automatic deploys** are possible with `docs/deploy/github-actions-deploy.yml`:
  move it to `.github/workflows/deploy.yml`, switch Pages to "GitHub Actions",
  and push. The push needs a GitHub token with the `workflow` scope:
  `gh auth refresh -h github.com -s workflow`.

## The audit is private

The audit of the old site describes security gaps on the live WordPress site
(public admin usernames, open xmlrpc.php, no security headers). It lives in
the private repo `tamannamody/motivation-for-excellence-audit`
(`~/motivation-for-excellence-audit`) and was scrubbed from this repo's
history on 6 October 2026 before it went public. Never add it back here.

## Open

- **Captions** for the About and area page photos, once someone says what
  each shows.
- **Real domain:** when MFE is ready, deploy a production build (no
  `BASE_PATH`) to Netlify or Cloudflare Pages; `public/_redirects` is already
  in their format.
- Content gaps: see `docs/content-gaps.md`.
