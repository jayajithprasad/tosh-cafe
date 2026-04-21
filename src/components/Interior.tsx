import { Coffee, Monitor, Utensils, Zap } from 'lucide-react';

export default function Interior() {
  const features = [
    {
      icon: Utensils,
      title: 'Minimalist Aesthetic',
      desc: 'Clean black and white palette with warm wooden accents. Every detail curated for perfection.'
    },
    {
      icon: Monitor,
      title: 'Digital Displays',
      desc: 'High-contrast dark theme with vibrant orange highlights. Modern, engaging menu boards.'
    },
    {
      icon: Coffee,
      title: 'Open Kitchen',
      desc: 'Watch your burger being crafted. Premium barista coffee machines on full display.'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">THE INTERIOR</h2>
          <p className="text-xl text-gray-400">Modern fast-casual dining reimagined for today's discerning customer</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="flex gap-4 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold group-hover:text-orange-400 transition-colors duration-300">{feature.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed ml-16">{feature.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative grid grid-cols-2 gap-3 md:gap-4">
              <div className="col-span-2 overflow-hidden rounded-2xl h-56 md:h-72">
                <img
                  src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Modern cafe interior"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-2xl h-48 md:h-56">
                <img
                  src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Cafe seating area"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-2xl h-48 md:h-56">
                <img
                  src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Coffee bar"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 p-12 md:p-16 text-center group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-orange-500" />
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Feature Wall</span>
              <Zap className="w-5 h-5 text-orange-500" />
            </div>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
              STACK IT.
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                BITE IT. LOVE IT.
              </span>
            </h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-6">
              LED neon signage illuminates our feature wall, creating the perfect backdrop for your unforgettable moments
            </p>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Metal + Wood', desc: 'Industrial-chic seating that inspires' },
            { title: 'Feature Wall', desc: 'Iconic TOSH logo statement' },
            { title: 'Warm Lighting', desc: 'Cinematic, inviting atmosphere' }
          ].map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 hover:border-orange-500 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl mb-4 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors duration-300"></div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
