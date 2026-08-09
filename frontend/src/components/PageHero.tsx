import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { EASE } from "@/lib/motion";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  badge?: string;
  breadcrumbs?: Crumb[];
  align?: "left" | "center";
}

export function PageHero({
  eyebrow,
  title,
  intro,
  badge,
  breadcrumbs,
  align = "left",
}: PageHeroProps) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <section
      className="relative bg-navy overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
      data-testid="page-hero"
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/dark-bg-pattern.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className={`flex flex-col ${alignCls} max-w-4xl ${align === "center" ? "mx-auto" : ""}`}>
          {breadcrumbs && (
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex items-center gap-1.5 text-white/50 text-xs mb-6 flex-wrap"
            >
              {breadcrumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link to={c.href} className="hover:text-gold transition-colors">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <ChevronRight size={12} />}
                </span>
              ))}
            </motion.nav>
          )}

          {badge && (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 text-gold text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
              data-testid="coming-soon-badge"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              {badge}
            </motion.span>
          )}

          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="eyebrow mb-5 block"
            >
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.08] text-balance"
          >
            {title}
          </motion.h1>

          {intro && (
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
              className={`mt-6 text-base md:text-lg text-white/75 leading-relaxed ${
                align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
              }`}
            >
              {intro}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
