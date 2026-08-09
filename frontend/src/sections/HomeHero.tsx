import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { EASE } from "@/lib/motion";

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "34%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
      data-testid="home-hero"
    >
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Human intelligence and AI convergence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/55 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 container-custom pt-20"
      >
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="eyebrow mb-6 block"
          >
            Building Mutuality — Home of The 5th Revolution
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="font-sora font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight text-white"
          >
            The future of AI depends on{" "}
            <span className="text-gold">human intelligence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
            className="mt-7 text-sm md:text-base text-white/65 max-w-xl leading-relaxed"
          >
            Every organisation is being handed a more powerful engine. Almost none
            are developing the driver. Building Mutuality is the home of The 5th
            Revolution: the research-backed case that AI should enable humanity, not
            replace it, and the two frameworks that make it practical — the Mutuality
            Framework and the Human Intelligence Framework.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15, ease: EASE }}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="btn-primary text-base w-full sm:w-auto">
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
            <Link to="/fifth-revolution" className="btn-ghost text-base w-full sm:w-auto">
              Explore The 5th Revolution
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60"
      >
        <span className="text-[11px] tracking-widest uppercase mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}

