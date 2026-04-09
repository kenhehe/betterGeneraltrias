import Section from '../ui/Section';
import * as LucideIcons from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router-dom';
import { Camera, Sunrise, Utensils, Mountain } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

import { serviceCategories } from '../../data/yamlLoader';

interface Category {
  category: string;
  slug: string;
  description: string;
  icon: string;
}

// Distinct color palette per category slot
const CATEGORY_COLORS: {
  border: string;
  icon: string;
  iconBg: string;
  title: string;
}[] = [
  {
    border: 'border-red-400',
    icon: 'text-red-600',
    iconBg: 'bg-red-50',
    title: 'text-red-700',
  },
  {
    border: 'border-violet-400',
    icon: 'text-violet-600',
    iconBg: 'bg-violet-50',
    title: 'text-violet-700',
  },
  {
    border: 'border-lime-500',
    icon: 'text-lime-700',
    iconBg: 'bg-lime-50',
    title: 'text-lime-700',
  },
  {
    border: 'border-purple-400',
    icon: 'text-purple-600',
    iconBg: 'bg-purple-50',
    title: 'text-purple-700',
  },
  {
    border: 'border-green-400',
    icon: 'text-green-600',
    iconBg: 'bg-green-50',
    title: 'text-green-700',
  },
  {
    border: 'border-orange-400',
    icon: 'text-orange-600',
    iconBg: 'bg-orange-50',
    title: 'text-orange-700',
  },
  {
    border: 'border-teal-400',
    icon: 'text-teal-600',
    iconBg: 'bg-teal-50',
    title: 'text-teal-700',
  },
  {
    border: 'border-green-500',
    icon: 'text-green-700',
    iconBg: 'bg-green-50',
    title: 'text-green-700',
  },
  {
    border: 'border-rose-400',
    icon: 'text-rose-600',
    iconBg: 'bg-rose-50',
    title: 'text-rose-700',
  },
  {
    border: 'border-indigo-400',
    icon: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
    title: 'text-indigo-700',
  },
  {
    border: 'border-pink-400',
    icon: 'text-pink-600',
    iconBg: 'bg-pink-50',
    title: 'text-pink-700',
  },
];

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
      <Heading level={2}>{title || t('services.title')}</Heading>
      <Text className="text-gray-600 mb-6">
        {description || t('services.description')}
      </Text>

      {/* Tourism Spotlight */}
      <div
        ref={ref}
        className="mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-800 text-white shadow-lg"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="flex-1 p-6 md:p-8">
            <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
              <Mountain className="h-3.5 w-3.5" />
              {t('services.tourismSpotlight.badge', 'Tourism Spotlight')}
            </span>
            <h3 className="text-2xl font-black mb-2 leading-tight">
              {t('services.tourismSpotlight.title', 'Discover General Trias City')}
            </h3>
            <p className="text-white/80 text-sm mb-5 max-w-md">
              {t(
                'services.tourismSpotlight.description',
                'General Trias is one of the fastest-growing cities in the Philippines, home to historical churches, lush parks, the Eagle Ridge Golf Club, and the vibrant Valenciana Festival.'
              )}
            </p>
            <Link
              to="/services/tourism"
              className="inline-flex items-center gap-2 bg-white text-emerald-800 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors"
            >
              {t('services.tourismSpotlight.cta', 'Explore Tourism Services')}
              <LucideIcons.ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center gap-4 p-6 bg-white/10 min-w-[220px]">
            <div className="grid grid-cols-2 gap-3 text-center">
              {[
                {
                  icon: Mountain,
                  label: t('services.tourismSpotlight.taal', 'Taal Volcano'),
                },
                {
                  icon: Sunrise,
                  label: t('services.tourismSpotlight.ridge', 'Scenic Ridges'),
                },
                {
                  icon: Utensils,
                  label: t('services.tourismSpotlight.food', 'Bulalo & More'),
                },
                {
                  icon: Camera,
                  label: t('services.tourismSpotlight.spots', 'Photo Spots'),
                },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <div className="bg-white/20 rounded-lg w-10 h-10 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-white/90 leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedCategories.map((category, idx) => {
          const colors = CATEGORY_COLORS[idx % CATEGORY_COLORS.length];
          return (
            <Link
              key={category.slug}
              to={`/services/${category.slug}`}
              className={`group block bg-white rounded-xl border-t-4 ${colors.border} border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-5`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${idx * 60}ms, transform 0.5s ease ${idx * 60}ms, box-shadow 0.2s, translate 0.2s`,
              }}
            >
              <div
                className={`${colors.iconBg} ${colors.icon} w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
              >
                {getIcon(category.icon)}
              </div>
              <h3 className={`text-sm font-bold mb-2 ${colors.title}`}>
                {t(
                  `services.categories.${category.slug}.name`,
                  category.category
                )}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {t(
                  `services.categories.${category.slug}.description`,
                  category.description
                )}
              </p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
