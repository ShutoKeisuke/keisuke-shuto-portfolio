import { motion } from 'framer-motion';
import { Code, Palette } from 'lucide-react';
import { HeroRole } from './HeroRole';

export const HeroRoles = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      <HeroRole
        icon={<Code className="w-5 h-5" />}
        text="Frontend Engineer"
      />
      <HeroRole
        icon={<Palette className="w-5 h-5" />}
        text="Web Creator"
      />
    </motion.div>
  );
};