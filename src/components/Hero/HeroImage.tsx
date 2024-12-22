import { motion } from 'framer-motion';

export const HeroImage = () => {
  return (
    <motion.div
      className="hidden lg:block flex-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative max-w-lg mx-auto perspective-1000">
        <motion.div
          className="relative preserve-3d"
          animate={{
            rotateY: [-2, 2],
            rotateX: [-1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative rounded-xl overflow-hidden bg-[#121629]/20 backdrop-blur-sm">
            <div className="relative p-3">
              <div className="relative rounded-lg overflow-hidden">
                <motion.div
                  className="relative"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2069&h=1379"
                    alt="Developer workspace"
                    className="w-full transform-gpu rounded-lg"
                  />

                  <div className="absolute inset-0 bg-gradient-to-tr from-[#121629]/40 via-transparent to-[#eebbc3]/5" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-[#b8c1ec]/5 via-transparent to-transparent" />
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#eebbc3]/10 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 5
                  }}
                />
              </div>
            </div>

            <div className="absolute inset-0 rounded-xl border border-[#eebbc3]/10 bg-gradient-to-b from-[#eebbc3]/5 to-transparent" />
            <div className="absolute inset-[2px] rounded-[10px] border border-[#b8c1ec]/5" />
          </div>

          <div className="absolute -z-10 inset-0 translate-z-[-20px] rounded-xl bg-[#121629]/10 blur-xl" />
        </motion.div>

        <motion.div
          className="absolute -bottom-6 -right-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
        >
          <motion.div
            className="relative preserve-3d"
            animate={{
              rotateX: [-2, 2],
              rotateY: [-3, 3],
              z: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative p-6 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[#121629]/80 backdrop-blur-md" />

              <div className="relative z-10">
                <motion.p
                  className="text-[#eebbc3] font-medium mb-1"
                  animate={{ z: 10 }}
                >
                  Available for projects
                </motion.p>
                <motion.p
                  className="text-[#b8c1ec] text-sm"
                  animate={{ z: 5 }}
                >
                  Let's create something amazing
                </motion.p>
              </div>

              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#eebbc3]/10 to-[#b8c1ec]/5" />
                <div className="absolute inset-0 border border-[#eebbc3]/20" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#eebbc3]/30 to-transparent" />
              </div>
            </div>

            <div className="absolute -z-10 inset-0 translate-z-[-10px] rounded-lg bg-[#121629]/20 blur-md" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};