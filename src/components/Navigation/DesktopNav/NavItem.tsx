import React from 'react';
import { motion } from 'framer-motion';

interface NavItemProps {
  item: string;
  onClick: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({ item, onClick }) => {
  return (
    <motion.li 
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <button
        onClick={onClick}
        className="text-[#b8c1ec] hover:text-[#eebbc3] transition-colors text-lg"
      >
        {item}
      </button>
    </motion.li>
  );
};