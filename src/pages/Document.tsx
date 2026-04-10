import Breadcrumbs from '../components/ui/Breadcrumbs';
import Section from '../components/ui/Section';
import { Banner } from '@bettergov/kapwa/banner';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  loadMarkdownContent,
  type MarkdownContent,
} from '../lib/markdownLoader';
import { createMarkdownComponents } from '../lib/markdownComponents';
import { getTypographyTheme } from '../lib/typographyThemes';
import {
  serviceCategories,
  governmentCategories,
  getCategorySubcategories,
  isNestedCategory,
  type Subcategory,
  type CategoryIndex,
} from '../data/yamlLoader';
import * as LucideIcons from 'lucide-react';
import SEO from '../components/SEO';
import { ArrowRight, ArrowLeft, FileText, AlertCircle, LayoutList } from 'lucide-react';

interface DocumentProps {
  theme?: string;
  categoryType?: 'service' | 'government';
}

export default function Document({
  theme: initialTheme = 'default',
  categoryType,
}: DocumentProps) {
  const { documentSlug, category } = useParams();
  const { i18n } = useTranslation('common');
  const lang = i18n.language;
  const [markdownContent, setMarkdownContent] =
    useState<MarkdownContent | null>(null);
  const [nestedIndex, setNestedIndex] = useState<CategoryIndex | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const markdownComponents = createMarkdownComponents(
    getTypographyTheme(initialTheme)
  );

  const [breadcrumbs, setBreadcrumbs] = useState([
    { label: 'Home', href: '/' },
  ]);

  useEffect(() => {
    if (!documentSlug || !category || !categoryType) {
      setError('No document specified');
      setLoading(false);
      return;
    }

    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);

        const isGovernment = categoryType === 'government';
        const categories = isGovernment
          ? governmentCategories.categories
          : serviceCategories.categories;
        const sectionLabel = isGovernment ? 'Government' : 'Services';
        const sectionHref = isGovernment ? '/government' : '/services';
        const categoryData = categories.find(c => c.slug === category);

        if (isNestedCategory(documentSlug)) {
          const index = await getCategorySubcategories(documentSlug);
          setNestedIndex(index);
          setBreadcrumbs([
            { label: 'Home', href: '/' },
            { label: sectionLabel, href: sectionHref },
            {
              label: categoryData?.category ?? category,
              href: `${sectionHref}/${category}`,
            },
            {
              label: documentSlug,
              href: `${sectionHref}/${category}/${documentSlug}`,
            },
          ]);
          return;
        }

        const content = await loadMarkdownContent(
          documentSlug,
          category,
          categoryType,
          lang
        );
        setMarkdownContent(content);

        setBreadcrumbs([
          { label: 'Home', href: '/' },
          { label: sectionLabel, href: sectionHref },
          {
            label: categoryData?.category ?? category,
            href: `${sectionHref}/${category}`,
          },
          {
            label: content.title ?? documentSlug,
            href: `${sectionHref}/${category}/${documentSlug}`,
          },
        ]);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load document'
        );
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [documentSlug, category, categoryType, lang]);

  const sectionHref =
    categoryType === 'government' ? '/government' : '/services';
  const backHref = category ? `${sectionHref}/${category}` : sectionHref;

  // Resolve category icon from YAML data
  const allCategories = [
    ...serviceCategories.categories,
    ...governmentCategories.categories,
  ];
  const categoryData = allCategories.find(c => c.slug === category);
  const CategoryIcon = categoryData?.icon
    ? (LucideIcons[categoryData.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>)
    : FileText;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-3">
        <div className="w-10 h-10 rounded-full border-4 border-primary-200 border-t-primary-700 animate-spin" />
        <p className="text-sm text-gray-500">Loading…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-4">
          <AlertCircle className="h-8 w-8 text-red-500" />
        </div>
        <h2 className="text-xl font-black text-gray-900 mb-2">
          Document Not Found
        </h2>
        <p className="text-gray-500 mb-6">{error}</p>
        <Link
          to={backHref}
          className="inline-flex items-center gap-2 bg-primary-700 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-primary-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </Link>
      </div>
    );
  }

  /* ─── Nested index view ─── */
  if (nestedIndex) {
    const nestedPages: Subcategory[] = nestedIndex.pages;
    return (
      <>
        <SEO
          title={nestedIndex.title ?? documentSlug}
          keywords={`${documentSlug}, government services, local government`}
        />

        {/* Hero */}
        <div
          className="relative text-white overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 text-green-300 text-xs font-bold uppercase tracking-widest">
              <LayoutList className="h-3.5 w-3.5" />
              {categoryType === 'government' ? 'Government' : 'Services'} · {categoryData?.category ?? category}
            </div>

            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
              {nestedIndex.title ?? documentSlug}
            </h1>
            {nestedIndex.description && (
              <p className="text-green-100 text-base max-w-lg leading-relaxed mb-8">
                {nestedIndex.description}
              </p>
            )}

            {nestedPages.length > 0 && (
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-lg px-3 py-2">
                  <span className="text-sm font-black text-white">{nestedPages.length}</span>
                  <span className="text-xs text-green-300 font-medium">
                    {categoryType === 'government' ? 'Documents' : 'Services'}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40Z" fill="#f9fafb" />
            </svg>
          </div>
        </div>

        <div className="bg-gray-50 min-h-screen">
          <Section className="py-10">
            <Breadcrumbs className="mb-8" items={breadcrumbs} />
            <div className="space-y-3">
              {nestedPages.map((page, i) => (
                <Link
                  key={page.slug ?? i}
                  to={`${sectionHref}/${documentSlug}/${page.slug}`}
                  className="group flex items-center gap-5 bg-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-200 p-5"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 text-primary-700 flex items-center justify-center font-black text-sm group-hover:bg-primary-700 group-hover:text-white group-hover:border-primary-700 transition-all duration-200">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary-700 transition-colors leading-snug mb-0.5">
                      {page.name}
                    </h3>
                    {page.description && (
                      <p className="text-xs text-gray-500 truncate">
                        {page.description}
                      </p>
                    )}
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-300 shrink-0 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-200" />
                </Link>
              ))}
            </div>
          </Section>
        </div>
      </>
    );
  }

  if (!markdownContent) return null;

  /* ─── Markdown document view ─── */
  return (
    <>
      <SEO
        title={markdownContent.title || documentSlug}
        description={
          markdownContent.description ||
          `Government service information for ${documentSlug}`
        }
        keywords={`${documentSlug}, General Trias, government services`}
      />

      {/* Hero */}
      <div
        className="relative text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
          {/* Eyebrow — category icon + label */}
          <div className="flex items-center gap-2 mb-4 text-green-300 text-xs font-bold uppercase tracking-widest">
            {CategoryIcon && <CategoryIcon className="h-3.5 w-3.5" />}
            {categoryType === 'government' ? 'Government' : 'Services'} · {categoryData?.category ?? category}
          </div>

          <div className="flex items-start gap-5 max-w-3xl">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
              <FileText className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-2">
                {markdownContent.title}
              </h1>
              {markdownContent.description && (
                <p className="text-green-200 text-sm leading-relaxed max-w-xl">
                  {markdownContent.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40Z" fill="#f9fafb" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="bg-gray-50 min-h-screen">
        <Section className="py-10">
          <Breadcrumbs className="mb-8" items={breadcrumbs} />

          {markdownContent.isFallbackLang && (
            <Banner
              type="info"
              description="Ang pahinang ito ay hindi pa naisasalin sa Filipino. Ang nilalaman ay nasa Ingles."
              className="mb-6"
            />
          )}

          {/* Markdown content card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary-700 to-primary-400" />
            <div
              className="p-6 sm:p-8 prose prose-sm max-w-none
              prose-headings:font-black prose-headings:text-gray-900
              prose-h1:text-2xl prose-h2:text-xl prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-2
              prose-h3:text-base prose-h3:text-primary-700
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-a:text-primary-700 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900
              prose-ul:text-gray-600 prose-ol:text-gray-600
              prose-li:marker:text-primary-500
              prose-blockquote:border-primary-400 prose-blockquote:bg-primary-50 prose-blockquote:rounded-r-xl prose-blockquote:py-1
              prose-table:text-sm prose-th:bg-primary-50 prose-th:text-primary-800 prose-th:font-bold
              prose-tr:border-gray-100 prose-td:text-gray-600
            "
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {markdownContent.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Back nav */}
          <div className="mt-6 flex items-center justify-between">
            <Link
              to={backHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {categoryData?.category ?? category}
            </Link>
            <Link
              to={sectionHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 hover:text-primary-800 transition-colors"
            >
              All {categoryType === 'government' ? 'Government' : 'Services'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>
      </div>
    </>
  );
}
