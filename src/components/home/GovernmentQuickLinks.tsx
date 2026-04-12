import { Link } from 'react-router-dom';
import {
  FileText,
  Users,
  BarChart2,
  Download,
  ArrowRight,
  ShieldCheck,
  MapPin,
} from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const QUICK_LINKS = [
  {
    icon: ShieldCheck,
    title: 'Full Disclosure',
    description: 'Budget, financial statements & procurement documents',
    href: '/government/transparency-documents/full-disclosure',
    accent: 'bg-green-50 text-green-700 border-green-100',
    iconBg: 'bg-green-100 text-green-700',
  },
  {
    icon: Users,
    title: 'City Officials',
    description: 'Mayor, Vice Mayor, City Council & departments',
    href: '/government/departments/officials',
    accent: 'bg-blue-50 text-blue-700 border-blue-100',
    iconBg: 'bg-blue-100 text-blue-700',
  },
  {
    icon: BarChart2,
    title: 'City Profile',
    description: 'Population data, barangays, economy & statistics',
    href: '/government/reports-and-statistics/city-profile',
    accent: 'bg-violet-50 text-violet-700 border-violet-100',
    iconBg: 'bg-violet-100 text-violet-700',
  },
  {
    icon: FileText,
    title: 'FOI Releases',
    description: 'Documents released under Freedom of Information',
    href: '/government/transparency-documents/foi-releases',
    accent: 'bg-amber-50 text-amber-700 border-amber-100',
    iconBg: 'bg-amber-100 text-amber-700',
  },
  {
    icon: Download,
    title: 'Planning Documents',
    description: 'CLUP, Development Plan, ELA & zoning maps (PDF)',
    href: '/government/transparency-documents/downloads',
    accent: 'bg-orange-50 text-orange-700 border-orange-100',
    iconBg: 'bg-orange-100 text-orange-700',
  },
  {
    icon: MapPin,
    title: 'Barangay Directory',
    description: 'All 33 barangays of General Trias City',
    href: '/government/reports-and-statistics/city-profile',
    accent: 'bg-teal-50 text-teal-700 border-teal-100',
    iconBg: 'bg-teal-100 text-teal-700',
  },
];

export default function GovernmentQuickLinks() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="bg-gray-50 py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
              Government Access
            </p>
            <h2 className="text-2xl font-black text-gray-900">
              Quick Government Links
            </h2>
            <div className="mt-2 h-1 w-12 bg-primary-600 rounded-full" />
          </div>
          {/* All Documents — desktop only */}
          <Link
            to="/government/transparency-documents"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-primary-700 hover:text-primary-800 transition-colors"
          >
            All Documents
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {QUICK_LINKS.map((link, idx) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href + idx}
                to={link.href}
                className={`group flex items-start gap-4 bg-white rounded-2xl border ${link.accent.split(' ')[2]} hover:shadow-lg hover:-translate-y-1 transition-all duration-200 p-5 ${idx >= 3 ? 'hidden sm:flex' : ''}`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${idx * 60}ms, transform 0.5s ease ${idx * 60}ms, box-shadow 0.2s, translate 0.2s`,
                }}
              >
                <div
                  className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${link.iconBg} group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary-700 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {link.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-300 shrink-0 mt-0.5 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            );
          })}
        </div>

        {/* All Documents — mobile only, below cards */}
        <div className="mt-4 sm:hidden">
          <Link
            to="/government/transparency-documents"
            className="flex items-center justify-center gap-2 w-full border border-primary-200 text-primary-700 font-bold text-sm px-5 py-3 rounded-xl hover:bg-primary-50 transition-colors"
          >
            All Documents
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
