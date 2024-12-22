import React from 'react';
import { motion } from 'framer-motion';

export const BrandLogo = () => {
  return (
    <motion.a
      href="#"
      className="relative group"
      whileHover="hover"
    >
      <div className="relative">
        {/* Main logo container */}
        <motion.div
          className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#eebbc3] to-[#b8c1ec] rounded-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#eebbc3]/50 via-[#b8c1ec]/50 to-[#eebbc3]/50"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Logo text */}
          <div className="relative z-10 flex items-center justify-center">
            <span className="text-[#232946] font-bold text-2xl tracking-tighter">K</span>
            <motion.span
              className="text-[#232946] font-bold text-2xl tracking-tighter -ml-1"
              animate={{ rotate: [-3, 3, -3] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              S
            </motion.span>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
          <div className="absolute bottom-0 right-0 w-full h-1 bg-black/10" />
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-[#eebbc3] to-[#b8c1ec] rounded-lg opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-500"
          variants={{
            hover: {
              scale: 1.1,
              rotate: 10
            }
          }}
        />
      </div>
    </motion.a>
  );
};