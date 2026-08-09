import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StatCounter } from "@/components/StatCounter";

export function FifthRevIntro() {
  return (
    <section className="section-padding bg-cream" data-testid="fifth-rev-intro">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy — first in DOM (mobile-first), left on desktop via order */}
          <div className="lg:col-span-7 lg:order-2">
            <ScrollReveal>
              <span className="eyebrow mb-4 block">The 5th Revolution Starts With People</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] mb-6 max-w-xl">
                Human intelligence is the <span className="text-gold">main story</span>
              </h2>
            </ScrollReveal>
            <div className="space-y-5 text-slate-custom leading-relaxed max-w-[65ch]">
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
                  <span className="text-navy font-semibold">Human intelligence is the main story.</span>{" "}
                  AI is the context in which that story must now be renewed.{" "}
                  <span className="text-navy font-semibold">Together is better</span> — and from
                  the AGSM General Manager Program to a growing global network of research
                  collaborations, the proof is already here.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.25}>
              <Link to="/fifth-revolution" className="btn-secondary mt-10">
                Explore The 5th Revolution
                <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>

          {/* Graphic — fully contained, stat callout sits below (no overlap) */}
          <ScrollReveal direction="right" className="lg:col-span-5 lg:order-1">
            <div className="rounded-2xl bg-navy p-4 shadow-card-hover">
              <img
                src="/images/gap-chart.jpg"
                alt="A chart showing AI capability accelerating while human capability lags, and the widening gap between them"
                className="w-full h-auto rounded-xl object-contain"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-center gap-4 bg-white rounded-2xl px-6 py-5 shadow-card border-l-4 border-gold">
              <p className="font-sora font-bold text-3xl text-gold leading-none">
                <StatCounter value={1300} suffix="+" />
              </p>
              <p className="text-slate-custom text-sm leading-snug">
                documented AI transitions in the White Whale evidence bank
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
