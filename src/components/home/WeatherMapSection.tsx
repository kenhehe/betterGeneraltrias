import { useState, useEffect } from 'react';
import { Wind, Droplets, Thermometer, Cloud } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';

interface WeatherData {
  temp: number;
  windspeed: number;
  weathercode: number;
}

function getWeatherLabel(code: number, t: (k: string) => string): string {
  if (code === 0) return t('weatherMap.clear') || 'Clear sky';
  if (code <= 3) return t('weatherMap.partlyCloudy') || 'Partly cloudy';
  if (code <= 48) return t('weatherMap.foggy') || 'Foggy';
  if (code <= 67) return t('weatherMap.rainy') || 'Rainy';
  if (code <= 82) return t('weatherMap.showers') || 'Showers';
  if (code <= 99) return t('weatherMap.thunderstorm') || 'Thunderstorm';
  return t('weatherMap.defaultCondition');
}

export default function WeatherMapSection() {
  const { t } = useTranslation('common');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const { ref, inView } = useInView<HTMLDivElement>();

  useEffect(() => {
    const cached = localStorage.getItem('bt_weather_full');
    const cachedTime = localStorage.getItem('bt_weather_full_time');
    const THIRTY_MIN = 1_800_000;

    if (
      cached &&
      cachedTime &&
      Date.now() - parseInt(cachedTime) < THIRTY_MIN
    ) {
      setWeather(JSON.parse(cached));
      return;
    }

    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=14.1153&longitude=120.9621&current_weather=true&timezone=Asia%2FManila'
    )
      .then(r => r.json())
      .then(data => {
        if (data?.current_weather) {
          const w: WeatherData = {
            temp: Math.round(data.current_weather.temperature),
            windspeed: Math.round(data.current_weather.windspeed),
            weathercode: data.current_weather.weathercode,
          };
          localStorage.setItem('bt_weather_full', JSON.stringify(w));
          localStorage.setItem('bt_weather_full_time', String(Date.now()));
          setWeather(w);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="bg-gray-50 py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-black text-gray-900 mb-6">
          {t('weatherMap.title')}
        </h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Weather widget */}
          <div
            className="bg-primary-700 rounded-2xl p-6 text-white flex flex-col justify-between min-h-[220px]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-32px)',
              transition: 'opacity 0.6s ease 0ms, transform 0.6s ease 0ms',
            }}
          >
            <div>
              <p className="text-blue-200 text-sm font-semibold mb-1">
                {t('weatherMap.location')}
              </p>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-6xl font-black leading-none">
                  {weather ? `${weather.temp}°` : '22°'}
                </span>
                <span className="text-2xl font-semibold text-blue-200 pb-1">
                  C
                </span>
              </div>
              <p className="text-blue-100 text-base font-medium">
                {weather
                  ? getWeatherLabel(weather.weathercode, t)
                  : t('weatherMap.defaultCondition')}
              </p>
            </div>
            <div className="flex gap-6 mt-6 pt-4 border-t border-white/20">
              <span className="flex items-center gap-1.5 text-sm text-blue-100">
                <Wind className="h-4 w-4 opacity-70" />
                {weather
                  ? `${weather.windspeed} ${t('weatherMap.wind')}`
                  : `-- ${t('weatherMap.wind')}`}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-blue-100">
                <Thermometer className="h-4 w-4 opacity-70" />
                {t('weatherMap.climate')}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-blue-100">
                <Droplets className="h-4 w-4 opacity-70" />
                {t('weatherMap.elevation')}
              </span>
            </div>
            {!weather && (
              <div className="mt-3 flex items-center gap-2 text-blue-200 text-xs">
                <Cloud className="h-3.5 w-3.5 animate-pulse" />
                {t('weatherMap.loading')}
              </div>
            )}
          </div>

          {/* OpenStreetMap */}
          <div
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm min-h-[220px]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(32px)',
              transition: 'opacity 0.6s ease 150ms, transform 0.6s ease 150ms',
            }}
          >
            <iframe
              title={t('weatherMap.mapTitle')}
              src="https://www.openstreetmap.org/export/embed.html?bbox=120.9221%2C14.0853%2C121.0021%2C14.1453&layer=mapnik&marker=14.1153%2C120.9621"
              className="w-full h-full min-h-[220px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
