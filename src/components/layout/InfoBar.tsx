import { Phone, FileText, Briefcase, MessageSquare, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  {
    icon: Phone,
    label: '(046) 884-5768',
    href: 'tel:0468845768',
    external: false,
  },
];

export default function InfoBar() {
  return (
    <div className="bg-primary-900 text-white text-xs border-b border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-end gap-1 overflow-x-auto whitespace-nowrap">
        <span className="text-green-400 font-bold uppercase tracking-widest text-[10px] mr-3 shrink-0">
          Quick Access
        </span>
        {QUICK_ACTIONS.map((action, i) => {
          const Icon = action.icon;
          const inner = (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md hover:bg-white/10 transition-colors text-green-200 hover:text-white font-medium">
              <Icon className="h-3 w-3 shrink-0 opacity-70" />
              {action.label}
              {action.external && <ExternalLink className="h-2.5 w-2.5 opacity-50" />}
            </span>
          );
          return (
            <span key={action.label} className="flex items-center">
              {i > 0 && <span className="text-primary-700 mx-0.5">|</span>}
              {action.external ? (
                <a href={action.href} target="_blank" rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <Link to={action.href}>{inner}</Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
