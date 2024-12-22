import React from 'react';
import { motion } from 'framer-motion';

interface OverlayProps {
  onClick: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="fixed top-0 left-0 w-screen h-screen bg-[#121629]/80 backdrop-blur-sm z-[90]"
    />
  );
};