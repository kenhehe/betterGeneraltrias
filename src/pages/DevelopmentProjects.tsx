import Section from '../components/ui/Section';
import DisclaimerBar from '../components/ui/DisclaimerBar';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import {
  Building2,
  MapPin,
  ExternalLink,
  Calendar,
  TrendingUp,
  GraduationCap,
  Layers,
  Construction,
  Zap,
} from 'lucide-react';

export type ProjectStatus = 'announced' | 'under-construction' | 'ongoing' | 'operational';
export type ProjectCategory = 'commercial' | 'infrastructure' | 'township' | 'education';

export interface Project {
  id: number;
  name: string;
  developer: string;
  location: string;
  status: ProjectStatus;
  statusLabel: string;
  category: ProjectCategory;
  emoji: string;
  accent: string;
  description: string;
  highlights: string[];
  source?: string;
  sourceLabel?: string;
  estimatedCompletion?: string;
}

const STATUS_STYLES: Record<ProjectStatus, string> = {
  announced: 'bg-amber-50 text-amber-700 border-amber-200',
  'under-construction': 'bg-orange-50 text-orange-700 border-orange-200',
  ongoing: 'bg-blue-50 text-blue-700 border-blue-200',
  operational: 'bg-green-50 text-green-700 border-green-200',
};

const CATEGORY_META: Record<
  ProjectCategory,
  { label: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  commercial: { label: 'Commercial', Icon: Building2 },
  infrastructure: { label: 'Infrastructure', Icon: Construction },
  township: { label: 'Township', Icon: Layers },
  education: { label: 'Education', Icon: GraduationCap },
};

export const DEVELOPMENT_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'SM City General Trias',
    developer: 'SM Prime Holdings, Inc.',
    location: "Governor's Drive, General Trias City, Cavite",
    status: 'announced',
    statusLabel: 'Announced',
    category: 'commercial',
    emoji: '🏬',
    accent: 'from-blue-600 to-indigo-700',
    description:
      'SM Prime Holdings is bringing a full SM City mall to General Trias — the first SM mall to directly serve the city. General Trias is among SM\'s priority expansion targets in CALABARZON, driven by its rapid population growth and the absence of a major mall within city limits.',
    highlights: [
      'First SM mall to directly serve General Trias City',
      "Located along the Governor's Drive commercial corridor",
      "Part of SM Prime's provincial expansion in CALABARZON",
      'Nearest existing SM malls: SM Bacoor, SM Dasmarinas, SM Molino',
    ],
    source: 'https://www.smprime.com',
    sourceLabel: 'SM Prime Holdings',
    estimatedCompletion: 'TBA',
  },
  {
    id: 2,
    name: 'CALAX – CAVITEX Connection',
    developer: 'MPCALA Holdings, Inc. / Metro Pacific Tollways (MPTC)',
    location: 'Kawit, Cavite to Santa Rosa, Laguna — passing through General Trias',
    status: 'under-construction',
    statusLabel: 'Under Construction',
    category: 'infrastructure',
    emoji: '🛣️',
    accent: 'from-orange-500 to-amber-600',
    description:
      'The Cavite-Laguna Expressway (CALAX) is a ~45 km expressway connecting CAVITEX in Kawit to the South Luzon Expressway (SLEX) in Santa Rosa, Laguna. The General Trias interchange gives residents direct expressway access, dramatically cutting travel time to Metro Manila and Laguna.',
    highlights: [
      '~45 km total length — one of the longest expressways in CALABARZON',
      'Dedicated General Trias interchange for direct city access',
      'Connects CAVITEX (Metro Manila gateway) to SLEX (Laguna/Batangas)',
      'Reduces Metro Manila–General Trias travel to under 30 minutes',
      'Partial operations already ongoing on multiple completed segments',
    ],
    source: 'https://mptc.com.ph',
    sourceLabel: 'MPTC Official',
    estimatedCompletion: '2025–2026 (full completion)',
  },
  {
    id: 3,
    name: 'Riverpark: The Next Gen City',
    developer: 'Riverpark Development Corporation',
    location: 'General Trias City, Cavite',
    status: 'ongoing',
    statusLabel: 'Active Development',
    category: 'township',
    emoji: '🏙️',
    accent: 'from-emerald-600 to-teal-700',
    description:
      'Riverpark is a master-planned mixed-use township billed as "The Next Gen City of the South." Positioned as a self-sustaining community within General Trias, it encompasses residential, commercial, institutional, and recreational zones — anchored by its own school and commercial district.',
    highlights: [
      'Master-planned mixed-use township — residential, commercial & institutional',
      'Anchor academic institution: Ateneo de Cavite (Riverpark Campus)',
      'Marketed as a self-sustaining "city within a city"',
      'One of the largest estate developments in General Trias',
      'Residential lots actively being marketed and developed',
    ],
    estimatedCompletion: 'Multi-phase (ongoing)',
  },
  {
    id: 4,
    name: 'Flyover & Road Widening Projects',
    developer: 'DPWH Region IV-A / City Government of General Trias',
    location: "Governor's Drive & C. De Los Reyes Avenue, General Trias City",
    status: 'ongoing',
    statusLabel: 'Various Stages',
    category: 'infrastructure',
    emoji: '🌉',
    accent: 'from-slate-600 to-gray-700',
    description:
      "A series of road infrastructure projects addressing traffic congestion along General Trias' major corridors. Includes road widening along Governor's Drive (a national highway), flyover proposals at key intersections, and improvements along C. De Los Reyes Avenue to ease the city's growing traffic load.",
    highlights: [
      "Governor's Drive road widening — national highway, DPWH-led",
      'Flyover proposals at high-congestion intersections',
      'C. De Los Reyes Avenue corridor improvements',
      "Responds to the city's rapid population and vehicle growth",
      'Various sub-projects in different stages of procurement and construction',
    ],
    source: 'https://www.dpwh.gov.ph',
    sourceLabel: 'DPWH Official',
    estimatedCompletion: 'Varies per sub-project',
  },
  {
    id: 5,
    name: 'Ateneo de Cavite — Riverpark Campus',
    developer: 'Ateneo de Cavite / Riverpark Development Corporation',
    location: 'Riverpark Township, General Trias City, Cavite',
    status: 'announced',
    statusLabel: 'Announced',
    category: 'education',
    emoji: '🎓',
    accent: 'from-blue-800 to-blue-900',
    description:
      "An Ateneo-affiliated school anchoring the Riverpark township development. The campus is positioned as the flagship academic institution for the master-planned community, following the Ateneo network's tradition of establishing schools in high-growth corridors across the Philippines.",
    highlights: [
      'Part of the Ateneo network — a trusted national education brand',
      'Anchor institution for the Riverpark township',
      'Expected to offer K–12 and possibly tertiary programs',
      "Follows the Ateneo network's expansion into CALABARZON growth cities",
    ],
    estimatedCompletion: 'TBA',
  },
];

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Development Projects', href: '/development-projects' },
];

export default function DevelopmentProjects() {
  return (
    <>
      <SEO
        title="Development Projects — General Trias City"
        description="Major development projects shaping General Trias City — SM City GenTrias, CALAX-CAVITEX expressway, Riverpark township, road infrastructure, and Ateneo de Cavite."
        keywords="General Trias development projects, SM City General Trias, CALAX CAVITEX, Riverpark township, Ateneo de Cavite, Governor's Drive flyover"
      />

      {/* Hero */}
      <div
        className="relative text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center gap-2 mb-4 text-green-300 text-xs font-bold uppercase tracking-widest">
            <TrendingUp className="h-3.5 w-3.5" />
            General Trias City, Cavite
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            Development Projects
          </h1>
          <p className="text-green-100 text-base max-w-lg leading-relaxed mb-8">
            Major investments and infrastructure projects that are shaping the
            future of General Trias — from a new SM mall and expressway access
            to a master-planned township and new schools.
          </p>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(CATEGORY_META).map(([key, meta]) => {
              const count = DEVELOPMENT_PROJECTS.filter(p => p.category === key).length;
              return (
                <span
                  key={key}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  <meta.Icon className="h-3 w-3" />
                  {meta.label}
                  <span className="bg-white/20 rounded-full px-1.5 py-0.5 text-[10px] font-bold">
                    {count}
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40Z" fill="#f9fafb" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 min-h-screen">
        <Section className="py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          {/* Count badge + disclaimer */}
          <div className="flex items-start justify-between mb-8 gap-4 flex-wrap">
            <h2 className="text-lg font-black text-gray-900">
              {DEVELOPMENT_PROJECTS.length} Major Development Projects
            </h2>
            <span className="text-xs text-gray-400 font-medium text-right leading-relaxed max-w-xs">
              Information sourced from developer announcements, DPWH, and public records.
              Status may change — visit official channels for latest updates.
            </span>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEVELOPMENT_PROJECTS.map((project, idx) => {
              const meta = CATEGORY_META[project.category];
              const CatIcon = meta.Icon;
              return (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Colored top bar */}
                  <div
                    className={`bg-gradient-to-r ${project.accent} p-5 flex items-start justify-between`}
                  >
                    <div>
                      <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                        <CatIcon className="h-3 w-3" />
                        {meta.label}
                      </span>
                      <h3 className="text-white font-black text-lg leading-tight">
                        {project.name}
                      </h3>
                    </div>
                    <span className="text-4xl ml-4 shrink-0 select-none group-hover:scale-110 transition-transform duration-200">
                      {project.emoji}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    {/* Status + completion */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-bold border px-2.5 py-1 rounded-full ${STATUS_STYLES[project.status]}`}
                      >
                        <Zap className="h-2.5 w-2.5" />
                        {project.statusLabel}
                      </span>
                      {project.estimatedCompletion && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                          <Calendar className="h-2.5 w-2.5" />
                          {project.estimatedCompletion}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-5">
                      {project.highlights.map(h => (
                        <li key={h} className="flex items-start gap-2 text-xs text-gray-500">
                          <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-primary-500" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Location */}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.location)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-start gap-2 text-xs text-gray-400 hover:text-primary-700 transition-colors group/map mb-1"
                    >
                      <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 group-hover/map:text-primary-600 transition-colors" />
                      <span className="group-hover/map:underline">{project.location}</span>
                    </a>

                    {/* Developer */}
                    <div className="flex items-start gap-2 text-xs text-gray-400">
                      <Building2 className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                      <span>{project.developer}</span>
                    </div>

                    {/* Source link */}
                    {project.source && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {project.sourceLabel ?? 'Official Source'}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Bottom index */}
                  <div className="px-5 pb-4 flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
                      Project #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Disclaimer footer */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-black text-amber-900 text-sm mb-1">
                  Note on Project Information
                </p>
                <p className="text-xs text-amber-700 leading-relaxed">
                  Project statuses, timelines, and details are compiled from
                  developer announcements, DPWH public records, and published
                  reports. This page is for informational purposes only. For
                  official and current information, please visit each project's
                  official channels or the City Government of General Trias.
                </p>
              </div>
            </div>
          </div>
          <DisclaimerBar />
        </Section>
      </div>
    </>
  );
}
