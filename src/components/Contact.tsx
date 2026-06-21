import { motion } from 'motion/react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-stone-400 font-bold tracking-[0.2em] text-[10px] uppercase mb-6 flex items-center">
              <span className="w-8 h-[1px] bg-red-600 mr-4"></span>
              Get In Touch
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-stone-900 mb-8 leading-[1.1] tracking-tight">
              Start your <br/><span className="text-stone-400 italic font-light">journey.</span>
            </h3>
            <p className="text-stone-500 text-lg font-light mb-12 max-w-md">
              Whether you're looking to buy, sell, rent, or need expert advisory on complex documentation, our team is ready.
            </p>

            <div className="space-y-12">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-blue-700" />
                </div>
                <div className="ml-6">
                  <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Direct Contact</h4>
                  <div className="space-y-2">
                    <p><a href="tel:+919891111728" className="text-xl font-serif text-stone-900 hover:text-blue-700 transition-colors">+91 98911 11728 <span className="text-xs font-sans text-stone-400 ml-2 tracking-wide font-light">(Primary / WhatsApp)</span></a></p>
                    <p><a href="tel:+918047786933" className="text-xl font-serif text-stone-900 hover:text-blue-700 transition-colors">+91 80477 86933</a></p>
                    <p><a href="tel:+911166264309" className="text-xl font-serif text-stone-900 hover:text-blue-700 transition-colors">+91-11-66264309 <span className="text-xs font-sans text-stone-400 ml-2 tracking-wide font-light">(Desk)</span></a></p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <div className="ml-6">
                  <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Office Location</h4>
                  <p className="text-lg font-serif text-stone-900 leading-relaxed max-w-sm">
                    A-28, Ashok Vihar Phase 1 Road, Block A, Pocket A, Phase 1, Delhi, 110052
                    <br />
                    <span className="text-sm font-sans text-stone-400 font-light mt-1 block tracking-wide">Opposite Axis Bank</span>
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-blue-700" />
                </div>
                <div className="ml-6">
                  <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Business Hours</h4>
                  <p className="text-lg font-serif text-stone-900">
                    Mon — Sun <span className="text-stone-400 px-2 font-sans text-sm">|</span> 9:30 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8 sm:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-stone-100 flex flex-col justify-center rounded-3xl"
          >
            <h3 className="text-2xl font-serif text-stone-900 mb-8">Send an Inquiry</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <div className="relative">
                  <input type="text" id="name" className="peer w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 placeholder-transparent focus:outline-none focus:border-stone-900 transition-colors duration-300" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-[10px] font-bold tracking-widest uppercase text-stone-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-stone-900">Full Name</label>
                </div>
                <div className="relative">
                  <input type="tel" id="phone" className="peer w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 placeholder-transparent focus:outline-none focus:border-stone-900 transition-colors duration-300" placeholder="Phone" />
                  <label htmlFor="phone" className="absolute left-0 -top-3.5 text-[10px] font-bold tracking-widest uppercase text-stone-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-stone-900">Phone Number</label>
                </div>
                
                <div className="relative pt-4">
                  <label htmlFor="interest" className="block text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-2">Interest</label>
                  <select id="interest" className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors duration-300 appearance-none rounded-none cursor-pointer">
                    <option>Residential Purchase</option>
                    <option>Commercial Leasing</option>
                    <option>Property Rental</option>
                    <option>Document Clearing / Advisory</option>
                  </select>
                </div>

                <div className="relative pt-4">
                  <textarea id="message" rows={3} className="peer w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 placeholder-transparent focus:outline-none focus:border-stone-900 transition-colors duration-300 resize-none" placeholder="Message"></textarea>
                  <label htmlFor="message" className="absolute left-0 top-4 text-[10px] font-bold tracking-widest uppercase text-stone-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-4 peer-focus:text-[10px] peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-stone-900">How can we assist?</label>
                </div>
              </div>

              <button className="w-full bg-stone-900 text-white font-bold tracking-[0.2em] text-[10px] uppercase py-5 hover:bg-blue-800 transition-colors duration-500 mt-4 rounded-xl">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
