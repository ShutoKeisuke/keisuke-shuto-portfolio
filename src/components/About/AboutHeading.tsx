import { motion } from 'framer-motion';

export const AboutHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-light mb-4">About Me</h2>
      <p className="text-[#b8c1ec] max-w-2xl mx-auto">
        フロントエンド開発とデザインの両方のスキルを活かして、
        ユーザー体験を大切にしたウェブサイトを制作しています。
      </p>
    </motion.div>
  );
};