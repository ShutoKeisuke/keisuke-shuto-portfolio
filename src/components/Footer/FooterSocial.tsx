import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram } from 'lucide-react';

// Xアイコンのカスタムコンポーネント
const XIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="18" 
    height="18" 
    stroke="currentColor" 
    fill="none" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const socialLinks = [
  { icon: <Instagram className="w-[18px] h-[18px]" />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <XIcon />, href: 'https://x.com', label: 'X' },
  { icon: <Github className="w-[18px] h-[18px]" />, href: 'https://github.com', label: 'GitHub' },
];

export const FooterSocial = () => {
  return (
    <motion.div
      className="flex justify-center md:justify-start items-center space-x-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {socialLinks.map(({ icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b8c1ec]/60 hover:text-[#eebbc3] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={label}
        >
          {icon}
        </motion.a>
      ))}
    </motion.div>
  );
};