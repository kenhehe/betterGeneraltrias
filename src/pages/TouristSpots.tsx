import Section from '../components/ui/Section';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import {
  MapPin,
  Clock,
  Ticket,
  Mountain,
  Utensils,
  Palette,
  Zap,
  Church,
  Trees,
} from 'lucide-react';

interface Spot {
  name: string;
  description: string;
  category:
    | 'nature'
    | 'adventure'
    | 'food'
    | 'art'
    | 'religious'
    | 'recreation';
  fee?: string;
  hours?: string;
  tip?: string;
  gradient: string;
  icon: string;
  image?: string;
}

const SPOTS: Spot[] = [
  {
    name: 'San Francisco de Malabon Parish Church',
    description:
      'One of the oldest churches in Cavite, built by Franciscan missionaries in 1611. This historic landmark was the site where the Philippine national anthem was first performed during the independence proclamation on June 12, 1898.',
    category: 'religious',
    fee: 'Free',
    hours: 'Open daily',
    tip: 'Visit during the town fiesta (October 4) celebrating St. Francis of Assisi for the grandest experience.',
    gradient: 'from-stone-700 via-amber-700 to-yellow-600',
    icon: '⛪',
    image: '/images/san-francisco-church.jpg',
  },
  {
    name: 'Our Lady of Guadalupe Parish Church',
    description:
      'A beloved Catholic church in General Trias serving as the spiritual center of the community. It regularly hosts major religious celebrations, processions, and community events throughout the year.',
    category: 'religious',
    fee: 'Free',
    hours: 'Open daily',
    tip: 'Attend Sunday Mass to experience the vibrant faith community of General Trias.',
    gradient: 'from-blue-700 via-indigo-600 to-violet-500',
    icon: '🕊️',
    image: '/images/guadalupe-church.jpg',
  },
  {
    name: 'Eagle Ridge Golf & Country Club',
    description:
      'A premier 36-hole championship golf course set across the rolling terrain of Barangay Javalera. One of the finest golf clubs in the Philippines, attracting local and international golfers with its scenic fairways and world-class facilities.',
    category: 'recreation',
    fee: 'Green fees apply; members & guests',
    hours: 'Tee times from 6:00 AM',
    tip: 'Book tee times in advance, especially on weekends. Inquire about non-member access packages.',
    gradient: 'from-green-700 via-emerald-600 to-teal-500',
    icon: '⛳',
    image: '/images/eagle-ridge-golf.jpg',
  },
  {
    name: 'GBR Museum',
    description:
      'Located inside Gateway Business Park in Barangay Javalera, the GBR Museum showcases exhibits on local history, culture, and heritage. A great destination for learning about General Trias and its significance in Philippine history.',
    category: 'art',
    fee: 'Entrance fee applies',
    hours: 'Check museum schedule',
    tip: 'Call ahead to confirm opening hours before visiting.',
    gradient: 'from-violet-700 via-purple-600 to-fuchsia-500',
    icon: '🏛️',
    image: '/images/gbr-museum.jpg',
  },
  {
    name: 'General Trias City Park',
    description:
      "A central public park in the heart of General Trias providing a green space for residents and visitors. Perfect for morning jogs, family picnics, and community gatherings amid the city's tropical landscape.",
    category: 'nature',
    fee: 'Free',
    hours: 'Open daily',
    tip: "Visit in the early morning for a peaceful walk before the city gets busy.",
    gradient: 'from-green-600 via-lime-500 to-emerald-400',
    icon: '🌳',
    image: '/images/city-park.jpg',
  },
  {
    name: "City of General Trias People's Park",
    description:
      'Located in Barangay Biclatan, this well-maintained public park offers open spaces, walking paths, and recreational amenities for families. A favorite weekend destination for residents seeking fresh air and community activities.',
    category: 'nature',
    fee: 'Free',
    hours: 'Open daily',
    tip: 'Great for weekend family outings. Bring snacks and enjoy the open spaces.',
    gradient: 'from-emerald-600 via-green-500 to-lime-400',
    icon: '🌿',
    image: '/images/peoples-park.jpg',
  },
  {
    name: 'Valenciana Festival Street Dance',
    description:
      "Held every December 11–13 to celebrate the city's founding anniversary, this vibrant street festival features colorful costumes and energetic dance performances by schools across the city, alongside the famous Valenciana Cooking Festival.",
    category: 'art',
    fee: 'Free to watch',
    hours: 'December 11–13 annually',
    tip: "Don't miss the Valenciana Cooking Festival where all 33 barangays showcase their best version of the city's signature paella-like rice dish.",
    gradient: 'from-orange-600 via-red-500 to-pink-400',
    icon: '🎭',
    image: '/images/valenciana-festival.jpg',
  },
  {
    name: 'Town Fiesta of St. Francis of Assisi',
    description:
      "General Trias celebrates its patron saint 'Tata Kiko' on October 4 with grand parades, religious processions, concerts, and the unique 'pabialahay' — a pet blessing ceremony honoring St. Francis's connection to animals.",
    category: 'religious',
    fee: 'Free',
    hours: 'October 4 annually',
    tip: 'Join the pet blessing ceremony for a uniquely heartwarming community experience.',
    gradient: 'from-amber-600 via-orange-500 to-yellow-400',
    icon: '🎉',
    image: '/images/town-fiesta.jpg',
  },
  {
    name: "GenTri's Best Dairy Products",
    description:
      'The General Trias Dairy Raisers Multipurpose Cooperative produces award-winning carabao milk products including yogurt, ice cream, and fresh milk. A unique local agri-tourism experience celebrating the city\'s agricultural roots.',
    category: 'food',
    fee: 'Products for sale',
    hours: 'Check availability',
    tip: 'Try the carabao milk ice cream — a local delicacy you cannot find anywhere else.',
    gradient: 'from-sky-600 via-blue-500 to-cyan-400',
    icon: '🥛',
    image: '/images/dairy-products.jpg',
  },
  {
    name: "Eden's Pastillas",
    description:
      "A beloved local confectionery known for its handcrafted pastillas — soft milk candies that are a signature pasalubong of General Trias. Made from carabao milk following traditional Filipino recipes passed down through generations.",
    category: 'food',
    fee: 'Products for sale',
    hours: 'Check availability',
    tip: 'Buy in bulk as pasalubong — they make great gifts and are loved by all ages.',
    gradient: 'from-pink-500 via-rose-400 to-fuchsia-400',
    icon: '🍬',
    image: '/images/pastillas.jpg',
  },
  {
    name: 'Jail Handicrafts Exhibition',
    description:
      "General Trias showcases remarkable rehabilitation programs through its jail's handicraft exhibits. The Female Dormitory produces bags and woven items while the Male Dormitory creates paintings, metal crafts, and woodworks — beautiful products with meaningful stories.",
    category: 'art',
    fee: 'Products for sale',
    hours: 'Check schedule',
    tip: 'Purchasing these items directly supports the rehabilitation of inmates and their reintegration into society.',
    gradient: 'from-teal-600 via-cyan-500 to-sky-400',
    icon: '🎨',
    image: '/images/jail-handicrafts.jpg',
  },
  {
    name: 'Pasong Kalabaw Historical Marker',
    description:
      "The site where the 'First Cry of Cavite' took place on August 31, 1896, marking the start of the Philippine Revolution against Spanish colonial rule. A deeply significant historical landmark in the birthplace of Cavite's revolutionary spirit.",
    category: 'art',
    fee: 'Free',
    hours: 'Open daily',
    tip: "Visit during August to witness commemorative events marking the anniversary of the First Cry of Cavite.",
    gradient: 'from-red-700 via-rose-600 to-orange-500',
    icon: '🏴',
    image: '/images/pasong-kalabaw.jpg',
  },
];

const CATEGORY_META: Record<
  Spot['category'],
  {
    label: string;
    color: string;
    Icon: React.ComponentType<{ className?: string }>;
  }
> = {
  nature: {
    label: 'Nature',
    color: 'bg-green-100 text-green-800',
    Icon: Trees,
  },
  adventure: {
    label: 'Adventure',
    color: 'bg-orange-100 text-orange-800',
    Icon: Zap,
  },
  food: {
    label: 'Food & Dining',
    color: 'bg-amber-100 text-amber-800',
    Icon: Utensils,
  },
  art: {
    label: 'Arts & Culture',
    color: 'bg-purple-100 text-purple-800',
    Icon: Palette,
  },
  religious: {
    label: 'Religious',
    color: 'bg-blue-100 text-blue-800',
    Icon: Church,
  },
  recreation: {
    label: 'Recreation',
    color: 'bg-teal-100 text-teal-800',
    Icon: Mountain,
  },
};

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tourism', href: '/services/tourism' },
  {
    label: 'Explore Tourist Spots',
    href: '/services/tourism/explore-tourist-spots',
  },
];

export default function TouristSpots() {
  return (
    <>
      <SEO
        title="Explore Tourist Spots in General Trias City"
        description="Discover the top tourist destinations in General Trias City — from historic churches and Eagle Ridge Golf Club to the Valenciana Festival and local delicacies."
        keywords="General Trias tourist spots, Eagle Ridge Golf, San Francisco de Malabon Church, Valenciana Festival, GenTri tourism, GBR Museum"
      />

      {/* Hero banner */}
      <div className="relative text-white overflow-hidden"
        style={{ backgroundColor: '#16643c' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 24px)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex items-center gap-2 mb-3 text-white/70 text-xs font-semibold uppercase tracking-widest">
            <MapPin className="h-3.5 w-3.5" />
            General Trias City, Cavite
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-3">
            Explore Tourist Spots
          </h1>
          <p className="text-white/80 text-base max-w-xl leading-relaxed">
            General Trias is one of the fastest-growing cities in the
            Philippines — rich in revolutionary history, vibrant festivals,
            world-class golf, and authentic local flavors.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {Object.entries(CATEGORY_META).map(([key, meta]) => (
              <span
                key={key}
                className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                <meta.Icon className="h-3 w-3" />
                {meta.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Section className="py-10">
        <Breadcrumbs className="mb-8" items={BREADCRUMBS} />

        {/* Album masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {SPOTS.map(spot => {
            const meta = CATEGORY_META[spot.category];
            const CatIcon = meta.Icon;
            return (
              <div
                key={spot.name}
                className="break-inside-avoid rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                {/* Cover: photo or gradient fallback */}
                {spot.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={spot.image}
                      alt={spot.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span
                      className={`absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${meta.color}`}
                    >
                      <CatIcon className="h-3 w-3" />
                      {meta.label}
                    </span>
                  </div>
                ) : (
                  <div
                    className={`bg-gradient-to-br ${spot.gradient} h-36 flex items-end p-4 relative`}
                  >
                    <span className="absolute top-4 right-4 text-4xl select-none">
                      {spot.icon}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${meta.color}`}
                    >
                      <CatIcon className="h-3 w-3" />
                      {meta.label}
                    </span>
                  </div>
                )}

                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-base font-black text-gray-900 mb-2 leading-snug">
                    {spot.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {spot.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-gray-500">
                    {spot.fee && (
                      <div className="flex items-start gap-2">
                        <Ticket className="h-3.5 w-3.5 mt-0.5 shrink-0 text-gray-400" />
                        <span>{spot.fee}</span>
                      </div>
                    )}
                    {spot.hours && (
                      <div className="flex items-start gap-2">
                        <Clock className="h-3.5 w-3.5 mt-0.5 shrink-0 text-gray-400" />
                        <span>{spot.hours}</span>
                      </div>
                    )}
                  </div>

                  {spot.tip && (
                    <div className="mt-4 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-800 leading-relaxed">
                      <span className="font-bold">Tip: </span>
                      {spot.tip}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
