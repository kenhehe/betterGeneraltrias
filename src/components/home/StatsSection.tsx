import { Users, MapPin, Building2, Map, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';

export default function StatsSection() {
  const { t } = useTranslation('common');
  const { ref, inView } = useInView<HTMLDivElement>();

  const STATS = [
    {
      icon: Users,
      value: '450,583',
      label: t('stats.population.label'),
      description: t('stats.population.desc'),
    },
    {
      icon: MapPin,
      value: '33',
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
      value: '88.9',
      label: t('stats.area.label'),
      description: t('stats.area.desc'),
    },
  ];

  return (
    <section
      className="relative py-10 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)',
      }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          {STATS.map(({ icon: Icon, value, label, description }, idx) => (
            <div
              key={description}
              className="flex flex-col items-center text-center px-6 py-8"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${idx * 100}ms, transform 0.5s ease ${idx * 100}ms`,
              }}
            >
              <div className="bg-white/10 rounded-xl p-2.5 mb-4">
                <Icon className="h-5 w-5 text-green-300" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white leading-none mb-1">
                {value}
              </div>
              {label && (
                <div className="text-sm font-bold text-green-200 mb-1">
                  {label}
                </div>
              )}
              <div className="text-xs text-green-400 leading-relaxed">
                {description}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-4 pb-2 flex justify-center">
          <Link
            to="/government/reports-and-statistics/city-profile"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-green-300 hover:text-white transition-colors uppercase tracking-wide"
          >
            {t('stats.viewProfile')}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
