import React from 'react';
import { motion } from 'framer-motion';

interface HeroRoleProps {
  icon: React.ReactNode;
  text: string;
}

export const HeroRole: React.FC<HeroRoleProps> = ({ icon, text }) => {
  return (
    <motion.div
      className="inline-flex items-center space-x-2 text-[#eebbc3] bg-[#121629]/30 px-4 py-2 rounded-full"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {icon}
      <span className="text-lg">{text}</span>
    </motion.div>
  );
};