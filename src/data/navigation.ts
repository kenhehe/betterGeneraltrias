import type { NavigationItem } from '../types';
import { serviceCategories as servicesData } from './yamlLoader';

interface Category {
  category: string;
  slug: string;
  subcategories?: { name: string; slug: string }[];
}

export const mainNavigation: NavigationItem[] = [
  { label: 'Home', href: '/', translationKey: 'nav.home' },
  {
    label: 'Services',
    href: '/services',
    translationKey: 'nav.services',
    children: (servicesData.categories as Category[]).map(c => ({
      label: c.category,
      href: `/services/${c.slug}`,
      translationKey: `services.categories.${c.slug}.name`,
    })),
  },
  {
    label: 'Government',
    href: '/government/departments',
    translationKey: 'nav.government',
    children: [
      {
        label: 'Departments & Officials',
        href: '/government/departments',
        translationKey: 'nav.departments',
      },
      {
        label: 'Legislative (City Council)',
        href: '/government/legislative',
        translationKey: 'nav.legislative',
      },
      {
        label: 'Local Officials',
        href: '/government/departments/officials',
        translationKey: 'nav.localOfficials',
      },
    ],
  },
  {
    label: 'Transparency',
    href: '/government/transparency-documents',
    translationKey: 'nav.transparency',
    children: [
      {
        label: 'Full Disclosure',
        href: '/government/transparency-documents/full-disclosure',
        translationKey: 'nav.fullDisclosure',
      },
      {
        label: 'Annual Budget',
        href: '/government/transparency-documents/annual-budget',
        translationKey: 'nav.annualBudget',
      },
      {
        label: 'SALN',
        href: '/government/transparency-documents/saln',
        translationKey: 'nav.saln',
      },
      {
        label: 'FOI Releases',
        href: '/government/transparency-documents/foi-releases',
        translationKey: 'nav.foiReleases',
      },
    ],
  },
  {
    label: 'Statistics',
    href: '/government/reports-and-statistics',
    translationKey: 'nav.statistics',
    children: [
      {
        label: 'City Profile',
        href: '/government/reports-and-statistics/city-profile',
        translationKey: 'nav.cityProfile',
      },
      {
        label: 'Annual Report',
        href: '/government/reports-and-statistics/annual-report',
        translationKey: 'nav.annualReport',
      },
      {
        label: 'Infrastructure Projects',
        href: '/government/reports-and-statistics/infrastructure-projects',
        translationKey: 'nav.infrastructureProjects',
      },
    ],
  },
  { label: 'Contact', href: '/#contact', translationKey: 'nav.contact' },
];

export const footerNavigation = {
  mainSections: [
    {
      title: 'Quick Links',
      links: [
        { label: 'All Services', href: '/services' },
        ...(servicesData.categories as Category[])
          .slice(0, 5)
          .map(c => ({ label: c.category, href: `/services/${c.slug}` })),
        {
          label: "Citizen's Charter",
          href: '/government/guides-and-regulations/citizens-charter',
        },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Open Data Philippines', href: 'https://data.gov.ph' },
        { label: 'Freedom of Information', href: 'https://www.foi.gov.ph' },
        {
          label: 'Official General Trias Website',
          href: 'https://www.generaltrias.gov.ph',
        },
        { label: 'DILG FDP Portal', href: 'https://fdpp.blgs.gov.ph' },
        { label: 'PhilGEPS', href: 'https://www.philgeps.gov.ph' },
        {
          label: 'Official Gazette',
          href: 'https://www.officialgazette.gov.ph',
        },
      ],
    },
  ],
  socialLinks: [
    {
      label: 'Facebook',
      href: 'https://web.facebook.com/betterGentri',
    },
  ],
};
