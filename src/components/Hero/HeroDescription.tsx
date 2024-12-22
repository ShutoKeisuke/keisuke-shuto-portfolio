import { motion } from 'framer-motion';

export const HeroDescription = () => {
  return (
    <motion.p
      className="text-xl max-w-2xl mx-auto lg:mx-0 mb-8 text-[#b8c1ec]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      Crafting exceptional digital experiences with modern web technologies
    </motion.p>
  );
};