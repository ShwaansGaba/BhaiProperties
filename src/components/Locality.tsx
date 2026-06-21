import { motion } from 'motion/react';
import { MapPin, TramFront, Building, TreePine, Banknote } from 'lucide-react';

const highlights = [
  {
    icon: TramFront,
    title: "Prime Connectivity",
    desc: "Seamless transit via Delhi's main Ring Road network. Just ~2km from Shalimar Bagh (Pink Line) & Keshav Puram (Red Line) Metro Stations."
  },
  {
    icon: Building,
    title: "Corporate Proximity",
    desc: "Neighboring Netaji Subhash Place (NSP) Commercial Hub (~4km), Wazirpur Industrial Area, Model Town, and Pitampura."
  },
  {
    icon: TreePine,
    title: "Lush Green Belts",
    desc: "Surrounded by Baba Chaudhary Khimman Singh Park, Ismail Khan Park, and Ch Lekharam Park."
  },
  {
    icon: Banknote,
    title: "Robust Valuations",
    desc: "High-value affluent region with strong baseline economics for both luxury residential rentals and premium purchases."
  }
];

export default function Locality() {
  return (
    <section id="locality" className="py-32 bg-stone-950 text-stone-300 relative overflow-hidden">
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-px bg-stone-700 absolute left-1/4"></div>
        <div className="h-full w-px bg-stone-700 absolute left-2/4"></div>
        <div className="h-full w-px bg-stone-700 absolute left-3/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <h2 className="text-stone-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-4">Area Intelligence</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 tracking-tight">
              Invest in <br/><span className="text-stone-400 italic font-light">Ashok Vihar.</span>
            </h3>
            <p className="text-stone-400 text-lg leading-relaxed mb-10 font-light pl-4 border-l-2 border-blue-800">
              A highly affluent, structurally organized North Delhi neighborhood situated along the key Ring Road corridor. Spread across four distinct phases, it represents a premium blend of luxury builder floors, DDA housing, and active commercial avenues.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="mb-4 bg-stone-900 p-3 rounded-2xl inline-block w-fit border border-stone-800">
                    <item.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="text-base font-medium text-white mb-2">{item.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:col-start-8 relative"
          >
            <div className="aspect-[3/4] overflow-hidden shadow-2xl relative rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1577903808940-9b4860d7beee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Delhi cityscape and metro" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-stone-950/40 mix-blend-multiply" />
              
              <div className="absolute bottom-0 w-full bg-stone-950/80 backdrop-blur-xl p-8 border-t border-white/5 text-center">
                <div className="flex items-center justify-center space-x-2 text-white mb-6">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span className="font-medium font-serif text-xl tracking-tight">Ashok Vihar Phase 1-4</span>
                </div>
                <div className="flex justify-center space-x-12">
                  <div>
                    <div className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Buy Avg.</div>
                    <div className="text-lg font-serif text-white">~₹12,700<span className="text-xs text-stone-500 font-sans tracking-normal">/sq.ft</span></div>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div>
                    <div className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Rent 2BHK</div>
                    <div className="text-lg font-serif text-white">~₹20,200<span className="text-xs text-stone-500 font-sans tracking-normal">/mo</span></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
