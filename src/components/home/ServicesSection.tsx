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

  const displayedCategories = serviceCategories.categories as Category[];

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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {displayedCategories.map((category, idx) => (
          <Link
            key={category.slug}
            to={`/services/${category.slug}`}
            className="group block bg-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: `opacity 0.5s ease ${idx * 50}ms, transform 0.5s ease ${idx * 50}ms, box-shadow 0.2s, translate 0.2s`,
            }}
          >
            {/* Green top accent */}
            <div className="h-1 bg-gradient-to-r from-primary-600 to-primary-400 group-hover:from-primary-500 group-hover:to-primary-300 transition-colors" />
            <div className="p-5">
              <div className="bg-primary-50 text-primary-700 w-11 h-11 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-200">
                {getIcon(category.icon)}
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1.5 group-hover:text-primary-700 transition-colors">
                {t(
                  `services.categories.${category.slug}.name`,
                  category.category
                )}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                {t(
                  `services.categories.${category.slug}.description`,
                  category.description
                )}
              </p>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                View services
                <LucideIcons.ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </Link>
        ))}
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
