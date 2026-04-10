import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Section from '../components/ui/Section';
import { ExternalLink, MapPin, Globe, Clock, FileText, XCircle, Eye } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Government', href: '/government' },
  { label: 'Transparency Documents', href: '/government/transparency-documents' },
  { label: 'FOI Releases', href: '/government/transparency-documents/foi-releases' },
];

const HOW_STEPS_INPERSON = [
  'Go to the Office of the City Administrator or the relevant department at City Hall',
  'Fill out the FOI Request Form (available at the front desk)',
  'Submit with a valid ID',
  'Receive an acknowledgement receipt with a reference number',
];

const TIMELINE = [
  { step: 'Acknowledgement', period: 'Within 3 working days', accent: 'from-green-500 to-emerald-600', emoji: '📥' },
  { step: 'Initial response (grant or denial)', period: 'Within 15 working days', accent: 'from-blue-500 to-indigo-600', emoji: '📋' },
  { step: 'Extension (complex requests)', period: '+10 additional working days', accent: 'from-amber-500 to-orange-600', emoji: '⏳' },
  { step: 'Appeal if denied', period: 'File within 15 days of denial', accent: 'from-red-500 to-rose-600', emoji: '⚖️' },
];

const REQUEST_TYPES = [
  'Budget documents and financial statements',
  'Contracts and procurement records',
  'Building and business permits',
  'Official resolutions and ordinances',
  'Personnel records (subject to privacy rules)',
  'Environmental clearances',
  'Infrastructure project costs and status',
];

const EXEMPTIONS = [
  'Information affecting national security or defense',
  'Ongoing criminal or administrative investigations',
  'Personal information protected by the Data Privacy Act',
  'Privileged communications (attorney-client, executive privilege)',
  'Preliminary drafts and internal deliberations',
];

export default function FOIReleases() {
  return (
    <>
      <SEO
        title="Freedom of Information (FOI) Releases — General Trias City"
        description="How to file an FOI request with General Trias City, response timelines, requestable information, and exemptions."
      />

      {/* Hero */}
      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center gap-2 mb-4 text-green-300 text-xs font-bold uppercase tracking-widest">
            <Eye className="h-3.5 w-3.5" />
            Transparency · Freedom of Information
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            Freedom of Information (FOI)
          </h1>
          <p className="text-green-100 text-base max-w-lg leading-relaxed mb-8">
            Every Filipino has the right to request and receive information held by the government under Executive Order No. 2 (2016).
          </p>
          <div className="flex flex-wrap gap-3">
            {[['E.O. No. 2', 'Legal Basis'], ['15 Days', 'Response Time'], ['Free', 'Cost to File'], ['Online / In-Person', 'How to File']].map(([val, lbl]) => (
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

          {/* How to file */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-gray-900 mb-1">How to File an FOI Request</h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* In-person */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-primary-700 to-primary-500 p-5 flex items-start justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                      <MapPin className="h-3 w-3" />
                      Option 1
                    </span>
                    <h3 className="text-white font-black text-lg leading-tight">In Person</h3>
                  </div>
                  <span className="text-4xl ml-4 shrink-0 select-none">🏛️</span>
                </div>
                <div className="p-5">
                  <div className="space-y-3 mb-4">
                    {HOW_STEPS_INPERSON.map((s, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-primary-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                        <span className="text-sm text-gray-700">{s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-xs text-gray-500 space-y-0.5">
                    <div className="font-bold text-gray-700">General Trias City Hall</div>
                    <div>Akle St., Kaybagal South, General Trias City, Cavite</div>
                    <div>(046) 888-9500 · Mon–Fri 8:00 AM – 5:00 PM</div>
                  </div>
                </div>
              </div>

              {/* Online */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 flex items-start justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                      <Globe className="h-3 w-3" />
                      Option 2
                    </span>
                    <h3 className="text-white font-black text-lg leading-tight">Online</h3>
                  </div>
                  <span className="text-4xl ml-4 shrink-0 select-none">💻</span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 mb-4">File your request at the <strong>National FOI Portal</strong>. Select <em>General Trias City</em> as the agency and submit online — you'll be notified via email.</p>
                  <a href="https://www.foi.gov.ph" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-xl transition-colors">
                    <ExternalLink className="h-4 w-4" />Open foi.gov.ph
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Response timeline */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="h-5 w-5 text-amber-500" />
              <h2 className="text-lg font-black text-gray-900">Response Timeline</h2>
            </div>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TIMELINE.map((t) => (
                <div key={t.step} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className={`bg-gradient-to-r ${t.accent} p-4 flex items-center justify-between`}>
                    <span className="text-2xl">{t.emoji}</span>
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-bold text-gray-800 mb-1">{t.step}</div>
                    <div className="text-xs text-amber-600 font-bold">{t.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What you can request + Exemptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-5 flex items-start justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                    <FileText className="h-3 w-3" />
                    Open Records
                  </span>
                  <h3 className="text-white font-black text-base">Commonly Requested</h3>
                </div>
                <span className="text-3xl ml-2 shrink-0">✅</span>
              </div>
              <div className="p-5 space-y-2">
                {REQUEST_TYPES.map(r => (
                  <div key={r} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                    <span className="text-sm text-gray-700">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="bg-gradient-to-r from-red-500 to-rose-600 p-5 flex items-start justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                    <XCircle className="h-3 w-3" />
                    Restricted
                  </span>
                  <h3 className="text-white font-black text-base">Exemptions</h3>
                </div>
                <span className="text-3xl ml-2 shrink-0">🚫</span>
              </div>
              <div className="p-5 space-y-2">
                {EXEMPTIONS.map(e => (
                  <div key={e} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                    <span className="text-sm text-gray-700">{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Office of the City Administrator</p>
              <p className="text-sm text-gray-700">General Trias City Hall · Akle St., Kaybagal South · (046) 888-9500</p>
            </div>
            <a href="https://www.foi.gov.ph" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-4 py-2.5 rounded-lg transition-colors shrink-0">
              <ExternalLink className="h-3 w-3" />File FOI Request
            </a>
          </div>
        </Section>
      </div>
    </>
  );
}
