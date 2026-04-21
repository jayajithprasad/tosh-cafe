import { MapPin, Clock, Navigation, ExternalLink } from 'lucide-react';

const MAPS_SHARE   = 'https://share.google/krGUvOo347d8nn0s0';
const MAPS_SEARCH  = 'https://www.google.com/search?q=tosh+the+online+stack+house+thiruvananthapuram#:~:text=Google%20reviews%0ACafe-,Directions,-Reviews';
const MAPS_EMBED   = 'https://maps.google.com/maps?q=tosh+the+online+stack+house+thiruvananthapuram&output=embed&z=16';

const details = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Thiruvananthapuram, Kerala',
    sub: 'TOSH — The Online Stack House',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Open Daily',
    sub: 'Check Google for live hours',
  },
];

const floats = [
  { e: '\u{1F354}', x: '2%',  y: '10%', s: 'text-4xl', d: '0s',   o: '0.05' },
  { e: '\u{1F4CD}', x: '93%', y: '8%',  s: 'text-3xl', d: '1.2s', o: '0.06' },
  { e: '\u{2728}',  x: '48%', y: '2%',  s: 'text-xl',  d: '2s',   o: '0.08' },
  { e: '\u{1F35F}', x: '1%',  y: '62%', s: 'text-3xl', d: '0.7s', o: '0.04' },
  { e: '\u{1F964}', x: '94%', y: '60%', s: 'text-3xl', d: '1.8s', o: '0.04' },
];

export default function Location() {
  return (
    <section className="relative py-24 bg-[#070707] text-white overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4  w-[550px] h-[550px] rounded-full bg-orange-500/[0.04] blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-yellow-500/[0.03] blur-[110px]" />
      </div>

      {/* Floating emojis */}
      {floats.map((f, i) => (
        <div key={i} className={`absolute ${f.s} select-none pointer-events-none animate-float`}
          style={{ left: f.x, top: f.y, opacity: f.o, animationDelay: f.d }}>
          {f.e}
        </div>
      ))}

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── HEADER ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/[0.06] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-400 text-[10px] font-semibold tracking-[0.25em] uppercase">Find Us</span>
          </div>
          <h2
            className="font-black tracking-tighter leading-none mb-4"
            style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}
          >
            WHERE TO{' '}
            <span
              className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent animate-gradient-flow"
              style={{ backgroundSize: '200% auto' }}
            >
              FIND US
            </span>
          </h2>
          <p className="text-gray-500 text-lg font-light max-w-md mx-auto">
            Come visit us in Thiruvananthapuram — we're easy to find
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">

          {/* ── MAP EMBED (3/5 width) ── */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden border border-white/[0.07] bg-white/[0.02] min-h-[360px] sm:min-h-[420px] group hover:border-white/[0.12] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] to-transparent pointer-events-none z-10 rounded-3xl" />
            <iframe
              title="TOSH Location"
              src={MAPS_EMBED}
              className="w-full h-full min-h-[360px] sm:min-h-[420px] grayscale contrast-[1.1] brightness-[0.85]"
              style={{ border: 0, filter: 'grayscale(60%) brightness(0.75) contrast(1.15)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Orange pin overlay pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-5 w-5 bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.8)]" />
              </span>
            </div>
          </div>

          {/* ── INFO + CTA (2/5 width) ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Detail cards */}
            {details.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i}
                  className="flex gap-4 p-5 rounded-2xl bg-white/[0.025] border border-white/[0.07]
                             hover:border-orange-500/25 hover:bg-white/[0.04] transition-all duration-300 cursor-default">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-orange-500/70 font-bold tracking-widest uppercase mb-0.5">{d.label}</p>
                    <p className="text-base font-bold text-white">{d.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{d.sub}</p>
                  </div>
                </div>
              );
            })}

            {/* CTA buttons */}
            <a
              href={MAPS_SHARE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl
                         bg-gradient-to-r from-orange-500 to-yellow-500 text-black text-sm font-black tracking-widest uppercase
                         hover:shadow-[0_0_40px_rgba(249,115,22,0.45)] hover:scale-[1.02] active:scale-[0.98]
                         transition-all duration-300"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>

            <a
              href={MAPS_SEARCH}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl
                         border border-white/[0.12] bg-white/[0.03] text-white text-sm font-semibold tracking-widest uppercase
                         hover:border-orange-500/30 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]
                         active:scale-[0.98] transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 text-orange-400" />
              View on Google
            </a>

            {/* "We're open" badge */}
            <div className="flex items-center gap-3 p-4 rounded-2xl border border-green-500/20 bg-green-500/[0.04]">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <p className="text-xs text-green-400 font-semibold">
                Visit us in Thiruvananthapuram &mdash; walk-in welcome
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
