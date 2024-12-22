import { colors } from './colors';

export const buttonStyles = {
  base: `bg-[${colors.button}] text-[${colors.buttonText}] 
         px-6 py-2 rounded-lg transition-transform hover:scale-105`,
  outline: `border-2 border-[${colors.button}] text-[${colors.button}] 
            px-6 py-2 rounded-lg transition-transform hover:scale-105`,
};

export const sectionStyles = {
  base: 'py-20',
  container: 'max-w-7xl mx-auto px-4',
  heading: `text-3xl font-light mb-12 text-[${colors.headline}]`,
};