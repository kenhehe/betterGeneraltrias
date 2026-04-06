import Section from '../ui/Section';
import * as LucideIcons from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';

import { governmentCategories } from '../../data/yamlLoader';

interface Category {
  category: string;
  slug: string;
  description: string;
  icon: string;
}

const CATEGORY_COLORS: {
  card: string;
  icon: string;
  iconBg: string;
  title: string;
  desc: string;
}[] = [
  {
    card: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
    icon: 'text-indigo-600',
    iconBg: 'bg-indigo-100',
    title: 'text-indigo-800',
    desc: 'text-indigo-700/80',
  },
  {
    card: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    icon: 'text-blue-600',
    iconBg: 'bg-blue-100',
    title: 'text-blue-800',
    desc: 'text-blue-700/80',
  },
  {
    card: 'bg-amber-50 border-amber-200 hover:bg-amber-100',
    icon: 'text-amber-600',
    iconBg: 'bg-amber-100',
    title: 'text-amber-800',
    desc: 'text-amber-700/80',
  },
  {
    card: 'bg-green-50 border-green-200 hover:bg-green-100',
    icon: 'text-green-600',
    iconBg: 'bg-green-100',
    title: 'text-green-800',
    desc: 'text-green-700/80',
  },
  {
    card: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    icon: 'text-purple-600',
    iconBg: 'bg-purple-100',
    title: 'text-purple-800',
    desc: 'text-purple-700/80',
  },
  {
    card: 'bg-rose-50 border-rose-200 hover:bg-rose-100',
    icon: 'text-rose-600',
    iconBg: 'bg-rose-100',
    title: 'text-rose-800',
    desc: 'text-rose-700/80',
  },
  {
    card: 'bg-teal-50 border-teal-200 hover:bg-teal-100',
    icon: 'text-teal-600',
    iconBg: 'bg-teal-100',
    title: 'text-teal-800',
    desc: 'text-teal-700/80',
  },
];

interface GovernmentActivitySectionProps {
  title?: string;
  description?: string;
}

export default function GovernmentActivitySection({
  title,
  description,
}: GovernmentActivitySectionProps = {}) {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>();

  const getIcon = (iconName: string) => {
    const IconComponent = LucideIcons[
      iconName as keyof typeof LucideIcons
    ] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
  };

  const displayedCategories = governmentCategories.categories as Category[];

  return (
    <Section id="#government">
      <Heading level={2}>{title || t('governmentActivity.title')}</Heading>
      <Text className="text-gray-600 mb-6">
        {description || t('governmentActivity.description')}
      </Text>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {displayedCategories.map((category, idx) => {
          const colors = CATEGORY_COLORS[idx % CATEGORY_COLORS.length];
          return (
            <Link
              key={category.slug}
              to={`/government/${category.slug}`}
              className={`group block rounded-xl border ${colors.card} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-5`}
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
                  `governmentActivity.categories.${category.slug}.name`,
                  category.category
                )}
              </h3>
              <p className={`text-xs leading-relaxed ${colors.desc}`}>
                {t(
                  `governmentActivity.categories.${category.slug}.description`,
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
