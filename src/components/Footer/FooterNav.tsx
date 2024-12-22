import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../../hooks/useNavigation';

export const FooterNav = () => {
  const { menuItems, scrollToSection } = useNavigation();

  return (
    <nav className="grid sm:grid-cols-2 gap-8">
      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-[#fffffe] text-lg font-medium mb-4">Quick Links</h3>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-[#b8c1ec]/80 hover:text-[#eebbc3] transition-colors"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h3 className="text-[#fffffe] text-lg font-medium mb-4">Contact</h3>
        <ul className="space-y-3 text-[#b8c1ec]/80">
          <li>
            <a href="mailto:contact@example.com" className="hover:text-[#eebbc3] transition-colors">
              contact@example.com
            </a>
          </li>
          <li>Tokyo, Japan</li>
        </ul>
      </motion.div>
    </nav>
  );
};