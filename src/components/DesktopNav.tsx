import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../hooks/useNavigation';

const DesktopNav = () => {
  const { menuItems, scrollToSection } = useNavigation();

  return (
    <ul className="hidden lg:flex space-x-12">
      {menuItems.map((item) => (
        <motion.li 
          key={item}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={() => scrollToSection(item)}
            className="text-[#b8c1ec] hover:text-[#eebbc3] transition-colors text-lg"
          >
            {item}
          </button>
        </motion.li>
      ))}
    </ul>
  );
};

export default DesktopNav;