import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Section from '../components/ui/Section';
import DisclaimerBar from '../components/ui/DisclaimerBar';
import { ExternalLink, Building2, Heart, Users, GraduationCap, TrendingUp, Shield, TreePine, Mic, ClipboardList } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Government', href: '/government' },
  { label: 'Reports & Statistics', href: '/government/reports-and-statistics' },
  { label: 'Annual Report', href: '/government/reports-and-statistics/annual-report' },
];

const PROGRAM_AREAS = [
  {
    icon: Building2,
    accent: 'from-slate-600 to-gray-700',
    emoji: '🏗️',
    category: 'Infrastructure',
    title: 'Infrastructure & Public Works',
    items: [
      'Road construction, rehabilitation, and concreting (barangay and city roads)',
      'Drainage and flood control improvements',
      'Public market upgrades',
      'City Hall and public building improvements',
      'Sports and recreational facilities (e.g., General Trias City Velodrome)',
    ],
  },
  {
    icon: Heart,
    accent: 'from-red-500 to-rose-600',
    emoji: '🏥',
    category: 'Health',
    title: 'Health Services',
    items: [
      'Patients served at Ospital ng General Trias and City Health Office',
      'Vaccination and immunization coverage',
      'Maternal and child health program outcomes',
      'Medical missions and outreach activities',
    ],
  },
  {
    icon: Users,
    accent: 'from-pink-500 to-rose-700',
    emoji: '🤝',
    category: 'Social Welfare',
    title: 'Social Welfare (CSWDO)',
    items: [
      'Senior citizen benefits distributed',
      'PWD assistance provided',
      'Solo parent support',
      '4Ps (Pantawid Pamilyang Pilipino Program) updates',
      'Emergency assistance (food packs, cash aid)',
    ],
  },
  {
    icon: GraduationCap,
    accent: 'from-blue-600 to-indigo-700',
    emoji: '🎓',
    category: 'Education',
    title: 'Education (DepEd & SEF)',
    items: [
      'Scholarship recipients (city-funded)',
      'School buildings constructed or repaired (SEF-funded)',
      'Literacy programs',
    ],
  },
  {
    icon: TrendingUp,
    accent: 'from-indigo-600 to-violet-700',
    emoji: '📈',
    category: 'Economy',
    title: 'Economic Development',
    items: [
      'Business permit data (new and renewed)',
      'Ease of Doing Business improvements',
      'Livelihood training and assistance',
      'Tourism arrivals and revenue (if published)',
    ],
  },
  {
    icon: Shield,
    accent: 'from-orange-500 to-amber-600',
    emoji: '🛡️',
    category: 'DRRM',
    title: 'Disaster Risk Reduction (CDRRMO)',
    items: [
      'Incidents responded to',
      'Evacuations conducted',
      'Early warning activities',
      'DRRM Fund utilization',
    ],
  },
  {
    icon: TreePine,
    accent: 'from-green-600 to-emerald-700',
    emoji: '🌳',
    category: 'Environment',
    title: 'Environment (CENRO)',
    items: [
      'Tree planting activities',
      'Solid waste management metrics',
      'Environmental enforcement actions',
    ],
  },
];

export default function AnnualReport() {
  return (
    <>
      <SEO
        title="Annual Accomplishment Report — General Trias City"
        description="Annual programs, projects, and activities completed by General Trias City government — accountability and performance report."
      />

      {/* Hero */}
      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center gap-2 mb-4 text-green-300 text-xs font-bold uppercase tracking-widest">
            <ClipboardList className="h-3.5 w-3.5" />
            Reports &amp; Statistics
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            Annual Accomplishment Report
          </h1>
          <p className="text-green-100 text-base max-w-lg leading-relaxed mb-8">
            Programs, projects, and activities completed by the City Government of General Trias — showing how public funds were spent.
          </p>
          <div className="flex flex-wrap gap-3">
            {[['7', 'Program Areas'], ['Annual', 'Report Cycle'], ['Public', 'Access'], ['SOCA', 'Key Summary']].map(([val, lbl]) => (
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

          <div className="mb-6">
            <h2 className="text-lg font-black text-gray-900 mb-1">Key Program Areas</h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {PROGRAM_AREAS.map(area => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`bg-gradient-to-r ${area.accent} p-5 flex items-start justify-between`}>
                    <div>
                      <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                        <Icon className="h-3 w-3" />
                        {area.category}
                      </span>
                      <h3 className="text-white font-black text-base leading-tight">{area.title}</h3>
                    </div>
                    <span className="text-3xl ml-3 shrink-0 select-none">{area.emoji}</span>
                  </div>
                  <div className="p-5 space-y-1.5">
                    {area.items.map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-primary-500" />
                        <span className="text-xs text-gray-600 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* SOCA section */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-10">
            <div className="bg-gradient-to-r from-primary-700 to-primary-500 p-5 flex items-start justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                  <Mic className="h-3 w-3" />
                  Annual Address
                </span>
                <h3 className="text-white font-black text-lg">State of the City Address (SOCA)</h3>
              </div>
              <span className="text-4xl ml-4 shrink-0">🎤</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4">The Mayor delivers an annual SOCA as a public summary of the city government's accomplishments and plans. Transcripts and videos are available on the official city platforms.</p>
              <div className="flex flex-wrap gap-2">
                <a href="https://www.generaltrias.gov.ph" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-2 rounded-lg transition-colors">
                  <ExternalLink className="h-3 w-3" />Official Website
                </a>
                <a href="https://fdpp.blgs.gov.ph" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors">
                  <ExternalLink className="h-3 w-3" />DILG FDP Portal
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Office of the City Administrator</p>
              <p className="text-sm text-gray-600">General Trias City Hall · Akle St., Kaybagal South · (046) 888-9500</p>
            </div>
            <a href="https://www.generaltrias.gov.ph" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-4 py-2.5 rounded-lg transition-colors shrink-0">
              <ExternalLink className="h-3 w-3" />Official Site
            </a>
          </div>
          <DisclaimerBar />
        </Section>
      </div>
    </>
  );
}
