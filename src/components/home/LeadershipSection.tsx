import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';

export default function LeadershipSection() {
  const { t } = useTranslation('common');
  const { ref, inView } = useInView<HTMLDivElement>();

  const OFFICIALS = [
    {
      initials: 'LF',
      name: 'Hon. Luis A. Ferrer IV',
      titleKey: 'leadership.cityMayor',
      badgeKey: 'leadership.electedMayor',
      phone: '(046) 884-5768',
      email: null,
      tel: '0468845768',
    },
    {
      initials: 'JL',
      name: 'Hon. Jonas Glyn Porto Labuguen',
      titleKey: 'leadership.cityViceMayor',
      badgeKey: 'leadership.electedViceMayor',
      phone: '(046) 884-5768',
      email: null,
      tel: '0468845768',
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
              City Leadership
            </p>
            <h2 className="text-2xl font-black text-gray-900">
              {t('leadership.title')}
            </h2>
            <div className="mt-2 h-1 w-12 bg-primary-600 rounded-full" />
          </div>
          <Link
            to="/government/departments/officials"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-primary-700 hover:text-primary-800 transition-colors"
          >
            {t('leadership.viewAll')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {OFFICIALS.map((official, idx) => (
            <div
              key={official.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.55s ease ${idx * 120}ms, transform 0.55s ease ${idx * 120}ms, box-shadow 0.3s, translate 0.3s`,
              }}
            >
              {/* Dark green header */}
              <div
                className="px-6 py-5 flex items-center gap-4"
                style={{
                  background:
                    'linear-gradient(135deg, #0f4328 0%, #16643c 100%)',
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/15 border-2 border-white/25 flex items-center justify-center font-black text-2xl text-white shrink-0">
                  {official.initials}
                </div>
                <div>
                  <span className="inline-block text-[10px] font-bold text-green-300 bg-white/15 px-2.5 py-1 rounded-full mb-1.5 uppercase tracking-wide">
                    {t(official.badgeKey)}
                  </span>
                  <h3 className="font-black text-white text-base leading-snug">
                    {official.name}
                  </h3>
                  <p className="text-green-200 text-sm">
                    {t(official.titleKey)}
                  </p>
                </div>
              </div>

              {/* Contact info */}
              <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${official.tel}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-700 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-primary-50 flex items-center justify-center">
                      <Phone className="h-3.5 w-3.5 text-primary-600" />
                    </div>
                    {official.phone}
                  </a>
                  {official.email && (
                    <a
                      href={`mailto:${official.email}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-700 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-primary-50 flex items-center justify-center">
                        <Mail className="h-3.5 w-3.5 text-primary-600" />
                      </div>
                      {official.email}
                    </a>
                  )}
                </div>
                <Link
                  to="/government/departments/executive"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 px-3 py-2 rounded-lg transition-colors"
                >
                  {t('leadership.viewProfile')}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
