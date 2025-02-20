import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import collectionsData from "@/data/collections.json";
import { fadeIn, staggerContainer } from "@/utils/animations";
import "../styles/animations.css";

export default function Collections() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollNext = () => {
      const cardWidth = 300 + 32; // card width + gap
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // If we're at the end, scroll back to start
      if (currentScroll >= maxScroll) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    };

    const intervalId = setInterval(scrollNext, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="collections" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 gradient-text">
            Our Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections of premium furniture, designed
            to transform your space into a sanctuary of style and comfort.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative"
        >
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth py-4"
          >
            {collectionsData.collections.map((collection, index) => (
              <motion.div
                key={collection.category}
                className="flex-none w-[300px]"
                variants={fadeIn}
              >
                <Link href={`/collections?category=${collection.category.toLowerCase().replace(' ', '-')}`}>
                  <Card className="overflow-hidden cursor-pointer group h-[400px] shadow-hover shine-effect">
                    <CardContent className="p-0 relative h-full">
                      <img
                        src={collection.items[0].image}
                        alt={collection.category}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl font-bold mb-2">{collection.category}</h3>
                          <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {collection.items.length} items
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
