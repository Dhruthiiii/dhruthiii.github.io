import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';
import { Shield, Brain, Zap, BookOpen, Code } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, color, bgColor }: any) => (
  <motion.div variants={fadeInUp}>
    <GlassCard className="p-6 h-full" hoverEffect>
      <div className={`w-12 h-12 rounded-xl ${bgColor} ${color} flex items-center justify-center mb-4`}>
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold mb-2 text-pastel-text">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </GlassCard>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="text-center mb-16">
        <span className="text-purple-500 font-mono text-sm tracking-wider uppercase">Profile</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-pastel-text">About The Engineer</h2>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <FeatureCard 
          icon={Shield}
          title="Security First"
          description="Integrating security at every stage of the SDLC. From threat modeling to secure coding practices."
          color="text-red-500"
          bgColor="bg-red-50"
        />
        <FeatureCard 
          icon={Brain}
          title="GenAI & ML"
          description="Leveraging machine learning and generative AI to automate workflows and detect anomalies."
          color="text-purple-500"
          bgColor="bg-purple-50"
        />
        <FeatureCard 
          icon={Code}
          title="Engineering"
          description="Building scalable software solutions with clean, maintainable code in Java, Python, and JS."
          color="text-blue-500"
          bgColor="bg-blue-50"
        />
        <FeatureCard 
          icon={BookOpen}
          title="Continuous Learning"
          description="Staying ahead of the curve in a rapidly evolving tech landscape through constant research."
          color="text-green-500"
          bgColor="bg-green-50"
        />
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <GlassCard className="col-span-1 md:col-span-2 p-8" hoverEffect>
          <h3 className="text-xl font-bold mb-4 text-pastel-text">My Journey</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            I am a passionate Software Engineer with a specialized focus on Cybersecurity. 
            My journey began with a curiosity about how systems break, which naturally led me to learn how to secure them.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From analyzing threats at Flipkart to building deep learning models at ICRISAT, 
            I blend analytical rigor with creative problem-solving. I believe in software that is not just functional, 
            but resilient and trustworthy by design.
          </p>
        </GlassCard>

        <GlassCard className="col-span-1 p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-white/60 to-purple-50/50">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-200 to-pink-200 mb-6 flex items-center justify-center shadow-inner">
             <span className="text-4xl">👩‍💻</span>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-pastel-text">3+</div>
            <div className="text-sm text-gray-500 font-mono uppercase tracking-widest">Years Experience</div>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
};

export default About;