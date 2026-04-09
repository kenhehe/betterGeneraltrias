import React, { useState, useEffect } from 'react';
import {
  X,
  Menu,
  ChevronDown,
  AlertTriangle,
  FileText,
  Briefcase,
  MessageSquare,
  ExternalLink,
  ShieldAlert,
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
    label: 'Contact City Hall',
    href: '/#contact',
    external: false,
  },
];

const SMART_BAR_KEY = 'gentri_smartbar_dismissed';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [barDismissed, setBarDismissed] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
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
      {/* Smart Info Bar */}
      {!barDismissed && (
        <div className="bg-primary-950 text-white text-xs border-b border-primary-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-between gap-2 overflow-x-auto whitespace-nowrap">
            {/* Left: Emergency pill */}
            <div className="relative shrink-0">
              <button
                onClick={() => setEmergencyOpen(prev => !prev)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] transition-colors"
              >
                <ShieldAlert className="h-3 w-3" />
                Emergency
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-150 ${emergencyOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {emergencyOpen && (
                <div className="absolute top-full left-0 mt-1.5 bg-white rounded-xl shadow-xl border border-gray-100 z-50 min-w-[240px] p-3">
                  <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <AlertTriangle className="h-3 w-3" />
                    Emergency Hotlines
                  </p>
                  <div className="space-y-1.5">
                    {HOTLINES.map(h => (
                      <a
                        key={h.tel}
                        href={`tel:${h.tel}`}
                        className="flex items-center justify-between group hover:bg-red-50 rounded-lg px-2 py-1.5 transition-colors"
                      >
                        <span className="text-xs font-bold text-gray-700 group-hover:text-red-700">
                          {h.label}
                        </span>
                        <span className="text-xs text-gray-500 group-hover:text-red-600 font-mono">
                          {h.number}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Quick actions */}
            <div className="flex items-center gap-0.5 ml-auto">
              {QUICK_ACTIONS.map((action, i) => {
                const Icon = action.icon;
                const inner = (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md hover:bg-white/10 transition-colors text-green-300 hover:text-white font-medium text-[11px]">
                    <Icon className="h-3 w-3 shrink-0 opacity-70" />
                    {action.label}
                    {action.external && (
                      <ExternalLink className="h-2.5 w-2.5 opacity-50" />
                    )}
                  </span>
                );
                return (
                  <span key={action.label} className="flex items-center">
                    {i > 0 && (
                      <span className="text-primary-700 mx-0.5 select-none">
                        |
                      </span>
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

            {/* Dismiss button */}
            <button
              onClick={dismissBar}
              className="shrink-0 ml-2 p-1 rounded hover:bg-white/10 text-green-400 hover:text-white transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Emergency dropdown backdrop */}
          {emergencyOpen && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => setEmergencyOpen(false)}
            />
          )}
        </div>
      )}

      {/* Main Navbar */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo + Wordmark */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/betterGeneraltrias-logo.png"
                alt="BetterGenTri"
                className="h-14 w-auto"
              />
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-[11px] font-black text-primary-700 uppercase tracking-widest">
                  Better
                </span>
                <span className="text-base font-black text-gray-900 leading-tight">
                  GeneralTrias
                  <span className="text-primary-600 font-black">.org</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNavigation.map(item => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <>
                      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 rounded-md hover:bg-primary-50 transition-colors">
                        {item.translationKey
                          ? t(item.translationKey, item.label)
                          : item.label}
                        <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                        <div className="py-1">
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
                          ? 'text-primary-700 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50'
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

              {/* Mobile hamburger */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
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
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-3 space-y-1">
              {mainNavigation.map(item => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                      >
                        {item.translationKey
                          ? t(item.translationKey, item.label)
                          : item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${activeMenu === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {activeMenu === item.label && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.children.map(child => (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={closeMenu}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-md"
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
                      className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      {item.translationKey
                        ? t(item.translationKey, item.label)
                        : item.label}
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
