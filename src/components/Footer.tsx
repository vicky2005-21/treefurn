import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Tree Furn Plaza</h3>
            <p className="text-gray-400">
              Premium furniture solutions for modern living spaces.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Custom Design</li>
              <li>Bulk Orders</li>
              <li>Delivery & Installation</li>
              <li>After Sales Service</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates about new collections and special offers.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                type="email"
                className="bg-gray-800 border-gray-700"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Tree Furn Plaza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
