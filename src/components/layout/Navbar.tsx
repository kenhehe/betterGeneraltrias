import React, { useState, useEffect } from 'react';
import {
  X,
  Menu,
  ChevronDown,
  Phone,
  FileText,
  Briefcase,
  MessageSquare,
  ExternalLink,
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

const QUICK_ACTIONS = [
  {
    icon: FileText,
    label: 'FOI Request',
    href: 'https://www.foi.gov.ph',
    external: true,
  },
  {
    icon: Briefcase,
    label: 'Business Permits',
    href: '/services/business',
    external: false,
  },
  {
    icon: FileText,
    label: 'Full Disclosure',
    href: '/government/transparency-documents/full-disclosure',
    external: false,
  },
  {
    icon: MessageSquare,
    label: 'Contact',
    href: '/#contact',
    external: false,
  },
];

const SMART_BAR_KEY = 'gentri_smartbar_dismissed';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [barDismissed, setBarDismissed] = useState(false);
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setBarDismissed(localStorage.getItem(SMART_BAR_KEY) === '1');
  }, []);

  const dismissBar = () => {
    setBarDismissed(true);
    localStorage.setItem(SMART_BAR_KEY, '1');
  };

  const handleNavClick = (
    e: React.MouseEvent,
    href: string,
    onClose?: () => void
  ) => {
    if (href === '/#contact') {
      e.preventDefault();
      onClose?.();
      if (location.pathname === '/') {
        document
          .getElementById('contact')
          ?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document
            .getElementById('contact')
            ?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      onClose?.();
    }
  };

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
    setActiveMenu(null);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setActiveMenu(prev => (prev === label ? null : label));
  };

  const changeLanguage = (lang: LanguageType) => {
    i18n.changeLanguage(lang);
  };

  const isActive = (href: string) =>
    href === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50">
      {/* Smart Bar — single line, dismissable */}
      {!barDismissed && (
        <div
          className="text-white text-[11px] overflow-x-auto whitespace-nowrap"
          style={{ background: '#061a0f' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-8 flex items-center gap-3 min-w-max">
            {/* Emergency hotlines */}
            <span className="flex items-center gap-1.5 text-red-400 font-black uppercase tracking-wider shrink-0">
              <Phone className="h-3 w-3" />
              Emergency:
            </span>
            <div className="flex items-center gap-0 shrink-0">
              {HOTLINES.map((h, i) => (
                <React.Fragment key={h.tel}>
                  {i > 0 && <span className="text-white/20 mx-1.5">·</span>}
                  <a
                    href={`tel:${h.tel}`}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <span className="font-semibold text-white/80">{h.label}</span>{' '}
                    {h.number}
                  </a>
                </React.Fragment>
              ))}
            </div>

            {/* Divider */}
            <span className="text-white/15 mx-1 shrink-0">|</span>

            {/* Quick links */}
            <div className="flex items-center gap-0 shrink-0">
              {QUICK_ACTIONS.map((action, i) => {
                const Icon = action.icon;
                const inner = (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-white/10 text-green-300 hover:text-white transition-colors font-medium">
                    <Icon className="h-2.5 w-2.5 opacity-70 shrink-0" />
                    {action.label}
                    {action.external && (
                      <ExternalLink className="h-2 w-2 opacity-40" />
                    )}
                  </span>
                );
                return (
                  <span key={action.label} className="flex items-center">
                    {i > 0 && (
                      <span className="text-white/15 mx-0.5">|</span>
                    )}
                    {action.external ? (
                      <a href={action.href} target="_blank" rel="noreferrer">
                        {inner}
                      </a>
                    ) : (
                      <Link
                        to={action.href}
                        onClick={e =>
                          action.href === '/#contact'
                            ? handleNavClick(e, action.href)
                            : undefined
                        }
                      >
                        {inner}
                      </Link>
                    )}
                  </span>
                );
              })}
            </div>

            {/* Spacer + dismiss */}
            <button
              onClick={dismissBar}
              className="ml-auto shrink-0 p-1 rounded text-white/30 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navbar — dark green */}
      <div
        className="border-b border-white/10 shadow-lg shadow-black/20"
        style={{ background: '#0a2e18' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-18 py-2">
            {/* Logo + Wordmark */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/betterGeneraltrias-logo.png"
                alt="BetterGenTri"
                className="h-13 w-auto"
                style={{ height: '52px' }}
              />
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">
                  Better
                </span>
                <span className="text-[15px] font-black text-white leading-tight">
                  GeneralTrias
                  <span className="text-green-400">.org</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {mainNavigation.map(item => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <>
                      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white rounded-md hover:bg-white/10 transition-colors">
                        {item.translationKey
                          ? t(item.translationKey, item.label)
                          : item.label}
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
                              {child.translationKey
                                ? t(child.translationKey, child.label)
                                : child.label}
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
                          ? 'text-white bg-white/15'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.translationKey
                        ? t(item.translationKey, item.label)
                        : item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Language + Mobile toggle */}
            <div className="flex items-center gap-2">
              {/* Language toggle */}
              <div className="hidden sm:flex items-center border border-white/20 rounded-md overflow-hidden">
                {(['en', 'fil'] as LanguageType[]).map((lang, idx) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`px-3 py-1.5 text-xs font-bold uppercase transition-colors ${
                      i18n.language === lang
                        ? 'bg-green-600 text-white'
                        : 'bg-transparent text-white/60 hover:text-white hover:bg-white/10'
                    } ${idx === 0 ? '' : 'border-l border-white/20'}`}
                  >
                    {lang === 'en' ? 'EN' : 'FIL'}
                  </button>
                ))}
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="lg:hidden border-t border-white/10"
            style={{ background: '#0a2e18' }}
          >
            <div className="px-4 py-3 space-y-1">
              {mainNavigation.map(item => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="w-full flex justify-between items-center px-3 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                      >
                        {item.translationKey
                          ? t(item.translationKey, item.label)
                          : item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${activeMenu === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {activeMenu === item.label && (
                        <div className="ml-4 mt-1 space-y-0.5">
                          {item.children.map(child => (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={closeMenu}
                              className="block px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                            >
                              {child.translationKey
                                ? t(child.translationKey, child.label)
                                : child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={e => handleNavClick(e, item.href, closeMenu)}
                      className="block px-3 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                    >
                      {item.translationKey
                        ? t(item.translationKey, item.label)
                        : item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2 border-t border-white/10 flex gap-2">
                {(['en', 'fil'] as LanguageType[]).map(lang => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`px-4 py-1.5 text-xs font-bold uppercase rounded border transition-colors ${
                      i18n.language === lang
                        ? 'bg-green-600 text-white border-green-600'
                        : 'bg-transparent text-white/60 border-white/20 hover:text-white'
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
