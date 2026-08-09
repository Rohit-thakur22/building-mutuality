import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { EASE } from "@/lib/motion";
import { resourceCategories } from "@/data/resources";

interface NavChild {
  name: string;
  href: string;
}
interface NavLink {
  name: string;
  href: string;
  children?: NavChild[];
}

const navLinks: NavLink[] = [
  { name: "Who We Help", href: "/who-we-help" },
  { name: "The 5th Revolution", href: "/fifth-revolution" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Leadership Programmes", href: "/services/programmes" },
      { name: "Executive Coaching", href: "/services/executive-coaching" },
      { name: "Culture Audits", href: "/services/culture-audits" },
      { name: "HI Accreditation", href: "/services/hi-accreditation" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Books", href: "/book" },
  {
    name: "Resources",
    href: "/resources",
    children: resourceCategories.map((c) => ({ name: c.title, href: `/resources/${c.slug}` })),
  },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileExpanded(null);
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
            <Link to="/" className="flex items-center gap-3 group" data-testid="nav-logo">
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

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const active = location.pathname === link.href;
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={link.href}
                      className={`relative flex items-center gap-1 font-medium text-sm transition-colors duration-300 hover:text-gold ${
                        solid ? "text-navy" : "text-white"
                      } ${active ? "text-gold" : ""}`}
                      data-testid={`nav-link-${link.href}`}
                    >
                      {link.name}
                      {link.children && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            openDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                      {active && <span className="absolute left-0 -bottom-1 h-px w-full bg-gold" />}
                    </Link>

                    {link.children && (
                      <AnimatePresence>
                        {openDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.22, ease: EASE }}
                            className="absolute left-0 top-full pt-4 w-72"
                            data-testid={`nav-dropdown-${link.name}`}
                          >
                            <div className="bg-white rounded-2xl shadow-card-hover border border-navy/5 p-2 overflow-hidden">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm text-navy hover:bg-cream hover:text-gold transition-colors duration-200 group/item"
                                  data-testid={`nav-sublink-${child.href}`}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover/item:bg-gold transition-colors" />
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <Link to="/contact" className="btn-primary text-sm py-2.5 px-5" data-testid="nav-cta">
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${solid ? "text-navy" : "text-white"}`}
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
            className="fixed inset-0 z-40 bg-navy lg:hidden overflow-y-auto"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col pt-24 pb-10 px-8 gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.href}
                      className="text-white font-sora text-xl font-semibold py-4 hover:text-gold transition-colors flex-1"
                    >
                      {link.name}
                    </Link>
                    {link.children && (
                      <button
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === link.name ? null : link.name)
                        }
                        className="p-3 text-gold"
                        aria-label={`Expand ${link.name}`}
                      >
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            mobileExpanded === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {link.children && mobileExpanded === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3 pl-3 flex flex-col">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="text-white/70 text-sm py-2.5 hover:text-gold transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link to="/contact" className="btn-primary mt-6 text-base justify-center">
                Start a Conversation
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
