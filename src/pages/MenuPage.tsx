import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type Category = 'burgers' | 'sides' | 'drinks' | 'shakes';

interface MenuItem {
  name: string;
  price: string;
  badge: string | null;
  desc: string;
}

const categories: { id: Category; label: string; emoji: string; count: number }[] = [
  { id: 'burgers', label: 'Burgers', emoji: '🍔', count: 5 },
  { id: 'sides',   label: 'Sides',   emoji: '🍟', count: 4 },
  { id: 'drinks',  label: 'Drinks',  emoji: '🥤', count: 4 },
  { id: 'shakes',  label: 'Shakes',  emoji: '🍫', count: 4 },
];

const menuData: Record<Category, MenuItem[]> = {
  burgers: [
    { name: 'Chicken Burger',       price: '₹120', badge: 'Popular',    desc: 'Crispy fried chicken, fresh lettuce & special house sauce' },
    { name: 'Chicken Double Patty', price: '₹140', badge: null,         desc: 'Double the patty, double the satisfaction' },
    { name: 'Chicken Zinger',       price: '₹180', badge: 'Spicy',      desc: 'Fiery zinger with jalapeños & sriracha mayo' },
    { name: 'Veg Burger',           price: '₹80',  badge: 'Veg',        desc: 'Garden-fresh veggies with herbed crispy patty' },
    { name: 'Double Patty Veg',     price: '₹100', badge: null,         desc: 'Two golden veg patties stacked high' },
  ],
  sides: [
    { name: 'French Fries',    price: '₹90',  badge: null,      desc: 'Golden, crispy & perfectly salted' },
    { name: 'Peri Peri Fries', price: '₹100', badge: 'Spicy',   desc: 'Loaded with our special peri peri seasoning' },
    { name: 'Loaded Fries',    price: '₹180', badge: 'Premium', desc: 'Cheese, jalapeños & signature sauces on top' },
    { name: 'Veg Balls',       price: '₹80',  badge: 'Veg',     desc: 'Crispy veggie bites served with dipping sauce' },
  ],
  drinks: [
    { name: 'Fresh Mojito',       price: '₹90',  badge: 'Refreshing', desc: 'Mint, lime & sparkling soda — the classic' },
    { name: 'Passionfruit Punch', price: '₹90',  badge: null,         desc: 'Tropical passionfruit & citrus blend' },
    { name: 'Fresh Juices',       price: '₹130', badge: 'Natural',    desc: 'Seasonal fresh-pressed fruit juices' },
    { name: 'Cold Beverages',     price: '₹70',  badge: null,         desc: 'Chilled carbonated beverages' },
  ],
  shakes: [
    { name: 'Chocolate Shake',  price: '₹100', badge: 'Best Seller', desc: 'Rich & creamy Belgian chocolate shake' },
    { name: 'Strawberry Shake', price: '₹100', badge: null,          desc: 'Real strawberries blended fresh' },
    { name: 'Oreo Shake',       price: '₹100', badge: null,          desc: 'Classic Oreo crushed with thick cream' },
    { name: 'Mango Shake',      price: '₹100', badge: null,          desc: 'Alphonso mango — thick & creamy' },
  ],
};

const badgeStyles: Record<string, string> = {
  Popular:       'bg-orange-500/15 text-orange-400 border-orange-500/25',
  Spicy:         'bg-red-500/15    text-red-400    border-red-500/25',
  Veg:           'bg-green-500/15  text-green-400  border-green-500/25',
  Premium:       'bg-purple-500/15 text-purple-400 border-purple-500/25',
  Refreshing:    'bg-cyan-500/15   text-cyan-400   border-cyan-500/25',
  Natural:       'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  'Best Seller': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25',
};

const floatingDots = [
  { x: '7%',  y: '10%', size: 'w-2 h-2',     delay: '0s',    opacity: 'opacity-30' },
  { x: '91%', y: '7%',  size: 'w-3 h-3',     delay: '1s',    opacity: 'opacity-20' },
  { x: '4%',  y: '42%', size: 'w-1.5 h-1.5', delay: '2s',    opacity: 'opacity-25' },
  { x: '94%', y: '52%', size: 'w-2 h-2',     delay: '0.5s',  opacity: 'opacity-20' },
  { x: '14%', y: '78%', size: 'w-3 h-3',     delay: '1.5s',  opacity: 'opacity-15' },
  { x: '84%', y: '72%', size: 'w-2 h-2',     delay: '2.5s',  opacity: 'opacity-25' },
  { x: '48%', y: '4%',  size: 'w-1.5 h-1.5', delay: '3s',    opacity: 'opacity-20' },
  { x: '28%', y: '92%', size: 'w-2 h-2',     delay: '0.8s',  opacity: 'opacity-15' },
  { x: '68%', y: '95%', size: 'w-3 h-3',     delay: '1.8s',  opacity: 'opacity-20' },
  { x: '18%', y: '22%', size: 'w-1.5 h-1.5', delay: '2.2s',  opacity: 'opacity-20' },
  { x: '75%', y: '30%', size: 'w-2 h-2',     delay: '1.1s',  opacity: 'opacity-15' },
  { x: '55%', y: '85%', size: 'w-1.5 h-1.5', delay: '3.2s',  opacity: 'opacity-20' },
];

const floatingEmojis = [
  { emoji: '🍔', x: '2%',  y: '14%', delay: '0s',   size: 'text-4xl' },
  { emoji: '⭐', x: '93%', y: '18%', delay: '1.2s', size: 'text-2xl' },
  { emoji: '🍟', x: '1%',  y: '62%', delay: '0.7s', size: 'text-3xl' },
  { emoji: '✨', x: '95%', y: '58%', delay: '2s',   size: 'text-xl'  },
  { emoji: '🥤', x: '89%', y: '82%', delay: '0.4s', size: 'text-3xl' },
  { emoji: '🍫', x: '4%',  y: '86%', delay: '1.5s', size: 'text-2xl' },
];

export default function MenuPage() {
  const [active, setActive]   = useState<Category>('burgers');
  const [show, setShow]       = useState(true);
  const [pageIn, setPageIn]   = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setPageIn(true), 60);
    return () => clearTimeout(t);
  }, []);

  const switchCat = (cat: Category) => {
    if (cat === active) return;
    setShow(false);
    setTimeout(() => { setActive(cat); setShow(true); }, 220);
  };

  const items = menuData[active];

  return (
    <div className="min-h-screen bg-[#070707] text-white overflow-x-hidden">

      {/* ── FIXED BACKGROUND PARTICLES ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/[0.035] rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-500/[0.025] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s', animationDuration: '8s' }} />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-orange-600/[0.025] rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1.5s' }} />

        {floatingDots.map((d, i) => (
          <div
            key={i}
            className={`absolute ${d.size} rounded-full bg-orange-500 ${d.opacity} animate-float`}
            style={{ left: d.x, top: d.y, animationDelay: d.delay }}
          />
        ))}

        {floatingEmojis.map((f, i) => (
          <div
            key={i}
            className={`absolute ${f.size} opacity-[0.06] select-none animate-float`}
            style={{ left: f.x, top: f.y, animationDelay: f.delay }}
          >
            {f.emoji}
          </div>
        ))}
      </div>

      {/* ── STICKY NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-[#070707]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium tracking-wide">Back</span>
          </Link>

          <span className="text-lg font-black tracking-tight">
            TOSH <span className="text-orange-500">·</span>
          </span>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] text-orange-400 font-semibold tracking-widest uppercase">Open Now</span>
          </div>
        </div>
      </header>

      {/* ── HERO BANNER ── */}
      <div
        className={`relative z-10 pt-14 pb-10 px-6 lg:px-12 max-w-7xl mx-auto text-center transition-all duration-700 ${
          pageIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/[0.06] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-orange-400 text-[10px] font-semibold tracking-[0.22em] uppercase">Scan · Explore · Enjoy</span>
        </div>
        <h1
          className="font-black tracking-tighter leading-none mb-4"
          style={{ fontSize: 'clamp(3.5rem,10vw,8rem)' }}
        >
          <span className="text-white">OUR </span>
          <span
            className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent animate-gradient-flow"
            style={{ backgroundSize: '200% auto' }}
          >
            MENU
          </span>
        </h1>
        <p className="text-gray-500 text-lg font-light">Browse our full menu below</p>
      </div>

      {/* ── STICKY CATEGORY TABS ── */}
      <div
        className={`sticky top-16 z-40 bg-[#070707]/90 backdrop-blur-xl border-b border-white/[0.04] transition-all duration-700 delay-150 ${
          pageIn ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex gap-3 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => switchCat(cat.id)}
              className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-full font-semibold text-sm tracking-wide whitespace-nowrap transition-all duration-300 ${
                active === cat.id
                  ? 'bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.12)] scale-[1.04]'
                  : 'bg-white/[0.04] text-gray-400 border border-white/[0.07] hover:border-white/[0.18] hover:text-white hover:bg-white/[0.07]'
              }`}
            >
              <span className="text-base">{cat.emoji}</span>
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  active === cat.id ? 'bg-orange-500 text-white' : 'bg-white/10 text-gray-500'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── MENU GRID ── */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 220ms ease, transform 220ms ease',
          }}
        >
          {items.map((item, i) => (
            <div
              key={`${active}-${i}`}
              className="group relative rounded-2xl bg-white/[0.028] border border-white/[0.07] p-6 overflow-hidden
                         hover:border-orange-500/35 hover:bg-white/[0.05]
                         hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(249,115,22,0.11)]
                         transition-all duration-300 cursor-pointer"
              style={{ animation: `fadeInUp 0.45s ease-out ${i * 70}ms both` }}
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

              {/* Large background number */}
              <div className="absolute -right-1 -top-2 text-[6rem] font-black leading-none text-white/[0.022] select-none pointer-events-none group-hover:text-white/[0.04] transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10">
                {item.badge && (
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold border mb-3 tracking-wide ${
                      badgeStyles[item.badge] ?? 'bg-white/10 text-white/60 border-white/10'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}

                <h3 className="text-base font-bold text-white/90 group-hover:text-white mb-2 leading-snug transition-colors duration-200">
                  {item.name}
                </h3>

                <p className="text-[13px] text-gray-600 leading-relaxed mb-6 group-hover:text-gray-500 transition-colors duration-200">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Bottom shimmer on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* ── CTA BANNER ── */}
        <div
          className="mt-16 relative rounded-3xl overflow-hidden border border-white/[0.06] bg-white/[0.02]"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.5s both' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/[0.07] via-yellow-500/[0.04] to-orange-500/[0.07]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
          <div className="relative p-10 lg:p-14 text-center">
            <p className="text-[10px] text-orange-400 font-bold tracking-[0.3em] uppercase mb-4">
              ✦ &nbsp;Visit Us Today&nbsp; ✦
            </p>
            <h3
              className="font-black tracking-tighter mb-3"
              style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}
            >
              Come Stack With Us
            </h3>
            <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
              Every item crafted fresh. Walk in and experience The Online Stack House.
            </p>
            <div className="flex justify-center">
              <Link
                to="/"
                className="px-8 py-3.5 border border-white/15 text-white text-xs font-semibold rounded-full tracking-widest uppercase hover:border-white/35 hover:bg-white/[0.04] active:scale-95 transition-all duration-300 text-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
