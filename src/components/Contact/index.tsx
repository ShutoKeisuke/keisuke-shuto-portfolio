import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="relative py-16 bg-gradient-to-b from-[#232946] via-[#1e2339] to-[#1e2339]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#232946] to-transparent" />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#eebbc3]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#b8c1ec]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-light mb-4">Contact</h2>
          <p className="text-[#b8c1ec] max-w-2xl mx-auto">
            お仕事のご依頼・ご相談はこちらのフォームからお願いいたします。
            できるだけ早くご返信させていただきます。
          </p>
        </motion.div>

        <div className="bg-[#121629]/20 p-8 rounded-lg backdrop-blur-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;