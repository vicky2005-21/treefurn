import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const LeafAnimation = () => {
  const leafVariants = {
    initial: { opacity: 0, y: -100, x: -100, rotate: 0 },
    animate: { 
      opacity: [0, 1, 1, 0],
      y: [0, 100, 200, 300],
      x: [-100, 0, 100, 200],
      rotate: [0, 90, 180, 270],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear"
      }
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-50px`,
            width: "40px",
            height: "40px",
          }}
          variants={leafVariants}
          initial="initial"
          animate="animate"
          custom={i}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full text-primary/20"
            fill="currentColor"
          >
            <path d="M21.88,11.37c-1.88,2.37-4.02,2.78-6.66,1.89c-0.15-0.05-0.32-0.1-0.49-0.14c0.95,1.17,1.67,2.53,2.11,4.04 c0.26,0.91-0.48,1.8-1.44,1.8H8.6c-0.96,0-1.7-0.89-1.44-1.8c0.44-1.51,1.16-2.87,2.11-4.04c-0.17,0.04-0.34,0.09-0.49,0.14 C6.14,14.15,3.99,13.74,2.12,11.37C1.71,10.85,1.72,10.09,2.13,9.57c2.06-2.59,4.77-3.59,7.16-2.91C9.14,5.04,9.77,3.37,11.05,2 c0.49-0.52,1.41-0.52,1.9,0c1.28,1.37,1.91,3.04,1.76,4.66c2.39-0.68,5.1,0.32,7.16,2.91C22.28,10.09,22.29,10.85,21.88,11.37z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

const Stats = () => {
  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "10K+", label: "Happy Customers" },
    { number: "5000+", label: "Furniture Pieces" },
    { number: "100%", label: "Quality Assured" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
          <p className="text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8f3e9] to-white"
    >
      <LeafAnimation />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <img
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221"
              alt="Luxury Furniture"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            Transform Your Space with Premium Furniture
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl mb-8 text-gray-600"
          >
            Tirupati's Largest Furniture Showroom – Explore 5 Floors of Luxury, 
            Custom Designs, and a 5-Year Warranty!
          </motion.p>

          <Stats />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
              onClick={() => document.querySelector('#collections')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Collections
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}