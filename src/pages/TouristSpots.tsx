import Section from '../components/ui/Section';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import {
  MapPin,
  Phone,
  ExternalLink,
  Church,
  Trees,
  Trophy,
} from 'lucide-react';

interface Spot {
  id: number;
  name: string;
  description: string;
  location: string;
  contact?: string;
  website?: string;
  facebook?: string;
  category: 'religious' | 'museum' | 'recreation' | 'golf';
  accent: string;
  emoji: string;
}

const SPOTS: Spot[] = [
  {
    id: 1,
    name: 'Our Lady of Guadalupe Parish Church',
    description:
      'A beloved Catholic parish and the spiritual heart of the community. Hosts major religious celebrations, processions, and community events throughout the year. One of the most visited religious sites in General Trias.',
    location: 'Crisanto M. De los Reyes Ave., General Trias, Cavite',
    contact: '(046) 433-0544',
    facebook: 'https://bit.ly/OLGPJavaleraFB',
    category: 'religious',
    accent: 'from-blue-600 to-indigo-700',
    emoji: '⛪',
  },
  {
    id: 2,
    name: 'San Francisco de Malabon Parish Church',
    description:
      'Built by Franciscan missionaries in 1611, this is one of the oldest churches in Cavite. A national historical landmark where the Philippine national anthem was first performed during the June 12, 1898 independence proclamation.',
    location: 'Governor Ferrer Dr., Sampalucan, General Trias, Cavite',
    contact: '0976 036 5475',
    facebook: 'https://bit.ly/SanFranciscoDeMalabonFB',
    category: 'religious',
    accent: 'from-amber-600 to-orange-700',
    emoji: '🕍',
  },
  {
    id: 3,
    name: 'GBR Museum',
    description:
      'Located inside the Gateway Business Park, the GBR Museum showcases exhibits on local history, culture, and heritage — offering residents and visitors a deeper look into the rich story of General Trias City.',
    location:
      'Gateway Business Park, Barangay Javalera, General Trias City, Cavite',
    contact: '(046) 885-7027',
    facebook: 'https://bit.ly/GBRMuseumFB',
    category: 'museum',
    accent: 'from-violet-600 to-purple-700',
    emoji: '🏛️',
  },
  {
    id: 4,
    name: 'General Trias City Park',
    description:
      'A central public park in the heart of the city, ideal for morning jogs, family picnics, and community gatherings. A green sanctuary for residents looking for fresh air and open space within the urban center.',
    location: 'General Trias City Park, General Trias, Cavite',
    facebook: 'https://bit.ly/GenTriCityParkFB',
    category: 'recreation',
    accent: 'from-emerald-600 to-green-700',
    emoji: '🌳',
  },
  {
    id: 5,
    name: 'Eagle Ridge Golf & Country Club',
    description:
      'A premier 36-hole championship golf course in Barangay Javalera, regarded as one of the finest golf clubs in the Philippines. Draws local and international golfers with its scenic fairways and world-class facilities.',
    location: 'Brgy. Javalera, City of General Trias, Cavite',
    contact: '09171220723',
    website: 'https://eagle-ridge.com.ph/',
    category: 'golf',
    accent: 'from-teal-600 to-cyan-700',
    emoji: '⛳',
  },
  {
    id: 6,
    name: "City of General Trias People's Park",
    description:
      'A well-maintained public park in Barangay Biclatan offering open spaces, walking paths, and recreational amenities for all ages. A favorite weekend destination for families seeking relaxation and community activities.',
    location: 'Brgy. Biclatan, General Trias, Cavite',
    category: 'recreation',
    accent: 'from-lime-600 to-green-600',
    emoji: '🌿',
  },
];

const CATEGORY_META: Record<
  Spot['category'],
  { label: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  religious: { label: 'Religious & Historical', Icon: Church },
  museum: { label: 'Museum & Culture', Icon: Trophy },
  recreation: { label: 'Parks & Recreation', Icon: Trees },
  golf: { label: 'Leisure & Sports', Icon: Trophy },
};

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tourism', href: '/services/tourism' },
  { label: 'Must-See Places', href: '/services/tourism/explore-tourist-spots' },
];

export default function TouristSpots() {
  return (
    <>
      <SEO
        title="Must-See Places in General Trias City"
        description="Explore the official tourist spots of General Trias City, Cavite — from century-old churches and a heritage museum to championship golf and scenic public parks."
        keywords="General Trias tourist spots, Eagle Ridge Golf, San Francisco de Malabon Church, GBR Museum, General Trias City Park, GenTri tourism"
      />

      {/* Hero */}
      <div
        className="relative text-white overflow-hidden"
        style={{ backgroundColor: '#16643c' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 40%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center gap-2 mb-4 text-green-300 text-xs font-bold uppercase tracking-widest">
            <MapPin className="h-3.5 w-3.5" />
            General Trias City, Cavite
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-xl">
            Must-See Places
          </h1>
          <p className="text-green-100 text-base max-w-lg leading-relaxed mb-8">
            Discover the official tourist destinations of General Trias — from
            centuries-old churches to championship golf and lush public parks.
          </p>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(CATEGORY_META).map(([key, meta]) => {
              const count = SPOTS.filter(s => s.category === key).length;
              return (
                <span
                  key={key}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  <meta.Icon className="h-3 w-3" />
                  {meta.label}
                  <span className="bg-white/20 rounded-full px-1.5 py-0.5 text-[10px] font-bold">
                    {count}
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-gray-50 min-h-screen">
        <Section className="py-10">
          <Breadcrumbs className="mb-10" items={BREADCRUMBS} />

          {/* Spot count badge */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-black text-gray-900">
              {SPOTS.length} Official Tourist Spots
            </h2>
            <span className="text-xs text-gray-400 font-medium">
              Source: generaltrias.gov.ph
            </span>
          </div>

          {/* Spots grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPOTS.map((spot, idx) => {
              const meta = CATEGORY_META[spot.category];
              const CatIcon = meta.Icon;
              return (
                <div
                  key={spot.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Colored top bar + number */}
                  <div
                    className={`bg-gradient-to-r ${spot.accent} p-5 flex items-start justify-between`}
                  >
                    <div>
                      <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                        <CatIcon className="h-3 w-3" />
                        {meta.label}
                      </span>
                      <h3 className="text-white font-black text-lg leading-tight">
                        {spot.name}
                      </h3>
                    </div>
                    <span className="text-4xl ml-4 shrink-0 select-none group-hover:scale-110 transition-transform duration-200">
                      {spot.emoji}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {spot.description}
                    </p>

                    {/* Info rows */}
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2 text-gray-500">
                        <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-gray-400" />
                        <span>{spot.location}</span>
                      </div>
                      {spot.contact && (
                        <a
                          href={`tel:${spot.contact.replace(/[^0-9]/g, '')}`}
                          className="flex items-center gap-2 text-gray-500 hover:text-primary-700 transition-colors"
                        >
                          <Phone className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                          <span>{spot.contact}</span>
                        </a>
                      )}
                    </div>

                    {/* Links */}
                    {(spot.website || spot.facebook) && (
                      <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                        {spot.website && (
                          <a
                            href={spot.website}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-3 py-1.5 rounded-lg transition-colors"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Visit Website
                          </a>
                        )}
                        {spot.facebook && (
                          <a
                            href={spot.facebook}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Facebook Page
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Bottom index */}
                  <div className="px-5 pb-4 flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
                      Spot #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA footer */}
          <div className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div>
              <p className="font-black text-gray-900 mb-1">
                Planning a visit to General Trias?
              </p>
              <p className="text-sm text-gray-500">
                Contact the City Tourism Office for more information.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="tel:0468845768"
                className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
              >
                <Phone className="h-4 w-4" />
                (046) 884-5768
              </a>
              <a
                href="https://www.generaltrias.gov.ph/tourism/must-see-places"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Official Site
              </a>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
