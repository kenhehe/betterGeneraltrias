import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Users, Phone, ExternalLink, Building2, Crown, Shield, Star } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Government', href: '/government' },
  { label: 'Departments & Officials', href: '/government/departments' },
  { label: 'Local Officials', href: '/government/departments/officials' },
];

const EXECUTIVES = [
  {
    name: 'Hon. Luis A. Ferrer IV',
    position: 'City Mayor',
    badge: '2022–2025 Term',
    initials: 'LF',
    accentFrom: 'from-green-800',
    accentTo: 'to-green-600',
    ring: 'ring-green-200',
    badgeColor: 'bg-green-50 text-green-700 border-green-200',
    icon: Crown,
    iconColor: 'text-amber-400',
    description: 'Chief Executive of General Trias City, responsible for overall governance and administration.',
  },
  {
    name: 'Hon. Jonas Glyn Porto Labuguen',
    position: 'City Vice Mayor',
    badge: '2022–2025 Term',
    initials: 'JL',
    accentFrom: 'from-blue-800',
    accentTo: 'to-blue-600',
    ring: 'ring-blue-200',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: Star,
    iconColor: 'text-blue-300',
    description: 'Presides over the Sangguniang Panlungsod and assists the Mayor in city governance.',
  },
];

const COUNCILORS = [
  'Jesse Raphael R. Grepo',
  'Felix A. Grepo',
  'Clarissel J. Campaña-Moral',
  'Kyle Jassel J. Salazar',
  'J-M Vergel M. Columna',
  'Isagani L. Culanding',
  'Kristine Jane P. Barison',
  'Vivencio Q. Lozares',
  'Richard R. Parin',
  'Alfredo S. Ching',
  'Hernando M. Granados',
  'Martin Nicholo A. Ferrer',
];

const EX_OFFICIO = [
  { position: 'LNB President', full: 'Liga ng mga Barangay', name: 'Hon. Ramil C. Barrientos' },
  { position: 'SK Federation President', full: 'Sangguniang Kabataan', name: 'Hon. Ainsley Gwyneth G. Luces' },
];

const DEPARTMENTS = [
  { office: 'Office of the City Mayor', tel: '(046) 884-5768' },
  { office: 'Office of the City Vice Mayor', tel: '(046) 884-5768' },
  { office: 'Sangguniang Panlungsod (City Council)', tel: '(046) 884-5768' },
  { office: 'City Administrator', tel: '(046) 884-5768' },
  { office: 'City Health Office (CHO)', tel: '(046) 884-5768' },
  { office: 'City Social Welfare & Development Office (CSWDO)', tel: '(046) 884-5400' },
  { office: 'City DRRMO', tel: '(046) 884-5600' },
  { office: 'Bureau of Fire Protection (BFP)', tel: '(046) 884-5700' },
  { office: 'General Trias City PNP', tel: '(046) 884-1555' },
];

export default function Officials() {
  return (
    <>
      <SEO
        title="Local Officials Directory — General Trias City"
        description="Elected officials, city council members, and department directory of General Trias City for the 2022–2025 term."
      />

      {/* Hero */}
      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #082214 0%, #0f4328 50%, #16643c 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-1">Government · Departments</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Local Officials Directory</h1>
          <p className="text-green-200 text-sm max-w-lg leading-relaxed">Elected officials and department contacts of General Trias City — 2022–2025 term.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 32" fill="none" preserveAspectRatio="none"><path d="M0 32 C480 0 960 0 1440 32 L1440 32 L0 32Z" fill="#f9fafb" /></svg>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          {/* Executive Branch */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-gray-900 mb-1 flex items-center gap-2">
              <Crown className="h-5 w-5 text-amber-500" /> Executive Branch
            </h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {EXECUTIVES.map(e => {
                const RoleIcon = e.icon;
                return (
                  <div
                    key={e.name}
                    className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ring-1 ${e.ring}`}
                  >
                    {/* Colored top bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${e.accentFrom} ${e.accentTo}`} />
                    <div className="p-6">
                      <div className="flex items-start gap-5">
                        {/* Avatar */}
                        <div className={`bg-gradient-to-br ${e.accentFrom} ${e.accentTo} text-white w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black shrink-0 shadow-md`}>
                          {e.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <RoleIcon className={`h-4 w-4 ${e.iconColor} shrink-0`} />
                            <span className="text-sm font-black text-primary-700">{e.position}</span>
                          </div>
                          <div className="text-base font-black text-gray-900 leading-tight mb-2">{e.name}</div>
                          <span className={`inline-block text-[10px] font-bold border px-2 py-0.5 rounded-full ${e.badgeColor}`}>
                            Elected · {e.badge}
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 text-xs text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                        {e.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* City Council */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-gray-900 mb-1 flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" /> Sangguniang Panlungsod (City Council)
            </h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-2" />
            <p className="text-sm text-gray-500 mb-5">12 elected councilors presided over by the Vice Mayor — 2022–2025 term</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {COUNCILORS.map((name, i) => (
                <div key={name} className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 flex items-center gap-3">
                  <span className="text-[10px] font-black text-blue-400 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm font-semibold text-gray-800">Hon. {name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ex-Officio */}
          <div className="mb-12">
            <h2 className="text-lg font-black text-gray-900 mb-1 flex items-center gap-2">
              <Shield className="h-5 w-5 text-violet-500" /> Ex-Officio Members
            </h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {EX_OFFICIO.map(m => (
                <div key={m.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-0.5">{m.full}</div>
                  <div className="text-xs font-bold text-violet-600 mb-1.5">{m.position}</div>
                  <div className="text-sm font-semibold text-gray-800">{m.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Department Directory */}
          <div className="mb-10">
            <h2 className="text-lg font-black text-gray-900 mb-1 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary-600" /> City Government Offices
            </h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full mb-5" />
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {DEPARTMENTS.map((d, i) => (
                <div key={d.office} className={`flex items-center justify-between px-5 py-3.5 ${i < DEPARTMENTS.length - 1 ? 'border-b border-gray-50' : ''}`}>
                  <span className="text-sm text-gray-700 font-medium">{d.office}</span>
                  <a href={`tel:${d.tel.replace(/[^0-9]/g, '')}`} className="flex items-center gap-1.5 text-sm font-bold text-primary-700 hover:text-primary-900 transition-colors">
                    <Phone className="h-3.5 w-3.5" />{d.tel}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Footer links */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-gray-600">For a complete employee directory, visit City Hall or file an FOI request.</p>
            <div className="flex gap-2 shrink-0">
              <a href="https://www.foi.gov.ph" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-2 rounded-lg transition-colors">
                <ExternalLink className="h-3 w-3" />FOI Portal
              </a>
              <Link to="/government/departments" className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors">
                All Departments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
