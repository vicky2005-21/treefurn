import { motion } from "framer-motion";
import { Shield, Wrench, Package, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "Complete peace of mind with our comprehensive warranty coverage"
  },
  {
    icon: Wrench,
    title: "Custom Designs",
    description: "Tailor-made furniture solutions to match your unique style"
  },
  {
    icon: Package,
    title: "Bulk Orders",
    description: "Special pricing and dedicated support for large projects"
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Professional delivery and installation services"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience unmatched quality and service with Tree Furn Plaza's
            premium offerings and customer-first approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full scale-150 blur-xl" />
                <div className="relative">
                  <feature.icon className="h-12 w-12 mx-auto text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}