import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221"
              alt="Tree Furn Plaza Showroom"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Crafting Premium Living Spaces Since 1995
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Tree Furn Plaza has been at the forefront of luxury furniture design and 
              manufacturing for over two decades. Our commitment to quality craftsmanship 
              and sustainable practices has made us Tirupati's most trusted furniture destination.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With a blend of traditional expertise and contemporary innovation, we create 
              pieces that transcend mere functionality to become lasting symbols of elegance 
              in your living spaces.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              >
                Learn More About Our Craft
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}