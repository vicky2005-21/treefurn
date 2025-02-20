import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Interior Designer",
    content: "The quality and craftsmanship of Tree Furn Plaza's furniture is unmatched. Their attention to detail and customer service exceeded my expectations."
  },
  {
    name: "Michael Chen",
    role: "Homeowner",
    content: "We furnished our entire home with Tree Furn Plaza pieces. The 5-year warranty gives us peace of mind, and the custom design service was exceptional."
  },
  {
    name: "Priya Patel",
    role: "Architect",
    content: "As an architect, I appreciate their commitment to quality and design. The showroom experience is impressive, and their team is highly professional."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with
            Tree Furn Plaza's premium furniture and services.
          </p>
        </motion.div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <p className="text-lg text-gray-600 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
