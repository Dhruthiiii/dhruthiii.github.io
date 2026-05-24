import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-28 ${className}`}>
      {children}
    </section>
  );
};

export default Section;