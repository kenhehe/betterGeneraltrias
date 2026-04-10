import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Section from '../components/ui/Section';
import { ExternalLink, CheckCircle, DollarSign, ClipboardList, AlertTriangle, Construction } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Government', href: '/government' },
  { label: 'Reports & Statistics', href: '/government/reports-and-statistics' },
  { label: 'Infrastructure Projects', href: '/government/reports-and-statistics/infrastructure-projects' },
];

const FUNDING_SOURCES = [
  { source: '20% Development Fund (IRA)', types: 'Barangay roads, drainage, multi-purpose halls', accent: 'from-green-600 to-emerald-700', emoji: '🏗️' },
  { source: 'DRRMF (5% of IRA)', types: 'Flood control, evacuation centers, early warning systems', accent: 'from-orange-500 to-amber-600', emoji: '🌊' },
  { source: 'General Fund', types: 'City Hall facilities, public markets, parks', accent: 'from-blue-600 to-indigo-700', emoji: '🏛️' },
  { source: 'DPWH (National)', types: 'National and provincial roads passing through the city', accent: 'from-slate-600 to-gray-700', emoji: '🛣️' },
  { source: 'SEF (Special Education Fund)', types: 'School buildings, classrooms, school facilities', accent: 'from-violet-600 to-purple-700', emoji: '🏫' },
  { source: 'LGU Loans / Bonds', types: 'Major capital projects (subject to Sangguniang approval)', accent: 'from-amber-500 to-yellow-600', emoji: '🏦' },
];

const PROCUREMENT_STEPS = [
  { step: 'Project Identification', desc: 'BAC prepares Annual Procurement Plan (APP)' },
  { step: 'Advertisement', desc: 'Posted on PhilGEPS, city bulletin boards, and official website' },
  { step: 'Pre-bid Conference', desc: 'Open to all prospective bidders' },
  { step: 'Bid Submission & Opening', desc: 'Public opening; results posted on FDP Portal' },
  { step: 'Contract Award', desc: 'Winning bidder notified; contract posted publicly' },
  { step: 'Implementation', desc: 'Regular inspection by City Engineering Office' },
  { step: 'Completion & Turnover', desc: 'Documented and reported in Annual Accomplishment Report' },
];

const PORTALS = [
  { label: 'DILG FDP Portal', href: 'https://fdpp.blgs.gov.ph', desc: 'Bid results & contract awards' },
  { label: 'PhilGEPS', href: 'https://www.philgeps.gov.ph', desc: 'Government procurement system' },
  { label: 'Official City Website', href: 'https://www.generaltrias.gov.ph', desc: 'Project announcements' },
];

const REPORT_CHANNELS = [
  { channel: 'Office of the Mayor', contact: '(046) 888-9500', href: undefined },
  { channel: 'Commission on Audit (COA) — Cavite', contact: 'www.coa.gov.ph', href: 'https://www.coa.gov.ph' },
  { channel: 'DILG Region IV-A', contact: 'ro4a.dilg.gov.ph', href: 'https://ro4a.dilg.gov.ph' },
  { channel: 'Ombudsman', contact: 'www.ombudsman.gov.ph', href: 'https://www.ombudsman.gov.ph' },
  { channel: 'FOI Portal', contact: 'www.foi.gov.ph', href: 'https://www.foi.gov.ph' },
];

export default function InfrastructureProjects() {
  return (
    <>
      <SEO
        title="Infrastructure Projects — General Trias City"
        description="Ongoing and completed infrastructure projects of General Trias City, funding sources, procurement process, and how to check project status."
      />

      {/* Hero */}
      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center gap-2 mb-4 text-green-300 text-xs font-bold uppercase tracking-widest">
            <Construction className="h-3.5 w-3.5" />
            Reports &amp; Statistics · Infrastructure
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            Infrastructure Projects
          </h1>
          <p className="text-green-100 text-base max-w-lg leading-relaxed mb-8">
            Ongoing and completed infrastructure projects funded by the City Government of General Trias and national government sources.
          </p>
          <div className="flex flex-wrap gap-3">
            {[['6', 'Funding Sources'], ['7 Steps', 'Procurement Process'], ['Public', 'Bidding'], ['PhilGEPS', 'Official Record']].map(([val, lbl]) => (
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

          {/* Notable project */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h2 className="text-lg font-black text-gray-900">Notable Completed Projects</h2>
            </div>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-5 flex items-start justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                    <CheckCircle className="h-3 w-3" />
                    Completed
                  </span>
                  <h3 className="text-white font-black text-lg leading-tight">General Trias City Velodrome</h3>
                </div>
                <span className="text-4xl ml-4 shrink-0">🚴</span>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-600 mb-2">A world-class, internationally-certified velodrome for competitive cycling, recognized for meeting international standards and contributing to youth sports development.</p>
                <p className="text-xs text-gray-400">Funded by: City Government of General Trias</p>
              </div>
            </div>
          </div>

          {/* Funding sources + Procurement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="h-5 w-5 text-primary-600" />
                <h2 className="text-lg font-black text-gray-900">Funding Sources</h2>
              </div>
              <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
              <div className="grid grid-cols-1 gap-3">
                {FUNDING_SOURCES.map(f => (
                  <div key={f.source} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className={`bg-gradient-to-r ${f.accent} px-4 py-2.5 flex items-center justify-between`}>
                      <span className="text-white font-black text-sm">{f.source}</span>
                      <span className="text-xl shrink-0 ml-2">{f.emoji}</span>
                    </div>
                    <div className="px-4 py-2.5">
                      <span className="text-xs text-gray-500">{f.types}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <ClipboardList className="h-5 w-5 text-blue-500" />
                <h2 className="text-lg font-black text-gray-900">Procurement Process</h2>
              </div>
              <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
              <div className="space-y-2.5">
                {PROCUREMENT_STEPS.map((s, i) => (
                  <div key={s.step} className="bg-white rounded-xl shadow-sm p-3.5 flex items-start gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all">
                    <span className="w-6 h-6 rounded-full bg-primary-600 text-white text-xs font-black flex items-center justify-center shrink-0">{i + 1}</span>
                    <div>
                      <div className="text-sm font-bold text-gray-800">{s.step}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Where to check status */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-gray-900 mb-1">Check Project Status</h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PORTALS.map(p => (
                <a key={p.label} href={p.href} target="_blank" rel="noreferrer"
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-sm font-bold text-primary-700">{p.label}</span>
                    <ExternalLink className="h-3 w-3 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-gray-400">{p.desc}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Report a concern */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="bg-gradient-to-r from-red-500 to-rose-600 p-5 flex items-start justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                  <AlertTriangle className="h-3 w-3" />
                  Accountability
                </span>
                <h3 className="text-white font-black text-lg">Report a Concern</h3>
              </div>
              <span className="text-4xl ml-4 shrink-0">⚠️</span>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-500 mb-4">To report issues with ongoing infrastructure projects (poor quality, corruption, delays)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {REPORT_CHANNELS.map(r => (
                  <div key={r.channel} className="border border-gray-100 rounded-xl p-3 hover:border-primary-200 hover:bg-primary-50 transition-colors">
                    <div className="text-xs font-bold text-gray-700 mb-0.5">{r.channel}</div>
                    {r.href ? (
                      <a href={r.href} target="_blank" rel="noreferrer" className="text-xs text-primary-600 hover:underline">{r.contact}</a>
                    ) : (
                      <span className="text-xs text-gray-500">{r.contact}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
