# BetterGeneralTrias.org

A community transparency portal for **General Trias City, Cavite, Philippines** — built to give residents fast, clear, and modern access to government services, officials, budgets, planning documents, and public information.

Live site: **[bettergeneraltrias.org](https://www.bettergeneraltrias.org)**

---

## What's on the Site

### Home Page
- **Hero section** — full-bleed green gradient with search card (service finder with live autocomplete), popular service shortcuts, and a "Coming to General Trias" development projects teaser strip
- **City Stats** — live weather widget (Open-Meteo API, cached 30 min), population/barangay/land area numbers, link to full city profile
- **Featured Services** — Health Services, Agriculture & Fisheries, Environment, Tourism
- **Government Quick Links** — Full Disclosure, City Officials, City Profile, FOI Releases, Planning Documents, Barangay Directory
- **History, Leadership, Contact** sections

### Services
Citizen-facing guides for all 11 LGU service categories, organized by category:

| Category | What's Covered |
|---|---|
| Health Services | Free check-ups, medicines, vaccines, hospital admission, maternal care |
| Education | Daycare/preschool enrollment, scholarships, supplementary programs |
| Business | Business permits, renewals, public market stalls, trade fairs |
| Social Welfare | Senior citizen / PWD / solo parent assistance, disaster relief, livelihood |
| Agriculture & Fisheries | Veterinary services, free seeds/fingerlings, farming training, equipment loans |
| Infrastructure & Public Works | Road projects, drainage, public facilities |
| Garbage & Waste Disposal | Waste collection schedules, proper disposal |
| Environment | Tree planting, CENRO services, environmental compliance |
| Disaster Preparedness | CDRRMO programs, evacuation, early warning |
| Housing & Land Use | Zoning, housing programs, land use guidance |
| Tourism | Must-see places, where to stay, local products, tourism permits |

### Government
- **Departments & Officials** — Mayor, Vice Mayor, City Council, ex-officio members, department directory
- **Transparency Documents** — Full Disclosure Policy (FDP), Annual Budget, SALN, FOI Releases, Planning Downloads (CLUP, CDP, ELA, maps)
- **Reports & Statistics** — City Profile & Statistics (live weather, population charts, economy, awards, barangay directory, map), Annual Accomplishment Report, Infrastructure Projects
- **Guides & Regulations** — Legislative information, city ordinances

### City Profile Page
- **Live weather widget** in hero (temperature, humidity, wind via Open-Meteo API — no API key required)
- Population growth charts, economic sector breakdown, population trend line
- 33 barangays directory, awards & recognition
- OpenStreetMap embed showing General Trias City (88.9 km² land area)

### Development Projects
5 major incoming projects: SM City General Trias, CALAX–CAVITEX Connector, Riverpark Township, Flyover & Road Widening, Ateneo de Cavite.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 + @tailwindcss/typography |
| Routing | React Router v6 |
| i18n | i18next + react-i18next (EN / FIL) |
| Content | Markdown (remark-gfm) + YAML |
| Charts | Recharts |
| Icons | Lucide React |
| Weather | Open-Meteo API (free, no key) |
| Visit Counter | CounterAPI (free, no database) |
| Deployment | Vercel (auto-deploy on push to `main`) |

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

---

## Deployment

Configured for Vercel via [`vercel.json`](vercel.json). All routes fall back to `index.html` for client-side routing.

1. Push to `main` on GitHub
2. Vercel auto-deploys — build command `npm run build`, output `dist/`

---

## Content Structure

```
content/
├── services/
│   ├── health-services/          # Markdown pages + index.yaml
│   ├── education/
│   ├── business/
│   ├── social-welfare/
│   ├── agriculture-fisheries/
│   ├── infrastructure-public-works/
│   ├── garbage-waste-disposal/
│   ├── environment/
│   ├── disaster-preparedness/
│   ├── housing-land-use/
│   └── tourism/
└── government/
    ├── departments/
    ├── legislative/
    ├── transparency-documents/
    ├── reports-and-statistics/
    └── guides-and-regulations/

src/data/
├── services.yaml       # Service category definitions (slug, icon, description)
├── government.yaml     # Government category definitions
└── navigation.ts       # Navbar + footer link structure

public/locales/
├── en/common.json      # English UI strings
└── fil/common.json     # Filipino UI strings
```

Each category folder contains:
- **`index.yaml`** — lists all pages with `name`, `slug`, `description`, and optional `updatedAt`
- **`[slug].md`** — markdown content for each page, split into `##` sections

---

## Adding or Editing Content

### Add a new service page

1. Add an entry to the category's `index.yaml`:
```yaml
pages:
  - name: 'Your Service Name'
    slug: 'your-service-slug'
    description: 'One-line description shown in the hero.'
    updatedAt: 'April 2026'
```

2. Create the markdown file at `content/services/[category]/your-service-slug.md`:
```markdown
# Your Service Name

Brief intro paragraph.

---

## Section One

Content here...

## Section Two

| Column A | Column B |
| -------- | -------- |
| Value 1  | Value 2  |
```

Each `##` heading becomes its own colored card on the page. Tables render as cards by default (with a "Table view" toggle).

### Add a Filipino translation

Create `[slug].fil.md` alongside the English file. The app will serve it automatically when the user switches to FIL; falls back to English with a banner if the translation is missing.

### Update "Last Updated" on a page

Add `updatedAt: 'Month Year'` to the page entry in `index.yaml`. If omitted, the page footer shows a site-wide default.

---

## Project Structure

```
src/
├── components/
│   ├── layout/         Navbar, Footer (with visit counter), InfoBar (hotlines ticker)
│   ├── home/           Hero, ServicesSection, StatsSection (weather+stats), GovernmentQuickLinks, etc.
│   ├── ui/             Breadcrumbs, Section, ScrollToTop, DisclaimerBar
│   └── SEO.tsx
├── context/
│   └── ThemeContext.tsx
├── data/
│   ├── services.yaml
│   ├── government.yaml
│   ├── navigation.ts
│   └── yamlLoader.ts
├── lib/
│   ├── markdownLoader.ts       Load + interpolate .md files
│   ├── markdownComponents.tsx  ReactMarkdown element overrides
│   ├── TableWithToggle.tsx     Card-view table component
│   └── typographyThemes.ts     Typography configuration
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx            All 11 categories listing page
│   ├── Government.tsx          Government section listing
│   ├── Document.tsx            Markdown + nested index renderer
│   ├── TouristSpots.tsx        Must-see places (custom card UI)
│   ├── WhereToStay.tsx         Hotels & resorts (custom card UI)
│   ├── Officials.tsx           Officials directory
│   ├── CityProfile.tsx         Stats, charts, weather, map, barangays, awards
│   ├── AnnualBudget.tsx        Budget sources, allocations, cycle
│   ├── AnnualReport.tsx        Program areas & SOCA
│   ├── InfrastructureProjects.tsx
│   ├── FullDisclosure.tsx      FDP portal links
│   ├── SALN.tsx
│   ├── FOIReleases.tsx
│   ├── Downloads.tsx           CLUP, CDP, ELA, maps
│   └── DevelopmentProjects.tsx Upcoming major projects
└── App.tsx
```

---

## Key Features

### Responsive Design
- Mobile-first layout across all pages
- Hotlines ticker (animated marquee) on viewports < 1120px; static bar at ≥ 1120px
- Hero search card uses flex-wrap for popular categories — works at 320px+

### DisclaimerBar
Reusable `src/components/ui/DisclaimerBar.tsx` shown on all transparency/report pages:
> Last updated: April 2026 · Information on this page is provided for transparency. For the most current details, contact the relevant city office directly.

### Visit Counter
Footer displays a live visit count powered by [CounterAPI](https://counterapi.dev) — no database, no API key. Increments once per browser session via `sessionStorage`.

### Live Weather
Open-Meteo API (free, no API key) fetches current temperature, humidity, and wind for General Trias City coordinates. Results cached in `localStorage` for 30 minutes.

### Table Cards
All markdown tables render as mobile-friendly cards by default (via `TableWithToggle.tsx`), with a toggle to switch to raw table view.

---

## SEO

All pages use `react-helmet-async` via `src/components/SEO.tsx`:
- Unique title, description, keywords per page
- Open Graph + Twitter Card meta tags
- `robots: index, follow`
- `theme-color: #16643c`

**Missing (future work):**
- `public/sitemap.xml`
- `public/robots.txt`
- Per-page canonical URLs
- `og:image` (1200×630px)

---

## About General Trias City

General Trias is the **145th city in the Philippines** and the **7th city in Cavite Province**, officially converted to a city on **December 17, 2015** under R.A. 10675. It is one of the fastest-growing cities in the country with a **7.87% annual growth rate**.

- **Population:** 450,583 (2020 PSA Census)
- **Land area:** 88.9 km² (8,890 hectares)
- **Barangays:** 33
- **Mayor:** Hon. Luis A. Ferrer IV (2022–2025 term)
- **Vice Mayor:** Hon. Jonas Glyn Porto Labuguen
- **City Hall:** Akle St., Kaybagal South · (046) 888-9500
- **Official site:** [www.generaltrias.gov.ph](https://www.generaltrias.gov.ph)

---

## License

MIT · Content sourced from official General Trias City Government portals and publicly available government data. All information is provided for transparency and civic use.
