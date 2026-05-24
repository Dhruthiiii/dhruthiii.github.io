import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { SKILL_CATEGORIES } from '../constants';
import { motion, Variants } from 'framer-motion';
import { Terminal, ShieldAlert, BrainCircuit, Server, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (name: string) => {
    if (name.includes('Programming')) return <Terminal className="w-5 h-5" />;
    if (name.includes('Security')) return <ShieldAlert className="w-5 h-5" />;
    if (name.includes('Machine')) return <BrainCircuit className="w-5 h-5" />;
    if (name.includes('Tools')) return <Server className="w-5 h-5" />;
    return <Cpu className="w-5 h-5" />;
  };

  const iconVariants: Variants = {
    hover: { 
      rotate: [0, -10, 10, -5, 5, 0],
      scale: 1.15,
      transition: { 
        duration: 0.6,
        ease: "easeInOut",
        type: "spring",
        stiffness: 300
      }
    },
    animate: {
      y: [0, -3, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Section id="skills">
       <div className="text-center mb-16">
        <span className="text-purple-500 font-mono text-sm tracking-wider uppercase">Arsenal</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-pastel-text">Technical Proficiency</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category, idx) => (
          <GlassCard 
            key={category.name} 
            className="p-8" 
            delay={idx * 0.1} 
            hoverEffect
            whileHover="hover"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                variants={iconVariants}
                animate="animate"
                className={`p-3 rounded-xl ${category.color.replace('text-', 'bg-').replace('800', '100')} ${category.color.split(' ')[2]} shadow-sm`}
              >
                {getIcon(category.name)}
              </motion.div>
              <h3 className="text-xl font-bold text-pastel-text">
                {category.name}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * i + (idx * 0.1) }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    boxShadow: "0 10px 20px -5px rgba(0,0,0,0.1)"
                  }}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium border cursor-pointer relative overflow-hidden group/skill
                    bg-white shadow-sm transition-colors
                    ${category.color.includes('blue') ? 'hover:border-blue-300 hover:text-blue-700' : ''}
                    ${category.color.includes('red') ? 'hover:border-red-300 hover:text-red-700' : ''}
                    ${category.color.includes('green') ? 'hover:border-green-300 hover:text-green-700' : ''}
                    ${category.color.includes('purple') ? 'hover:border-purple-300 hover:text-purple-700' : ''}
                  `}
                >
                  <span className="relative z-10">{skill}</span>
                  <motion.div 
                    className={`absolute inset-0 opacity-0 group-hover/skill:opacity-10 ${category.color.replace('text-', 'bg-').replace('800', '200')}`}
                    layoutId={`highlight-${idx}-${i}`}
                  />
                </motion.div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};

export default Skills;