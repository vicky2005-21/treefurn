import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

const collections = [
  {
    title: "Living Room",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    description: "Elegant sofas and premium seating solutions"
  },
  {
    title: "Dining Room",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
    description: "Sophisticated dining sets and storage"
  },
  {
    title: "Bedroom",
    image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f",
    description: "Luxurious beds and bedroom furniture"
  },
  {
    title: "Office",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    description: "Professional workspace solutions"
  }
];

export default function Collections() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="collections" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Collections</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections of premium furniture, designed
            to transform your space into a sanctuary of style and comfort.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/collections">
                <Card
                  className="overflow-hidden cursor-pointer group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                <CardContent className="p-0 relative">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {collection.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
