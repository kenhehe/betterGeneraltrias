import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { Download, FileText, Map, ExternalLink } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Government', href: '/government' },
  { label: 'Transparency Documents', href: '/government/transparency-documents' },
  { label: 'Planning Docs & Downloads', href: '/government/transparency-documents/downloads' },
];

const CLUP_DOCS = [
  { name: 'CLUP Vol. 3 — Geographic & Political Profile', file: 'CLUP 2022-2030, Volume 3 (geographical, political profile).pdf' },
  { name: 'CLUP Vol. 3 — Population Changes', file: '3 Population Changes (CLUP 2022-2030, Vol.3).pdf' },
  { name: 'CLUP Vol. 3 — Other Population Changes', file: '4 Other Population Changes (CLUP 2022-2030, Vol.3).pdf' },
  { name: 'CLUP Vol. 3 — Population Projections & Estimates', file: '5 Population Projections and Estimates (CLUP 2022-2030, Vol.3).pdf' },
  { name: 'CLUP Vol. 3 — Population Composition', file: 'Population Composition (CLUP 2022-2030, Vol.3).pdf' },
  { name: 'CLUP Vol. 3 — Population Exposure & Hazard Risk', file: '6 Population Exposure and Risk - Hazards (CLUP 2022-2030, Vol.3).pdf' },
  { name: 'CLUP Vol. 3 — Education', file: '1 Education (CLUP 2022-2030, Vol.3).pdf' },
  { name: 'CLUP Vol. 3 — Health', file: '1 Health (CLUP 2022-2030, Vol.3).pdf' },
  { name: 'CLUP Vol. 3 — Housing', file: '1 Housing (CLUP 2022-2030, Vol.3).pdf' },
  { name: 'CLUP Vol. 3 — Protective Services', file: '1 Protective Services (CLUP 2022-2030, Vol.3).pdf' },
  { name: 'CLUP Vol. 3 — Social Welfare Services', file: '1 Social Welfare Services (CLUP 2022-2030, Vol.3).pdf' },
];

const CDP_DOCS = [
  { name: 'CDP Chapter 1a', file: 'Comprehensive Development Plan (2020-2029) - City of Gen.Trias - Chapter 1a.pdf' },
  { name: 'CDP Chapter 1b', file: 'Comprehensive Development Plan (2020-2029) - City of Gen.Trias - Chapter 1b.pdf' },
  { name: 'CDP Chapter 1c', file: 'Comprehensive Development Plan (2020-2029) - City of Gen.Trias - Chapter 1c.pdf' },
  { name: 'CDP Chapter 2', file: 'Comprehensive Development Plan (2020-2029) - City of Gen.Trias - Chapter 2.pdf' },
  { name: 'CDP Chapter 3 — Social Development Plan', file: 'Comprehensive Development Plan (2020-2029) - City of Gen.Trias - Chapter 3 (Social Development Plan).pdf' },
  { name: 'CDP Chapter 3', file: 'Comprehensive Development Plan (2020-2029) - City of Gen.Trias - Chapter 3.pdf' },
  { name: 'CDP Chapter 4', file: 'Comprehensive Development Plan (2020-2029) - City of Gen.Trias - Chapter 4.pdf' },
  { name: 'CDP Chapter 5 & Annexes', file: 'Comprehensive Development Plan (2020-2029) - City of Gen.Trias - Chapter 5 and Annexes.pdf' },
];

const ELA_DOCS = [
  { name: 'ELA 2022–2025 Part 1', file: 'ELA 2022 - 2025 = PART 1.pdf' },
  { name: 'ELA 2022–2025 Part 2', file: 'ELA 2022 - 2025 = PART 2.pdf' },
  { name: 'ELA 2022–2025 Part 3', file: 'ELA 2022 - 2025 = PART 3.pdf' },
];

const MAP_DOCS = [
  { name: 'Existing General Land Use Map 2021', file: 'Existing General Land Use Map 2021.pdf' },
  { name: 'Zoning Map', file: 'Zoning Map.pdf' },
];

function DocSection({ title, subtitle, color, icon: Icon, docs }: {
  title: string;
  subtitle: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  docs: { name: string; file: string }[];
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      <div className={`px-6 py-4 border-b border-gray-100 flex items-start gap-3 ${color}`}>
        <Icon className="h-5 w-5 mt-0.5 shrink-0" />
        <div>
          <h3 className="text-sm font-black">{title}</h3>
          <p className="text-xs opacity-70 mt-0.5">{subtitle}</p>
        </div>
      </div>
      <div className="divide-y divide-gray-50">
        {docs.map(doc => (
          <div key={doc.file} className="flex items-center justify-between px-5 py-3.5 gap-4">
            <div className="flex items-center gap-2.5 min-w-0">
              <FileText className="h-4 w-4 text-gray-300 shrink-0" />
              <span className="text-sm text-gray-700 truncate">{doc.name}</span>
            </div>
            <a
              href={`/files/${doc.file}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-1.5 rounded-lg transition-colors shrink-0"
            >
              <Download className="h-3 w-3" />PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Downloads() {
  return (
    <>
      <SEO
        title="Planning Documents & Downloads — General Trias City"
        description="Download the CLUP 2022–2030, Comprehensive Development Plan 2020–2029, ELA 2022–2025, and land use maps for General Trias City."
      />

      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-1">Transparency · Documents</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Planning Documents & Downloads</h1>
          <p className="text-green-200 text-sm max-w-lg leading-relaxed">Official CLUP, CDP, ELA, and land use maps guiding General Trias City's growth and development through 2030.</p>
          <div className="flex flex-wrap gap-3 mt-4">
            {[['24', 'Documents'], ['3', 'Plan Categories'], ['2022–2030', 'Plan Period']].map(([val, lbl]) => (
              <div key={lbl} className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-1.5">
                <span className="text-sm font-black text-white">{val}</span>
                <span className="text-xs text-green-300">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 32" fill="none" preserveAspectRatio="none"><path d="M0 32 C480 0 960 0 1440 32 L1440 32 L0 32Z" fill="#f9fafb" /></svg>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          <DocSection
            title="Comprehensive Land Use Plan (CLUP) 2022–2030"
            subtitle="Primary land use policy document guiding how land is allocated across all zones"
            color="bg-green-50 text-green-800"
            icon={Map}
            docs={CLUP_DOCS}
          />

          <DocSection
            title="Comprehensive Development Plan (CDP) 2020–2029"
            subtitle="City's development goals, strategies, and investment program across all sectors"
            color="bg-blue-50 text-blue-800"
            icon={FileText}
            docs={CDP_DOCS}
          />

          <DocSection
            title="Executive-Legislative Agenda (ELA) 2022–2025"
            subtitle="Joint program of work of the Mayor and City Council for the current term"
            color="bg-violet-50 text-violet-800"
            icon={FileText}
            docs={ELA_DOCS}
          />

          <DocSection
            title="Land Use Maps"
            subtitle="Official zoning and general land use maps for General Trias City"
            color="bg-amber-50 text-amber-800"
            icon={Map}
            docs={MAP_DOCS}
          />

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Source</p>
              <p className="text-sm text-gray-600">Official General Trias City Government Planning Documents. For latest versions visit the official website or file an FOI request.</p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <a href="https://www.generaltrias.gov.ph" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-2 rounded-lg transition-colors">
                <ExternalLink className="h-3 w-3" />Official Site
              </a>
              <a href="https://www.foi.gov.ph" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors">
                <ExternalLink className="h-3 w-3" />FOI Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
