import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";

const Counter = ({ end, duration = 2, label }: { end: number | string, duration?: number, label: string }) => {
  const [count, setCount] = useState(0);

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
      className="min-h-[90vh] relative flex items-center justify-center bg-gradient-to-b from-[#f8f3e9] to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221"
              alt="Luxury Furniture"
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left order-1 md:order-2"
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white font-serif">
              Transform Your Space with Premium Furniture
            </h1>

            <p className="text-lg md:text-2xl mb-8 text-gray-600 dark:text-gray-300 font-serif">
              Tirupati's Largest Furniture Showroom – Explore 5 Floors of Luxury, 
              Custom Designs, and a 5-Year Warranty!
            </p>

            <Stats />

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}