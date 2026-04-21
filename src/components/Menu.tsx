import { useState } from 'react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('burgers');

  const categories = ['burgers', 'sides', 'drinks', 'shakes'];

  const menuItems = {
    burgers: [
      { name: 'Chicken Burger', price: '₹120', badge: 'Popular' },
      { name: 'Chicken Double Patty', price: '₹140', badge: null },
      { name: 'Chicken Zinger', price: '₹180', badge: 'Spicy' },
      { name: 'Veg Burger', price: '₹80', badge: null },
      { name: 'Double Patty Veg', price: '₹100', badge: null }
    ],
    sides: [
      { name: 'French Fries', price: '₹90', badge: null },
      { name: 'Peri Peri Fries', price: '₹100', badge: 'Spicy' },
      { name: 'Loaded Fries', price: '₹180', badge: 'Premium' },
      { name: 'Veg Balls', price: '₹80', badge: null }
    ],
    drinks: [
      { name: 'Fresh Mojito', price: '₹90', badge: 'Refreshing' },
      { name: 'Passionfruit Punch', price: '₹90', badge: null },
      { name: 'Fresh Juices', price: '₹130', badge: 'Natural' },
      { name: 'Cold Beverages', price: '₹70', badge: null }
    ],
    shakes: [
      { name: 'Chocolate Shake', price: '₹100', badge: 'Best Seller' },
      { name: 'Strawberry Shake', price: '₹100', badge: null },
      { name: 'Oreo Shake', price: '₹100', badge: null },
      { name: 'Mango Shake', price: '₹100', badge: null }
    ]
  };

  return (
    <section className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">OUR MENU</h2>
          <p className="text-xl text-gray-400">Crafted with passion, served with style</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black shadow-lg shadow-orange-500/50'
                  : 'bg-gray-900 text-gray-300 border border-gray-800 hover:border-orange-500'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold flex-1 group-hover:text-orange-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  {item.badge && (
                    <span className="ml-2 px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full whitespace-nowrap">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    {item.price}
                  </span>
                  <button className="px-4 py-2 bg-orange-500/20 hover:bg-orange-500/40 text-orange-400 font-bold rounded-lg transition-all duration-300">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-black border border-gray-800 p-8 md:p-12 text-center group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative">
            <h3 className="text-2xl md:text-4xl font-black mb-3">Complete Your Order</h3>
            <p className="text-gray-400 mb-6">Every item pairs perfectly with our signature beverages</p>
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
