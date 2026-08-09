import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { EASE } from "@/lib/motion";
import { SectionHeading } from "@/components/SectionHeading";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqProps {
  items: FaqItem[];
  dark?: boolean;
  eyebrow?: string;
  title?: React.ReactNode;
}

export function Faq({ items, dark = false, eyebrow = "Questions", title }: FaqProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className={`section-padding ${dark ? "bg-navy" : "bg-white"}`}
      data-testid="faq-section"
    >
      <div className="container-custom max-w-4xl">
        <SectionHeading
          eyebrow={eyebrow}
          title={title || <>Frequently asked <span className="text-gold">questions</span></>}
          dark={dark}
          className="mb-10"
        />
        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                className={`rounded-2xl border overflow-hidden ${
                  dark ? "border-white/12 bg-white/5" : "border-navy/10 bg-cream"
                }`}
                data-testid={`faq-item-${i}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-sora font-semibold text-base md:text-lg ${
                      dark ? "text-white" : "text-navy"
                    }`}
                  >
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="shrink-0 text-gold"
                  >
                    <Plus size={22} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      <p
                        className={`px-5 md:px-6 pb-5 leading-relaxed text-sm md:text-base ${
                          dark ? "text-white/70" : "text-slate-custom"
                        }`}
                      >
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
