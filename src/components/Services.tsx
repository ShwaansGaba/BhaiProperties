import { motion } from 'motion/react';
import { Home, Building2, Store, KeyRound, Building, Map, FileText } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Residential Properties",
    description: "Premium independent builder floors, DDA flats, multi-story apartments, and high-end villas across prime locations.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Building2,
    title: "Commercial & Retail Space",
    description: "High-footfall retail shops, showrooms, fully furnished business centers, and flagship corporate frontages.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: KeyRound,
    title: "Rental & Leasing",
    description: "End-to-end leasing specialists. Heavy deposit rental setups, comprehensive To-Let management, and PG accommodations.",
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Map,
    title: "Land & Industrial",
    description: "Procurement of luxury farmhouses, country estates, industrial land, warehouses, and open development plots.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Building,
    title: "NRI & Legacy Advisory",
    description: "Administrative settlement advisory, local representation, and management for NRI property portfolios.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: FileText,
    title: "Document Clearings",
    description: "Property mutation, registry check, title verification, and complete document liaising for clear legal transfers.",
    image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <h2 className="text-stone-400 font-bold tracking-[0.2em] text-[10px] uppercase mb-4">Our Portfolio</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 tracking-tight">Capabilities</h3>
            <div className="w-12 h-[1px] bg-red-600 mb-8"></div>
            <p className="text-stone-500 text-lg font-light leading-relaxed">
              Covering the entire spectrum of property transactions, from luxury residential acquisitions to large-scale commercial leasing and regulatory compliance.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative h-[350px] overflow-hidden bg-stone-100 mb-6 shadow-sm rounded-3xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center rounded-2xl">
                  <service.icon className="w-4 h-4 text-blue-700" />
                </div>
              </div>
              <div className="flex-1 flex flex-col px-2">
                <h4 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{service.title}</h4>
                <p className="text-stone-500 text-sm font-light leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="w-0 h-[1px] bg-stone-900 mt-6 group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1] opacity-20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
