const B = '\u{1F354}'; // burger
const M = '\u{1F95B}'; // glass of milk
const C = '\u{1F379}'; // tropical drink
const SA = '\u{1F96A}'; // sandwich
const MG = '\u{1F35C}'; // steaming bowl
const RN = '\u{1F357}'; // poultry
const MO = '\u{1F95F}'; // dumpling
const FR = '\u{1F35F}'; // fries
const LM = '\u{1F34B}'; // lemon
const OJ = '\u{1F34A}'; // orange
const ST = '\u{2B50}';  // star
const SD = '\u{1F964}'; // cup with straw
const SP = '\u{2728}';  // sparkles
const CH = '\u{1F36B}'; // chocolate

const signatures = [
  {
    emoji: B,
    title: 'Stacked Burgers',
    desc: 'Chicken & veg patties — single, double, or zinger — built with house sauce and fresh toppings',
    tag: 'Signature',
    accent: 'from-orange-500/20 to-yellow-500/10',
    border: 'hover:border-orange-500/40',
  },
  {
    emoji: M,
    title: 'Thick Milkshakes',
    desc: 'Chocolate, Strawberry, Oreo, Mango, Butterscotch, Kitkat — blended thick and served cold',
    tag: 'Best Seller',
    accent: 'from-pink-500/15 to-purple-500/10',
    border: 'hover:border-pink-500/30',
  },
  {
    emoji: C,
    title: 'Mojitos & Sharjah',
    desc: 'Passionfruit, Watermelon, Green Apple mojitos alongside classic chilled Sharjah specials',
    tag: 'Refreshing',
    accent: 'from-emerald-500/15 to-cyan-500/10',
    border: 'hover:border-emerald-500/30',
  },
];

const categories = [
  { emoji: SA, title: 'Bread Sandwiches',  desc: 'Veg & Chicken on toasted bread' },
  { emoji: MG, title: 'Maggi',             desc: 'Veg & Chicken — the classic comfort' },
  { emoji: RN, title: 'Rolls & Nuggets',   desc: 'Finger rolls, chicken strips & veg balls' },
  { emoji: MO, title: 'Momos',             desc: 'Steamed veg & chicken dumplings' },
  { emoji: FR, title: 'Loaded Fries',      desc: 'French, Peri Peri & fully loaded' },
  { emoji: LM, title: 'Lime Juices',       desc: 'Mint, Ginger & Pineapple lime squeezed fresh' },
  { emoji: OJ, title: 'Fresh Juices',      desc: 'Orange, Apple, Carrot & ABC blends' },
  { emoji: ST, title: 'Seasonal Specials', desc: "Rotating chef's picks — always fresh" },
];

const floats = [
  { emoji: B,  x: '2%',  y: '8%',  size: 'text-4xl', delay: '0s',   opacity: '0.06' },
  { emoji: SD, x: '92%', y: '6%',  size: 'text-3xl', delay: '1.2s', opacity: '0.06' },
  { emoji: FR, x: '1%',  y: '55%', size: 'text-3xl', delay: '0.6s', opacity: '0.05' },
  { emoji: MO, x: '94%', y: '52%', size: 'text-3xl', delay: '1.8s', opacity: '0.05' },
  { emoji: SP, x: '47%', y: '2%',  size: 'text-xl',  delay: '2s',   opacity: '0.10' },
  { emoji: LM, x: '78%', y: '88%', size: 'text-2xl', delay: '0.9s', opacity: '0.06' },
  { emoji: CH, x: '18%', y: '90%', size: 'text-2xl', delay: '2.4s', opacity: '0.06' },
];

export default function Exterior() {
  return (
    <section className="relative py-24 bg-[#070707] text-white overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-orange-500/[0.035] blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-yellow-500/[0.025] blur-[110px]" />
      </div>

      {/* Floating food emojis */}
      {floats.map((f, i) => (
        <div
          key={i}
          className={`absolute ${f.size} select-none pointer-events-none animate-float`}
          style={{ left: f.x, top: f.y, opacity: f.opacity, animationDelay: f.delay }}
        >
          {f.emoji}
        </div>
      ))}

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── HEADER ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/[0.06] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-400 text-[10px] font-semibold tracking-[0.25em] uppercase">Crafted Fresh Daily</span>
          </div>
          <h2
            className="font-black tracking-tighter leading-none mb-4"
            style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}
          >
            WHAT WE{' '}
            <span
              className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent animate-gradient-flow"
              style={{ backgroundSize: '200% auto' }}
            >
              COOK
            </span>
          </h2>
          <p className="text-gray-500 text-lg font-light max-w-lg mx-auto">
            From signature burgers to handcrafted beverages — everything made in-house, served fresh
          </p>
        </div>

        {/* ── SIGNATURE 3 CARDS ── */}
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {signatures.map((s, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl bg-white/[0.025] border border-white/[0.07] p-7 overflow-hidden
                          ${s.border} hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,0,0,0.4)]
                          transition-all duration-300 cursor-default`}
              style={{ animation: `fadeInUp 0.5s ease-out ${i * 100}ms both` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl`} />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-4xl mb-5
                                group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.2)] transition-all duration-300">
                  {s.emoji}
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold tracking-widest uppercase mb-4">
                  {s.tag}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── ALL CATEGORIES GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {categories.map((c, i) => (
            <div
              key={i}
              className="group relative flex items-center gap-3 p-4 rounded-2xl bg-white/[0.025] border border-white/[0.07]
                         hover:border-orange-500/25 hover:bg-white/[0.045] hover:-translate-y-0.5
                         hover:shadow-[0_10px_35px_rgba(249,115,22,0.08)] transition-all duration-300 cursor-default"
              style={{ animation: `fadeInUp 0.45s ease-out ${i * 60}ms both` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-xl
                              group-hover:scale-110 group-hover:border-orange-500/30 transition-all duration-300">
                {c.emoji}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white/90 group-hover:text-orange-400 truncate transition-colors duration-300">{c.title}</p>
                <p className="text-[11px] text-gray-600 leading-tight mt-0.5 truncate">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM FRESHNESS BANNER ── */}
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/[0.06] via-yellow-500/[0.03] to-orange-500/[0.06]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
          <div className="relative z-10 flex flex-wrap justify-center gap-8 sm:gap-16">
            {[
              { val: '11+', label: 'Food Categories', emoji: '🍽️' },
              { val: '30+', label: 'Menu Items',       emoji: '📋' },
              { val: '100%', label: 'Made Fresh',      emoji: '✨' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl mb-1">{s.emoji}</div>
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">{s.val}</div>
                <div className="text-[10px] text-gray-600 tracking-[0.2em] uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
