import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Overlay } from './Overlay';
import { MenuButton } from './MenuButton';
import { NavMenu } from './NavMenu';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
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