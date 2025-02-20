import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
              src="https://images.unsplash.com/photo-1573484651903-701771f712be"
              alt="Tree Furn Plaza Showroom"
              className="rounded-lg shadow-xl"
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
              Crafting Luxury Living Spaces
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Tree Furn Plaza stands as Tirupati's premier destination for luxury furniture, 
              where traditional craftsmanship meets contemporary design. Our 5-floor showroom 
              showcases an exclusive collection of handcrafted pieces, each telling its own 
              unique story of elegance and sophistication.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With over two decades of excellence in custom manufacturing, we've established 
              ourselves as the trusted name in premium furniture. Our commitment to quality 
              is reflected in our industry-leading 5-year warranty and our dedication to 
              sustainable practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
