import { motion } from 'framer-motion';
import { FooterNav } from './FooterNav';
import { FooterSocial } from './FooterSocial';

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 bg-[#121629]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#eebbc3]/20 to-transparent" />
        <motion.div
          animate={{
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#eebbc3]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#b8c1ec]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <FooterNav />
        </div>

        <div className="pt-8 border-t border-[#b8c1ec]/10">
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-6">
            <FooterSocial />
            <motion.p
              className="text-[#b8c1ec]/60 text-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © {new Date().getFullYear()} Keisuke Shuto. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;