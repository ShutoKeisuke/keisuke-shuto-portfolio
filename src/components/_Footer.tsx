import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-[#b8c1ec] text-sm">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;