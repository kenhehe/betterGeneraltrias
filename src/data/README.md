# Data Directory

This directory contains the YAML configuration files and loaders that drive the site's navigation, category structure, and content routing.

---

## Files

| File | Purpose |
|---|---|
| `services.yaml` | All service categories — slug, display name, description, Lucide icon |
| `government.yaml` | All government categories — same structure as services |
| `navigation.ts` | Navbar and footer link structure |
| `yamlLoader.ts` | Parses YAML files and loads per-category `index.yaml` files |

---

## How Categories Work

Each entry in `services.yaml` or `government.yaml` defines a top-level category:

```yaml
categories:
  - category: 'Health Services'
    slug: 'health-services'
    description: 'Free check-ups, medicines, vaccines, and hospital services.'
    icon: 'Heart'          # Any Lucide icon name (PascalCase)
```

- `slug` becomes the URL segment: `/services/health-services`
- `icon` is looked up dynamically from `lucide-react` and displayed in the hero eyebrow of subpages

---

## How Pages Work (index.yaml)

Each category folder under `content/services/` or `content/government/` has an `index.yaml` that lists all its pages:

```yaml
pages:
  - name: 'Get free check-ups, basic medicines, and vaccines'
    slug: 'get-free-check-ups-basic-medicines-and-vaccines'
    description: 'Access free medical check-ups and vaccination services.'
    updatedAt: 'April 2026'   # Optional — shown in page footer
```

- `name` → shown as the page title in the hero and breadcrumb
- `slug` → must match the `.md` filename exactly
- `description` → shown as the hero subtitle (replaces markdown-extracted text)
- `updatedAt` → optional; defaults to a site-wide fallback if omitted

---

## Adding a New Category

1. Add an entry to `services.yaml` or `government.yaml`
2. Create the folder: `content/services/your-slug/`
3. Create `content/services/your-slug/index.yaml` listing all pages
4. Create `content/services/your-slug/[page-slug].md` for each page
5. Register the index import in `yamlLoader.ts` under `categoryIndexMap`

---

## Adding a New Page to an Existing Category

1. Add an entry to the category's `index.yaml`
2. Create the markdown file at `content/services/[category]/[slug].md`

No code changes needed — the router picks it up automatically via the dynamic route `/services/:category/:documentSlug`.

---

## Navigation Structure (`navigation.ts`)

Defines the top navbar and footer links. Each item can have `children` for dropdown menus.

```ts
{ label: 'Services', href: '/services', children: [...] }
```

Translation keys (`translationKey`) map to strings in `public/locales/en/common.json` and `public/locales/fil/common.json`.
