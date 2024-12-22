import React from 'react';
import { motion } from 'framer-motion';

export const FooterLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="inline-block"
    >
      <motion.a
        href="#"
        className="relative inline-block group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span 
          className="text-2xl font-bold bg-gradient-to-r from-[#eebbc3] to-[#b8c1ec] bg-clip-text text-transparent"
          style={{ 
            fontFamily: "'Cinzel', serif",
            letterSpacing: '0.02em'
          }}
        >
          KS
        </span>
        
        {/* Animated underline */}
        <motion.div
          className="absolute -bottom-1 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-full bg-gradient-to-r from-[#eebbc3] to-[#b8c1ec]" />
        </motion.div>
      </motion.a>
    </motion.div>
  );
};