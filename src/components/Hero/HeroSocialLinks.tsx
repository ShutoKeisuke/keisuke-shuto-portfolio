import { motion } from 'framer-motion';
import { Github, Instagram } from 'lucide-react';
import { HeroSocialLink } from './HeroSocialLink';

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
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

export const HeroSocialLinks = () => {
  return (
    <motion.div
      className="flex justify-center lg:justify-start space-x-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
    >
      <HeroSocialLink
        href="https://instagram.com"
        icon={<Instagram className="w-5 h-5" />}
        label="Instagram"
      />
      <HeroSocialLink
        href="https://x.com"
        icon={<XIcon />}
        label="X"
      />
      <HeroSocialLink
        href="https://github.com"
        icon={<Github className="w-5 h-5" />}
        label="GitHub"
      />
    </motion.div>
  );
};