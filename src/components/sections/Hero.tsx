import { useState } from 'react';
import { Search, ArrowRight, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const POPULAR = [
  { label: 'Business Permit', href: '/services/business' },
  { label: 'Health Services', href: '/services/health-services' },
  { label: 'Tourism', href: '/services/tourism' },
  { label: 'Birth Certificate', href: '/services/health-services' },
];

export default function Hero() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/services?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div
      className="relative text-white overflow-hidden"
      style={{
        backgroundColor: '#003087',
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — headline + CTAs */}
          <div>
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
              Tagaytay City, Cavite
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
              {t('hero.welcome', 'Welcome to')}
              <br />
              BetterTagaytay.ph
            </h1>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-700 font-bold text-sm rounded-lg hover:bg-blue-50 transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
                {t('hero.browseServices', 'Browse Services')}
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-white text-white font-bold text-sm rounded-lg hover:bg-white/10 transition-colors"
              >
                <Users className="h-4 w-4" />
                {t('hero.contactUs', 'Contact Us')}
              </a>
            </div>
          </div>

          {/* Right — search card */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <p className="text-gray-800 font-bold text-base mb-3 flex items-center gap-2">
                <Search className="h-4 w-4 text-primary-700" />
                {t('hero.findService', 'Find a Service')}
              </p>
              <form onSubmit={handleSearch} className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder={t(
                    'hero.searchPlaceholder',
                    'e.g., business permit, health services'
                  )}
                  className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-primary-700 hover:bg-primary-800 text-white px-4 py-2.5 rounded-lg transition-colors"
                  aria-label="Search"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-gray-400 font-medium">
                  {t('hero.popular', 'Popular')}:
                </span>
                {POPULAR.map(p => (
                  <Link
                    key={p.label}
                    to={p.href}
                    className="text-xs bg-primary-50 text-primary-700 font-medium px-3 py-1 rounded-full hover:bg-primary-100 transition-colors border border-primary-100"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
