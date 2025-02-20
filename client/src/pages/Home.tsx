import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collections from "@/components/Collections";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [controls]);

  if (loading) {
    return <LoadingScreen />;
  }

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