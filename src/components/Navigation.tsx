import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Grid, Info, Phone } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Collections", href: "/#collections", icon: Grid },
  { name: "About", href: "/#about", icon: Info },
  { name: "Contact", href: "/#contact", icon: Phone }
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

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
        } hidden md:block`}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex items-center justify-between backdrop-blur-md bg-white/80 rounded-full shadow-lg px-8 py-2 max-w-5xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <Link href="/" className="flex items-center">
              <img 
                src="/logo-placeholder.svg" 
                alt="Tree Furn Plaza" 
                className="h-8 w-auto"
              />
            </Link>
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-gray-600 hover:text-primary transition-colors text-sm font-medium ${
                      location === link.href ? "text-primary" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-6 inset-x-0 z-50 flex justify-center"
      >
        <motion.div 
          className="flex items-center justify-center gap-8 backdrop-blur-md bg-white/90 rounded-full shadow-lg px-8 py-5 mx-4"
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
                <Link 
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-gray-600 hover:text-primary transition-colors font-bold text-lg ${
                    location === link.href ? "text-primary" : ""
                  }`}
                  title={link.name}
                >
                  <Icon className="w-7 h-7" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}