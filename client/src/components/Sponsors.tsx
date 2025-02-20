import { motion } from "framer-motion";
import sponsorsData from "@/data/sponsors.json";
import { fadeIn, bounceAnimation } from "@/utils/animations";
import "../styles/animations.css";

export default function Sponsors() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 gradient-text">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver excellence in furniture solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {sponsorsData.sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              variants={bounceAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-center hover-lift"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-hover shine-effect">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{sponsor.name}</h3>
              <p className="text-sm text-gray-600 text-center">{sponsor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 