import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Section from '../components/ui/Section';
import DisclaimerBar from '../components/ui/DisclaimerBar';
import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import {
  Users,
  MapPin,
  Building2,
  Map,
  Award,
  TrendingUp,
  Calendar,
  ExternalLink,
  BarChart2,
  Wind,
  Droplets,
  Thermometer,
  CloudSun,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Government', href: '/government' },
  { label: 'Reports & Statistics', href: '/government/reports-and-statistics' },
  { label: 'City Profile', href: '/government/reports-and-statistics/city-profile' },
];

const POPULATION_DATA = [
  { year: '2010', population: 248819 },
  { year: '2015', population: 336587 },
  { year: '2020', population: 450583 },
  { year: '2023*', population: 565587 },
];

const ECONOMY_DATA = [
  { name: 'Industry & Manufacturing', value: 42, color: '#16643c' },
  { name: 'Commerce & Services', value: 35, color: '#25a864' },
  { name: 'Real Estate', value: 15, color: '#72cc9d' },
  { name: 'Agriculture', value: 8, color: '#d0eeda' },
];

const AWARDS = [
  { year: '2024', title: 'Top 2 Performing Mayor in Cavite' },
  { year: '2023', title: 'Seal of Good Local Governance — DILG' },
  { year: '2023', title: 'Most Business-Friendly LGU — Phil. Chamber of Commerce' },
  { year: '2023', title: 'Good Financial Housekeeping Passer — DILG-R4A' },
  { year: '2023', title: 'Best City Fire Station — Bureau of Fire Protection' },
  { year: '2022', title: 'Green Banner Seal of Compliance — DOH' },
  { year: '2022', title: 'Platinum Awardee (98.20%) — Manila Bay Clean-up' },
];

const BARANGAYS = [
  'Alingaro', 'Arnaldo', 'Bacao I', 'Bacao II', 'Bagumbayan',
  'Biclatan', 'Buenavista I', 'Buenavista II', 'Buenavista III',
  'Corregidor', 'Dulongbayan', 'Governor Ferrer', 'Javalera',
  'Manggahan', 'Navarro', 'Panungyanan', '1896',
  'Pasong Camachile I', 'Pasong Camachile II', 'Pasong Kawayan I',
  'Pasong Kawayan II', 'Pinagtipunan', 'Prinza', 'Sampalucan',
  'San Francisco', 'San Gabriel', 'San Juan I', 'San Juan II',
  'Santa Clara', 'Santiago', 'Tapia', 'Tejero', 'Vibora',
];

const KEY_FACTS = [
  { icon: Users,     value: '450,583',        label: 'Population',      sub: '2020 PSA Census',           accent: 'from-blue-500 to-blue-400',    iconBg: 'bg-blue-50 text-blue-600' },
  { icon: TrendingUp,value: '7.87%',           label: 'Growth Rate',     sub: 'One of fastest-growing',    accent: 'from-emerald-500 to-green-400',iconBg: 'bg-emerald-50 text-emerald-700' },
  { icon: MapPin,    value: '33',              label: 'Barangays',       sub: 'Administrative divisions',  accent: 'from-violet-500 to-purple-400',iconBg: 'bg-violet-50 text-violet-600' },
  { icon: Map,       value: '88.9 km²',        label: 'Land Area',       sub: '8,890 hectares',            accent: 'from-teal-500 to-cyan-400',    iconBg: 'bg-teal-50 text-teal-700' },
  { icon: Building2, value: 'Component City',  label: 'Classification',  sub: 'Province of Cavite',        accent: 'from-indigo-500 to-blue-400',  iconBg: 'bg-indigo-50 text-indigo-600' },
  { icon: Calendar,  value: 'Dec 17, 2015',    label: 'Cityhood',        sub: 'R.A. 10675',                accent: 'from-amber-500 to-yellow-400', iconBg: 'bg-amber-50 text-amber-600' },
];

function weatherLabel(code: number): string {
  if (code === 0) return 'Clear Sky';
  if (code <= 2) return 'Partly Cloudy';
  if (code === 3) return 'Overcast';
  if (code <= 49) return 'Foggy';
  if (code <= 59) return 'Drizzle';
  if (code <= 69) return 'Rain';
  if (code <= 79) return 'Snow';
  if (code <= 84) return 'Rain Showers';
  if (code <= 99) return 'Thunderstorm';
  return 'Unknown';
}

function WeatherWidget() {
  const [weather, setWeather] = useState<{
    temp: number; humidity: number; wind: number; code: number;
  } | null>(null);

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=14.3875&longitude=120.8833&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=Asia%2FManila'
    )
      .then(r => r.json())
      .then(d => setWeather({
        temp: d.current.temperature_2m,
        humidity: d.current.relative_humidity_2m,
        wind: d.current.wind_speed_10m,
        code: d.current.weather_code,
      }))
      .catch(() => {});
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden shadow-sm border border-amber-100">
      <div className="bg-gradient-to-r from-amber-500 to-orange-400 px-5 py-4 flex items-center gap-2">
        <CloudSun className="h-5 w-5 text-white" />
        <div>
          <p className="text-white font-black text-sm leading-none">Current Weather</p>
          <p className="text-amber-100 text-[10px] mt-0.5">General Trias City, Cavite · Live</p>
        </div>
      </div>
      <div className="bg-white p-5">
        {weather ? (
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center bg-amber-50 border border-amber-100 rounded-xl p-3">
              <Thermometer className="h-5 w-5 text-amber-500 mb-1" />
              <span className="text-2xl font-black text-gray-900">{weather.temp}°C</span>
              <span className="text-[10px] text-gray-500 mt-0.5 text-center">{weatherLabel(weather.code)}</span>
            </div>
            <div className="flex flex-col items-center bg-blue-50 border border-blue-100 rounded-xl p-3">
              <Droplets className="h-5 w-5 text-blue-500 mb-1" />
              <span className="text-2xl font-black text-gray-900">{weather.humidity}%</span>
              <span className="text-[10px] text-gray-500 mt-0.5">Humidity</span>
            </div>
            <div className="flex flex-col items-center bg-green-50 border border-green-100 rounded-xl p-3">
              <Wind className="h-5 w-5 text-green-600 mb-1" />
              <span className="text-2xl font-black text-gray-900">{weather.wind}</span>
              <span className="text-[10px] text-gray-500 mt-0.5">km/h Wind</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-24">
            <div className="w-6 h-6 rounded-full border-2 border-amber-200 border-t-amber-500 animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function CityProfile() {
  return (
    <>
      <SEO
        title="City Profile & Statistics — General Trias City"
        description="Demographic data, population charts, barangay directory, economy breakdown, and awards for General Trias City, Cavite."
        keywords="General Trias City profile, population statistics, barangays, economy, Cavite"
      />

      {/* Hero */}
      <div
        className="relative text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center gap-2 mb-4 text-green-300 text-xs font-bold uppercase tracking-widest">
            <BarChart2 className="h-3.5 w-3.5" />
            Reports &amp; Statistics
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            City Profile &amp; Statistics
          </h1>
          <p className="text-green-100 text-base max-w-lg leading-relaxed mb-8">
            Demographic data, economic indicators, barangay directory, and
            recognition for General Trias City, Cavite — one of the
            fastest-growing cities in the Philippines.
          </p>
          <div className="flex flex-wrap gap-3">
            {[['450K+', 'Population'], ['33', 'Barangays'], ['88.9 km²', 'Land Area'], ['2015', 'Cityhood']].map(([val, lbl]) => (
              <div key={lbl} className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-lg px-3 py-2">
                <span className="text-sm font-black text-white">{val}</span>
                <span className="text-xs text-green-300 font-medium">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40Z" fill="#f9fafb" />
          </svg>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <Section className="py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          {/* Weather + Map — above the numbers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <WeatherWidget />
            {/* City Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-primary-100 flex flex-col">
              <div className="bg-gradient-to-r from-primary-700 to-primary-500 px-5 py-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-white" />
                <div>
                  <p className="text-white font-black text-sm leading-none">City Map</p>
                  <p className="text-green-200 text-[10px] mt-0.5">General Trias City · 88.9 km² · Cavite Province</p>
                </div>
              </div>
              <div className="flex-1 min-h-[200px]">
                <iframe
                  title="General Trias City Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=120.8283%2C14.3375%2C120.9383%2C14.4375&layer=mapnik&marker=14.3875%2C120.8833"
                  className="w-full h-full min-h-[200px] border-0"
                  loading="lazy"
                />
              </div>
              <div className="bg-white px-5 py-3 border-t border-gray-100">
                <a
                  href="https://www.openstreetmap.org/?mlat=14.3875&mlon=120.8833#map=13/14.3875/120.8833"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-800 transition-colors"
                >
                  <ExternalLink className="h-3 w-3" />
                  Open larger map
                </a>
              </div>
            </div>
          </div>

          {/* Key Facts Grid */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-black text-primary-600 uppercase tracking-widest bg-primary-50 border border-primary-100 px-3 py-1 rounded-full">Key Facts</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {KEY_FACTS.map(({ icon: Icon, value, label, sub, accent, iconBg }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <div className={`h-1 bg-gradient-to-r ${accent}`} />
                  <div className="p-5 flex flex-col gap-3">
                    <div className={`${iconBg} w-9 h-9 rounded-xl flex items-center justify-center`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-gray-900 leading-none mb-0.5">{value}</div>
                      <div className="text-xs font-bold text-gray-700 mb-0.5">{label}</div>
                      <div className="text-[10px] text-gray-400 leading-snug">{sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Population growth chart */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-4">
                <p className="text-white font-black text-sm">Population Growth</p>
                <p className="text-blue-200 text-[10px] mt-0.5">PSA Census + CLUP 2022–2030 projections (*estimated)</p>
              </div>
              <div className="bg-white p-5">
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={POPULATION_DATA} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f3f5" />
                    <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={v => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                    <Tooltip formatter={v => [Number(v).toLocaleString(), 'Population']} contentStyle={{ borderRadius: '12px', border: '1px solid #e9ecef', fontSize: 12 }} />
                    <Bar dataKey="population" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Economy pie chart */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-emerald-100">
              <div className="bg-gradient-to-r from-emerald-600 to-green-500 px-5 py-4">
                <p className="text-white font-black text-sm">Economic Sectors</p>
                <p className="text-green-200 text-[10px] mt-0.5">Approximate distribution based on CLUP 2022–2030 data</p>
              </div>
              <div className="bg-white p-5">
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={ECONOMY_DATA} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3} dataKey="value">
                      {ECONOMY_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend iconType="circle" iconSize={8} formatter={value => <span style={{ fontSize: 11, color: '#374151' }}>{value}</span>} />
                    <Tooltip formatter={v => [`${v}%`, 'Share']} contentStyle={{ borderRadius: '12px', border: '1px solid #e9ecef', fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Population trend line */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-teal-100 mb-10">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-500 px-5 py-4">
              <p className="text-white font-black text-sm">Population Trend (2010–2023)</p>
              <p className="text-teal-100 text-[10px] mt-0.5">7.87% annual growth rate — among the highest in the Philippines</p>
            </div>
            <div className="bg-white p-5">
              <ResponsiveContainer width="100%" height={160}>
                <LineChart data={POPULATION_DATA} margin={{ top: 0, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f3f5" />
                  <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                  <YAxis tickFormatter={v => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                  <Tooltip formatter={v => [Number(v).toLocaleString(), 'Population']} contentStyle={{ borderRadius: '12px', border: '1px solid #e9ecef', fontSize: 12 }} />
                  <Line type="monotone" dataKey="population" stroke="#0d9488" strokeWidth={3} dot={{ fill: '#0d9488', r: 5, strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 7 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Barangays + Awards row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {/* Barangays */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-violet-100">
              <div className="bg-gradient-to-r from-violet-600 to-purple-500 px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-black text-sm">33 Barangays</p>
                  <p className="text-violet-200 text-[10px] mt-0.5">Administrative divisions of General Trias City</p>
                </div>
                <span className="text-4xl font-black text-white/20">33</span>
              </div>
              <div className="bg-white p-5">
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {BARANGAYS.map((b, i) => (
                    <div key={b} className="flex items-center gap-2 py-1 border-b border-gray-50">
                      <span className="text-[10px] font-black text-violet-400 w-5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs text-gray-700">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-amber-100">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-400 px-5 py-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-white" />
                <div>
                  <p className="text-white font-black text-sm">Awards & Recognition</p>
                  <p className="text-amber-100 text-[10px] mt-0.5">Official recognitions and honors</p>
                </div>
              </div>
              <div className="bg-white p-5">
                <div className="space-y-3">
                  {AWARDS.map(award => (
                    <div key={award.title} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0">
                      <span className="shrink-0 text-[10px] font-black text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded-full">
                        {award.year}
                      </span>
                      <span className="text-sm text-gray-700 leading-snug">{award.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data sources + links */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Data Sources</p>
              <p className="text-sm text-gray-600">
                Philippine Statistics Authority (PSA) · DILG · CLUP 2022–2030 · Official General Trias City Website
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <a
                href="https://www.generaltrias.gov.ph"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-2 rounded-lg transition-colors"
              >
                <ExternalLink className="h-3 w-3" />Official Site
              </a>
              <Link
                to="/government/transparency-documents/downloads"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors"
              >
                Planning Docs
              </Link>
            </div>
          </div>
          <DisclaimerBar />
        </Section>
      </div>
    </>
  );
}
