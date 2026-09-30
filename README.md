# Triple i — CMA USA SEO Landing Page

Lead-generation landing page for Triple i Commerce Academy's CMA USA programme, built on the
ELT Global design system from `../GitHub/elt-prototype`.

## Run

```sh
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # dist/ — client build + SSR build + prerender
pnpm lint       # tsc --noEmit
```

## Deploy (GitHub Pages)

Live at https://am-arjun.github.io/triplei-cma-usa/ — served from the `gh-pages` branch.

```sh
pnpm build:pages   # builds with base /triplei-cma-usa/
# then publish dist/ to the gh-pages branch, e.g.:
cd dist && git init -b gh-pages && git add -A && git commit -m deploy \
  && git push -f https://github.com/am-arjun/triplei-cma-usa.git gh-pages
```

The build needs `@elt/tokens` from `../GitHub/elt-prototype` (a local `link:` dependency), so it runs
locally rather than in GitHub Actions.

## SEO

- `pnpm build` prerenders the page (`src/entry-server.tsx` → `scripts/prerender.mjs`) so
  `dist/index.html` ships the full copy as HTML; the client then hydrates it.
- One `<h1>`, an `<h2>` per section, real `<table>`s, and FAQ answers are in the DOM even when collapsed.
- JSON-LD (`EducationalOrganization`, `Course`, `FAQPage`) lives in `src/features/landing/StructuredData.tsx`.
- Title, description, Open Graph and robots meta are in `index.html`. Add `<link rel="canonical">`,
  `og:url`, `og:image` and a sitemap once the production domain is known.

## Leads

- One lead form (`sections/ApplyForm.tsx`: name, mobile, email, qualification, pass-out year) sits in the hero
  and in a popup (`ApplyModal.tsx`). Every "Apply For Scholarship" / "Schedule free counseling" button opens the popup;
  the lead is tagged `apply`, `popup-apply` or `popup-counseling`.
- `saveLead()` in `src/design-system/components/LeadForm/leadSchema.ts` records UTM / gclid / fbclid
  and page URL, pushes a `generate_lead` event to `window.dataLayer` (GTM / GA4), and POSTs the lead
  as JSON to `VITE_LEAD_ENDPOINT` when that env var is set (e.g. a CRM webhook). A copy is always
  kept in `localStorage['lp:leads']`.
- Phones get a sticky bottom bar (apply, call, WhatsApp) that hides while the hero form is on screen.

## Motion

- Smooth scrolling uses Lenis (`src/lib/smoothScroll.ts`, ~0.9s ease-out); it pauses while a modal is open and is
  disabled for `prefers-reduced-motion`.
- Testimonials are a looping centre-mode carousel with a Pause/Play pill. Cards use a monogram background until real
  student photos are available.

## How the design system is wired in

- `@elt/tokens` is a **`link:` dependency** to `../GitHub/elt-prototype/packages/tokens`.
  If this folder is moved, update the path in `package.json`.
- `<html data-brand="triplei">` activates the Triple i brand overlay. Dark sections
  (`<Section tone="dark">`) scope the DS `.dark` token set.
- `src/styles/landing-tokens.css` adds the `--lp-*` layer; responsive grids live in `landing-layout.css`.
- Icons: `@tabler/icons-react` only.

## Structure

```
src/
  design-system/
    components/   Button, Section, Container, Card, IconBadge, SectionHeading,
                  TextField, SelectField, LeadForm, BrandLogo, Marquee,
                  AccordionItem, PerspectiveGrid
    images/       hero-faculty, why-illustration, testimonials, certificate, partners/
    logos/        triplei-logo(.svg / -light / -mark)
  features/landing/
    content/      all copy + data (edit text here)
    sections/     one file per page section
    StructuredData.tsx
    LandingPage.tsx
  styles/         index.css, landing-tokens.css, landing-patterns.css, landing-page.css (page look: `cm-*` classes)
```
