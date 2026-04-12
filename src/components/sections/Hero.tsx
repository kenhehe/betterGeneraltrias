import { useState, useRef, useEffect } from 'react';
import {
  Search,
  ArrowRight,
  Users,
  Briefcase,
  Heart,
  GraduationCap,
  Trash2,
  TreePine,
  Home,
  MapPin,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { serviceCategories, loadCategoryIndex } from '../../data/yamlLoader';

interface ServicePage {
  name: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
}

const POPULAR_CATEGORIES = [
  {
    labelKey: 'services.categories.business.name',
    label: 'Business',
    slug: 'business',
    icon: Briefcase,
    iconBg: 'bg-indigo-50',
    iconText: 'text-indigo-600',
    hoverBorder: 'hover:border-indigo-300',
    hoverBg: 'hover:bg-indigo-50',
  },
  {
    labelKey: 'services.categories.health-services.name',
    label: 'Health',
    slug: 'health-services',
    icon: Heart,
    iconBg: 'bg-red-50',
    iconText: 'text-red-600',
    hoverBorder: 'hover:border-red-300',
    hoverBg: 'hover:bg-red-50',
  },
  {
    labelKey: 'services.categories.education.name',
    label: 'Education',
    slug: 'education',
    icon: GraduationCap,
    iconBg: 'bg-blue-50',
    iconText: 'text-blue-600',
    hoverBorder: 'hover:border-blue-300',
    hoverBg: 'hover:bg-blue-50',
  },
  {
    labelKey: 'services.categories.garbage-waste-disposal.name',
    label: 'Waste',
    slug: 'garbage-waste-disposal',
    icon: Trash2,
    iconBg: 'bg-amber-50',
    iconText: 'text-amber-600',
    hoverBorder: 'hover:border-amber-300',
    hoverBg: 'hover:bg-amber-50',
  },
  {
    labelKey: 'services.categories.environment.name',
    label: 'Environment',
    slug: 'environment',
    icon: TreePine,
    iconBg: 'bg-green-50',
    iconText: 'text-green-700',
    hoverBorder: 'hover:border-green-300',
    hoverBg: 'hover:bg-green-50',
  },
  {
    labelKey: 'services.categories.housing-land-use.name',
    label: 'Housing',
    slug: 'housing-land-use',
    icon: Home,
    iconBg: 'bg-sky-50',
    iconText: 'text-sky-600',
    hoverBorder: 'hover:border-sky-300',
    hoverBg: 'hover:bg-sky-50',
  },
];

function highlight(text: string, query: string) {
  if (!query.trim()) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-yellow-200 text-gray-900 rounded px-0.5">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function Hero() {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [allServices, setAllServices] = useState<ServicePage[]>([]);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const cats = serviceCategories.categories as {
      category: string;
      slug: string;
    }[];
    Promise.all(
      cats.map(cat =>
        loadCategoryIndex(cat.slug).then(idx => ({ cat, pages: idx.pages }))
      )
    ).then(results => {
      const pages: ServicePage[] = [];
      for (const { cat, pages: catPages } of results) {
        for (const page of catPages) {
          pages.push({
            name: page.name,
            slug: page.slug,
            categorySlug: cat.slug,
            categoryName: cat.category,
          });
        }
      }
      setAllServices(pages);
    });
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const results = query.trim()
    ? allServices
        .filter(
          s =>
            s.name.toLowerCase().includes(query.toLowerCase()) ||
            s.categoryName.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 8)
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setShowDropdown(false);
      navigate(`/services?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSelect = (page: ServicePage) => {
    setShowDropdown(false);
    setQuery('');
    navigate(`/services/${page.categorySlug}/${page.slug}`);
  };

  return (
    <div
      className="relative text-white overflow-hidden -mt-[116px] min-h-screen flex flex-col"
      style={{
        background:
          'linear-gradient(135deg, #082214 0%, #0f4328 40%, #16643c 100%)',
      }}
    >
      {/* Decorative radial blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 10% 60%, rgba(37,168,100,0.18) 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(22,100,60,0.25) 0%, transparent 50%), radial-gradient(ellipse at 60% 90%, rgba(15,67,40,0.3) 0%, transparent 45%)',
        }}
      />
      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-[116px] flex-1 flex flex-col">
        {/* On mobile: natural flow. On desktop: vertically centered. */}
        <div className="flex-1 lg:flex lg:items-center py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left */}
          <div>
            {/* City badge */}
            <div
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(-12px)',
                transition: 'opacity 0.5s ease 0ms, transform 0.5s ease 0ms',
              }}
            >
              <MapPin className="h-3.5 w-3.5 text-green-300" />
              <span className="text-xs font-bold text-green-200 uppercase tracking-widest">
                General Trias City, Cavite
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none mb-2"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 80ms, transform 0.6s ease 80ms',
              }}
            >
              Better
              <span
                className="block"
                style={{
                  WebkitTextStroke: '2px rgba(255,255,255,0.15)',
                  color: '#72cc9d',
                }}
              >
                GeneralTrias.org
              </span>
            </h1>

            <p
              className="text-green-200 text-base md:text-lg leading-relaxed mb-8 max-w-md"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(16px)',
                transition:
                  'opacity 0.6s ease 180ms, transform 0.6s ease 180ms',
              }}
            >
              {t('hero.subtitle')}
            </p>

            <div
              className="flex flex-wrap gap-3 mb-10"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(16px)',
                transition:
                  'opacity 0.6s ease 260ms, transform 0.6s ease 260ms',
              }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-800 font-bold text-sm rounded-xl hover:bg-green-50 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-black/20"
              >
                <ArrowRight className="h-4 w-4" />
                {t('hero.browseServices', 'Browse Services')}
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/40 text-white font-bold text-sm rounded-xl hover:border-white/70 hover:bg-white/10 transition-all duration-200"
              >
                <Users className="h-4 w-4" />
                {t('hero.contactUs', 'Contact Us')}
              </a>
            </div>

            {/* Stat chips */}
            <div
              className="flex flex-wrap gap-3"
              style={{
                opacity: mounted ? 1 : 0,
                transition: 'opacity 0.6s ease 380ms',
              }}
            >
              {[
                { value: '450K+', label: 'Residents' },
                { value: '33', label: 'Barangays' },
                { value: '2015', label: 'Year of Cityhood' },
              ].map(chip => (
                <div
                  key={chip.label}
                  className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-lg px-3 py-2"
                >
                  <span className="text-sm font-black text-white">
                    {chip.value}
                  </span>
                  <span className="text-xs text-green-300 font-medium">
                    {chip.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — search card */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s ease 200ms, transform 0.7s ease 200ms',
            }}
          >
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/30 overflow-hidden">
              {/* Card header */}
              <div className="bg-primary-700 px-6 py-4">
                <p className="text-white font-bold text-sm">
                  {t('hero.findService', 'Search Services')}
                </p>
                <p className="text-green-200 text-xs mt-0.5">
                  Access government services instantly
                </p>
              </div>

              <div className="p-5">
                {/* Search input */}
                <div className="relative mb-5">
                  <form onSubmit={handleSearch}>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                      <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={e => {
                          setQuery(e.target.value);
                          setShowDropdown(true);
                        }}
                        onFocus={() => setShowDropdown(true)}
                        placeholder={t(
                          'hero.searchPlaceholder',
                          'Search for a service...'
                        )}
                        className="w-full border-2 border-gray-100 rounded-xl pl-9 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
                      />
                    </div>
                  </form>

                  {showDropdown && results.length > 0 && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden"
                    >
                      {results.map(page => (
                        <button
                          key={`${page.categorySlug}/${page.slug}`}
                          onMouseDown={e => {
                            e.preventDefault();
                            handleSelect(page);
                          }}
                          className="w-full text-left px-4 py-2.5 text-sm hover:bg-primary-50 transition-colors flex items-center gap-2"
                        >
                          <Search className="h-3.5 w-3.5 text-primary-400 shrink-0" />
                          <span className="text-gray-800 flex-1">
                            {highlight(page.name, query)}
                          </span>
                          <span className="text-xs text-gray-400 shrink-0">
                            {page.categoryName}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Popular categories */}
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  {t('hero.popular', 'Popular Services')}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {POPULAR_CATEGORIES.map(cat => {
                    const Icon = cat.icon;
                    return (
                      <Link
                        key={cat.slug}
                        to={`/services/${cat.slug}`}
                        className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 border-gray-100 ${cat.hoverBorder} ${cat.hoverBg} transition-all text-center group`}
                      >
                        <div className={`p-2 rounded-lg ${cat.iconBg} ${cat.iconText} group-hover:scale-110 transition-all`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className={`text-[11px] font-semibold text-gray-600 leading-tight ${cat.iconText.replace('text-', 'group-hover:text-')} transition-colors`}>
                          {t(cat.labelKey, cat.label)}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>{/* end flex-1 centering wrapper */}

        {/* Development Projects teaser strip */}
        <div
          className="pb-12 lg:pb-16"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.6s ease 460ms',
          }}
        >
          <div className="border-t border-white/10 pt-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-300" />
                <span className="text-xs font-bold text-green-300 uppercase tracking-widest">
                  Coming to General Trias
                </span>
              </div>
              <Link
                to="/development-projects"
                className="flex items-center gap-1 text-xs font-semibold text-green-300 hover:text-white transition-colors"
              >
                View all <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div
              className="flex gap-3 overflow-x-auto pb-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
            >
              {[
                { emoji: '🏬', name: 'SM City General Trias', status: 'Announced', pill: 'bg-blue-500/20 border-blue-400/30' },
                { emoji: '🛣️', name: 'CALAX–CAVITEX Link', status: 'Under Construction', pill: 'bg-orange-500/20 border-orange-400/30' },
                { emoji: '🏙️', name: 'Riverpark Township', status: 'Active Development', pill: 'bg-emerald-500/20 border-emerald-400/30' },
                { emoji: '🌉', name: 'Flyover & Road Widening', status: 'Ongoing', pill: 'bg-slate-500/20 border-slate-400/30' },
                { emoji: '🎓', name: 'Ateneo de Cavite', status: 'Announced', pill: 'bg-indigo-500/20 border-indigo-400/30' },
              ].map(p => (
                <Link
                  key={p.name}
                  to="/development-projects"
                  className={`shrink-0 border rounded-xl px-4 py-3 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 ${p.pill}`}
                >
                  <span className="text-2xl leading-none">{p.emoji}</span>
                  <p
                    className="text-xs font-bold text-white mt-2 whitespace-nowrap"
                    style={{ maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {p.name}
                  </p>
                  <span className="flex items-center gap-1 text-[10px] text-green-300 font-medium mt-0.5">
                    <Zap className="h-2.5 w-2.5" />
                    {p.status}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 48 C480 0 960 0 1440 48 L1440 48 L0 48Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}
