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
      { threshold: 0.15 }
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
      className="relative flex gap-5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-16px)',
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`,
      }}
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-4 h-4 rounded-full bg-primary-600 border-2 border-white ring-2 ring-primary-200 mt-0.5 shrink-0 z-10" />
        {index < EVENT_KEYS.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-primary-200 to-primary-50 mt-1" />
        )}
      </div>

      <div className="pb-6 flex-1">
        <div className="inline-block text-xs font-black text-primary-700 bg-primary-50 border border-primary-100 px-2.5 py-0.5 rounded-full mb-2">
          {year}
        </div>
        <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

export default function HistorySection() {
  const { t } = useTranslation('common');

  return (
    <section className="bg-white py-14 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Timeline — takes 3 columns */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
              Our Story
            </p>
            <h2 className="text-2xl font-black text-gray-900 mb-2">
              {t('history.title')}
            </h2>
            <div className="h-1 w-12 bg-primary-600 rounded-full mb-8" />
            <div className="pl-1">
              {EVENT_KEYS.map((key, i) => (
                <TimelineItem key={key} eventKey={key} index={i} />
              ))}
            </div>
          </div>

          {/* Highlight cards — takes 2 columns */}
          <div className="hidden lg:flex lg:col-span-2 flex-col justify-center gap-4">
            <div
              className="rounded-2xl p-7 text-white relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #082214 0%, #16643c 100%)',
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,255,255,0.8), transparent)',
                  transform: 'translate(30%, -30%)',
                }}
              />
              <div className="text-5xl font-black mb-2 tracking-tight">
                2015
              </div>
              <div className="text-green-200 font-bold text-lg mb-2">
                {t('history.charteredYear')}
              </div>
              <p className="text-green-300 text-sm leading-relaxed">
                {t('history.charteredDesc')}
              </p>
            </div>

            <div className="rounded-2xl p-7 bg-gray-50 border border-gray-100">
              <div className="text-5xl font-black text-primary-700 mb-2 tracking-tight">
                450K+
              </div>
              <div className="text-gray-900 font-bold text-lg mb-2">
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
