import { Users, MapPin, Building2, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';

export default function StatsSection() {
  const { t } = useTranslation('common');
  const { ref, inView } = useInView<HTMLDivElement>();

  const STATS = [
    {
      icon: Users,
      value: '73,264',
      label: t('stats.population.label'),
      description: t('stats.population.desc'),
    },
    {
      icon: MapPin,
      value: '34',
      label: t('stats.barangays.label'),
      description: t('stats.barangays.desc'),
    },
    {
      icon: Building2,
      value: t('stats.classification.label'),
      label: '',
      description: t('stats.classification.desc'),
    },
    {
      icon: Map,
      value: '65.54',
      label: t('stats.area.label'),
      description: t('stats.area.desc'),
    },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-gray-900">
            {t('stats.title')}
          </h2>
          <Link
            to="/government/reports-and-statistics/city-profile"
            className="text-sm font-semibold text-primary-700 hover:text-primary-800 flex items-center gap-1 transition-colors"
          >
            {t('stats.viewProfile')}
          </Link>
        </div>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ icon: Icon, value, label, description }, idx) => (
            <div
              key={description}
              className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${idx * 100}ms, transform 0.5s ease ${idx * 100}ms, box-shadow 0.2s, translate 0.2s`,
              }}
            >
              <div className="bg-primary-100 text-primary-700 w-9 h-9 rounded-lg flex items-center justify-center mb-3">
                <Icon className="h-4 w-4" />
              </div>
              <div className="text-2xl font-black text-gray-900 leading-none mb-1">
                {value}
              </div>
              {label && (
                <div className="text-sm font-semibold text-gray-800">
                  {label}
                </div>
              )}
              <div className="text-xs text-gray-600 mt-0.5">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
