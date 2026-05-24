import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { NEW_BLOGS, BLOG_PLAYLISTS } from '../constants';
import { BlogItem, BlogPlaylist } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp, modalVariants } from '../utils/animations';
import { X, Calendar, Layers, ChevronRight, Shield, Brain, Terminal, Server, ArrowLeft, Maximize2, Minimize2 } from 'lucide-react';

const Blogs: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState<BlogPlaylist | null>(null);
  const [isMaximized, setIsMaximized] = useState(false);

  // Lock body scroll when a modal is open
  useEffect(() => {
    if (selectedBlog || selectedPlaylist) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedBlog, selectedPlaylist]);

  const getPlaylistIcon = (name: string) => {
    switch (name) {
      case 'shield': return <Shield size={24} />;
      case 'brain': return <Brain size={24} />;
      case 'terminal': return <Terminal size={24} />;
      case 'server': return <Server size={24} />;
      default: return <Layers size={24} />;
    }
  };

  const handleCloseBlog = () => {
    setSelectedBlog(null);
    setIsMaximized(false);
    if (!selectedPlaylist) setSelectedPlaylist(null);
  };

  return (
    <Section id="blogs">
      <div className="text-center mb-12">
        <span className="text-purple-500 font-mono text-sm tracking-wider uppercase">Insights</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-pastel-text">Knowledge Hub</h2>
      </div>

      {/* NEW RELEASES SECTION */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6 px-1">
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
           <h3 className="text-xl font-bold text-gray-800 tracking-tight">Fresh off the Press</h3>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {NEW_BLOGS.map((blog) => (
            <motion.div key={blog.id} variants={fadeInUp}>
              <GlassCard 
                className="h-full group cursor-pointer border-l-4 border-l-green-400" 
                hoverEffect 
                onClick={() => setSelectedBlog(blog)}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md uppercase tracking-wide">
                      New Release
                    </span>
                    <span className="text-xs text-gray-400 font-mono">{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-pastel-text mb-2 group-hover:text-purple-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {blog.summary}
                  </p>
                  <div className="mt-auto flex items-center text-sm font-medium text-purple-600 group-hover:underline">
                    Read Article <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* PLAYLISTS SECTION */}
      <div>
        <div className="flex items-center gap-3 mb-6 px-1">
           <Layers size={20} className="text-gray-500" />
           <h3 className="text-xl font-bold text-gray-800 tracking-tight">Curated Playlists</h3>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {BLOG_PLAYLISTS.map((playlist) => (
            <motion.div key={playlist.id} variants={fadeInUp}>
              <div 
                className="relative group cursor-pointer"
                onClick={() => setSelectedPlaylist(playlist)}
              >
                {/* Stack effect layers */}
                <div className="absolute top-0 left-0 w-full h-full bg-white/40 border border-white/40 rounded-2xl transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                <div className="absolute top-0 left-0 w-full h-full bg-white/30 border border-white/30 rounded-2xl transform translate-x-4 translate-y-4 -z-20 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300" />

                <GlassCard className="h-full p-6" hoverEffect>
                  <div className={`w-12 h-12 rounded-xl ${playlist.color} flex items-center justify-center mb-4`}>
                    {getPlaylistIcon(playlist.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-pastel-text mb-2">{playlist.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{playlist.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs font-mono text-gray-400">{playlist.blogs.length} Articles</span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* PLAYLIST MODAL */}
      <AnimatePresence>
        {selectedPlaylist && !selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm"
            onClick={() => setSelectedPlaylist(null)}
          >
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()} 
              className="w-full max-w-2xl max-h-[85vh] bg-white/95 shadow-2xl rounded-2xl overflow-hidden flex flex-col"
            >
               {/* Header */}
               <div className="p-6 border-b border-gray-100 flex justify-between items-start bg-white/50 flex-none">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${selectedPlaylist.color} shrink-0`}>
                          {getPlaylistIcon(selectedPlaylist.iconName)}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{selectedPlaylist.title}</h2>
                          <p className="text-gray-500 text-sm mt-1">{selectedPlaylist.description}</p>
                        </div>
                      </div>
                      <button onClick={() => setSelectedPlaylist(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={20} className="text-gray-500" />
                      </button>
                   </div>

                   {/* List of Blogs */}
                   <div className="p-6 overflow-y-auto space-y-3 bg-gray-50/50 flex-1">
                      {selectedPlaylist.blogs.map((blog, idx) => (
                        <motion.div 
                          key={blog.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          onClick={() => setSelectedBlog(blog)}
                          className="p-4 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md cursor-pointer transition-all group"
                        >
                           <div className="flex justify-between items-center mb-1">
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${blog.category === 'Security' ? 'bg-red-50 text-red-600' : 'bg-purple-50 text-purple-600'}`}>
                                {blog.category}
                              </span>
                              <span className="text-xs text-gray-400 font-mono">{blog.readTime}</span>
                           </div>
                           <h4 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">{blog.title}</h4>
                           <p className="text-sm text-gray-500 mt-1 line-clamp-1">{blog.summary}</p>
                        </motion.div>
                      ))}
                   </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BLOG READING MODAL */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[110] flex items-center justify-center bg-gray-900/60 backdrop-blur-md transition-all duration-300 ${isMaximized ? 'p-0' : 'p-4'}`}
            onClick={handleCloseBlog}
          >
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()} 
              className={`flex flex-col bg-white border border-white/80 shadow-2xl overflow-hidden transition-all duration-300 ${isMaximized ? 'w-full h-full rounded-none border-0' : 'w-full max-w-3xl max-h-[90vh] rounded-2xl'}`}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-10 flex-none">
                    <div className="flex items-center gap-3">
                      {/* Back button if came from playlist */}
                      {selectedPlaylist && NEW_BLOGS.every(b => b.id !== selectedBlog.id) && (
                        <button 
                          onClick={() => setSelectedBlog(null)} 
                          className="mr-2 p-2 hover:bg-gray-100 rounded-full text-gray-500"
                          title="Back to Playlist"
                        >
                          <ArrowLeft size={20} />
                        </button>
                      )}
                      
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                           <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 text-xs font-bold border border-purple-100">
                            {selectedBlog.category}
                          </span>
                          <span className="flex items-center text-xs text-gray-400">
                            <Calendar size={12} className="mr-1"/> {selectedBlog.date}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 line-clamp-1">{selectedBlog.title}</h2>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setIsMaximized(!isMaximized)}
                        className="p-2 rounded-full hover:bg-purple-50 text-gray-400 hover:text-purple-600 transition-colors"
                        title={isMaximized ? "Minimize" : "Maximize"}
                      >
                        {isMaximized ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                      </button>
                      <button 
                        onClick={handleCloseBlog}
                        className="p-2 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                        title="Close"
                      >
                        <X size={24} />
                      </button>
                    </div>
                  </div>

                  {/* Modal Body */}
                  <div className="p-8 md:p-10 overflow-y-auto bg-white flex-1">
                    <article className="prose prose-purple max-w-none mx-auto">
                       <p className="lead text-xl text-gray-600 mb-8 font-light italic border-l-4 border-purple-200 pl-4">
                         {selectedBlog.summary}
                       </p>
                       <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
                    </article>
                  </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Blogs;