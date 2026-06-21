/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Locality from './components/Locality';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Locality />
      <Contact />
      <Footer />
    </div>
  );
}
