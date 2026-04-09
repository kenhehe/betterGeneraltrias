import React, { useState } from 'react';
import { X, Menu, ChevronDown, Phone } from 'lucide-react';
import { mainNavigation } from '../../data/navigation';
import type { LanguageType } from '../../types/index';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import InfoBar from './InfoBar';

const HOTLINES = [
  { labelKey: 'hotlines.police', number: '(046) 884-1555', tel: '0468841555' },
  {
    labelKey: 'hotlines.hospital',
    number: '(046) 884-5800',
    tel: '0468845800',
  },
  { labelKey: 'hotlines.fire', number: '(046) 884-5700', tel: '0468845700' },
  { labelKey: 'hotlines.cdrrmo', number: '(046) 884-5600', tel: '0468845600' },
  { labelKey: 'hotlines.cho', number: '(046) 884-5768', tel: '0468845768' },
  { labelKey: 'hotlines.cswdo', number: '(046) 884-5400', tel: '0468845400' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();
  const location = useLocation();

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
      {/* Emergency Hotlines Bar */}
      <div className="bg-red-600 text-white overflow-x-auto whitespace-nowrap">
        <div className="flex items-center px-6 py-2.5 min-w-max mx-auto gap-1">
          <Phone className="h-3.5 w-3.5 mr-3 shrink-0 opacity-90" />
          <span className="text-xs font-bold uppercase tracking-wide opacity-80 mr-3">
            Emergency Hotlines
          </span>
          {HOTLINES.map((h, i) => (
            <React.Fragment key={h.labelKey}>
              <a
                href={`tel:${h.tel}`}
                className="hover:underline transition-opacity hover:opacity-80 px-4 py-1 text-xs"
              >
                <span className="font-bold">{t(h.labelKey)}:</span>{' '}
                <span className="opacity-90">{h.number}</span>
              </a>
              {i < HOTLINES.length - 1 && (
                <span className="opacity-30 select-none mx-0.5">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Quick Access Bar */}
      <InfoBar />

      {/* Main Navbar */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/betterGeneraltrias-logo.png"
                alt="BetterGenTri"
                className="h-16 w-auto"
              />
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
