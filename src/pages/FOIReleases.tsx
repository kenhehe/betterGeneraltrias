import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { ExternalLink, MapPin, Globe, Clock, FileText, XCircle } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Transparency', href: '/government/transparency-documents' },
  { label: 'FOI Releases', href: '/government/transparency-documents/foi-releases' },
];

const HOW_STEPS_INPERSON = [
  'Go to the Office of the City Administrator or the relevant department at City Hall',
  'Fill out the FOI Request Form (available at the front desk)',
  'Submit with a valid ID',
  'Receive an acknowledgement receipt with a reference number',
];

const TIMELINE = [
  { step: 'Acknowledgement', period: 'Within 3 working days' },
  { step: 'Initial response (grant or denial)', period: 'Within 15 working days' },
  { step: 'Extension (complex requests)', period: '+10 additional working days' },
  { step: 'Appeal if denied', period: 'File within 15 days of denial' },
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

      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-1">Transparency · FOI</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Freedom of Information (FOI)</h1>
          <p className="text-green-200 text-sm max-w-lg leading-relaxed">Every Filipino has the right to request and receive information held by the government under Executive Order No. 2 (2016).</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 32" fill="none" preserveAspectRatio="none"><path d="M0 32 C480 0 960 0 1440 32 L1440 32 L0 32Z" fill="#f9fafb" /></svg>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          {/* How to file */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-gray-900 mb-1">How to File an FOI Request</h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* In-person */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-black text-gray-900">Option 1 — In Person</h3>
                </div>
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

              {/* Online */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Globe className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-black text-gray-900">Option 2 — Online</h3>
                </div>
                <p className="text-sm text-gray-700 mb-4">File your request at the <strong>National FOI Portal</strong>. Select <em>General Trias City</em> as the agency and submit online — you'll be notified via email.</p>
                <a href="https://www.foi.gov.ph" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white bg-primary-700 hover:bg-primary-800 px-4 py-2.5 rounded-xl transition-colors">
                  <ExternalLink className="h-4 w-4" />Open foi.gov.ph
                </a>
              </div>
            </div>
          </div>

          {/* Response timeline */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-gray-900 mb-1 flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-500" /> Response Timeline
            </h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TIMELINE.map((t, i) => (
                <div key={t.step} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <div className="text-2xl font-black text-primary-600 mb-1">{i + 1}</div>
                  <div className="text-sm font-bold text-gray-800 mb-1">{t.step}</div>
                  <div className="text-xs text-amber-600 font-bold">{t.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What you can request + Exemptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-sm font-black text-gray-900 mb-1 flex items-center gap-2">
                <FileText className="h-4 w-4 text-green-600" /> Commonly Requested
              </h3>
              <div className="h-0.5 w-8 bg-green-500 rounded-full mb-4" />
              <div className="space-y-2">
                {REQUEST_TYPES.map(r => (
                  <div key={r} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                    <span className="text-sm text-gray-700">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-sm font-black text-gray-900 mb-1 flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-500" /> Exemptions
              </h3>
              <div className="h-0.5 w-8 bg-red-400 rounded-full mb-4" />
              <div className="space-y-2">
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
        </div>
      </div>
    </>
  );
}
