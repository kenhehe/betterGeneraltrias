import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { ExternalLink, Building2, Heart, Users, GraduationCap, TrendingUp, Shield, TreePine, Mic } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Government', href: '/government' },
  { label: 'Reports & Statistics', href: '/government/reports-and-statistics' },
  { label: 'Annual Report', href: '/government/reports-and-statistics/annual-report' },
];

const PROGRAM_AREAS = [
  {
    icon: Building2,
    color: 'bg-slate-50 text-slate-700 border-slate-200',
    accent: 'bg-slate-600',
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
    color: 'bg-red-50 text-red-700 border-red-200',
    accent: 'bg-red-600',
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
    color: 'bg-pink-50 text-pink-700 border-pink-200',
    accent: 'bg-pink-600',
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
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    accent: 'bg-blue-600',
    title: 'Education (DepEd & SEF)',
    items: [
      'Scholarship recipients (city-funded)',
      'School buildings constructed or repaired (SEF-funded)',
      'Literacy programs',
    ],
  },
  {
    icon: TrendingUp,
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    accent: 'bg-indigo-600',
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
    color: 'bg-orange-50 text-orange-700 border-orange-200',
    accent: 'bg-orange-600',
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
    color: 'bg-green-50 text-green-700 border-green-200',
    accent: 'bg-green-600',
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

      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-1">Statistics · Reports</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Annual Accomplishment Report</h1>
          <p className="text-green-200 text-sm max-w-lg leading-relaxed">Programs, projects, and activities completed by the City Government of General Trias — showing how public funds were spent.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 32" fill="none" preserveAspectRatio="none"><path d="M0 32 C480 0 960 0 1440 32 L1440 32 L0 32Z" fill="#f9fafb" /></svg>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          <div className="mb-4">
            <h2 className="text-lg font-black text-gray-900 mb-1">Key Program Areas</h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {PROGRAM_AREAS.map(area => {
              const Icon = area.icon;
              return (
                <div key={area.title} className={`bg-white rounded-2xl border shadow-sm overflow-hidden ${area.color.split(' ')[2]}`}>
                  <div className={`h-1 ${area.accent}`} />
                  <div className="p-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${area.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-black text-gray-900 mb-3">{area.title}</h3>
                    <div className="space-y-1.5">
                      {area.items.map(item => (
                        <div key={item} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${area.accent}`} />
                          <span className="text-xs text-gray-600 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SOCA section */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-10">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                <Mic className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-gray-900">State of the City Address (SOCA)</h3>
                <p className="text-xs text-gray-400 mt-0.5">Delivered annually to the Sangguniang Panlungsod</p>
              </div>
            </div>
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
        </div>
      </div>
    </>
  );
}
