import React, { useState, useEffect } from 'react';
import {
  X,
  Menu,
  ChevronDown,
  Phone,
} from 'lucide-react';
import { mainNavigation } from '../../data/navigation';
import type { LanguageType } from '../../types/index';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HOTLINES = [
  { label: 'Police', number: '(046) 884-1555', tel: '0468841555' },
  { label: 'Hospital', number: '(046) 884-5800', tel: '0468845800' },
  { label: 'Fire', number: '(046) 884-5700', tel: '0468845700' },
  { label: 'CDRRMO', number: '(046) 884-5600', tel: '0468845600' },
  { label: 'City Health', number: '(046) 884-5768', tel: '0468845768' },
  { label: 'CSWDO', number: '(046) 884-5400', tel: '0468845400' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string, onClose?: () => void) => {
    if (href === '/#contact') {
      e.preventDefault();
      onClose?.();
      if (location.pathname === '/') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      onClose?.();
    }
  };

  const toggleMenu = () => { setIsOpen(prev => !prev); setActiveMenu(null); };
  const closeMenu = () => { setIsOpen(false); setActiveMenu(null); };
  const toggleSubmenu = (label: string) => { setActiveMenu(prev => (prev === label ? null : label)); };
  const changeLanguage = (lang: LanguageType) => { i18n.changeLanguage(lang); };
  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50">
      {/* Emergency Hotlines Bar — always visible */}
      <div className="bg-[#1c0505] text-white text-[11px] overflow-x-auto whitespace-nowrap">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-7 flex items-center gap-3 min-w-max">
          <span className="flex items-center gap-1.5 shrink-0">
            <Phone className="h-2.5 w-2.5 text-red-400" />
            <span className="text-red-400 font-black uppercase tracking-wider text-[10px]">
              Emergency Hotlines:
            </span>
          </span>
          {HOTLINES.map((h, i) => (
            <React.Fragment key={h.tel}>
              {i > 0 && <span className="text-white/15">·</span>}
              <a href={`tel:${h.tel}`} className="hover:text-white transition-colors shrink-0">
                <span className="font-bold text-white/70">{h.label}</span>{' '}
                <span className="text-white/50">{h.number}</span>
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Navbar — glass */}
      <div className={`transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-lg shadow-black/5'
          : 'bg-white/60 backdrop-blur-md border-b border-white/30 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-5">
            {/* Logo + Wordmark */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/betterGeneraltrias-logo.png"
                alt="BetterGeneralTrias.org"
                style={{ height: '48px', width: 'auto' }}
              />
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-[10px] font-black text-primary-600 uppercase tracking-widest">
                  Better
                </span>
                <span className="text-[15px] font-black text-gray-900 leading-tight">
                  GeneralTrias<span className="text-primary-600">.org</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {mainNavigation.map(item => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <>
                      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 rounded-md hover:bg-primary-50 transition-colors">
                        {item.translationKey ? t(item.translationKey, item.label) : item.label}
                        <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                        <div className="py-1.5">
                          {item.children.map(child => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                            >
                              {child.translationKey ? t(child.translationKey, child.label) : child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={e => handleNavClick(e, item.href)}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive(item.href)
                          ? 'text-primary-700 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50'
                      }`}
                    >
                      {item.translationKey ? t(item.translationKey, item.label) : item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Language + Mobile toggle */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center border border-gray-200 rounded-md overflow-hidden">
                {(['en', 'fil'] as LanguageType[]).map((lang, idx) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`px-3 py-1.5 text-xs font-bold uppercase transition-colors ${
                      i18n.language === lang
                        ? 'bg-primary-700 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    } ${idx === 0 ? '' : 'border-l border-gray-200'}`}
                  >
                    {lang === 'en' ? 'EN' : 'FIL'}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200/50 bg-white/90 backdrop-blur-xl">
            <div className="px-4 py-3 space-y-1">
              {mainNavigation.map(item => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="w-full flex justify-between items-center px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                      >
                        {item.translationKey ? t(item.translationKey, item.label) : item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {activeMenu === item.label && (
                        <div className="ml-4 mt-1 space-y-0.5">
                          {item.children.map(child => (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={closeMenu}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-md"
                            >
                              {child.translationKey ? t(child.translationKey, child.label) : child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={e => handleNavClick(e, item.href, closeMenu)}
                      className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      {item.translationKey ? t(item.translationKey, item.label) : item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2 border-t border-gray-100 flex gap-2">
                {(['en', 'fil'] as LanguageType[]).map(lang => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`px-4 py-1.5 text-xs font-bold uppercase rounded border transition-colors ${
                      i18n.language === lang
                        ? 'bg-primary-700 text-white border-primary-700'
                        : 'bg-white text-gray-600 border-gray-300'
                    }`}
                  >
                    {lang === 'en' ? 'EN' : 'FIL'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
