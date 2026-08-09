import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StatCounter } from "@/components/StatCounter";
import { EASE } from "@/lib/motion";

export function FifthRevIntro() {
  return (
    <section className="section-padding bg-cream" data-testid="fifth-rev-intro">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Graphic */}
          <ScrollReveal direction="right" className="lg:col-span-5">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/chart-gap.jpg"
                  alt="The widening gap between AI acceleration and human capability"
                  className="w-full h-[360px] md:h-[440px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                className="absolute -bottom-6 -right-4 md:-right-8 bg-navy text-white rounded-2xl px-6 py-5 shadow-gold border border-gold/20"
              >
                <p className="font-sora font-bold text-3xl text-gold">
                  <StatCounter value={1300} suffix="+" />
                </p>
                <p className="text-white/60 text-xs mt-1">documented AI transitions</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Copy */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="eyebrow mb-4 block">The 5th Revolution Starts With People</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] mb-6">
                Human intelligence is the <span className="text-gold">main story</span>
              </h2>
            </ScrollReveal>
            <div className="space-y-5 text-slate-custom leading-relaxed">
              <ScrollReveal delay={0.1}>
                <p>
                  For thirty years, one question has sat underneath all of Matthew Byrne's
                  work: what makes people, and the organisations they build, genuinely worthy
                  of trust? The arrival of AI has made that question urgent for everyone.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  The 5th Revolution is Building Mutuality's answer to this moment. Its argument
                  is simple: AI should enable humanity, not replace it — and the evidence now
                  exists to prove it. The White Whale research tracked 1,300+ documented AI
                  transitions and found the same shape in every failure: the technology
                  accelerating while human capability lagged behind. The organisations that
                  invested in their people early didn't just avoid the collapse. They arrived
                  ahead.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  Human intelligence is the main story. AI is the context in which that story
                  must now be renewed. Together is better — and from the AGSM General Manager
                  Program to a growing global network of research collaborations, the proof is
                  already here.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.25}>
              <Link to="/fifth-revolution" className="btn-secondary mt-8">
                Explore The 5th Revolution
                <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
