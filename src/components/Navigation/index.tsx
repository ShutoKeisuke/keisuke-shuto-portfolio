import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { BrandLogo } from './BrandLogo';
import { HEADER_HEIGHT } from '../../constants/layout';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-[100]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ height: HEADER_HEIGHT }}
    >
      <div className="container mx-auto h-full px-6 flex justify-between items-center">
        <BrandLogo />
        <DesktopNav />
      </div>

      <MobileNav isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </motion.header>
  );
};

export default Navigation;