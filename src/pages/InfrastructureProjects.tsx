import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { ExternalLink, CheckCircle, DollarSign, ClipboardList, AlertTriangle } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Statistics', href: '/government/reports-and-statistics' },
  { label: 'Infrastructure Projects', href: '/government/reports-and-statistics/infrastructure-projects' },
];

const FUNDING_SOURCES = [
  { source: '20% Development Fund (IRA)', types: 'Barangay roads, drainage, multi-purpose halls', color: 'border-l-4 border-green-500' },
  { source: 'DRRMF (5% of IRA)', types: 'Flood control, evacuation centers, early warning systems', color: 'border-l-4 border-orange-500' },
  { source: 'General Fund', types: 'City Hall facilities, public markets, parks', color: 'border-l-4 border-blue-500' },
  { source: 'DPWH (National)', types: 'National and provincial roads passing through the city', color: 'border-l-4 border-slate-500' },
  { source: 'SEF (Special Education Fund)', types: 'School buildings, classrooms, school facilities', color: 'border-l-4 border-violet-500' },
  { source: 'LGU Loans / Bonds', types: 'Major capital projects (subject to Sangguniang approval)', color: 'border-l-4 border-amber-500' },
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
  { channel: 'Office of the Mayor', contact: '(046) 888-9500' },
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

      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-1">Statistics · Infrastructure</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Infrastructure Projects</h1>
          <p className="text-green-200 text-sm max-w-lg leading-relaxed">Ongoing and completed infrastructure projects funded by the City Government of General Trias and national government sources.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 32" fill="none" preserveAspectRatio="none"><path d="M0 32 C480 0 960 0 1440 32 L1440 32 L0 32Z" fill="#f9fafb" /></svg>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          {/* Notable project */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-gray-900 mb-1 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" /> Notable Completed Projects
            </h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-green-600 to-green-400" />
              <div className="p-6 flex items-start gap-4">
                <div className="bg-green-100 text-green-700 rounded-xl p-2.5 shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-base font-black text-gray-900">General Trias City Velodrome</h3>
                    <span className="text-[10px] font-black text-green-700 bg-green-100 border border-green-200 px-2 py-0.5 rounded-full">Completed</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">A world-class, internationally-certified velodrome for competitive cycling, recognized for meeting international standards and contributing to youth sports development.</p>
                  <p className="text-xs text-gray-400">Funded by: City Government of General Trias</p>
                </div>
              </div>
            </div>
          </div>

          {/* Funding sources + Procurement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div>
              <h2 className="text-lg font-black text-gray-900 mb-1 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary-600" /> Funding Sources
              </h2>
              <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
              <div className="space-y-3">
                {FUNDING_SOURCES.map(f => (
                  <div key={f.source} className={`bg-white rounded-xl shadow-sm p-4 ${f.color}`}>
                    <div className="text-sm font-bold text-gray-800">{f.source}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{f.types}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-black text-gray-900 mb-1 flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-blue-500" /> Procurement Process
              </h2>
              <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
              <div className="space-y-2.5">
                {PROCUREMENT_STEPS.map((s, i) => (
                  <div key={s.step} className="bg-white rounded-xl shadow-sm p-3.5 flex items-start gap-3">
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
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-sm font-black text-gray-900 mb-1 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" /> Report a Concern
            </h3>
            <p className="text-xs text-gray-400 mb-4">To report issues with ongoing infrastructure projects (poor quality, corruption, delays)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {REPORT_CHANNELS.map(r => (
                <div key={r.channel} className="border border-gray-100 rounded-xl p-3">
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
      </div>
    </>
  );
}
