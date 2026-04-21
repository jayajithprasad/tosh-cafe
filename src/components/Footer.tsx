import { Instagram, Facebook, MapPin, Clock, ExternalLink, ArrowRight } from 'lucide-react';

const MAPS_SHARE  = 'https://share.google/krGUvOo347d8nn0s0';
const MAPS_SEARCH = 'https://www.google.com/search?q=tosh+the+online+stack+house+thiruvananthapuram';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-gray-800 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-black">T</span>
              </div>
              <div>
                <h3 className="text-xl font-black">TOSH</h3>
                <p className="text-gray-500 text-xs">Stack House</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium burgers, artisanal coffee, and unforgettable moments in a modern space.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group border border-gray-800 hover:border-orange-500"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Menu', 'About Us', 'Gallery', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6">Hours</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Every Day</span>
                <span className="text-orange-400">Open Daily</span>
              </li>
            </ul>
            <a
              href={MAPS_SEARCH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-xs text-gray-500 hover:text-orange-400 transition-colors duration-300"
            >
              <Clock className="w-3.5 h-3.5" />
              Check live hours on Google
            </a>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={MAPS_SHARE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-orange-400 transition-colors duration-300 group"
                >
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm group-hover:translate-x-1 transition-transform duration-300 leading-snug">
                    Thiruvananthapuram, Kerala<br />
                    <span className="text-xs text-gray-600">TOSH — The Online Stack House</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={MAPS_SEARCH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors duration-300 group"
                >
                  <ExternalLink className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">Find us on Google</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <p className="text-gray-500 text-sm">
              © 2026 TOSH - The Online Stack House. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 py-6 px-8 text-center group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-orange-500/10 to-yellow-500/10"></div>
            <p className="relative text-xl font-black tracking-wide text-white group-hover:text-orange-300 transition-colors duration-300">
              STACK IT. BITE IT. LOVE IT.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
