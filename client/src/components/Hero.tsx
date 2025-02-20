import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "wouter";

const LeafAnimation = () => {
  const leafVariants = {
    initial: (i: number) => ({
      opacity: 0,
      y: Math.random() * -100,
      x: Math.random() * window.innerWidth,
      rotate: 0,
      scale: 0.8 + Math.random() * 0.7, // Increased scale for bigger leaves
    }),
    animate: (i: number) => ({ 
      opacity: [0, 1, 1, 0],
      y: [
        Math.random() * -100,
        Math.random() * window.innerHeight * 0.3,
        Math.random() * window.innerHeight * 0.6,
        window.innerHeight
      ],
      x: [
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth
      ],
      rotate: [0, 180 + Math.random() * 180, 360 + Math.random() * 360],
      transition: {
        duration: 12 + Math.random() * 8, // Increased duration for slower movement
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    })
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(15)].map((_, i) => {
        const randomDelay = Math.random() * 5;
        const randomX = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: "40px",
              height: "40px",
              left: `${randomX}%`
            }}
            initial={{ y: -100, opacity: 0, rotate: 0 }}
            animate={{ 
              y: "120vh",
              opacity: [0, 1, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 8,
              delay: randomDelay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Replace the SVG with your image. You can pass an array of image URLs as props */}
            <img 
              src="/path-to-your-leaf-image.png" 
              alt="leaf"
              className="w-full h-full object-contain opacity-40"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

const Counter = ({ end, duration = 2, label }: { end: number | string, duration?: number, label: string }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let startTimestamp: number;
    const finalNumber = typeof end === 'string' ? parseInt(end) : end;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = (timestamp - startTimestamp) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(progress * finalNumber));
        requestAnimationFrame(animate);
      } else {
        setCount(finalNumber);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-primary mb-2">
        {typeof end === 'string' ? count + '%' : count + '+'}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { number: 25, label: "Years of Excellence" },
    { number: "10000", label: "Happy Customers" },
    { number: "5000", label: "Furniture Pieces" },
    { number: 100, label: "Quality Assured" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
      {stats.map((stat, index) => (
        <Counter 
          key={index}
          end={stat.number}
          label={stat.label}
          duration={2 + index * 0.5}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8f3e9] to-white dark:from-gray-900 dark:to-gray-800"
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
            className="text-3xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white font-serif"
          >
            Transform Your Space with Premium Furniture
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl mb-8 text-gray-600 dark:text-gray-300 font-serif"
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
            <Link href="/collections">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 font-serif"
              >
                Explore Collections
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 font-serif dark:text-white dark:border-white"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-800 to-transparent" />
    </section>
  );
}