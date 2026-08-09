import { motion } from "framer-motion";
import { StatCounter } from "@/components/StatCounter";
import { Marquee } from "@/components/Marquee";
import { EASE } from "@/lib/motion";

const clients = ["Perenti", "The ATO", "Calvary", "McDonald's", "DFAT", "AGSM"];

export function ProofStrip() {
  return (
    <section className="bg-navy-dark relative" data-testid="proof-strip">
      <div className="container-custom py-12 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-3 flex lg:flex-col gap-6 lg:gap-4 lg:border-r lg:border-white/10 lg:pr-8">
            <div>
              <p className="font-sora font-bold text-3xl md:text-4xl text-gold">
                <StatCounter value={1300} suffix="+" />
              </p>
              <p className="text-white/50 text-xs mt-1 leading-snug">
                source-audited cases, and growing
              </p>
            </div>
            <div>
              <p className="font-sora font-bold text-3xl md:text-4xl text-gold">
                <StatCounter value={2} suffix=" decades" />
              </p>
              <p className="text-white/50 text-xs mt-1 leading-snug">
                of leadership research
              </p>
            </div>
          </div>

          <p className="lg:col-span-9 text-white/70 text-sm md:text-base leading-relaxed">
            Home of the{" "}
            <span className="text-gold font-semibold">White Whale</span>, the
            longitudinal AI implementation segmentation research project that
            established best-practice AI integration:{" "}
            <span className="text-gold font-semibold">1,300+ source-audited cases</span>{" "}
            and growing. Two decades of leadership research. Programmes delivered
            with{" "}
            <span className="text-gold font-semibold">
              Perenti, the ATO, Calvary, McDonald's and DFAT
            </span>
            . A new book,{" "}
            <span className="text-gold font-semibold">The 5th Revolution</span>,
            launches <span className="text-gold font-semibold">3 November</span>.
          </p>
        </motion.div>
      </div>

      <div className="border-t border-white/10 py-6">
        <Marquee items={clients} />
      </div>
    </section>
  );
}
