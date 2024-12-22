import React from 'react';
import { motion } from 'framer-motion';

interface HeroSocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const HeroSocialLink: React.FC<HeroSocialLinkProps> = ({ href, icon, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-[#b8c1ec] hover:text-[#eebbc3] transition-colors"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </motion.a>
  );
};