import { useState, useEffect } from 'react';
import { Wind, Droplets, Thermometer, Cloud, MapPin } from 'lucide-react';
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

function getWeatherEmoji(code: number): string {
  if (code === 0) return '☀️';
  if (code <= 3) return '⛅';
  if (code <= 48) return '🌫️';
  if (code <= 67) return '🌧️';
  if (code <= 82) return '🌦️';
  return '⛈️';
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
      'https://api.open-meteo.com/v1/forecast?latitude=14.3833&longitude=120.8833&current_weather=true&timezone=Asia%2FManila'
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
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
              Live Data
            </p>
            <h2 className="text-2xl font-black text-gray-900">
              {t('weatherMap.title')}
            </h2>
            <div className="mt-2 h-1 w-12 bg-primary-600 rounded-full" />
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Weather widget */}
          <div
            className="rounded-2xl overflow-hidden shadow-sm"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 0.6s ease 0ms, transform 0.6s ease 0ms',
            }}
          >
            <div
              className="p-6 text-white"
              style={{
                background: 'linear-gradient(135deg, #0f4328 0%, #16643c 100%)',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-3.5 w-3.5 text-green-300" />
                    <span className="text-xs font-bold text-green-300 uppercase tracking-wide">
                      {t('weatherMap.location')}
                    </span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-7xl font-black leading-none">
                      {weather ? `${weather.temp}°` : '--°'}
                    </span>
                    <span className="text-2xl font-semibold text-green-200 pb-2">
                      C
                    </span>
                  </div>
                </div>
                <div className="text-5xl select-none">
                  {weather ? getWeatherEmoji(weather.weathercode) : '🌡️'}
                </div>
              </div>
              <p className="text-green-100 font-semibold text-base mb-4">
                {weather
                  ? getWeatherLabel(weather.weathercode, t)
                  : t('weatherMap.defaultCondition')}
              </p>
            </div>
            <div
              className="grid grid-cols-3 divide-x divide-white/10"
              style={{ background: '#082214' }}
            >
              <div className="flex flex-col items-center gap-1 py-3">
                <Wind className="h-4 w-4 text-green-400 opacity-80" />
                <span className="text-xs font-bold text-white">
                  {weather ? `${weather.windspeed}` : '--'}
                </span>
                <span className="text-[10px] text-green-400">
                  {t('weatherMap.wind')}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 py-3">
                <Thermometer className="h-4 w-4 text-green-400 opacity-80" />
                <span className="text-xs font-bold text-white">Tropical</span>
                <span className="text-[10px] text-green-400">
                  {t('weatherMap.climate')}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 py-3">
                <Droplets className="h-4 w-4 text-green-400 opacity-80" />
                <span className="text-xs font-bold text-white">Humid</span>
                <span className="text-[10px] text-green-400">
                  {t('weatherMap.elevation')}
                </span>
              </div>
            </div>
            {!weather && (
              <div className="bg-primary-900 px-4 py-2 flex items-center gap-2 text-green-300 text-xs">
                <Cloud className="h-3.5 w-3.5 animate-pulse" />
                {t('weatherMap.loading')}
              </div>
            )}
          </div>

          {/* OpenStreetMap */}
          <div
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm min-h-[280px]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 0.6s ease 150ms, transform 0.6s ease 150ms',
            }}
          >
            <iframe
              title={t('weatherMap.mapTitle')}
              src="https://www.openstreetmap.org/export/embed.html?bbox=120.8333%2C14.3333%2C120.9333%2C14.4333&layer=mapnik&marker=14.3833%2C120.8833"
              className="w-full h-full min-h-[280px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
