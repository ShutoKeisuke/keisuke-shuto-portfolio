import React from 'react';
import { motion } from 'framer-motion';
import { AboutHeading } from './AboutHeading';
import { AboutContent } from './AboutContent';

const About = () => {
  return (
    <section id="about" className="relative py-16 bg-gradient-to-b from-[#232946] to-[#121629]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-[#121629]/20" />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#b8c1ec]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#eebbc3]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <AboutHeading />
        <AboutContent />
      </div>
    </section>
  );
};

export default About;