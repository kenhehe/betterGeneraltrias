import { useParams, Link } from 'react-router-dom';
import {
  serviceCategories,
  getCategorySubcategories,
  type Subcategory,
  type CategoryIndex,
} from '../data/yamlLoader';
import * as LucideIcons from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ServicesSection from '../components/home/ServicesSection';
import SEO from '../components/SEO';
import { useState, useEffect } from 'react';
import { ArrowRight, LayoutGrid, List, AlertCircle } from 'lucide-react';

const Services: React.FC = () => {
  const { category } = useParams();
  const [categoryIndex, setCategoryIndex] = useState<CategoryIndex>({
    layout: 'list',
    pages: [],
  });
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const subcategories: Subcategory[] = categoryIndex.pages;

  const categoryData = serviceCategories.categories.find(
    c => c.slug === category
  );
  const Icon = LucideIcons[
    categoryData?.icon as keyof typeof LucideIcons
  ] as React.ComponentType<{ className?: string }>;

  useEffect(() => {
    if (category && categoryData) {
      setLoading(true);
      getCategorySubcategories(category)
        .then(data => {
          setCategoryIndex(data);
          setViewMode(data.layout === 'grid' ? 'grid' : 'list');
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [category, categoryData]);

  if (!category) {
    return (
      <>
        <SEO
          title="Services"
          description={`All services provided by the ${import.meta.env.VITE_GOVERNMENT_NAME} government.`}
          keywords="government services, public services, local government, civic services"
        />
        <ServicesSection
          title="All City Services"
          description={`All services provided by the ${import.meta.env.VITE_GOVERNMENT_NAME} government. Find what you need for citizenship, business, education, and more.`}
        />
      </>
    );
  }

  if (!categoryData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-4">
          <AlertCircle className="h-8 w-8 text-red-500" />
        </div>
        <h2 className="text-xl font-black text-gray-900 mb-2">
          Category Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          The category you are looking for does not exist.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 bg-primary-700 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-primary-600 transition-colors"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          Back to Services
        </Link>
      </div>
    );
  }

  const BREADCRUMBS = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: categoryData.category, href: `/services/${category}` },
  ];

  return (
    <>
      <SEO
        title={categoryData.category}
        description={categoryData.description}
        keywords={`${categoryData.category}, General Trias services, local government`}
      />

      {/* Category Hero */}
      <div
        className="relative text-white overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                {Icon && <Icon className="h-8 w-8 text-white" />}
              </div>
              <div>
                <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-1">
                  City Services
                </p>
                <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-2">
                  {categoryData.category}
                </h1>
                <p className="text-green-200 text-sm max-w-xl leading-relaxed">
                  {categoryData.description}
                </p>
              </div>
            </div>
            {!loading && subcategories.length > 0 && (
              <div className="hidden sm:flex shrink-0 items-center gap-2 bg-white/10 border border-white/20 rounded-2xl px-5 py-3">
                <span className="text-3xl font-black text-white">
                  {subcategories.length}
                </span>
                <span className="text-xs text-green-200 font-medium leading-tight">
                  available
                  <br />
                  services
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 32 C480 0 960 0 1440 32 L1440 32 L0 32Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumbs className="mb-8" items={BREADCRUMBS} />

          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-3">
              <div className="w-10 h-10 rounded-full border-4 border-primary-200 border-t-primary-700 animate-spin" />
              <p className="text-sm text-gray-500">Loading services…</p>
            </div>
          ) : (
            <>
              {/* Sub-index header + view toggle */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  {categoryIndex.title && (
                    <h2 className="text-lg font-black text-gray-900">
                      {categoryIndex.title}
                    </h2>
                  )}
                  {categoryIndex.description && (
                    <p className="text-sm text-gray-500 mt-0.5">
                      {categoryIndex.description}
                    </p>
                  )}
                  {!categoryIndex.title && (
                    <h2 className="text-lg font-black text-gray-900">
                      {subcategories.length} Services
                    </h2>
                  )}
                </div>
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-primary-700 text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                    title="List view"
                  >
                    <List className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-primary-700 text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                    title="Grid view"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {subcategories.map((subcategory, idx) => (
                    <Link
                      key={subcategory.slug}
                      to={`/services/${category}/${subcategory.slug}`}
                      className="group bg-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
                    >
                      <div className="h-1.5 bg-gradient-to-r from-primary-600 to-primary-400 group-hover:from-primary-500 group-hover:to-primary-300 transition-colors" />
                      <div className="p-5">
                        <span className="text-[10px] font-black text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full border border-primary-100 uppercase tracking-wide">
                          #{String(idx + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-bold text-gray-900 text-sm mt-3 mb-2 group-hover:text-primary-700 transition-colors leading-snug">
                          {subcategory.name}
                        </h3>
                        {subcategory.description && (
                          <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                            {subcategory.description}
                          </p>
                        )}
                        <div className="mt-4 flex items-center gap-1 text-xs font-bold text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          View details
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {subcategories.map((subcategory, idx) => (
                    <Link
                      key={subcategory.slug}
                      to={`/services/${category}/${subcategory.slug}`}
                      className="group flex items-center gap-5 bg-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-200 p-5 overflow-hidden"
                    >
                      {/* Number badge */}
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 text-primary-700 flex items-center justify-center font-black text-sm group-hover:bg-primary-700 group-hover:text-white group-hover:border-primary-700 transition-all duration-200">
                        {String(idx + 1).padStart(2, '0')}
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary-700 transition-colors leading-snug mb-0.5">
                          {subcategory.name}
                        </h3>
                        {subcategory.description && (
                          <p className="text-xs text-gray-500 leading-relaxed truncate">
                            {subcategory.description}
                          </p>
                        )}
                      </div>

                      {/* Category label + arrow */}
                      <div className="shrink-0 flex items-center gap-3">
                        <span className="hidden sm:inline-block text-[10px] font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full uppercase tracking-wide">
                          {categoryData.category}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Services;
