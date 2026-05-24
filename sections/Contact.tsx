import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Mail } from 'lucide-react';
import BrowserHeader from '../components/BrowserHeader';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="mb-20">
      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
          
          <BrowserHeader title="contact_form.html" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div>
              <h2 className="text-3xl font-bold text-pastel-text mb-4">Let's Connect</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Interested in collaboration, security consulting, or just want to discuss the latest in AI? Drop a message!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:sowmya@example.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/40 border border-white/60 hover:bg-white/60 transition-colors group">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Email</div>
                    <div className="font-medium text-gray-800">sowmya.g@example.com</div>
                  </div>
                </a>
                
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/40 border border-white/60 hover:bg-white/60 transition-colors group">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">LinkedIn</div>
                    <div className="font-medium text-gray-800">in/sowmyagundavarapu</div>
                  </div>
                </a>

                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/40 border border-white/60 hover:bg-white/60 transition-colors group">
                  <div className="p-3 bg-gray-100 text-gray-700 rounded-lg group-hover:scale-110 transition-transform">
                    <Github size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">GitHub</div>
                    <div className="font-medium text-gray-800">@Sowmyagundavarapu</div>
                  </div>
                </a>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white/80 transition-all shadow-inner" placeholder="John Doe" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white/80 transition-all shadow-inner" placeholder="john@example.com" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white/80 transition-all shadow-inner resize-none" placeholder="Hello..." />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 mt-4"
              >
                Send Message <Send size={16} />
              </motion.button>
            </form>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
};

export default Contact;