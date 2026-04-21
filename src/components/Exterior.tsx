export default function Exterior() {
  return (
    <section className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">THE STOREFRONT</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">A welcoming urban retreat designed to inspire</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative group overflow-hidden rounded-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96 lg:h-full min-h-96">
              <img
                src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern cafe exterior at evening"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-8">
            {[
              { num: '01', title: 'Matte Black Facade', desc: 'Sleek, modern exterior with premium finish that commands attention' },
              { num: '02', title: 'Glowing Signage', desc: 'Circular LED-backlit signboard visible from blocks away' },
              { num: '03', title: 'Warm Lighting', desc: 'Carefully placed LEDs create the perfect evening atmosphere' },
              { num: '04', title: 'Glass Panels', desc: 'Floor-to-ceiling windows into our modern interior' }
            ].map((item, index) => (
              <div key={index} className="group flex gap-6 cursor-pointer">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                    <span className="text-white font-black text-lg">{item.num}</span>
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Evening storefront view' },
            { img: 'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Modern cafe entrance' },
            { img: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Urban street vibe' }
          ].map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl group h-80 shadow-xl">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
