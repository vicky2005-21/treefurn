import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1524061662617-6a29d732e3ef) center/cover`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Space with Premium Furniture
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Tirupati's Largest Furniture Showroom – Explore 5 Floors of Luxury, Custom Designs, and a 5-Year Warranty!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => document.querySelector('#collections')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Collections
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
