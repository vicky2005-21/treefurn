import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="min-h-[150px]" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">123 Furniture Street, Tirupati</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+91 123 456 7890</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">contact@treefurnplaza.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
