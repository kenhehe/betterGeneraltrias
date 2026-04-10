import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { ExternalLink, Scale, Clock, FileText, Users } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Transparency', href: '/government/transparency-documents' },
  { label: 'SALN', href: '/government/transparency-documents/saln' },
];

const FILERS = [
  'Mayor', 'Vice Mayor', 'City Councilors (12 members)',
  'Department heads and division chiefs', 'All plantilla employees',
];

const DEADLINES = [
  { type: 'Annual SALN', deadline: 'On or before April 30 (for the preceding year)' },
  { type: 'Upon assumption of office', deadline: 'Within 30 days of taking office' },
  { type: 'Upon separation from service', deadline: 'Within 30 days of separation' },
];

const DISCLOSURES = [
  { label: 'Assets', desc: 'Real property (land, buildings), personal property (vehicles, bank accounts, investments, business interests)' },
  { label: 'Liabilities', desc: 'Loans, mortgages, and other financial obligations' },
  { label: 'Net Worth', desc: 'Total assets minus total liabilities' },
  { label: 'Business Interests', desc: 'Financial connections and business interests' },
  { label: 'Relatives in Government', desc: 'Within the fourth degree of consanguinity or affinity' },
];

const LAWS = [
  { code: 'R.A. 6713', title: 'Code of Conduct and Ethical Standards for Public Officials' },
  { code: 'R.A. 3019', title: 'Anti-Graft and Corrupt Practices Act' },
  { code: 'CSC-COA-OMB Joint Circular', title: 'Joint rules on SALN filing' },
  { code: 'E.O. No. 2 (2016)', title: 'Freedom of Information in the Executive Branch' },
];

export default function SALN() {
  return (
    <>
      <SEO
        title="SALN — Statement of Assets, Liabilities & Net Worth — General Trias City"
        description="SALN filing requirements, schedules, and how to access SALN records for General Trias City officials and employees."
      />

      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-1">Transparency · SALN</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Statement of Assets, Liabilities & Net Worth</h1>
          <p className="text-green-200 text-sm max-w-lg leading-relaxed">Sworn annual declaration of financial interests required of all government officials and employees under R.A. 6713.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 32" fill="none" preserveAspectRatio="none"><path d="M0 32 C480 0 960 0 1440 32 L1440 32 L0 32Z" fill="#f9fafb" /></svg>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {/* Who must file */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-base font-black text-gray-900 mb-1 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" /> Who Must File
              </h2>
              <div className="h-1 w-8 bg-primary-600 rounded-full mb-4" />
              <div className="space-y-2.5">
                {FILERS.map(f => (
                  <div key={f} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filing Schedule */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-base font-black text-gray-900 mb-1 flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-500" /> Filing Schedule
              </h2>
              <div className="h-1 w-8 bg-primary-600 rounded-full mb-4" />
              <div className="space-y-3">
                {DEADLINES.map(d => (
                  <div key={d.type} className="border-l-4 border-amber-400 pl-3 py-1">
                    <div className="text-sm font-bold text-gray-800">{d.type}</div>
                    <div className="text-xs text-amber-700 mt-0.5">{d.deadline}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What is disclosed */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-gray-900 mb-1 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary-600" /> What Is Disclosed
            </h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DISCLOSURES.map(d => (
                <div key={d.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <div className="text-sm font-black text-primary-700 mb-1">{d.label}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{d.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Legal basis */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-gray-900 mb-1 flex items-center gap-2">
              <Scale className="h-5 w-5 text-gray-500" /> Legal Basis
            </h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LAWS.map(l => (
                <div key={l.code} className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 flex items-start gap-3">
                  <span className="shrink-0 text-xs font-black text-primary-600 bg-primary-50 border border-primary-100 px-2 py-1 rounded-lg">{l.code}</span>
                  <span className="text-sm text-gray-700">{l.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How to access */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">How to Access SALN Records</p>
              <p className="text-sm text-gray-700">Visit the <strong>Office of the HRMO</strong> at City Hall, or file online via the FOI portal.</p>
              <p className="text-sm text-gray-400">(046) 888-9500 · Akle St., Kaybagal South, General Trias City</p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <a href="https://www.foi.gov.ph" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-2 rounded-lg transition-colors">
                <ExternalLink className="h-3 w-3" />FOI Portal
              </a>
              <a href="https://www.ombudsman.gov.ph" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors">
                <ExternalLink className="h-3 w-3" />Ombudsman
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
