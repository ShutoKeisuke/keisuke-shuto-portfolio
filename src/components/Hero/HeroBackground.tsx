import { motion } from 'framer-motion';
import { useWindowSize } from '../../hooks/useWindowSize';

const HeroBackground = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const sphereConfig = isMobile ? {
    count: 1,
    size: 200,
    blur: 40,
    opacity: 0.15
  } : isTablet ? {
    count: 2,
    size: 250,
    blur: 50,
    opacity: 0.2
  } : {
    count: 2,
    size: 300,
    blur: 60,
    opacity: 0.2
  };

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-[#121629] to-[#232946] opacity-50" />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(sphereConfig.count)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-[#b8c1ec]/20 to-[#eebbc3]/20"
            style={{
              width: `${sphereConfig.size}px`,
              height: `${sphereConfig.size}px`,
              top: `${-100 + i * 50}px`,
              right: `${-100 + i * 30}px`,
              filter: `blur(${sphereConfig.blur}px)`,
              opacity: sphereConfig.opacity,
              willChange: 'transform',
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse"
            }}
          />
        ))}

        {[...Array(isMobile ? 4 : isTablet ? 6 : 8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-[#eebbc3]/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: 'transform, opacity',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{
          background: isMobile
            ? 'radial-gradient(circle at 50% 30%, rgba(238, 187, 195, 0.08) 0%, transparent 60%)'
            : 'radial-gradient(circle at 50% 50%, rgba(238, 187, 195, 0.1) 0%, transparent 50%)',
        }}
      />
    </>
  );
};

export default HeroBackground;