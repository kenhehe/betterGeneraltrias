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
    name: 'Taal Volcano & Lake',
    description:
      "Tagaytay's most iconic landmark — the world's smallest active volcano sitting in a lake within a lake. Best viewed from the ridge at sunrise or sunset for a breathtaking panorama.",
    category: 'nature',
    fee: 'Free (viewpoints); Boat ride extra',
    hours: 'Open 24 hrs (viewpoints)',
    tip: 'Check PHIVOLCS advisories before visiting. Best viewed early morning.',
    gradient: 'from-slate-700 via-slate-600 to-stone-500',
    icon: '🌋',
    image: '/images/taal-volcano.jpg',
  },
  {
    name: "People's Park in the Sky",
    description:
      'Situated at the highest point of Tagaytay at 709 meters above sea level. Originally planned as a Marcos mansion, it now offers unmatched 360° views of the ridge, lake, and beyond.',
    category: 'nature',
    fee: 'Minimal entrance fee',
    hours: '7:00 AM – 6:00 PM',
    tip: 'Bring a jacket — it gets windy and cold at the top.',
    gradient: 'from-sky-600 via-blue-500 to-cyan-400',
    icon: '☁️',
    image: '/images/peoples-park.jpg',
  },
  {
    name: 'Sky Ranch Tagaytay',
    description:
      'A 5-hectare family theme park featuring the Sky Eye Ferris wheel — one of the tallest in the Philippines at 207 feet — with panoramic views of Taal Lake and the Tagaytay skyline.',
    category: 'adventure',
    fee: 'Pay per ride',
    hours: '10:00 AM – 9:00 PM (weekdays) · 9:00 AM – 10:00 PM (weekends)',
    tip: 'Weekday mornings are less crowded.',
    gradient: 'from-yellow-500 via-orange-400 to-red-400',
    icon: '🎡',
    image: '/images/sky-ranch.jpg',
  },
  {
    name: 'Picnic Grove',
    description:
      'A 13-hectare outdoor park on Tagaytay Ridge with cable car rides, zip-lining, picnic cottages, and an eco-trail boardwalk — all with stunning views over Taal Volcano and Lake.',
    category: 'recreation',
    fee: '₱75 / person',
    hours: '7:00 AM – 7:00 PM daily',
    tip: 'Zip-line is ₱300 for a two-way ride. Great for families.',
    gradient: 'from-green-600 via-emerald-500 to-teal-400',
    icon: '🌿',
    image: '/images/picnic-grove.jpg',
  },
  {
    name: 'Museo Orlina',
    description:
      'A world-class museum showcasing the contemporary glass sculptures of Filipino artist Ramon Orlina. Set on the ridge with a rooftop garden offering sweeping Taal Lake views.',
    category: 'art',
    fee: 'Entrance fee applies',
    hours: 'Check museum schedule',
    tip: 'Visit at sunset for dramatic lighting across the glass sculptures.',
    gradient: 'from-violet-600 via-purple-500 to-fuchsia-400',
    icon: '🎨',
    image: '/images/museo-orlina.jpg',
  },
  {
    name: 'Puzzle Mansion',
    description:
      'A Guinness World Record holder for the largest collection of jigsaw puzzles. An eccentric, fun museum spanning rooms, gardens, and hallways with thousands of puzzle displays.',
    category: 'art',
    fee: 'Entrance fee applies',
    hours: 'Check museum schedule',
    tip: 'Great for kids and puzzle enthusiasts alike.',
    gradient: 'from-pink-500 via-rose-400 to-orange-400',
    icon: '🧩',
    image: '/images/puzzle-mansion.jpg',
  },
  {
    name: "Sonya's Garden",
    description:
      'A lush organic retreat in Alfonso, Cavite offering farm-to-table dining surrounded by flower gardens, antique cottages, and edible orchids. A magical escape from the city.',
    category: 'food',
    fee: 'Reservation recommended',
    hours: 'Wed–Sun; check availability',
    tip: 'Book ahead, especially on weekends. Try the fresh salads with edible flowers.',
    gradient: 'from-lime-500 via-green-400 to-emerald-300',
    icon: '🌸',
    image: '/images/sonyas-garden.jpg',
  },
  {
    name: "Antonio's Restaurant",
    description:
      'The definitive fine dining experience in Tagaytay — a beautifully restored Spanish Colonial mansion with manicured gardens, classical French-Italian cuisine, and impeccable service.',
    category: 'food',
    fee: 'Reservations only',
    hours: 'Lunch 11:30 AM · Dinner 5:30 PM',
    tip: 'Smart casual dress code. Book well in advance.',
    gradient: 'from-amber-700 via-yellow-600 to-amber-400',
    icon: '🍽️',
    image: '/images/antonios.jpg',
  },
  {
    name: 'Balay Dako',
    description:
      'Meaning "big house" — a Filipino-Spanish villa spread across three dining levels with floor-to-ceiling windows framing unobstructed Taal Lake views. Known for heritage Filipino cuisine.',
    category: 'food',
    fee: 'À la carte',
    hours: 'Lunch & Dinner',
    tip: 'Request a window table on the upper floor for the best lake views.',
    gradient: 'from-red-700 via-rose-600 to-pink-400',
    icon: '🏡',
    image: '/images/balay-dako.jpg',
  },
  {
    name: 'Caleruega Church',
    description:
      'A picturesque Dominican retreat center inspired by the medieval church in Spain — home of Saint Dominic. Features the iconic Transfiguration Chapel, hanging bridge, koi ponds, and lush mountain gardens.',
    category: 'religious',
    fee: '₱30 maintenance fee',
    hours: 'Check schedule',
    tip: 'Popular wedding venue. Visit on weekdays to avoid crowds.',
    gradient: 'from-stone-600 via-amber-600 to-yellow-500',
    icon: '⛪',
    image: '/images/caleruega.jpg',
  },
  {
    name: 'Mahogany Market',
    description:
      "Tagaytay's famous public market known for the best bulalo (beef marrow soup) in the Philippines, along with tawilis (freshwater sardines), kesong puti, and fresh Batangas produce.",
    category: 'food',
    fee: 'Free entry',
    hours: 'Daily, early morning onwards',
    tip: "Arrive before noon for fresh stock. Don't miss the tawilis and bulalo.",
    gradient: 'from-orange-700 via-amber-500 to-yellow-400',
    icon: '🥣',
    image: '/images/mahogany-market.jpg',
  },
  {
    name: 'Tagaytay Highlands',
    description:
      'A premier resort destination commanding views of Taal Lake, Laguna de Bay, and multiple mountain ranges. Features a world-class golf course, fine dining, zip-lining, and horseback riding.',
    category: 'recreation',
    fee: 'Members & guests only',
    hours: 'Check with resort',
    tip: 'Non-members can access select restaurants. Call ahead.',
    gradient: 'from-teal-700 via-cyan-600 to-sky-400',
    icon: '⛳',
    image: '/images/tagaytay-highlands.jpg',
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
        title="Explore Tourist Spots in Tagaytay City"
        description="Discover the top tourist destinations in Tagaytay City — from the iconic Taal Volcano to fine dining, adventure parks, and cultural landmarks."
        keywords="Tagaytay tourist spots, Taal Volcano, Picnic Grove, Sky Ranch, Tagaytay tourism"
      />

      {/* Hero banner */}
      <div className="relative bg-gradient-to-br from-emerald-800 via-teal-700 to-cyan-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex items-center gap-2 mb-3 text-white/70 text-xs font-semibold uppercase tracking-widest">
            <MapPin className="h-3.5 w-3.5" />
            Tagaytay City, Cavite
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-3">
            Explore Tourist Spots
          </h1>
          <p className="text-white/80 text-base max-w-xl leading-relaxed">
            Tagaytay sits at 700+ meters above sea level along a dramatic ridge
            overlooking Taal Lake. Discover its iconic attractions, flavors, and
            scenery.
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
