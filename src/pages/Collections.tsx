import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";
import collectionsData from "@/data/collections.json";

export default function CollectionsPage() {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [location] = useLocation();
  
  useEffect(() => {
    // Get category from URL query parameter
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category) {
      // Find the collection id based on the category name
      const collection = collectionsData.collections.find(
        c => c.category.toLowerCase().replace(' ', '-') === category
      );
      if (collection) {
        setSelectedCategory(collection.id);
      }
    }
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-8 text-center"
          >
            Our Collections
          </motion.h1>

          {/* Category Navigation */}
          <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
            {collectionsData.collections.map((collection) => (
              <motion.button
                key={collection.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-lg font-medium whitespace-nowrap
                  ${selectedCategory === collection.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(collection.id)}
              >
                {collection.category}
              </motion.button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collectionsData.collections
              .find((c) => c.id === selectedCategory)
              ?.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <p className="text-primary font-bold text-lg">{item.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}