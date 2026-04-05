import Section from '../ui/Section';
import * as LucideIcons from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router-dom';

import { governmentCategories } from '../../data/yamlLoader';

interface Category {
  category: string;
  slug: string;
  description: string;
  icon: string;
}

const CATEGORY_COLORS: {
  border: string;
  icon: string;
  iconBg: string;
  title: string;
}[] = [
  {
    border: 'border-primary-500',
    icon: 'text-primary-700',
    iconBg: 'bg-primary-50',
    title: 'text-primary-800',
  },
  {
    border: 'border-amber-400',
    icon: 'text-amber-600',
    iconBg: 'bg-amber-50',
    title: 'text-amber-700',
  },
  {
    border: 'border-green-400',
    icon: 'text-green-600',
    iconBg: 'bg-green-50',
    title: 'text-green-700',
  },
  {
    border: 'border-purple-400',
    icon: 'text-purple-600',
    iconBg: 'bg-purple-50',
    title: 'text-purple-700',
  },
  {
    border: 'border-rose-400',
    icon: 'text-rose-600',
    iconBg: 'bg-rose-50',
    title: 'text-rose-700',
  },
  {
    border: 'border-teal-400',
    icon: 'text-teal-600',
    iconBg: 'bg-teal-50',
    title: 'text-teal-700',
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedCategories.map((category, idx) => {
          const colors = CATEGORY_COLORS[idx % CATEGORY_COLORS.length];
          return (
            <Link
              key={category.slug}
              to={`/government/${category.slug}`}
              className={`group block bg-white rounded-xl border-t-4 ${colors.border} border border-gray-100 hover:shadow-md transition-all duration-200 p-5`}
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
              <p className="text-xs text-gray-600 leading-relaxed">
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
