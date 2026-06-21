import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Locality', href: '#locality' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-stone-200 py-4 shadow-sm' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => handleNavClick('#home')}>
              <span className="text-2xl font-serif font-bold tracking-tighter transition-colors duration-300">
                <span className={isScrolled ? 'text-red-700' : 'text-white'}>BHAI</span>{' '}
                <span className={isScrolled ? 'text-blue-800' : 'text-white'}>PROPERTIES</span>
              </span>
            </div>
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${isScrolled ? 'text-stone-500 hover:text-stone-900' : 'text-stone-300 hover:text-white'}`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a 
                href="tel:+919891111728" 
                className={`px-6 py-2.5 rounded-full flex items-center transition-all duration-300 text-[11px] font-bold tracking-[0.1em] uppercase border ${isScrolled ? 'bg-stone-900 border-stone-900 text-white hover:bg-blue-800 hover:border-blue-800' : 'bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm'}`}
              >
                <Phone className="w-3.5 h-3.5 mr-2" />
                Call Us
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-full transition-colors focus:outline-none ${isScrolled ? 'text-stone-900' : 'text-white'}`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 w-full md:hidden bg-white/95 backdrop-blur-xl border-b border-stone-200 overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-8 flex flex-col space-y-6 text-center">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-stone-900 text-3xl font-serif hover:text-blue-700 transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-8 border-t border-stone-200 mt-4 flex flex-col items-center">
                  <a 
                    href="tel:+919891111728" 
                    className="flex w-full items-center justify-center px-6 py-4 rounded-full text-sm font-bold tracking-widest uppercase text-white bg-stone-900 hover:bg-blue-800 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +91 98911 11728
                  </a>
                  <div className="mt-6 flex items-center text-xs text-stone-500 font-medium tracking-widest uppercase">
                    <MapPin className="w-3.5 h-3.5 mr-2 text-red-600" />
                    Ashok Vihar, Delhi
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
