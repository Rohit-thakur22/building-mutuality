import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { EASE } from "@/lib/motion";

export function StickyConnect() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (location.pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="fixed bottom-5 right-5 z-40"
        >
          <Link
            to="/contact"
            className="group flex items-center gap-2 bg-gold text-navy font-semibold pl-4 pr-5 py-3.5 rounded-full shadow-gold hover:bg-gold-light transition-all duration-300 hover:scale-[1.03]"
            data-testid="sticky-connect"
          >
            <MessageCircle size={20} />
            <span className="text-sm hidden sm:inline">Start a Conversation</span>
            <span className="text-sm sm:hidden">Connect</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
