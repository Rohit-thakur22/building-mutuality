import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { EASE } from "@/lib/motion";

const navLinks = [
  { name: "Who We Help", href: "/who-we-help" },
  { name: "The 5th Revolution", href: "/fifth-revolution" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Books", href: "/book" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const solid = isScrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
        data-testid="main-nav"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              data-testid="nav-logo"
            >
              <img
                src="/images/logo.webp"
                alt="Building Mutuality"
                className={`w-9 h-9 object-contain transition-all duration-500 ${
                  solid ? "" : "invert brightness-0"
                } group-hover:rotate-12`}
              />
              <span
                className={`font-sora font-bold text-base sm:text-lg tracking-tight transition-colors duration-500 ${
                  solid ? "text-navy" : "text-white"
                }`}
              >
                BUILDING MUTUALITY
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const active = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`relative font-medium text-sm transition-colors duration-300 hover:text-gold ${
                      solid ? "text-navy" : "text-white"
                    } ${active ? "text-gold" : ""}`}
                    data-testid={`nav-link-${link.href}`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute left-0 -bottom-1 h-px w-full bg-gold" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="btn-primary text-sm py-2.5 px-5"
                data-testid="nav-cta"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                solid ? "text-navy" : "text-white"
              }`}
              aria-label="Toggle menu"
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 bg-navy lg:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, ease: EASE }}
                >
                  <Link
                    to={link.href}
                    className="text-white font-sora text-2xl font-semibold hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.08, ease: EASE }}
              >
                <Link to="/contact" className="btn-primary mt-2 text-base">
                  Start a Conversation
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
