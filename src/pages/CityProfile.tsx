import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Section from '../components/ui/Section';
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
} from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Government', href: '/government' },
  { label: 'Reports & Statistics', href: '/government/reports-and-statistics' },
  {
    label: 'City Profile',
    href: '/government/reports-and-statistics/city-profile',
  },
];

// Population data from PSA + CLUP projections
const POPULATION_DATA = [
  { year: '2010', population: 248819 },
  { year: '2015', population: 336587 },
  { year: '2020', population: 450583 },
  { year: '2023*', population: 565587 },
];

// Economy sector breakdown (illustrative based on CLUP)
const ECONOMY_DATA = [
  { name: 'Industry & Manufacturing', value: 42, color: '#16643c' },
  { name: 'Commerce & Services', value: 35, color: '#25a864' },
  { name: 'Real Estate', value: 15, color: '#72cc9d' },
  { name: 'Agriculture', value: 8, color: '#d0eeda' },
];

// Awards
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
  { icon: Users, value: '450,583', label: 'Population (2020 Census)', sub: 'Projected 565,587 by 2023' },
  { icon: TrendingUp, value: '7.87%', label: 'Annual Growth Rate', sub: 'One of fastest-growing in PH' },
  { icon: MapPin, value: '33', label: 'Barangays', sub: 'Administrative divisions' },
  { icon: Map, value: '8,890 ha', label: 'Land Area', sub: '~88.9 km²' },
  { icon: Building2, value: 'Component City', label: 'Classification', sub: 'Province of Cavite' },
  { icon: Calendar, value: 'Dec 17, 2015', label: 'Cityhood', sub: 'R.A. 10675' },
];

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
        style={{
          background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)',
        }}
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

          {/* Key Facts Grid */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-gray-900 mb-1">Key Facts</h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {KEY_FACTS.map(({ icon: Icon, value, label, sub }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-start gap-3 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="bg-primary-50 text-primary-700 w-9 h-9 rounded-xl flex items-center justify-center">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-gray-900 leading-none mb-0.5">
                      {value}
                    </div>
                    <div className="text-xs font-bold text-gray-700 mb-0.5">
                      {label}
                    </div>
                    <div className="text-[10px] text-gray-400 leading-snug">
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {/* Population growth chart */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-base font-black text-gray-900 mb-1">
                Population Growth
              </h3>
              <p className="text-xs text-gray-400 mb-5">
                PSA Census data + CLUP 2022–2030 projections (*estimated)
              </p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart
                  data={POPULATION_DATA}
                  margin={{ top: 0, right: 0, left: -10, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f3f5" />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tickFormatter={v => `${(v / 1000).toFixed(0)}K`}
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    formatter={v => [Number(v).toLocaleString(), 'Population']}
                    contentStyle={{
                      borderRadius: '12px',
                      border: '1px solid #e9ecef',
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="population" fill="#16643c" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Economy pie chart */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-base font-black text-gray-900 mb-1">
                Economic Sectors
              </h3>
              <p className="text-xs text-gray-400 mb-5">
                Approximate distribution based on CLUP 2022–2030 data
              </p>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={ECONOMY_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {ECONOMY_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend
                    iconType="circle"
                    iconSize={8}
                    formatter={value => (
                      <span style={{ fontSize: 11, color: '#374151' }}>
                        {value}
                      </span>
                    )}
                  />
                  <Tooltip
                    formatter={v => [`${v}%`, 'Share']}
                    contentStyle={{
                      borderRadius: '12px',
                      border: '1px solid #e9ecef',
                      fontSize: 12,
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Population trend line */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-10">
            <h3 className="text-base font-black text-gray-900 mb-1">
              Population Trend (2010–2023)
            </h3>
            <p className="text-xs text-gray-400 mb-5">
              7.87% annual growth rate — among the highest in the Philippines
            </p>
            <ResponsiveContainer width="100%" height={160}>
              <LineChart
                data={POPULATION_DATA}
                margin={{ top: 0, right: 20, left: -10, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f3f5" />
                <XAxis
                  dataKey="year"
                  tick={{ fontSize: 11, fill: '#6b7280' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={v => `${(v / 1000).toFixed(0)}K`}
                  tick={{ fontSize: 11, fill: '#6b7280' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  formatter={v => [Number(v).toLocaleString(), 'Population']}
                  contentStyle={{
                    borderRadius: '12px',
                    border: '1px solid #e9ecef',
                    fontSize: 12,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="population"
                  stroke="#16643c"
                  strokeWidth={3}
                  dot={{ fill: '#16643c', r: 5, strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Barangays + Awards row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {/* Barangays */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-black text-gray-900">
                    33 Barangays
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Administrative divisions of General Trias City
                  </p>
                </div>
                <span className="text-3xl font-black text-primary-100">33</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {BARANGAYS.map((b, i) => (
                  <div
                    key={b}
                    className="flex items-center gap-2 py-1 border-b border-gray-50"
                  >
                    <span className="text-[10px] font-black text-primary-400 w-5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs text-gray-700">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-amber-500" />
                <h3 className="text-base font-black text-gray-900">
                  Awards & Recognition
                </h3>
              </div>
              <div className="space-y-3">
                {AWARDS.map(award => (
                  <div
                    key={award.title}
                    className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0"
                  >
                    <span className="shrink-0 text-[10px] font-black text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded-full">
                      {award.year}
                    </span>
                    <span className="text-sm text-gray-700 leading-snug">
                      {award.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data sources + links */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                Data Sources
              </p>
              <p className="text-sm text-gray-600">
                Philippine Statistics Authority (PSA) · DILG · CLUP 2022–2030 ·
                Official General Trias City Website
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <a
                href="https://www.generaltrias.gov.ph"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-2 rounded-lg transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                Official Site
              </a>
              <Link
                to="/government/transparency-documents/downloads"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors"
              >
                Planning Docs
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
