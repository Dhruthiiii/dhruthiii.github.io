import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { PROJECTS_DATA } from '../constants';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';
import { ExternalLink, Github } from 'lucide-react';
import BrowserHeader from '../components/BrowserHeader';

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const Projects: React.FC = () => {
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
    <Section id="projects" className="overflow-visible">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-4">
        <div>
          <span className="text-purple-500 font-mono text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-pastel-text">Featured Projects</h2>
        </div>
        <a href="https://github.com/Sowmyagundavarapu" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors group">
          View all on GitHub <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {PROJECTS_DATA.map((project) => (
          <motion.div key={project.id} variants={fadeInUp}>
            <GlassCard className="h-full flex flex-col p-0 overflow-hidden group" tilt hoverEffect>
              {/* Card Header / Image Area */}
              <div className={`h-56 relative overflow-hidden`}>
                 {/* Background Image with Zoom Effect */}
                 {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                 ) : (
                    <div className={`absolute inset-0 ${project.imagePlaceholderColor}`} />
                 )}
                 
                 {/* Darkening Overlay on Hover */}
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                 
                 {/* Gradient Overlay for Text Readability/Blending */}
                 <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-90" />
                 
                 {/* Browser Header on top */}
                 <div className="absolute top-0 left-0 right-0 p-4">
                    <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg border border-white/40 shadow-sm inline-block">
                        <BrowserHeader />
                    </div>
                 </div>
                 
                 <div className="absolute bottom-4 left-6 z-10 transform group-hover:translate-y-[-5px] transition-transform duration-300">
                   <span className="inline-block px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/50 text-xs font-bold text-gray-800 shadow-sm">
                     {project.type}
                   </span>
                 </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1 bg-white/40 border-t border-white/50">
                <h3 className="text-2xl font-bold text-pastel-text mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-mono text-gray-500 border border-purple-100/50 px-2 py-1 rounded-md bg-purple-50/50">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200/50 flex items-center justify-between">
                     <a 
                       href="#contact"
                       onClick={(e) => handleScroll(e, '#contact')}
                       className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors hover:bg-white/50 px-3 py-1.5 rounded-lg cursor-pointer"
                     >
                       <Github size={16} /> Code
                     </a>
                     <a 
                       href="#contact"
                       onClick={(e) => handleScroll(e, '#contact')}
                       className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors hover:bg-white/50 px-3 py-1.5 rounded-lg cursor-pointer"
                     >
                       <ExternalLink size={16} /> Demo
                     </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;