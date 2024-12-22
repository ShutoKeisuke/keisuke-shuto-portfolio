import React from 'react';
import { motion } from 'framer-motion';

export const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]"
    >
      <picture>
        {/* モバイル用の画像（縦長） */}
        <source
          media="(max-width: 767px)"
          srcSet="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=768&h=1024&crop=entropy"
        />
        {/* タブレット用の画像（横長） */}
        <source
          media="(max-width: 1023px)"
          srcSet="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=1024&h=576&crop=entropy"
        />
        {/* デスクトップ用の画像（4:3） */}
        <img
          src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=1200&h=900&crop=entropy"
          alt="Profile"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-[#232946] via-transparent to-transparent opacity-60" />
    </motion.div>
  );
};