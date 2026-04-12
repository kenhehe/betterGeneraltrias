import Section from '../ui/Section';
import * as LucideIcons from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';
import { serviceCategories } from '../../data/yamlLoader';

interface Category {
  category: string;
  slug: string;
  description: string;
  icon: string;
}

// Color palette per service category — green, blue, red, white variety
const CATEGORY_COLORS: Record<string, { accent: string; iconBg: string; iconText: string; hoverBorder: string; hoverText: string }> = {
  'health-services':          { accent: 'from-red-500 to-rose-400',     iconBg: 'bg-red-50',     iconText: 'text-red-600',    hoverBorder: 'hover:border-red-200',    hoverText: 'group-hover:text-red-700' },
  'education':                { accent: 'from-blue-500 to-blue-400',    iconBg: 'bg-blue-50',    iconText: 'text-blue-600',   hoverBorder: 'hover:border-blue-200',   hoverText: 'group-hover:text-blue-700' },
  'business':                 { accent: 'from-indigo-500 to-violet-400',iconBg: 'bg-indigo-50',  iconText: 'text-indigo-600', hoverBorder: 'hover:border-indigo-200', hoverText: 'group-hover:text-indigo-700' },
  'social-welfare':           { accent: 'from-pink-500 to-rose-400',    iconBg: 'bg-pink-50',    iconText: 'text-pink-600',   hoverBorder: 'hover:border-pink-200',   hoverText: 'group-hover:text-pink-700' },
  'agriculture-fisheries':    { accent: 'from-lime-600 to-green-500',   iconBg: 'bg-lime-50',    iconText: 'text-lime-700',   hoverBorder: 'hover:border-lime-200',   hoverText: 'group-hover:text-lime-700' },
  'infrastructure-public-works': { accent: 'from-slate-500 to-gray-400', iconBg: 'bg-slate-50',  iconText: 'text-slate-600', hoverBorder: 'hover:border-slate-200',  hoverText: 'group-hover:text-slate-700' },
  'garbage-waste-disposal':   { accent: 'from-amber-500 to-yellow-400', iconBg: 'bg-amber-50',   iconText: 'text-amber-600',  hoverBorder: 'hover:border-amber-200',  hoverText: 'group-hover:text-amber-700' },
  'environment':              { accent: 'from-green-600 to-emerald-400',iconBg: 'bg-green-50',   iconText: 'text-green-700',  hoverBorder: 'hover:border-green-200',  hoverText: 'group-hover:text-green-700' },
  'disaster-preparedness':    { accent: 'from-orange-500 to-red-400',   iconBg: 'bg-orange-50',  iconText: 'text-orange-600', hoverBorder: 'hover:border-orange-200', hoverText: 'group-hover:text-orange-700' },
  'housing-land-use':         { accent: 'from-sky-500 to-cyan-400',     iconBg: 'bg-sky-50',     iconText: 'text-sky-600',    hoverBorder: 'hover:border-sky-200',    hoverText: 'group-hover:text-sky-700' },
  'tourism':                  { accent: 'from-violet-500 to-purple-400',iconBg: 'bg-violet-50',  iconText: 'text-violet-600', hoverBorder: 'hover:border-violet-200', hoverText: 'group-hover:text-violet-700' },
};

const DEFAULT_COLOR = { accent: 'from-primary-600 to-primary-400', iconBg: 'bg-primary-50', iconText: 'text-primary-700', hoverBorder: 'hover:border-primary-200', hoverText: 'group-hover:text-primary-700' };

export default function ServicesSection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>();

  const getIcon = (iconName: string) => {
    const IconComponent = LucideIcons[
      iconName as keyof typeof LucideIcons
    ] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
  };

  const FEATURED_SLUGS = ['health-services', 'agriculture-fisheries', 'environment', 'tourism'];
  const displayedCategories = (serviceCategories.categories as Category[]).filter(c =>
    FEATURED_SLUGS.includes(c.slug)
  ).sort((a, b) => FEATURED_SLUGS.indexOf(a.slug) - FEATURED_SLUGS.indexOf(b.slug));

  return (
    <Section>
      {/* Section header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
            City Services
          </p>
          <h2 className="text-2xl font-black text-gray-900">
            {title || t('services.title')}
          </h2>
          <div className="mt-2 h-1 w-12 bg-primary-600 rounded-full" />
        </div>
        <Link
          to="/services"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-primary-700 hover:text-primary-800 transition-colors"
        >
          {t('services.viewAll', 'View All')}
          <LucideIcons.ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {description && (
        <p className="text-gray-500 text-sm mb-6">{description}</p>
      )}

      <div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {displayedCategories.map((category, idx) => {
          const colors = CATEGORY_COLORS[category.slug] ?? DEFAULT_COLOR;
          return (
            <Link
              key={category.slug}
              to={`/services/${category.slug}`}
              className={`group block bg-white rounded-2xl border border-gray-100 ${colors.hoverBorder} hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${idx * 50}ms, transform 0.5s ease ${idx * 50}ms, box-shadow 0.2s, translate 0.2s`,
              }}
            >
              {/* Colored top accent */}
              <div className={`h-1 bg-gradient-to-r ${colors.accent}`} />
              <div className="p-5">
                <div className={`${colors.iconBg} ${colors.iconText} w-11 h-11 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-200`}>
                  {getIcon(category.icon)}
                </div>
                <h3 className={`text-sm font-bold text-gray-900 mb-1.5 ${colors.hoverText} transition-colors`}>
                  {t(`services.categories.${category.slug}.name`, category.category)}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                  {t(`services.categories.${category.slug}.description`, category.description)}
                </p>
                <div className={`mt-3 flex items-center gap-1 text-xs font-semibold ${colors.iconText} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  View services
                  <LucideIcons.ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-6 sm:hidden flex justify-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-700 border border-primary-200 px-5 py-2.5 rounded-xl hover:bg-primary-50 transition-colors"
        >
          {t('services.viewAll', 'View All Services')}
          <LucideIcons.ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
