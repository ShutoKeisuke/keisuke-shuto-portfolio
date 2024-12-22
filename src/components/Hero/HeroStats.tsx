import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Technologies', value: '15+' },
];

export const HeroStats = () => {
  return (
    <motion.div
      className="grid grid-cols-3 gap-4 perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="relative preserve-3d h-[120px]" // Fixed height
          initial={{ rotateX: -15 }}
          whileHover={{ 
            rotateX: 0,
            translateY: -5,
            transition: { duration: 0.2 }
          }}
        >
          {/* Background card with 3D effect */}
          <div className="absolute inset-0 bg-[#121629]/30 rounded-lg transform-gpu preserve-3d
                        hover:shadow-lg hover:shadow-[#eebbc3]/5 transition-shadow
                        flex flex-col items-center justify-center
                        before:absolute before:inset-0 before:-z-10 before:rounded-lg
                        before:bg-gradient-to-b before:from-[#eebbc3]/10 before:to-transparent
                        before:translate-z-[-10px]">
            {/* Content */}
            <motion.p 
              className="text-2xl font-bold text-[#eebbc3] mb-1"
              initial={{ translateZ: 10 }}
            >
              {stat.value}
            </motion.p>
            <motion.p 
              className="text-sm text-[#b8c1ec]"
              initial={{ translateZ: 5 }}
            >
              {stat.label}
            </motion.p>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-[#eebbc3]/5 to-transparent rounded-t-lg" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#eebbc3]/20 to-transparent" />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};