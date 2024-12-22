import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  );
};

export default Hero;