import React, { useState, useEffect } from 'react';
import { X, Menu, ChevronDown, Phone, Thermometer, Clock } from 'lucide-react';
import { mainNavigation } from '../../data/navigation';
import type { LanguageType } from '../../types/index';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function formatDatetime(): string {
  const now = new Date();
  const date = now.toLocaleDateString('en-PH', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'Asia/Manila',
  });
  const time = now.toLocaleTimeString('en-PH', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Manila',
  });
  return `${date} · ${time} PHT`;
}

const HOTLINES = [
  { labelKey: 'hotlines.police', number: '(046) 413-1282', tel: '0464131282' },
  {
    labelKey: 'hotlines.hospital',
    number: '(046) 423-3195',
    tel: '0464233195',
  },
  { labelKey: 'hotlines.fire', number: '(046) 483-1193', tel: '0464831193' },
  { labelKey: 'hotlines.cdrrmo', number: '(046) 483-0446', tel: '0464830446' },
  { labelKey: 'hotlines.cho', number: '(046) 483-0604', tel: '0464830604' },
  { labelKey: 'hotlines.cswdo', number: '(046) 483-0494', tel: '0464830494' },
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

  const CURRENCIES = ['USD', 'EUR', 'JPY', 'GBP', 'SGD'] as const;
  const CURRENCY_SYMBOLS: Record<string, string> = {
    USD: '$',
    EUR: '€',
    JPY: '¥',
    GBP: '£',
    SGD: 'S$',
  };
  const [rates, setRates] = useState<Record<string, string>>({});
  const [currencyIdx, setCurrencyIdx] = useState(0);
  const [forexVisible, setForexVisible] = useState(true);
  const [temp, setTemp] = useState('--');
  const [datetime, setDatetime] = useState(formatDatetime());

  const activeCurrency = CURRENCIES[currencyIdx];
  const forexDisplay = rates[activeCurrency]
    ? `${CURRENCY_SYMBOLS[activeCurrency]}1 ${activeCurrency} = ₱${rates[activeCurrency]}`
    : `1 ${activeCurrency} = ₱--`;

  useEffect(() => {
    const timer = setInterval(() => setDatetime(formatDatetime()), 60_000);

    // Fetch all rates at once from USD base, then derive cross rates
    const cached = localStorage.getItem('bt_rates');
    const cachedTime = localStorage.getItem('bt_rates_time');
    if (cached && cachedTime && Date.now() - parseInt(cachedTime) < 3_600_000) {
      setRates(JSON.parse(cached));
    } else {
      fetch('https://open.er-api.com/v6/latest/PHP')
        .then(r => r.json())
        .then(data => {
          if (data?.rates) {
            const phpRates = data.rates as Record<string, number>;
            const computed: Record<string, string> = {};
            for (const cur of ['USD', 'EUR', 'JPY', 'GBP', 'SGD']) {
              if (phpRates[cur]) {
                computed[cur] = (1 / phpRates[cur]).toFixed(2);
              }
            }
            localStorage.setItem('bt_rates', JSON.stringify(computed));
            localStorage.setItem('bt_rates_time', String(Date.now()));
            setRates(computed);
          }
        })
        .catch(() => {});
    }

    // Rotate currency every 3 seconds with fade
    const currencyTimer = setInterval(() => {
      setForexVisible(false);
      setTimeout(() => {
        setCurrencyIdx(i => (i + 1) % CURRENCIES.length);
        setForexVisible(true);
      }, 300);
    }, 3_000);

    const cachedTemp = localStorage.getItem('bt_temp');
    const cachedTempTime = localStorage.getItem('bt_temp_time');
    if (
      cachedTemp &&
      cachedTempTime &&
      Date.now() - parseInt(cachedTempTime) < 1_800_000
    ) {
      setTemp(cachedTemp);
    } else {
      fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=14.1153&longitude=120.9621&current_weather=true'
      )
        .then(r => r.json())
        .then(data => {
          if (data?.current_weather?.temperature !== undefined) {
            const t = `${Math.round(data.current_weather.temperature)}°C`;
            localStorage.setItem('bt_temp', t);
            localStorage.setItem('bt_temp_time', String(Date.now()));
            setTemp(t);
          }
        })
        .catch(() => {});
    }

    return () => {
      clearInterval(timer);
      clearInterval(currencyTimer);
    };
  }, []);

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

      {/* Info Bar: forex / weather / datetime */}
      <div className="bg-primary-900 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-end gap-6">
          <span className="flex items-center gap-1.5 opacity-90">
            <span
              className="font-semibold transition-opacity duration-300"
              style={{ opacity: forexVisible ? 1 : 0 }}
            >
              {forexDisplay}
            </span>
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="hidden sm:flex items-center gap-1.5 opacity-90">
            <Thermometer className="h-3 w-3 opacity-70" />
            <span className="text-gray-300">Tagaytay</span>
            <span className="font-semibold">{temp}</span>
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="hidden md:flex items-center gap-1.5 opacity-90">
            <Clock className="h-3 w-3 opacity-70" />
            <span className="font-semibold">{datetime}</span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/logo.png"
                alt="BetterTagaytay"
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
