import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';

export default function ContactSection() {
  const { t } = useTranslation('common');
  const { ref, inView } = useInView<HTMLDivElement>();

  const CONTACTS = [
    {
      icon: Phone,
      labelKey: 'contact.phone',
      primaryKey: 'contact.phone',
      primary: '(046) 884-5768',
      secondaryKey: 'contact.phoneHours',
      href: 'tel:0468845768',
      color: 'text-primary-700',
      bg: 'bg-primary-50',
    },
    {
      icon: Mail,
      labelKey: 'contact.email',
      primary: 'info@generaltrias.gov.ph',
      secondaryKey: 'contact.emailResponse',
      href: 'mailto:info@generaltrias.gov.ph',
      color: 'text-green-700',
      bg: 'bg-green-50',
    },
    {
      icon: MapPin,
      labelKey: 'contact.address',
      primary: null,
      secondaryKey: 'contact.addressLine2',
      href: 'https://maps.google.com/?q=General+Trias+City+Hall+Cavite',
      color: 'text-orange-700',
      bg: 'bg-orange-50',
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-gray-900">
            {t('contact.title')}
          </h2>
          <Link
            to="/government/departments"
            className="text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
          >
            {t('contact.viewAll')}
          </Link>
        </div>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CONTACTS.map(
            (
              { icon: Icon, labelKey, primary, secondaryKey, href, color, bg },
              idx
            ) => (
              <a
                key={labelKey}
                href={href}
                target={labelKey === 'contact.address' ? '_blank' : undefined}
                rel="noreferrer"
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.5s ease ${idx * 100}ms, transform 0.5s ease ${idx * 100}ms, box-shadow 0.2s, translate 0.2s`,
                }}
              >
                <div
                  className={`shrink-0 w-11 h-11 rounded-xl ${bg} ${color} flex items-center justify-center`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-0.5">
                    {t(labelKey)}
                  </p>
                  <p
                    className={`font-bold text-sm ${color} group-hover:underline`}
                  >
                    {labelKey === 'contact.address'
                      ? t('contact.addressLine1')
                      : primary}
                  </p>
                  <p className="text-xs text-gray-600 mt-0.5">
                    {t(secondaryKey)}
                  </p>
                </div>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
