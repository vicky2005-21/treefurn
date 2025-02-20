import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Grid, Info, Phone } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Collections", href: "/collections", icon: Grid },
  { name: "About", href: "#about", icon: Info },
  { name: "Contact", href: "#contact", icon: Phone }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

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
        className={`fixed w-full z-50 top-0 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="max-w-md mx-auto">
          <motion.div 
            className="flex items-center justify-center gap-12 backdrop-blur-md bg-white/80 rounded-full shadow-lg px-8 py-2"
            whileHover={{ scale: 1.02 }}
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-600 hover:text-primary transition-colors"
                      title={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  ) : (
                    <Link 
                      href={link.href}
                      className={`text-gray-600 hover:text-primary transition-colors ${
                        location === link.href ? "text-primary" : ""
                      }`}
                      title={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <motion.div 
          className="flex items-center gap-8 backdrop-blur-md bg-white/90 rounded-full shadow-lg px-8 py-3"
          whileHover={{ scale: 1.02 }}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.href.startsWith('#') ? (
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 hover:text-primary transition-colors"
                    title={link.name}
                  >
                    <Icon className="w-6 h-6" />
                  </button>
                ) : (
                  <Link 
                    href={link.href}
                    className={`text-gray-600 hover:text-primary transition-colors ${
                      location === link.href ? "text-primary" : ""
                    }`}
                    title={link.name}
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}