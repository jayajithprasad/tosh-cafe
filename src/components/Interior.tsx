const steps = [
  {
    emoji: '\u{1F331}',
    label: 'Step 01',
    title: 'Fresh Sourced',
    desc: 'Ingredients sourced daily — no frozen shortcuts, no compromise on quality',
    color: 'border-green-500/25 hover:border-green-500/50',
    glow: 'group-hover:shadow-[0_16px_50px_rgba(34,197,94,0.1)]',
    tag: 'bg-green-500/10 text-green-400 border-green-500/20',
  },
  {
    emoji: '\u{1F525}',
    label: 'Step 02',
    title: 'Cooked to Order',
    desc: 'Every burger patty, every batch of fries — made hot when you order it',
    color: 'border-orange-500/25 hover:border-orange-500/50',
    glow: 'group-hover:shadow-[0_16px_50px_rgba(249,115,22,0.1)]',
    tag: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  },
  {
    emoji: '\u{2728}',
    label: 'Step 03',
    title: 'Served Instantly',
    desc: 'Straight from the kitchen to your hands — hot, fresh, never left waiting',
    color: 'border-yellow-500/25 hover:border-yellow-500/50',
    glow: 'group-hover:shadow-[0_16px_50px_rgba(234,179,8,0.1)]',
    tag: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  },
];

const qualities = [
  { emoji: '\u{1F9C2}', title: 'House Seasoning',   desc: 'Our own spice blends on everything' },
  { emoji: '\u{1F35E}', title: 'Freshly Baked Buns', desc: 'Soft, toasted, never stale' },
  { emoji: '\u{1F9C4}', title: 'Crisp Vegetables',  desc: 'Farm-fresh, crunchy every bite' },
  { emoji: '\u{2764}',  title: 'Made with Love',    desc: 'Every plate gets our full attention' },
];

const floatItems = [
  { e: '\u{1F354}', x: '1%',  y: '10%', s: 'text-4xl', d: '0s',   o: '0.05' },
  { e: '\u{1F525}', x: '93%', y: '8%',  s: 'text-3xl', d: '1.2s', o: '0.05' },
  { e: '\u{1F35F}', x: '2%',  y: '62%', s: 'text-3xl', d: '0.6s', o: '0.04' },
  { e: '\u{1F964}', x: '94%', y: '55%', s: 'text-3xl', d: '1.8s', o: '0.04' },
  { e: '\u{2728}',  x: '48%', y: '1%',  s: 'text-xl',  d: '2s',   o: '0.08' },
];

export default function Interior() {
  return (
    <section className="relative py-24 bg-[#070707] text-white overflow-hidden">

      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/[0.035] blur-[130px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-yellow-500/[0.025] blur-[100px]" />
      </div>

      {/* Floating emojis */}
      {floatItems.map((f, i) => (
        <div key={i} className={`absolute ${f.s} select-none pointer-events-none animate-float`}
          style={{ left: f.x, top: f.y, opacity: f.o, animationDelay: f.d }}>
          {f.e}
        </div>
      ))}

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── HEADER ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/[0.06] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-400 text-[10px] font-semibold tracking-[0.25em] uppercase">Made In-House</span>
          </div>
          <h2
            className="font-black tracking-tighter leading-none mb-4"
            style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}
          >
            THE{' '}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent animate-gradient-flow"
              style={{ backgroundSize: '200% auto' }}>
              CRAFT
            </span>
          </h2>
          <p className="text-gray-500 text-lg font-light max-w-lg mx-auto">
            Every item prepared with care — from raw ingredient to your first bite
          </p>
        </div>

        {/* ── PROCESS STEPS ── */}
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl bg-white/[0.025] border ${s.color} ${s.glow} p-7 overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-default`}
              style={{ animation: `fadeInUp 0.5s ease-out ${i * 100}ms both` }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-4xl mb-5
                                group-hover:scale-110 transition-transform duration-300">
                  {s.emoji}
                </div>
                <span className={`inline-block px-2.5 py-1 rounded-full border text-[10px] font-bold tracking-widest uppercase mb-3 ${s.tag}`}>
                  {s.label}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* Step connector arrow — hide on last */}
              {i < 2 && (
                <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#070707] border border-white/[0.08] items-center justify-center">
                  <span className="text-white/30 text-xs">›</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── QUALITY GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {qualities.map((q, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white/[0.025] border border-white/[0.07]
                         hover:border-orange-500/25 hover:bg-white/[0.04] hover:-translate-y-1
                         hover:shadow-[0_12px_40px_rgba(249,115,22,0.07)] transition-all duration-300 cursor-default"
              style={{ animation: `fadeInUp 0.45s ease-out ${i * 70}ms both` }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-2xl
                              group-hover:scale-110 group-hover:border-orange-500/30 transition-all duration-300">
                {q.emoji}
              </div>
              <div>
                <p className="text-sm font-bold text-white/90 group-hover:text-orange-400 transition-colors duration-300">{q.title}</p>
                <p className="text-[11px] text-gray-600 leading-snug mt-0.5">{q.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── SLOGAN BANNER ── */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 sm:p-14 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.06] via-transparent to-yellow-500/[0.04]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-orange-500/[0.05] blur-[80px]" />

          <div className="relative z-10">
            <span className="text-[10px] text-orange-400 font-bold tracking-[0.35em] uppercase mb-4 block">
              ✦ &nbsp;The TOSH Promise&nbsp; ✦
            </span>
            <h3
              className="font-black tracking-tighter text-white leading-none mb-3"
              style={{ fontSize: 'clamp(2.2rem,6vw,4.5rem)' }}
            >
              STACK IT.{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-flow"
                style={{ backgroundSize: '200% auto' }}>
                BITE IT.
              </span>
              {' '}LOVE IT.
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed mt-4">
              Every order is a commitment — fresh ingredients, bold flavors, zero compromise
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
