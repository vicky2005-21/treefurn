import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
              <div className="prose prose-lg">
                <p>
                  Tree Furn Plaza has been at the forefront of luxury furniture design and
                  manufacturing for over two decades. Our commitment to quality
                  craftsmanship and sustainable practices has made us Tirupati's most
                  trusted furniture destination.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">25+</h3>
                    <p className="text-gray-600">Years of Excellence</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">10K+</h3>
                    <p className="text-gray-600">Happy Customers</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">5000+</h3>
                    <p className="text-gray-600">Furniture Pieces</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
                    <p className="text-gray-600">Quality Assured</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                <p>
                  We take pride in our craftsmanship and attention to detail. Every piece
                  of furniture that leaves our showroom is a testament to our dedication
                  to quality and customer satisfaction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
