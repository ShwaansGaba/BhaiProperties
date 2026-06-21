import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative h-screen min-h-[700px] flex items-center justify-center bg-stone-950 overflow-hidden">
      {/* Background Image & Overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Modern Home exterior"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-900/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8"
        >
          <MapPin className="w-3.5 h-3.5 text-red-600" />
          <span className="text-xs font-semibold tracking-widest text-white uppercase">North West Delhi</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-none mb-8"
        >
          Prime Properties<br/>
          <span className="font-light italic text-stone-400">Perfectly Placed.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-stone-300 mb-12 max-w-2xl font-light leading-relaxed"
        >
          Over a decade of building trust, shaping transparency, and delivering excellence in Delhi's real estate market.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <button 
            onClick={scrollToContact}
            className="group flex items-center justify-center bg-white text-stone-900 px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all hover:bg-stone-200 w-full sm:w-auto"
          >
            Find Your Property
            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="https://wa.me/919891111728"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center group bg-transparent text-white border border-white/30 px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all hover:bg-white/10 w-full sm:w-auto"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-medium">Scroll to explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-stone-400 to-transparent" />
      </motion.div>
    </div>
  );
}
