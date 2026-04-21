import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#070707] text-white overflow-hidden flex items-center">

      {/* Atmospheric glow blobs — scaled for mobile */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[300px] lg:w-[700px] h-[300px] lg:h-[700px] rounded-full bg-white/[0.012] blur-[80px] lg:blur-[120px]" />
        <div className="absolute top-1/4 right-[10%] lg:right-[20%] w-[160px] lg:w-[280px] h-[160px] lg:h-[280px] rounded-full bg-orange-500/[0.06] blur-[60px] lg:blur-[80px] animate-pulse" />
        <div
          className="absolute bottom-1/3 left-[5%] lg:left-[10%] w-[180px] lg:w-[350px] h-[180px] lg:h-[350px] rounded-full bg-orange-600/[0.04] blur-[60px] lg:blur-[100px] animate-pulse"
          style={{ animationDelay: '1.8s' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20 pt-20 lg:pt-24">
        <div className="flex flex-col lg:flex-row items-center lg:min-h-[calc(100vh-6rem)] gap-8 sm:gap-10 lg:gap-6 pb-16 pt-6 lg:py-0">

          {/* ── LOGO COLUMN (top on mobile, right on desktop) ── */}
          <div
            className={`w-full lg:flex-1 flex items-center justify-center relative order-1 lg:order-2 transition-all duration-1000 delay-200 ${
              mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            {/* Outer pulse rings */}
            <div
              className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[640px] lg:h-[640px] rounded-full border border-white/[0.03] animate-pulse"
              style={{ animationDuration: '5s' }}
            />
            <div className="absolute w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] lg:w-[560px] lg:h-[560px] rounded-full border border-white/[0.05]" />

            {/* Breathing backlit glow */}
            <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[480px] lg:h-[480px] rounded-full bg-white/[0.07] blur-[50px] lg:blur-[70px] animate-glow-breathe" />

            {/* Spinning dashed orange ring */}
            <div className="absolute w-[252px] h-[252px] sm:w-[306px] sm:h-[306px] lg:w-[538px] lg:h-[538px] rounded-full border-2 border-dashed border-orange-500/20 animate-spin-slow" />

            {/* Spinning faint counter ring */}
            <div className="absolute w-[272px] h-[272px] sm:w-[328px] sm:h-[328px] lg:w-[564px] lg:h-[564px] rounded-full border border-white/[0.04] animate-spin-slow-reverse" />

            {/* Fixed-size wrapper — floats gently */}
            <div className="relative z-10 w-[230px] h-[230px] sm:w-[280px] sm:h-[280px] lg:w-[500px] lg:h-[500px] animate-hero-float">

              {/* Glowing circle — the TOSH backlit sign */}
              <div className="relative w-full h-full rounded-full shadow-[0_0_50px_rgba(255,255,255,0.14),0_0_110px_rgba(255,255,255,0.07)] lg:shadow-[0_0_80px_rgba(255,255,255,0.17),0_0_160px_rgba(255,255,255,0.08)] overflow-hidden">
                <img
                  src="/tosh-logo.jpg"
                  alt="TOSH — The Online Stack House"
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: 'center 20%' }}
                />
                {/* Shimmer light sweep */}
                <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                  <div
                    className="absolute inset-y-0 w-1/3 animate-shimmer-sweep"
                    style={{ background: 'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.07) 50%, transparent 100%)' }}
                  />
                </div>
                {/* Vignette */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_35px_rgba(0,0,0,0.4)]" />
              </div>

              {/* Orbiting orange glow dot — clockwise */}
              <div
                className="absolute inset-[-14px] sm:inset-[-16px] lg:inset-[-28px] rounded-full animate-spin-slow"
                style={{ animationDuration: '10s' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_3px_rgba(249,115,22,0.7)]" />
              </div>

              {/* Orbiting white dot — counter-clockwise */}
              <div
                className="absolute inset-[-14px] sm:inset-[-16px] lg:inset-[-28px] rounded-full animate-spin-slow-reverse"
                style={{ animationDuration: '15s' }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_6px_2px_rgba(255,255,255,0.5)]" />
              </div>

            </div>
          </div>

          {/* ── TEXT COLUMN (bottom on mobile, left on desktop) ── */}
          <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start gap-5 sm:gap-6 lg:gap-7 lg:pr-8 order-2 lg:order-1">

            {/* Live badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/[0.06] transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-orange-400 text-[10px] font-semibold tracking-[0.22em] uppercase">
                Open Now · View Menu
              </span>
            </div>

            {/* Main heading */}
            <h1
              className={`font-black leading-none tracking-tighter text-center lg:text-left transition-all duration-700 delay-100 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ fontSize: 'clamp(2.8rem,10vw,6rem)' }}
            >
              <span className="text-white block">STACK</span>
              <span className="text-white block">BOLD.</span>
              <span
                className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent block animate-gradient-flow"
                style={{ backgroundSize: '200% auto' }}
              >
                EAT EPIC.
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-gray-400 text-sm sm:text-base text-center lg:text-left max-w-[340px] sm:max-w-[380px] leading-relaxed font-light transition-all duration-700 delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Premium burgers. Craft beverages. The Online Stack House — where every order is a statement.
            </p>

            {/* CTA buttons — full width on mobile */}
            <div
              className={`flex flex-col sm:flex-row gap-3 w-full sm:w-auto transition-all duration-700 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <Link
                to="/menu"
                className="w-full sm:w-auto text-center px-7 py-4 sm:py-3.5 bg-white text-black text-xs font-bold rounded-full tracking-widest uppercase hover:bg-orange-500 hover:text-white hover:shadow-[0_0_35px_rgba(249,115,22,0.45)] active:scale-95 transition-all duration-300"
              >
                View Menu
              </Link>
              <button className="w-full sm:w-auto px-7 py-4 sm:py-3.5 border border-white/15 text-white text-xs font-semibold rounded-full tracking-widest uppercase hover:border-white/35 hover:bg-white/[0.04] active:scale-95 transition-all duration-300 backdrop-blur-sm">
                Visit Us
              </button>
            </div>

            {/* Stats row */}
            <div
              className={`flex items-center justify-center lg:justify-start w-full pt-1 transition-all duration-700 delay-[400ms] ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              {([['4.9', 'Rating'], ['2K+', 'Customers'], ['30m', 'Delivery']] as [string, string][]).map(
                ([val, label], i) => (
                  <div key={label} className="flex items-center">
                    {i > 0 && <div className="w-px h-8 bg-white/[0.08] mx-4 sm:mx-6" />}
                    <div className="text-center lg:text-left">
                      <p className="text-base sm:text-lg font-black text-white">{val}</p>
                      <p className="text-[9px] sm:text-[10px] text-gray-600 tracking-[0.18em] uppercase mt-0.5">{label}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[9px] text-gray-700 tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-gray-700 animate-bounce" />
      </div>
    </section>
  );
}
