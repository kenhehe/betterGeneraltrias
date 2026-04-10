import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Section from '../components/ui/Section';
import { ExternalLink, Scale, Clock, FileText, Users, ShieldCheck } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Government', href: '/government' },
  { label: 'Transparency Documents', href: '/government/transparency-documents' },
  { label: 'SALN', href: '/government/transparency-documents/saln' },
];

const FILERS = [
  'Mayor', 'Vice Mayor', 'City Councilors (12 members)',
  'Department heads and division chiefs', 'All plantilla employees',
];

const DEADLINES = [
  { type: 'Annual SALN', deadline: 'On or before April 30 (for the preceding year)', accent: 'from-amber-500 to-orange-600' },
  { type: 'Upon assumption of office', deadline: 'Within 30 days of taking office', accent: 'from-blue-500 to-indigo-600' },
  { type: 'Upon separation from service', deadline: 'Within 30 days of separation', accent: 'from-slate-500 to-gray-600' },
];

const DISCLOSURES = [
  { label: 'Assets', desc: 'Real property (land, buildings), personal property (vehicles, bank accounts, investments, business interests)', accent: 'from-green-600 to-emerald-700', emoji: '🏠' },
  { label: 'Liabilities', desc: 'Loans, mortgages, and other financial obligations', accent: 'from-red-500 to-rose-600', emoji: '💳' },
  { label: 'Net Worth', desc: 'Total assets minus total liabilities', accent: 'from-violet-600 to-purple-700', emoji: '📊' },
  { label: 'Business Interests', desc: 'Financial connections and business interests', accent: 'from-blue-600 to-indigo-700', emoji: '🏢' },
  { label: 'Relatives in Government', desc: 'Within the fourth degree of consanguinity or affinity', accent: 'from-teal-600 to-cyan-700', emoji: '👥' },
];

const LAWS = [
  { code: 'R.A. 6713', title: 'Code of Conduct and Ethical Standards for Public Officials', color: 'bg-green-50 text-green-700 border-green-200' },
  { code: 'R.A. 3019', title: 'Anti-Graft and Corrupt Practices Act', color: 'bg-red-50 text-red-700 border-red-200' },
  { code: 'CSC-COA-OMB Joint Circular', title: 'Joint rules on SALN filing', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { code: 'E.O. No. 2 (2016)', title: 'Freedom of Information in the Executive Branch', color: 'bg-violet-50 text-violet-700 border-violet-200' },
];

export default function SALN() {
  return (
    <>
      <SEO
        title="SALN — Statement of Assets, Liabilities & Net Worth — General Trias City"
        description="SALN filing requirements, schedules, and how to access SALN records for General Trias City officials and employees."
      />

      {/* Hero */}
      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center gap-2 mb-4 text-green-300 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="h-3.5 w-3.5" />
            Transparency · SALN
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            Statement of Assets,<br />Liabilities & Net Worth
          </h1>
          <p className="text-green-100 text-base max-w-lg leading-relaxed mb-8">
            Sworn annual declaration of financial interests required of all government officials and employees under R.A. 6713.
          </p>
          <div className="flex flex-wrap gap-3">
            {[['Annual', 'Filing Frequency'], ['Apr 30', 'Deadline'], ['All Officials', 'Who Files'], ['FOI Access', 'Public Record']].map(([val, lbl]) => (
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

          {/* Who must file + Filing schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Who must file */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 flex items-start justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                    <Users className="h-3 w-3" />
                    Required Filers
                  </span>
                  <h2 className="text-white font-black text-lg leading-tight">Who Must File</h2>
                </div>
                <span className="text-4xl ml-4 shrink-0 select-none">📋</span>
              </div>
              <div className="p-5 space-y-2.5">
                {FILERS.map(f => (
                  <div key={f} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filing schedule */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-amber-500" />
                <h2 className="text-lg font-black text-gray-900">Filing Schedule</h2>
              </div>
              {DEADLINES.map(d => (
                <div key={d.type} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className={`bg-gradient-to-r ${d.accent} h-1.5`} />
                  <div className="p-4">
                    <div className="text-sm font-black text-gray-900 mb-1">{d.type}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{d.deadline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What is disclosed */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-1">
              <FileText className="h-5 w-5 text-primary-600" />
              <h2 className="text-lg font-black text-gray-900">What Is Disclosed</h2>
            </div>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DISCLOSURES.map(d => (
                <div key={d.label} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className={`bg-gradient-to-r ${d.accent} p-4 flex items-center justify-between`}>
                    <h3 className="text-white font-black text-base">{d.label}</h3>
                    <span className="text-2xl ml-2 shrink-0">{d.emoji}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legal basis */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-1">
              <Scale className="h-5 w-5 text-gray-500" />
              <h2 className="text-lg font-black text-gray-900">Legal Basis</h2>
            </div>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LAWS.map(l => (
                <div key={l.code} className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 flex items-start gap-3 hover:shadow-md transition-all">
                  <span className={`shrink-0 text-xs font-black border px-2 py-1 rounded-lg ${l.color}`}>{l.code}</span>
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
        </Section>
      </div>
    </>
  );
}
