import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

const LeafAnimation = () => (
  <motion.div
    className="absolute -z-10 opacity-20"
    animate={{
      x: [0, 10, 0],
      y: [0, 5, 0],
      rotate: [0, 10, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <Leaf className="w-6 h-6 text-green-700" />
  </motion.div>
);

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed w-full z-50 hidden md:block transition-all duration-300 ${
          isScrolled 
            ? "py-2" 
            : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex justify-between items-center backdrop-blur-md bg-gradient-to-r from-green-50/80 to-brown-50/80 rounded-full shadow-lg border border-green-100/50 px-8 py-3">
            {/* Animated Leaves */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <LeafAnimation />
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <LeafAnimation />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold bg-gradient-to-r from-green-800 to-amber-900 bg-clip-text text-transparent"
            >
              <Link href="/">Tree Furn Plaza</Link>
            </motion.div>
            <motion.div 
              className="flex gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-800 hover:text-green-800 transition-colors px-4 py-2 rounded-full hover:bg-green-100/50"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="text-gray-800 hover:text-green-800 transition-colors px-4 py-2 rounded-full hover:bg-green-100/50"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-gradient-to-r from-green-50/90 to-brown-50/90 backdrop-blur-md shadow-lg border-2 border-green-100/50"
            >
              <Menu className="h-6 w-6 text-green-800" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="bottom" 
            className="h-[60vh] rounded-t-3xl bg-gradient-to-b from-white/95 to-green-50/95 backdrop-blur-md border-t border-green-100/50"
          >
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => {
                        scrollToSection(link.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-xl text-gray-800 hover:text-green-800 transition-colors w-full text-left px-4 py-2 rounded-lg hover:bg-green-100/50"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-xl text-gray-800 hover:text-green-800 transition-colors block px-4 py-2 rounded-lg hover:bg-green-100/50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </motion.div>
    </>
  );
}