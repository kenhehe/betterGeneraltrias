import { Facebook, Github, Heart, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function useVisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Only increment once per session
    const sessionKey = 'bt_visit_counted';
    const hasVisited = sessionStorage.getItem(sessionKey);
    const url = hasVisited ? '/api/visits' : '/api/visits?up=1';

    fetch(url)
      .then(r => r.json())
      .then(d => {
        if (d?.count !== undefined) {
          setCount(d.count);
          if (!hasVisited) sessionStorage.setItem(sessionKey, '1');
        }
      })
      .catch(() => {});
  }, []);

  return count;
}

function useCarbonBadge() {
  useEffect(() => {
    const id = 'wcb-script';
    if (document.getElementById(id)) return;
    const s = document.createElement('script');
    s.id = id;
    s.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js';
    s.defer = true;
    document.body.appendChild(s);
  }, []);
}

export default function Footer() {
  const { t } = useTranslation('common');
  const visitCount = useVisitCounter();
  useCarbonBadge();

  const QUICK_LINKS = [
    { labelKey: 'nav.services', href: '/services' },
    { labelKey: 'nav.government', href: '/government/departments' },
    {
      labelKey: 'nav.transparency',
      href: '/government/transparency-documents',
    },
    {
      labelKey: 'nav.fullDisclosure',
      href: '/government/transparency-documents/full-disclosure',
    },
    {
      labelKey: 'nav.foiReleases',
      href: '/government/transparency-documents/foi-releases',
    },
    { labelKey: 'nav.development', href: '/development-projects' },
    { labelKey: 'contact.title', href: '#contact' },
  ];

  const RESOURCES = [
    { label: 'Open Data Philippines', href: 'https://data.gov.ph' },
    { label: 'Freedom of Information', href: 'https://www.foi.gov.ph' },
    {
      label: 'Official General Trias Website',
      href: 'https://www.generaltrias.gov.ph',
    },
    { label: 'DILG FDP Portal', href: 'https://fdpp.blgs.gov.ph' },
    { label: 'PhilGEPS', href: 'https://www.philgeps.gov.ph' },
    { label: 'Official Gov.ph', href: 'https://www.gov.ph' },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <img
                src="/betterGeneraltrias-white-logo.png"
                alt="BetterGeneralTrias.org"
                className="h-9 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t('footer.mission')}
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.facebook.com/betterGeneralTrias/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/kenhehe/betterGeneraltrias"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/bettergovph"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <DiscordIcon className="h-5 w-5" />
              </a>
            </div>
            {/* BetterGov.ph logo */}
            <a
              href="https://bettergov.ph"
              target="_blank"
              rel="noreferrer"
              className="inline-block opacity-50 hover:opacity-80 transition-opacity"
            >
              <img
                src="https://bettersolano.org/assets/images/logo/bettergov-footer.svg"
                alt="BetterGov.ph"
                className="h-10 w-auto brightness-0 invert"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              {t('footer.resources')}
            </h3>
            <ul className="space-y-2.5">
              {RESOURCES.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cost + CTAs */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-900/40 text-green-400 border border-green-800 rounded-full px-3 py-1.5 text-xs font-bold mb-5">
              {t('footer.costLabel')}{' '}
              <span className="text-yellow-300">₱0</span>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/kenhehe/betterGeneraltrias"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-white bg-primary-700 hover:bg-primary-600 px-4 py-2.5 rounded-lg transition-colors"
              >
                <Heart className="h-4 w-4" />
                {t('footer.volunteer')}
              </a>
              <a
                href="https://github.com/kenhehe/betterGeneraltrias"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-gray-300 bg-gray-800 hover:bg-gray-700 px-4 py-2.5 rounded-lg transition-colors"
              >
                <Github className="h-4 w-4" />
                {t('footer.contribute')}
              </a>
            </div>
            <div className="mt-4 wcb-footer-wrap">
              <div id="wcb" className="carbonbadge wcb-d"></div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-2 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} BetterGeneralTrias.org
            <span className="mx-2 opacity-40">|</span>
            MIT | CC BY 4.0
            <span className="mx-2 opacity-40">|</span>
            {t('footer.attribution')}
          </span>
          <span className="flex items-center gap-1.5 bg-gray-800 border border-gray-700 rounded-full px-3 py-1.5">
            <Eye className="h-3 w-3 text-primary-400" />
            <span className="text-gray-300 font-bold">
              {visitCount !== null ? visitCount.toLocaleString() : '—'}
            </span>
            <span className="text-gray-500">visits</span>
          </span>
          <a
            href="https://www.kennethangelramirez.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-gray-600 hover:text-gray-300 transition-colors group"
          >
            <Heart className="h-3 w-3 text-gray-600 group-hover:text-red-400 group-hover:fill-red-400 transition-colors" />
            <span>
              {t('footer.builtBy')}{' '}
              <span className="text-gray-400 group-hover:text-white transition-colors font-medium">
                Kenneth Angel Ramirez
              </span>
            </span>
          </a>
          <span className="flex items-center gap-1.5 opacity-60">
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Ver. 0.2.0
          </span>
        </div>
      </div>
    </footer>
  );
}
