import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { HEADER_HEIGHT } from '../../../constants/layout';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <div
      className="fixed right-6 z-[110]"
      style={{
        top: `${HEADER_HEIGHT / 2}px`,
        transform: 'translateY(-50%)'
      }}
    >
      <motion.button
        onClick={onClick}
        className="text-[#fffffe]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </motion.button>
    </div>
  );
};