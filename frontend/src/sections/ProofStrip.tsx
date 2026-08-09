import { motion } from "framer-motion";
import { StatCounter } from "@/components/StatCounter";
import { Marquee } from "@/components/Marquee";
import { EASE } from "@/lib/motion";

const clients = ["Perenti", "The ATO", "Calvary", "McDonald's", "DFAT", "AGSM"];

const stats = [
  { value: 1300, suffix: "+", label: "source-audited cases, and growing" },
  { value: 2, suffix: " decades", label: "of leadership research" },
  { value: 5, suffix: "", label: "flagship client organisations" },
];

export function ProofStrip() {
  return (
    <section data-testid="proof-strip">
      {/* Strip */}
      <div className="bg-navy-dark">
        <div className="container-custom py-16 lg:py-20">
          {/* Lead standfirst */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-3xl text-white/75 text-base md:text-lg leading-relaxed"
          >
            Home of the <span className="text-gold font-semibold">White Whale</span>,
            the longitudinal AI implementation segmentation research project that
            established best-practice AI integration: 1,300+ source-audited cases and
            growing. Two decades of leadership research. Programmes delivered with
            Perenti, the ATO, Calvary, McDonald's and DFAT. A new book,{" "}
            <span className="text-gold font-semibold">The 5th Revolution</span>,
            launches <span className="text-gold font-semibold">3 November</span>.
          </motion.p>

          {/* Proof points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mt-12 pt-10 border-t border-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                className={`text-center sm:text-left ${
                  i > 0 ? "sm:border-l sm:border-white/10 sm:pl-6" : ""
                }`}
              >
                <p className="font-sora font-bold text-4xl md:text-5xl text-gold leading-none">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-white/55 text-sm mt-3 leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee band — separated tone */}
      <div className="bg-navy border-t border-white/10">
        <div className="container-custom pt-8 pb-2">
          <span className="eyebrow">Programmes delivered with</span>
        </div>
        <div className="py-6">
          <Marquee items={clients} />
        </div>
      </div>
    </section>
  );
}
