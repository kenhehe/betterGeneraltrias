/**
 * Utility to load markdown content dynamically based on slug.
 * Supports language-specific files: {slug}.fil.md falls back to {slug}.md.
 */

function interpolate(
  content: string,
  data: Record<string, unknown> = {}
): string {
  return content.replace(/\{([A-Z0-9_]+)\}/g, (match, key) => {
    if (key in data) return String(data[key]);
    const value = import.meta.env[`VITE_${key}`];
    return value !== undefined ? String(value) : match;
  });
}

export interface MarkdownContent {
  content: string;
  title?: string;
  description?: string;
  data?: Record<string, unknown>;
  isFallbackLang?: boolean;
}

/**
 * Loads markdown content from the appropriate content directory.
 * For non-English languages, tries a language-specific file first
 * (e.g. executive.fil.md), then falls back to the English version.
 */
export async function loadMarkdownContent(
  documentSlug: string,
  categorySlug: string,
  categoryType: 'service' | 'government',
  lang = 'en'
): Promise<MarkdownContent> {
  const dir = categoryType === 'government' ? 'government' : 'services';

  // Try to load companion JSON for template data
  let data: Record<string, unknown> = {};
  try {
    const jsonModule = await import(
      `../../content/${dir}/${categorySlug}/${documentSlug}.json`
    );
    data = jsonModule.default;
  } catch {
    // No companion JSON — that's fine
  }

  // For non-English: try language-specific file first
  if (lang !== 'en') {
    try {
      const langModule = await import(
        `../../content/${dir}/${categorySlug}/${documentSlug}.${lang}.md?raw`
      );
      const content = interpolate(langModule.default, data);
      const titleMatch = content.match(/^#\s+(.+)$/m);
      const descMatch = content.match(/^#\s+.+$\n\n(.+?)(?:\n\n|$)/s);
      return {
        content,
        title: titleMatch?.[1],
        description: descMatch?.[1].replace(/^>\s*/, '').trim(),
        data,
        isFallbackLang: false,
      };
    } catch {
      // No language-specific file — fall through to English
    }
  }

  try {
    const module = await import(
      `../../content/${dir}/${categorySlug}/${documentSlug}.md?raw`
    );
    const content = interpolate(module.default, data);
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const descMatch = content.match(/^#\s+.+$\n\n(.+?)(?:\n\n|$)/s);
    return {
      content,
      title: titleMatch?.[1],
      description: descMatch?.[1].replace(/^>\s*/, '').trim(),
      data,
      isFallbackLang: lang !== 'en',
    };
  } catch (error) {
    console.error(
      `Failed to load markdown content for document: ${documentSlug}`,
      error
    );
    throw new Error(`Document not found: ${documentSlug}`);
  }
}
