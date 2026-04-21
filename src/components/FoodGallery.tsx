import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function FoodGallery() {
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const toggleLike = (index: number) => {
    setLikedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const foodItems = [
    {
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Premium Burgers',
      category: 'Signature',
      description: 'Juicy patties with fresh ingredients'
    },
    {
      image: 'https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Zinger Burgers',
      category: 'Spicy',
      description: 'Crispy, spicy, and absolutely addictive'
    },
    {
      image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Double Patty Special',
      category: 'Premium',
      description: 'Double the meat, double the satisfaction'
    },
    {
      image: 'https://images.pexels.com/photos/1885578/pexels-photo-1885578.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Loaded Fries',
      category: 'Sides',
      description: 'Crispy fries with premium toppings'
    },
    {
      image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Milkshakes',
      category: 'Desserts',
      description: 'Thick, creamy, and Instagram-perfect'
    },
    {
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Artisanal Coffee',
      category: 'Beverages',
      description: 'Crafted by expert baristas'
    },
    {
      image: 'https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Fresh Mojitos',
      category: 'Drinks',
      description: 'Refreshing blends of fruit and mint'
    },
    {
      image: 'https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Premium Beverages',
      category: 'Drinks',
      description: 'Fresh juices and specialty drinks'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">FOOD GALLERY</h2>
          <p className="text-xl text-gray-400">Every dish is a work of art. Every bite is a moment.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800 transition-all duration-300 hover:border-orange-500"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="relative overflow-hidden h-80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={() => toggleLike(index)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      likedItems.includes(index)
                        ? 'bg-red-500/80 shadow-lg shadow-red-500/50'
                        : 'bg-black/40 hover:bg-black/60'
                    }`}
                  >
                    <Heart
                      className="w-5 h-5"
                      fill={likedItems.includes(index) ? 'currentColor' : 'none'}
                    />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="inline-block px-3 py-1 bg-orange-500/90 text-white text-xs font-bold rounded-full mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="relative p-4 border-t border-gray-800/50">
                <h3 className="font-bold text-lg group-hover:text-orange-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { stat: '100%', label: 'Fresh & Natural' },
            { stat: 'Premium', label: 'Quality Standards' },
            { stat: 'Fast', label: 'Service Guaranteed' }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 text-center hover:border-orange-500 transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative">
                <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-3">
                  {item.stat}
                </div>
                <p className="text-gray-400 font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
