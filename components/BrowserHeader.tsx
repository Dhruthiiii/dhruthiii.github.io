import React from 'react';

const BrowserHeader: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <div className="flex items-center gap-2 mb-4 opacity-70">
      <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-sm" />
      <div className="w-3 h-3 rounded-full bg-amber-400/80 shadow-sm" />
      <div className="w-3 h-3 rounded-full bg-green-400/80 shadow-sm" />
      {title && <span className="ml-3 text-xs font-mono text-pastel-text/60 uppercase tracking-widest">{title}</span>}
    </div>
  );
};

export default BrowserHeader;