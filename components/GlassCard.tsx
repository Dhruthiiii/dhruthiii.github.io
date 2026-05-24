import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  tilt?: boolean;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  hoverEffect = false,
  tilt = false,
  delay = 0,
  onClick,
  onMouseMove,
  onMouseLeave,
  style,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Tilt and Spotlight logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse values for tilt
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-9deg", "9deg"]);

  // Raw mouse values for spotlight positioning (0 to 100%)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    // For Tilt (range -0.5 to 0.5)
    if (tilt) {
        const xPct = clientX / width - 0.5;
        const yPct = clientY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    // For Spotlight (px value)
    mouseX.set(clientX);
    mouseY.set(clientY);
    
    if (onMouseMove) onMouseMove(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (tilt) {
        x.set(0);
        y.set(0);
    }
    mouseX.set(0);
    mouseY.set(0);
    
    if (onMouseLeave) onMouseLeave(e);
  };

  // Create a radial gradient mask for the spotlight
  const spotlight = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.25), transparent 80%)`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 50 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformStyle: "preserve-3d",
        ...style
      }}
      className={`
        relative overflow-hidden group
        backdrop-blur-xl bg-white/40 
        border border-white/60 
        shadow-glass rounded-2xl
        transition-all duration-300
        ${hoverEffect ? 'hover:shadow-spatial hover:bg-white/50 hover:border-white/80' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Glossy reflection gradient (static) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none z-0" />
      
      {/* Dynamic Spotlight Glare */}
      {hoverEffect && (
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: spotlight }}
        />
      )}

      {/* Content */}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;