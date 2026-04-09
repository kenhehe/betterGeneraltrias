import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const EVENT_KEYS = [
  'founded',
  'revolution',
  'independence',
  'renamed',
  'growth',
  'cityhood',
  'recognition',
] as const;

function TimelineItem({
  eventKey,
  index,
}: {
  eventKey: string;
  index: number;
}) {
  const { t } = useTranslation('common');
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const year = t(`history.events.${eventKey}.year`);
  const title = t(`history.events.${eventKey}.title`);
  const text = t(`history.events.${eventKey}.text`);

  return (
    <div
      ref={ref}
      className="relative flex gap-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`,
      }}
    >
      <div className="flex flex-col items-center shrink-0">
        <div className="w-3.5 h-3.5 rounded-full bg-primary-700 border-2 border-white ring-2 ring-primary-200 mt-1 shrink-0 z-10" />
        {index < EVENT_KEYS.length - 1 && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-primary-300 to-primary-100 mt-1" />
        )}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 mb-5 flex-1 hover:shadow-md transition-shadow">
        <span className="inline-block text-xs font-black text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full mb-2 border border-primary-100">
          {year}
        </span>
        <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

export default function HistorySection() {
  const { t } = useTranslation('common');

  return (
    <section className="bg-gray-50 py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-black text-gray-900 mb-8">
              {t('history.title')}
            </h2>
            <div className="pl-2">
              {EVENT_KEYS.map((key, i) => (
                <TimelineItem key={key} eventKey={key} index={i} />
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-col justify-center gap-4">
            <div className="bg-primary-700 rounded-2xl p-6 text-white">
              <div className="text-4xl font-black mb-2">2015</div>
              <div className="text-green-100 font-semibold text-lg mb-2">
                {t('history.charteredYear')}
              </div>
              <p className="text-green-200 text-sm leading-relaxed">
                {t('history.charteredDesc')}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-4xl font-black text-primary-700 mb-2">
                450K+
              </div>
              <div className="text-gray-800 font-semibold text-lg mb-2">
                {t('history.populationLabel')}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('history.populationDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
