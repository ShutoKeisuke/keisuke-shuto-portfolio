import { useCallback } from 'react';
import { HEADER_HEIGHT } from '../constants/layout';

export const useNavigation = () => {
  const menuItems = ['About', 'Skills', 'Works', 'Contact'];

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      const sectionPadding = parseInt(
        window.getComputedStyle(element).paddingTop,
        10
      );

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - HEADER_HEIGHT + (sectionPadding / 2);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return {
    menuItems,
    scrollToSection,
  };
};