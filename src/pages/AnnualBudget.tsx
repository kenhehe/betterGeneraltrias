import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { ExternalLink, DollarSign, ArrowRight, Calendar } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Transparency', href: '/government/transparency-documents' },
  { label: 'Annual Budget', href: '/government/transparency-documents/annual-budget' },
];

const SOURCES = [
  { name: 'Internal Revenue Allotment (IRA)', desc: 'Share of national taxes — primary funding source for most LGUs', color: 'bg-green-50 border-green-200 text-green-800' },
  { name: 'Local Taxes', desc: 'Business taxes, real property tax, fees and charges', color: 'bg-blue-50 border-blue-200 text-blue-800' },
  { name: 'Non-Tax Revenue', desc: 'Permits, licenses, market fees, utility income', color: 'bg-violet-50 border-violet-200 text-violet-800' },
  { name: 'Grants & Subsidies', desc: 'National government grants, foreign-assisted projects', color: 'bg-amber-50 border-amber-200 text-amber-800' },
];

const ALLOCATIONS = [
  { type: 'General Public Services', desc: 'City administration, legislative, finance, legal' },
  { type: 'Health Services', desc: 'City Health Office, Ospital ng General Trias operations' },
  { type: 'Education', desc: 'Special Education Fund (SEF), scholarship programs' },
  { type: 'Social Services', desc: 'CSWDO programs for seniors, PWDs, indigent families' },
  { type: 'Economic Services', desc: 'Agriculture, business development, tourism' },
  { type: 'Infrastructure', desc: 'Roads, drainage, public facilities, DPWH-assisted projects' },
  { type: 'Debt Service', desc: 'Loan repayments (if any)' },
  { type: '20% Development Fund', desc: 'Mandatory development projects from IRA' },
  { type: '5% DRRMF', desc: 'Disaster Risk Reduction and Management Fund' },
  { type: '1% GAD Fund', desc: 'Gender and Development programs' },
];

const CYCLE = [
  { step: 'Executive prepares budget proposal', timeline: 'July – August' },
  { step: 'Mayor submits to Sangguniang Panlungsod', timeline: 'On or before Oct 16' },
  { step: 'Sangguniang Panlungsod deliberates', timeline: 'October – November' },
  { step: 'Budget enacted (Appropriations Ordinance)', timeline: 'On or before Dec 31' },
  { step: 'Budget takes effect', timeline: 'January 1 (following year)' },
];

export default function AnnualBudget() {
  return (
    <>
      <SEO
        title="Annual Budget — General Trias City"
        description="General Trias City annual appropriations ordinance, budget sources, allocation breakdown, and budget cycle."
      />

      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-1">Transparency · Budget</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Annual Budget</h1>
          <p className="text-green-200 text-sm max-w-lg leading-relaxed">The city's annual spending plan enacted by the Sangguniang Panlungsod and signed by the Mayor.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 32" fill="none" preserveAspectRatio="none"><path d="M0 32 C480 0 960 0 1440 32 L1440 32 L0 32Z" fill="#f9fafb" /></svg>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          {/* Budget Sources */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-gray-900 mb-1 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" /> Budget Sources
            </h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SOURCES.map(s => (
                <div key={s.name} className={`rounded-xl border p-4 ${s.color}`}>
                  <div className="text-sm font-black mb-1">{s.name}</div>
                  <div className="text-xs opacity-70 leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Allocation */}
          <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-black text-gray-900 mb-1">Budget Allocation</h2>
              <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {ALLOCATIONS.map((a, i) => (
                  <div key={a.type} className={`px-5 py-3.5 ${i < ALLOCATIONS.length - 1 ? 'border-b border-gray-50' : ''}`}>
                    <div className="text-sm font-bold text-gray-900">{a.type}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{a.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Cycle */}
            <div>
              <h2 className="text-lg font-black text-gray-900 mb-1 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary-600" /> Budget Cycle
              </h2>
              <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
              <div className="space-y-3">
                {CYCLE.map((c, i) => (
                  <div key={c.step} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-start gap-4">
                    <div className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5">{i + 1}</div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-800">{c.step}</div>
                      <div className="text-xs text-primary-600 font-bold mt-0.5">{c.timeline}</div>
                    </div>
                    {i < CYCLE.length - 1 && <ArrowRight className="h-4 w-4 text-gray-300 shrink-0 mt-1" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Where to find */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Find Full Budget Documents</p>
              <p className="text-sm text-gray-600">DILG FDP Portal · Official City Website · City Budget Officer (City Hall)</p>
              <p className="text-sm text-gray-400">(046) 888-9500</p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <a href="https://fdpp.blgs.gov.ph" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-2 rounded-lg transition-colors">
                <ExternalLink className="h-3 w-3" />FDP Portal
              </a>
              <a href="https://www.generaltrias.gov.ph" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors">
                <ExternalLink className="h-3 w-3" />Official Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
