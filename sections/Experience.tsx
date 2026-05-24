import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { EXPERIENCE_DATA } from '../constants';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <div className="text-center mb-16">
        <span className="text-purple-500 font-mono text-sm tracking-wider uppercase">Timeline</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-pastel-text">Professional Journey</h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 via-pink-200 to-transparent transform -translate-x-1/2 rounded-full hidden md:block" />
        
        <div className="space-y-12">
          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div 
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 bg-white border-4 border-purple-300 rounded-full shadow-lg transform -translate-x-1/2 md:-translate-y-2 z-10 hidden md:block" />

              {/* Content Side */}
              <div className="flex-1">
                 <GlassCard className="p-6 md:p-8 relative group" hoverEffect tilt>
                    <div className={`absolute top-0 right-0 w-24 h-24 ${item.color} rounded-bl-full opacity-20 transition-transform duration-500 group-hover:scale-110`} />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                       <div className="flex items-center gap-3">
                         <div className="p-2 bg-white rounded-lg shadow-sm text-gray-700">
                           <Briefcase size={18} />
                         </div>
                         <h3 className="text-xl font-bold text-pastel-text">{item.company}</h3>
                       </div>
                       <span className="text-sm font-mono text-gray-500 bg-white/50 px-3 py-1 rounded-full">{item.period}</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-purple-600 mb-3">{item.role}</h4>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md border border-gray-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                 </GlassCard>
              </div>

              {/* Empty Side for layout balance */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;