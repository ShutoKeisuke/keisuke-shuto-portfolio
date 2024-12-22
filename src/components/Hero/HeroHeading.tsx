import React from 'react';
import { motion } from 'framer-motion';

export const HeroHeading = () => {
  return (
    <motion.h1 
      className="relative text-5xl md:text-7xl mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="relative inline-block">
        {/* Full name with consistent styling */}
        <span 
          className="inline-block bg-gradient-to-br from-[#eebbc3] to-[#b8c1ec] bg-clip-text text-transparent"
          style={{ 
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            letterSpacing: '0.02em',
          }}
        >
          Keisuke Shuto
        </span>
        
        {/* Decorative underline */}
        <motion.div
          className="absolute -bottom-2 left-0 w-full h-px"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="h-full bg-gradient-to-r from-transparent via-[#eebbc3]/30 to-transparent" />
        </motion.div>
      </span>
    </motion.h1>
  );
};