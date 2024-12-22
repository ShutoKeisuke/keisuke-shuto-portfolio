import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Overlay } from './Overlay';
import { MenuButton } from './MenuButton';
import { NavMenu } from './NavMenu';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  // メニューの開閉状態に応じてbodyのスクロールを制御
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    // クリーンアップ関数
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      
      <AnimatePresence>
        {isOpen && (
          <>
            <Overlay onClick={() => setIsOpen(false)} />
            <NavMenu onItemClick={() => setIsOpen(false)} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};