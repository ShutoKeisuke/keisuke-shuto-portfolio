import React from 'react';
import { motion } from 'framer-motion';
import { SkillsGrid } from './SkillsGrid';

const Skills = () => {
  return (
    <section id="skills" className="py-16 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[#121629]/30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#eebbc3]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#b8c1ec]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-light mb-4">Skills</h2>
          <p className="text-[#b8c1ec] max-w-2xl mx-auto">
            長年の経験を活かし、フロントエンドからバックエンド、
            インフラまで幅広い技術スタックを習得してきました。
            常に新しい技術のキャッチアップを欠かしません。
          </p>
        </motion.div>

        <SkillsGrid />
      </div>
    </section>
  );
};

export default Skills;