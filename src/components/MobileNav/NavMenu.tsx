import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../../hooks/useNavigation';
import { HEADER_HEIGHT } from '../../constants/layout';

interface NavMenuProps {
  onItemClick: () => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({ onItemClick }) => {
  const { menuItems, scrollToSection } = useNavigation();

  const handleClick = (item: string) => {
    scrollToSection(item);
    onItemClick();
  };

  return (
    <motion.nav
      className="fixed top-0 right-0 w-64 h-screen bg-[#232946] z-[55]"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 20 }}
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <ul className="flex flex-col items-center space-y-8 pt-8">
        {menuItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => handleClick(item)}
              className="text-[#b8c1ec] hover:text-[#eebbc3] transition-colors text-xl"
            >
              {item}
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};