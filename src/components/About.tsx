import { motion } from 'motion/react';
import { Target, TrendingUp, ShieldCheck, FileCheck } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Tailored Property Matching",
    description: "We align distinct spatial and budget metrics perfectly. Every listing is carefully vetted to fulfill your exact lifestyle or business prerequisites."
  },
  {
    icon: TrendingUp,
    title: "Local Market Mastery",
    description: "Our seasoned property dealers possess deep, granular knowledge of block values, neighborhood trajectories, and local zoning laws across Delhi."
  },
  {
    icon: FileCheck,
    title: "Full Deal Lifecycle Management",
    description: "We manage your entire property path—from accurate evaluation and smart marketing to final drafting, document clearings, and clean closures."
  },
  {
    icon: ShieldCheck,
    title: "Total Regulatory Peace of Mind",
    description: "We emphasize absolute compliance, transparent disclosures, and expert coordination during title verification, mutation checks, or legal transfers."
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-stone-400 font-bold tracking-[0.2em] text-[10px] uppercase mb-6 flex items-center">
              <span className="w-8 h-[1px] bg-red-600 mr-4"></span>
              Core Mission
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.1] mb-8 tracking-tight">
              Bridging the gap between <span className="italic text-stone-500">people</span> & their ideal properties.
            </h3>
            <div className="space-y-6 text-stone-600 text-lg font-light leading-relaxed">
              <p>
                To offer seamless, stress-free, and hyper-transparent property solutions. With over a decade of experience operating in Ashok Vihar and North West Delhi, we have established a reputation for integrity and deep market intelligence.
              </p>
              <p>
                Whether you are securing a luxury residential floor, a commercial corporate front, or clearing complex legacy property documentation, our team ensures a pristine experience from initial handshake to final registry.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-1000 ease-out overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern property interior" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-stone-900/10 mix-blend-overlay" />
            </div>
            {/* Minimalist Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-8 -left-8 bg-white p-8 shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-stone-100 rounded-3xl"
            >
              <div className="text-6xl font-serif text-stone-900 leading-none mb-2">15<span className="text-red-600">+</span></div>
              <div className="text-[10px] font-bold tracking-widest text-stone-500 uppercase">Years of Excellence</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="mb-6 w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center transition-colors duration-500 group-hover:border-blue-200 group-hover:bg-blue-50">
                <value.icon className="w-5 h-5 text-stone-400 group-hover:text-blue-700 transition-colors duration-500" />
              </div>
              <h4 className="text-xl font-serif text-stone-900 mb-4">{value.title}</h4>
              <p className="text-stone-500 font-light leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
