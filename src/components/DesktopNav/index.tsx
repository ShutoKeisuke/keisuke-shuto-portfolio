import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../../hooks/useNavigation';
import { NavItem } from './NavItem';

export const DesktopNav = () => {
  const { menuItems, scrollToSection } = useNavigation();

  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-12">
        {menuItems.map((item) => (
          <NavItem 
            key={item}
            item={item}
            onClick={() => scrollToSection(item)}
          />
        ))}
      </ul>
    </nav>
  );
};