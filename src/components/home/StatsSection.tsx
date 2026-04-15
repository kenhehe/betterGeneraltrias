import { Users, MapPin, Building2, Map, ArrowRight, Wind, Droplets, Thermometer, CloudSun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';
import { useState, useEffect } from 'react';

function weatherLabel(code: number): string {
  if (code === 0) return 'Clear Sky';
  if (code <= 2) return 'Partly Cloudy';
  if (code === 3) return 'Overcast';
  if (code <= 49) return 'Foggy';
  if (code <= 59) return 'Drizzle';
  if (code <= 69) return 'Rain';
  if (code <= 84) return 'Rain Showers';
  if (code <= 99) return 'Thunderstorm';
  return 'Unknown';
}

function weatherEmoji(code: number): string {
  if (code === 0) return '☀️';
  if (code <= 2) return '⛅';
  if (code === 3) return '☁️';
  if (code <= 49) return '🌫️';
  if (code <= 69) return '🌧️';
  if (code <= 84) return '🌦️';
  return '⛈️';
}

export default function StatsSection() {
  const { t } = useTranslation('common');
  const { ref, inView } = useInView<HTMLDivElement>();
  const [weather, setWeather] = useState<{
    temp: number; humidity: number; wind: number; code: number;
  } | null>(null);

  useEffect(() => {
    const cached = localStorage.getItem('bt_weather_home');
    const cachedTime = localStorage.getItem('bt_weather_home_time');
    if (cached && cachedTime && Date.now() - parseInt(cachedTime) < 1_800_000) {
      setWeather(JSON.parse(cached));
      return;
    }
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=14.3875&longitude=120.8833&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=Asia%2FManila'
    )
      .then(r => r.json())
      .then(d => {
        const w = {
          temp: d.current.temperature_2m,
          humidity: d.current.relative_humidity_2m,
          wind: d.current.wind_speed_10m,
          code: d.current.weather_code,
        };
        localStorage.setItem('bt_weather_home', JSON.stringify(w));
        localStorage.setItem('bt_weather_home_time', String(Date.now()));
        setWeather(w);
      })
      .catch(() => {});
  }, []);

  const STATS = [
    { icon: Users,     value: '450,583', label: t('stats.population.label'),     description: t('stats.population.desc') },
    { icon: MapPin,    value: '33',       label: t('stats.barangays.label'),      description: t('stats.barangays.desc') },
    { icon: Building2, value: t('stats.classification.label'), label: '', description: t('stats.classification.desc') },
    { icon: Map,       value: '88.9',     label: t('stats.area.label'),           description: t('stats.area.desc') },
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Weather row — above the numbers */}
        <div className="mb-8">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 shrink-0">
                <CloudSun className="h-6 w-6 text-amber-300" />
                <div>
                  <p className="text-white font-black text-sm leading-none">Current Weather</p>
                  <p className="text-green-300 text-[10px] mt-0.5">General Trias City, Cavite · Live</p>
                </div>
              </div>
              {weather ? (
                <>
                  <div className="hidden sm:block w-px h-10 bg-white/20 shrink-0" />
                  <div className="flex items-center gap-2">
                    <span className="text-3xl leading-none">{weatherEmoji(weather.code)}</span>
                    <span className="text-3xl font-black text-white">{weather.temp}°C</span>
                    <span className="text-green-200 text-sm ml-1">{weatherLabel(weather.code)}</span>
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-white/20 shrink-0" />
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <Droplets className="h-4 w-4 text-blue-300" />
                      <span className="text-white text-sm font-bold">{weather.humidity}%</span>
                      <span className="text-green-300 text-xs">humidity</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Wind className="h-4 w-4 text-green-300" />
                      <span className="text-white text-sm font-bold">{weather.wind} km/h</span>
                      <span className="text-green-300 text-xs">wind</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Thermometer className="h-4 w-4 text-amber-300" />
                      <span className="text-green-300 text-xs">Tropical climate</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2 text-green-300 text-xs">
                  <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
                  Loading weather…
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Numbers */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 mb-6"
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
              <div className="text-3xl sm:text-4xl font-black text-white leading-none mb-1">{value}</div>
              {label && <div className="text-sm font-bold text-green-200 mb-1">{label}</div>}
              <div className="text-xs text-green-400 leading-relaxed">{description}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-4 pb-2 flex justify-center mb-8">
          <Link
            to="/government/reports-and-statistics/city-profile"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-green-300 hover:text-white transition-colors uppercase tracking-wide"
          >
            {t('stats.viewProfile')}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Map — very bottom */}
        <div className="rounded-2xl overflow-hidden border border-white/20">
          <div className="px-4 py-3 bg-white/10 border-b border-white/10 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-green-300" />
            <p className="text-white font-bold text-xs">General Trias City, Cavite</p>
            <span className="text-green-400 text-[10px] ml-1">· 88.9 km²</span>
          </div>
          <iframe
            title="General Trias City Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=120.8283%2C14.3375%2C120.9383%2C14.4375&layer=mapnik&marker=14.3875%2C120.8833"
            className="w-full border-0"
            style={{ height: '280px' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
