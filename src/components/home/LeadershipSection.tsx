import { Phone, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LeadershipSection() {
  const { t } = useTranslation('common');

  const OFFICIALS = [
    {
      initials: 'AT',
      name: 'Hon. Aizack Brent D. Tolentino',
      titleKey: 'leadership.cityMayor',
      badgeKey: 'leadership.electedMayor',
      phone: '(046) 888-9500',
      email: 'mayor@tagaytay.gov.ph',
      tel: '0468889500',
    },
    {
      initials: 'AT',
      name: 'Hon. Agnes D. Tolentino, DMD',
      titleKey: 'leadership.cityViceMayor',
      badgeKey: 'leadership.electedViceMayor',
      phone: '(046) 888-9500',
      email: null,
      tel: '0468889500',
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-gray-900">
            {t('leadership.title')}
          </h2>
          <Link
            to="/government/departments/officials"
            className="text-sm font-semibold text-primary-700 hover:text-primary-800 flex items-center gap-1 transition-colors"
          >
            {t('leadership.viewAll')}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OFFICIALS.map(official => (
            <div
              key={official.name}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-1.5 bg-primary-700" />
              <div className="p-5 flex gap-4">
                <div className="shrink-0 w-14 h-14 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-black text-lg">
                  {official.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-xs font-semibold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full border border-primary-100 mb-1.5">
                    {t(official.badgeKey)}
                  </span>
                  <h3 className="font-black text-gray-900 text-sm leading-snug mb-0.5 truncate">
                    {official.name}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">
                    {t(official.titleKey)}
                  </p>
                  <div className="flex flex-col gap-1.5">
                    <a
                      href={`tel:${official.tel}`}
                      className="flex items-center gap-2 text-xs text-gray-600 hover:text-primary-700 transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5 text-primary-500" />
                      {official.phone}
                    </a>
                    {official.email && (
                      <a
                        href={`mailto:${official.email}`}
                        className="flex items-center gap-2 text-xs text-gray-600 hover:text-primary-700 transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5 text-primary-500" />
                        {official.email}
                      </a>
                    )}
                  </div>
                </div>
                <div className="shrink-0 self-start">
                  <Link
                    to="/government/departments/executive"
                    className="text-primary-400 hover:text-primary-700 transition-colors"
                    aria-label={t('leadership.viewProfile')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
