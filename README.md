# BetterGenTri.ph

A community transparency portal for **General Trias City, Cavite** — built to give residents fast, clear access to government services, officials, budgets, and public information.

## Features

- **Multilingual** — English and Filipino (i18next)
- **Service finder** — Search all government services instantly from the hero
- **City stats** — Population 450,583 · 33 barangays · 88.9 km²
- **History timeline** — From 1748 founding to 2015 cityhood
- **Live weather** — Real-time data for General Trias via Open-Meteo
- **Interactive map** — OpenStreetMap embed centered on the city
- **Tourist spots** — Eagle Ridge Golf, historic churches, Valenciana Festival, local delicacies
- **Full markdown content system** — All government and services content in YAML + Markdown

## Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS · React Router · i18next

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build → dist/
```

## Deployment (Vercel)

This project is configured for Vercel via [`vercel.json`](vercel.json).

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — build command `npm run build`, output `dist/`

## Content Editing

All content lives in:
- [`content/services/`](content/services/) — Government service pages (Markdown)
- [`content/government/`](content/government/) — Departments, legislation, reports (Markdown)
- [`src/data/services.yaml`](src/data/services.yaml) — Service categories
- [`src/data/government.yaml`](src/data/government.yaml) — Government categories
- [`public/locales/en/common.json`](public/locales/en/common.json) — English UI strings
- [`public/locales/fil/common.json`](public/locales/fil/common.json) — Filipino UI strings

## About General Trias City

General Trias is the **145th city in the Philippines** and the **7th city in Cavite Province**, officially converted to a city on December 17, 2015. Population of **450,583** (2020 Census) with a 7.87% annual growth rate — one of the fastest-growing cities in the country.

**Mayor:** Hon. Luis A. Ferrer IV
**Vice Mayor:** Hon. Jonas Glyn Porto Labuguen
**City Hall:** (046) 884-5768 · www.generaltrias.gov.ph

## License

MIT · CC BY 4.0 — All public information sourced from official government portals.
