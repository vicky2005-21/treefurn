import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        className="relative w-40 h-40"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {/* Animated Tree Logo */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-primary"
        >
          <motion.path
            d="M50 10 L75 40 L60 40 L80 70 L20 70 L40 40 L25 40 Z"
            fill="currentColor"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          <motion.rect
            x="45"
            y="70"
            width="10"
            height="20"
            fill="currentColor"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              repeat: Infinity,
            }}
          />
        </svg>
      </motion.div>
      <motion.p
        className="absolute bottom-20 text-lg text-primary font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Loading beautiful spaces...
      </motion.p>
    </div>
  );
}
