import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Blogs from './sections/Blogs';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Removed target: containerRef so it defaults to viewport/window scroll
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div ref={containerRef} className="min-h-screen relative selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 origin-left z-[100]" 
        style={{ scaleX: scrollYProgress }} 
      />

      {/* Global Parallax Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <motion.div 
          style={{ y: y1, x: -100, rotate: rotate1 }}
          className="absolute top-20 left-0 w-96 h-96 bg-pastel-pink/30 rounded-full blur-[100px]" 
        />
        <motion.div 
          style={{ y: y2, x: 100 }}
          className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-pastel-purple/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-0 left-[20%] w-64 h-64 bg-pastel-blue/30 rounded-full blur-[80px]" 
        />
      </div>

      <Navigation />
      
      <main className="relative z-0">
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Projects />
        <Blogs />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm font-mono relative z-10">
        <div className="max-w-7xl mx-auto px-6 border-t border-gray-200 pt-8">
           <p>© {new Date().getFullYear()} Dhruthi. All rights reserved.</p>
           <p className="mt-2 text-xs opacity-60">Designed with Spatial Glass UI</p>
        </div>
      </footer>
    </div>
  );
};

export default App;