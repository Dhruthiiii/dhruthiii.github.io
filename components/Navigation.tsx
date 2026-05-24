import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Skills', href: '#skills' },
];

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Small offset for breathing room, since header scrolls away
      const headerOffset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="absolute top-0 left-0 right-0 z-50 pointer-events-none pt-6"
      >
        <div className="max-w-5xl mx-auto px-4">
          {/* Navigation Bar - Full Width of Container */}
          <div className={`
            pointer-events-auto
            backdrop-blur-xl bg-white/80 border border-white/60 shadow-glass rounded-2xl px-6 py-4
            flex items-center justify-between w-full transition-all duration-300
          `}>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center justify-between w-full">
              <div className="flex items-center justify-between flex-1 px-4">
                {navItems.map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-white/50 rounded-lg transition-all cursor-pointer text-center"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 cursor-pointer shrink-0"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-gray-600 pointer-events-auto hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-28 px-6 md:hidden overflow-y-auto pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-2xl font-bold text-gray-800 py-4 border-b border-gray-100 cursor-pointer hover:text-purple-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 py-4 border-b border-gray-100 cursor-pointer"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;