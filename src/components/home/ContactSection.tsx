import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
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
      primary: '(046) 884-5768',
      secondaryKey: 'contact.phoneHours',
      href: 'tel:0468845768',
    },
    {
      icon: Mail,
      labelKey: 'contact.email',
      primary: 'info@generaltrias.gov.ph',
      secondaryKey: 'contact.emailResponse',
      href: 'mailto:info@generaltrias.gov.ph',
    },
    {
      icon: MapPin,
      labelKey: 'contact.address',
      primary: null,
      secondaryKey: 'contact.addressLine2',
      href: 'https://maps.google.com/?q=General+Trias+City+Hall+Cavite',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)',
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/[0.03] pointer-events-none" />
      <div className="absolute -bottom-32 -left-16 w-72 h-72 rounded-full bg-white/[0.03] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1">
              Get In Touch
            </p>
            <h2 className="text-2xl font-black text-white">
              {t('contact.title')}
            </h2>
            <div className="mt-2 h-1 w-12 bg-green-400 rounded-full" />
          </div>
          <Link
            to="/government/departments"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-green-300 hover:text-white transition-colors"
          >
            {t('contact.viewAll')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CONTACTS.map(
            ({ icon: Icon, labelKey, primary, secondaryKey, href }, idx) => (
              <a
                key={labelKey}
                href={href}
                target={labelKey === 'contact.address' ? '_blank' : undefined}
                rel="noreferrer"
                className="group bg-white/8 border border-white/12 hover:bg-white/15 hover:border-white/25 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.5s ease ${idx * 100}ms, transform 0.5s ease ${idx * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Icon className="h-5 w-5 text-green-300" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-green-400 uppercase tracking-widest mb-1.5">
                    {t(labelKey)}
                  </p>
                  <p className="font-bold text-white text-sm group-hover:text-green-100 transition-colors">
                    {labelKey === 'contact.address'
                      ? t('contact.addressLine1')
                      : primary}
                  </p>
                  <p className="text-xs text-green-300/80 mt-1">
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
