import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Academics } from './pages/Academics';
import { Library } from './pages/Library';
import { Contact } from './pages/Contact';
import { Fatwa } from './pages/Fatwa';
import { Gallery } from './pages/Gallery';
import { Boarding } from './pages/Boarding';
import { Admissions } from './pages/Admissions';
import { Blog } from './pages/Blog';
import { Events } from './pages/Events';

function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-6">
      <h1 className="text-5xl font-serif text-primary mb-4">{title}</h1>
      <p className="text-primary text-lg">This page is currently being crafted.</p>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.2 }}
        className="w-full h-full"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/library" element={<Library />} />
          <Route path="/boarding" element={<Boarding />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fatwa" element={<Fatwa />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* New Placeholder Routes from Update */}
          <Route path="/services" element={<ComingSoon title="Masjid Services" />} />
          <Route path="/events" element={<Events />} />
          <Route path="/education" element={<Academics />} />
          <Route path="/directory/*" element={<ComingSoon title="Community Directory" />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-bg-base text-text-main font-sans selection:bg-primary/20 relative">
        <Navbar />
        <main className="flex-grow pt-28 pb-16 relative z-10 w-full flex flex-col">
           <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
