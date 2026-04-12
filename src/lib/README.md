# lib Directory

Shared utilities for loading, parsing, and rendering markdown content.

---

## Files

| File | Purpose |
|---|---|
| `markdownLoader.ts` | Loads `.md` files by slug/category, handles EN/FIL fallback, template interpolation |
| `markdownComponents.tsx` | ReactMarkdown element overrides (uses `TableWithToggle` for all tables) |
| `TableWithToggle.tsx` | Renders markdown tables as cards by default, with a "Table view" toggle |
| `typographyThemes.ts` | Typography theme interface and default theme definition |

---

## markdownLoader.ts

Loads markdown content for a given `documentSlug` + `categorySlug` + `categoryType`.

**Language fallback:**
1. If `lang !== 'en'`, tries `[slug].[lang].md` first (e.g. `get-free-check-ups.fil.md`)
2. Falls back to `[slug].md` (English) and sets `isFallbackLang: true`
3. If `isFallbackLang` is true, `Document.tsx` shows a Filipino-language info banner

**Template interpolation:**
If a `[slug].json` companion file exists alongside the `.md`, its keys are available as `{KEY}` placeholders in the markdown (resolved from `VITE_*` env vars too).

---

## TableWithToggle.tsx

Replaces all markdown tables with a card-based layout to avoid horizontal scroll on mobile.

**Card layout logic:**
- First column becomes the card's title
- If the first column is a serial/number column (`#`, `Step`, `No.`, or all-digit values), it renders as a numbered green badge and the second column becomes the title instead
- Remaining columns render as labeled field rows inside the card
- Empty/`—` fields are hidden
- A small **"Table view"** button lets users switch to the raw scrollable table

**Parse strategy:**
Traverses the React element tree directly (no DOM) — finds `thead`/`tbody`/`tr`/`th`/`td` by type string. This works because `markdownComponents.tsx` does **not** override `thead`, `tbody`, `tr`, `th`, or `td` — only `table` is overridden to pass children into `TableWithToggle`.

---

## markdownComponents.tsx

Maps ReactMarkdown element types to custom React components. Key overrides:

- `table` → `TableWithToggle` (card view)
- `ul` → handles task list items (checkbox → ✅ emoji)
- `a` → adds `target="_blank" rel="noopener noreferrer"` for external links automatically

`thead`, `tbody`, `tr`, `th`, `td` are intentionally **not** overridden so `TableWithToggle` can find them by native element type.

---

## typographyThemes.ts

Defines the `TypographyTheme` interface used by `markdownComponents.tsx`. Currently only the `default` theme is used — Document.tsx applies prose styling via Tailwind CSS classes directly rather than switching themes.
