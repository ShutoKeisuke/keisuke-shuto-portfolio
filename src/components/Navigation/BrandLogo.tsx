import React from 'react';
import { motion } from 'framer-motion';

export const BrandLogo = () => {
  return (
    <motion.a
      href="#"
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative flex items-center">
        {/* K with same font as S */}
        <div className="relative">
          <span className="text-4xl font-black tracking-tighter"
            style={{ 
              fontFamily: 'system-ui',
              fontStretch: 'ultra-condensed',
              fontVariationSettings: '"wght" 900, "wdth" 75',
              transform: 'skew(-12deg) translateX(-1px)',
              display: 'inline-block'
            }}
          >
            <span className="relative bg-gradient-to-br from-[#eebbc3] via-[#b8c1ec] to-[#eebbc3] bg-clip-text text-transparent">
              𝕶
            </span>
          </span>
        </div>

        {/* S without animation */}
        <div className="relative -ml-1">
          <span className="text-4xl font-black tracking-tighter"
            style={{ 
              fontFamily: 'system-ui',
              fontStretch: 'ultra-condensed',
              fontVariationSettings: '"wght" 900, "wdth" 75',
              transform: 'skew(-12deg) translateX(-1px)',
              display: 'inline-block'
            }}
          >
            <span className="relative bg-gradient-to-br from-[#eebbc3] via-[#b8c1ec] to-[#eebbc3] bg-clip-text text-transparent">
              𝕾
            </span>
          </span>
        </div>
      </div>
    </motion.a>
  );
};