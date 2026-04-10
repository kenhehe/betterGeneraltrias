import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { ExternalLink, FileText, DollarSign, BarChart2, ShoppingCart, MoreHorizontal } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Transparency', href: '/government/transparency-documents' },
  { label: 'Full Disclosure', href: '/government/transparency-documents/full-disclosure' },
];

const SECTIONS = [
  {
    icon: DollarSign,
    color: 'bg-green-50 text-green-700',
    accent: 'border-l-4 border-green-500',
    title: 'Budget Documents',
    docs: [
      { name: 'Annual Budget (AIP)', desc: 'Annual Investment Program — all programs, projects, and activities with funding', period: 'Current fiscal year' },
      { name: 'Supplemental Budget', desc: 'Supplemental appropriations, if any', period: 'As enacted' },
      { name: '20% Development Fund Utilization', desc: 'How the 20% IRA development allotment is spent', period: 'Quarterly' },
      { name: 'Trust Fund Utilization', desc: 'Receipts and disbursements of trust funds', period: 'Quarterly' },
    ],
  },
  {
    icon: BarChart2,
    color: 'bg-blue-50 text-blue-700',
    accent: 'border-l-4 border-blue-500',
    title: 'Financial Statements',
    docs: [
      { name: 'Statement of Receipts & Expenditures', desc: 'Summary of all income and spending', period: 'Quarterly' },
      { name: 'Statement of Cash Flow', desc: 'Cash inflows and outflows', period: 'Quarterly' },
      { name: 'Balance Sheet', desc: 'Assets, liabilities, and equity of the city government', period: 'Annual' },
      { name: 'Statement of Changes in Equity', desc: 'Changes in government equity', period: 'Annual' },
    ],
  },
  {
    icon: ShoppingCart,
    color: 'bg-violet-50 text-violet-700',
    accent: 'border-l-4 border-violet-500',
    title: 'Procurement Documents',
    docs: [
      { name: 'Bid Results (Goods & Services)', desc: 'Results of public bidding for goods and consulting services', period: 'Per project' },
      { name: 'Bid Results (Infrastructure)', desc: 'Results of public bidding for infrastructure projects', period: 'Per project' },
      { name: 'Annual Procurement Plan (APP)', desc: 'Planned procurements for the fiscal year', period: 'Annual' },
      { name: 'Contracts Awarded', desc: 'Summary of contracts awarded above the threshold', period: 'Per award' },
    ],
  },
  {
    icon: MoreHorizontal,
    color: 'bg-amber-50 text-amber-700',
    accent: 'border-l-4 border-amber-500',
    title: 'Other Required Disclosures',
    docs: [
      { name: 'Manpower Complement', desc: 'List of all city government employees and positions', period: 'Annual' },
      { name: 'SEF Utilization', desc: 'How the Special Education Fund is used', period: 'Annual' },
      { name: 'DRRMF Utilization', desc: 'Use of the Disaster Risk Reduction and Management Fund', period: 'Annual' },
      { name: 'Gender & Development (GAD) Budget', desc: 'GAD fund utilization', period: 'Annual' },
    ],
  },
];

const PORTALS = [
  { label: 'DILG FDP Portal', href: 'https://fdpp.blgs.gov.ph', desc: 'Primary source for all FDP documents' },
  { label: 'Official City Website', href: 'https://www.generaltrias.gov.ph', desc: 'Downloads section' },
  { label: 'FOI Portal', href: 'https://www.foi.gov.ph', desc: 'Request documents not yet posted online' },
  { label: 'PhilGEPS', href: 'https://www.philgeps.gov.ph', desc: 'Procurement & bidding records' },
];

export default function FullDisclosure() {
  return (
    <>
      <SEO
        title="Full Disclosure Policy Documents — General Trias City"
        description="DILG-mandated Full Disclosure Policy documents for General Trias City including budget, financial statements, and procurement records."
      />

      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-1">Transparency · Full Disclosure</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Full Disclosure Policy Documents</h1>
          <p className="text-green-200 text-sm max-w-lg leading-relaxed">DILG-mandated fiscal and financial documents required under MC 2013-140 and subsequent issuances.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 32" fill="none" preserveAspectRatio="none"><path d="M0 32 C480 0 960 0 1440 32 L1440 32 L0 32Z" fill="#f9fafb" /></svg>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          {/* Transparency Seal badge */}
          <div className="mb-8 flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-3 w-fit">
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center shrink-0">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-black text-green-800">Transparency Seal Holder</div>
              <div className="text-xs text-green-600">General Trias City complies with DILG Full Disclosure Policy requirements</div>
            </div>
          </div>

          {/* Document sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {SECTIONS.map(section => {
              const Icon = section.icon;
              return (
                <div key={section.title} className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden`}>
                  <div className={`px-5 py-4 flex items-center gap-3 ${section.accent} bg-gray-50`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${section.color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-black text-gray-900">{section.title}</h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {section.docs.map(doc => (
                      <div key={doc.name} className="px-5 py-3.5 flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold text-gray-800">{doc.name}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{doc.desc}</div>
                        </div>
                        <span className="shrink-0 text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">{doc.period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Where to find */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-gray-900 mb-1">Where to Find These Documents</h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PORTALS.map(p => (
                <a key={p.label} href={p.href} target="_blank" rel="noreferrer"
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-primary-700 group-hover:text-primary-900">{p.label}</span>
                    <ExternalLink className="h-3 w-3 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-gray-400">{p.desc}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Contact</p>
              <p className="text-sm text-gray-700 font-medium">General Trias City Hall · Akle St., Kaybagal South, General Trias City</p>
              <p className="text-sm text-gray-500">(046) 888-9500</p>
            </div>
            <a href="https://fdpp.blgs.gov.ph" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-4 py-2.5 rounded-lg transition-colors shrink-0">
              <ExternalLink className="h-3 w-3" />Open FDP Portal
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
