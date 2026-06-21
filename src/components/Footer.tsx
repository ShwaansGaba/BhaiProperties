import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 pt-32 pb-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-4 pr-8">
            <span className="text-2xl font-serif font-bold tracking-tighter block mb-6">
              <span className="text-red-700">BHAI</span> <span className="text-blue-800">PROPERTIES</span>
            </span>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 font-light">
              Your trusted gateway to prime residential, commercial, and industrial properties in North West Delhi. Operating since 2018 with over 15 years of industry expertise.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[10px] text-stone-500 font-bold mb-6 uppercase tracking-widest">Services</h4>
            <ul className="space-y-4 text-stone-300 text-sm font-light">
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Residential Purchases</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Commercial Leasing</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Farmhouses & Plots</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Mutation & Registry</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">NRI Management</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] text-stone-500 font-bold mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-stone-300 text-sm font-light">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Portfolio</a></li>
              <li><a href="#locality" className="hover:text-blue-500 transition-colors">Ashok Vihar</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] text-stone-500 font-bold mb-6 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-6 text-stone-300 text-sm font-light">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-red-600 mr-4 flex-shrink-0 mt-1" />
                <span className="leading-relaxed text-stone-400">A-28, Block A, Pocket A, Phase 1, Ashok Vihar, Delhi, 110052</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 text-blue-700 mr-4 flex-shrink-0 mt-1" />
                <span className="leading-loose text-stone-400">
                  <a href="tel:+919891111728" className="hover:text-blue-500 transition-colors block">+91 98911 11728</a>
                  <a href="tel:+918047786933" className="hover:text-blue-500 transition-colors block">+91 80477 86933</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest font-medium uppercase text-stone-600">
          <p>&copy; {currentYear} Bhai Properties. All rights reserved.</p>
          <div className="mt-6 md:mt-0 flex space-x-6">
            <span>Mr. Kamal Kalra</span>
            <span>Mr. Gagan Kalra</span>
            <span>Mr. Vipin Kalra</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
