import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collections from "@/components/Collections";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="min-h-screen bg-background"
    >
      <Navigation />
      <main>
        <Hero />
        <About />
        <Collections />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
