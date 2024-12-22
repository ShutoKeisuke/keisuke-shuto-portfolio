import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../../../hooks/useNavigation';
import { HEADER_HEIGHT } from '../../../constants/layout';
import { ChevronRight } from 'lucide-react';

interface NavMenuProps {
  onItemClick: () => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({ onItemClick }) => {
  const { menuItems, scrollToSection } = useNavigation();

  const handleClick = (item: string) => {
    // メニューを閉じる
    onItemClick();
    
    // 少し遅延を入れてスクロールを実行
    requestAnimationFrame(() => {
      scrollToSection(item);
    });
  };

  return (
    <motion.nav
      className="fixed top-0 right-0 w-72 h-screen bg-gradient-to-b from-[#232946] to-[#1a1f35] z-[105]"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 20 }}
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-[#eebbc3]/5 backdrop-blur-[2px]" />
      
      {/* Content container */}
      <div className="relative h-full">
        {/* Menu items */}
        <ul className="px-6 py-8 space-y-6">
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
                className="group w-full flex items-center justify-between py-2 text-[#b8c1ec] hover:text-[#eebbc3] transition-colors"
              >
                <span className="text-xl font-light">{item}</span>
                <motion.div
                  initial={{ x: -4, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <ChevronRight 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  />
                </motion.div>
              </button>
              
              {/* Animated underline */}
              <motion.div
                className="h-px bg-gradient-to-r from-[#eebbc3]/20 via-[#b8c1ec]/20 to-transparent"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a1f35] to-transparent" />
        <div className="absolute bottom-8 left-6 right-6">
          <motion.div
            className="h-1 rounded-full bg-gradient-to-r from-[#eebbc3]/20 via-[#b8c1ec]/20 to-transparent"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </div>
      </div>
    </motion.nav>
  );
};