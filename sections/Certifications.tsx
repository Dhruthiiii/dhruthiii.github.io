import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { CERTIFICATIONS_DATA } from '../constants';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <Section id="certifications">
      <div className="text-center mb-16">
        <span className="text-purple-500 font-mono text-sm tracking-wider uppercase">Achievements</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-pastel-text">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            custom={index}
          >
            <GlassCard className="h-full p-6 relative group flex flex-col" hoverEffect tilt>
              <div className={`absolute top-0 right-0 w-24 h-24 ${cert.color} rounded-bl-full opacity-20 transition-transform duration-500 group-hover:scale-110`} />
              
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-purple-600">
                  <Award size={24} />
                </div>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-pastel-text mb-2">{cert.title}</h3>
              <p className="text-gray-600 font-medium mb-4">{cert.issuer}</p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-mono text-gray-500 bg-white/50 px-3 py-1 rounded-full">
                  {cert.date}
                </span>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
