import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Code, Terminal } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import BrowserHeader from '../components/BrowserHeader';
import { floatAnimation, fadeInUp } from '../utils/animations';

const RoleSwitcher = () => {
  const [index, setIndex] = React.useState(0);
  const roles = [
    "Software Engineer",
    "Cybersecurity Specialist",
    "API Security Expert",
    "GenAI Enthusiast"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="h-8 overflow-hidden relative w-full">
      <motion.div
        key={index}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="absolute w-full"
      >
        {roles[index]}
      </motion.div>
    </div>
  );
};

const FloatCard = ({ icon: Icon, color, className, delay }: { icon: any, color: string, className: string, delay: number }) => (
  <motion.div
    animate={{ 
      y: [0, -15, 0],
      rotate: [0, 5, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    className={`absolute p-3 rounded-xl shadow-lg ${color} ${className} z-10 border border-white/50`}
  >
    <Icon className="w-6 h-6 text-gray-700" />
  </motion.div>
);

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-32 pb-20 px-4">
      {/* Local floating elements for immediate visual interest */}
      <motion.div 
        animate={floatAnimation}
        className="absolute top-40 left-[10%] w-24 h-24 bg-yellow-200/40 rounded-full blur-2xl -z-10" 
      />

      <GlassCard className="w-full max-w-5xl p-8 md:p-12 min-h-[600px] flex flex-col justify-center perspective-1000" tilt>
        <BrowserHeader title="portfolio.exe" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 border border-white text-sm font-semibold text-pastel-text tracking-wide mb-4 shadow-sm">
                👋 Hello, World!
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-pastel-text leading-tight tracking-tight">
                Dhruthi
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-20"
            >
              <div className="text-xl md:text-2xl text-gray-600 font-mono flex items-center gap-3">
                 <span className="text-purple-500">&gt;</span>
                 <RoleSwitcher />
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-gray-600 text-lg max-w-md leading-relaxed"
            >
              Bridging the gap between robust software engineering and fortress-level security. 
              Building secure, scalable, and intelligent systems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 pt-4 relative z-30"
            >
              <a 
                href="#projects" 
                onClick={(e) => handleScroll(e, '#projects')}
                className="group relative px-8 py-3 bg-gray-900 text-white rounded-full font-medium overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 inline-flex items-center gap-2 cursor-pointer pointer-events-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="px-8 py-3 bg-white/50 border border-white/60 text-gray-800 rounded-full font-medium shadow-sm hover:bg-white/80 transition-all hover:-translate-y-1 cursor-pointer pointer-events-auto"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          <div className="relative h-full min-h-[300px] flex items-center justify-center">
             {/* Abstract spatial illustration */}
             <div className="relative w-64 h-64 md:w-80 md:h-80">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-purple-300/50"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-dashed border-pink-300/50"
                />
                
                {/* Floating cards inside the circle */}
                <FloatCard icon={ShieldCheck} color="bg-green-100" className="top-0 right-0" delay={0} />
                <FloatCard icon={Terminal} color="bg-gray-100" className="bottom-10 -left-4" delay={1.5} />
                <FloatCard icon={Code} color="bg-blue-100" className="top-1/2 -right-8" delay={0.8} />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/30 backdrop-blur-md rounded-2xl shadow-glass border border-white/40 flex items-center justify-center">
                    <div className="text-4xl">🔐</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
};

export default Hero;