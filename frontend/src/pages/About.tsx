import { useState } from "react";
import { useSeo } from "@/hooks/useSeo";
import { motion, AnimatePresence } from "framer-motion";
import { Award, MapPin, GraduationCap, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Faq } from "@/components/Faq";
import { ExploreNext } from "@/components/ExploreNext";
import { EASE } from "@/lib/motion";

const badges = [
  { icon: Award, label: "Visionaries Award" },
  { icon: MapPin, label: "Times Square Featured" },
  { icon: GraduationCap, label: "Harvard & UTS" },
];

const moreParas = [
  'Matthew is the author of two books. His first, Mutuality: The Future of Trust: The Executive\'s Handbook (with Denis Jenkins), held the top spot for new releases on Amazon for three consecutive months. His second, The 5th Revolution: Human Intelligence in the Age of AI, launches on 3 November 2026 with a foreword by Rory Sutherland. It grew out of research and writing that has reached more than 1.7 million views on his human-intelligence content on LinkedIn in the past 90 days alone.',
  "Behind the writing sits the White Whale, the longitudinal AI implementation segmentation research project that established best-practice AI integration, now 1,300+ source-audited cases mapping the gap between AI's acceleration and organisations' capacity to keep pace. Around it sits a widening research programme: the Mutuality Trust Index, CARL (the Commercial AI Risk Lens), and collaborative papers on mattering, problem finding, organisational truth and workforce readiness with partners across Australia, Europe and Asia.",
  "As Program Director of the AGSM General Manager Program, consistently ranked the best executive education programme in Australia by the Financial Times and among the top ten in Asia, Matthew shapes how many of Australia's most senior leaders think and act. His programmes and advisory work have been delivered with Perenti, the Australian Taxation Office, Calvary, McDonald's and DFAT. In October 2026 he convenes HI-AI Converge at ICC Sydney, bringing 1,000 delegates together with a live engagement of 8,000 NSW high-school students.",
  "In December 2025, Matthew received the CXO 2.0 Visionaries Award in Dubai; he was subsequently featured on a billboard in New York's Times Square. He is an Honorary Member of the Golden Key International Honour Society and serves on the Advisory Board of MeetMagic.",
  "His earlier career spanned C-suite advisory and P&L leadership at UGL, executive-programme delivery for Bank of America Merrill Lynch across Asia, and tenured academic positions. He holds an MBA from the University of Technology Sydney and a graduate certificate in leadership and organisational development from Harvard University.",
];

export default function About() {
  const [expanded, setExpanded] = useState(false);
  useSeo(
    "About Matthew Byrne | AI & Human Intelligence Expert",
    "Matthew Byrne is a leading voice on human intelligence and AI, Director of the AGSM General Manager Program and author of The 5th Revolution."
  );
  return (
    <>
      <PageHero eyebrow="About" title="About Matthew Byrne" />

      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <ScrollReveal direction="right">
              <div className="lg:sticky lg:top-28">
                <PlaceholderImage
                  label="Matthew Byrne headshot — pending"
                  className="w-full aspect-[4/5]"
                />
                <div className="flex flex-wrap gap-2 mt-5">
                  {badges.map((b) => (
                    <span
                      key={b.label}
                      className="inline-flex items-center gap-2 bg-cream border border-navy/10 rounded-full px-4 py-2 text-xs font-semibold text-navy"
                    >
                      <b.icon size={14} className="text-gold" />
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-5 text-slate-custom leading-relaxed">
              <ScrollReveal>
                <p>
                  For over three decades, Matthew Byrne has worked at the intersection of leadership,
                  organisational trust and human performance. He advises boards, CEOs and senior
                  executives across Australia, the Asia-Pacific and the Middle East — and is now one of
                  the leading global voices on the integration of human intelligence (HI) and artificial
                  intelligence (AI).
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <p>
                  His conviction is simple: AI should enable humanity, not replace it. Human intelligence
                  is the main story; AI is the context in which that story must now be renewed.
                </p>
              </ScrollReveal>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="space-y-5 overflow-hidden"
                  >
                    {moreParas.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setExpanded(!expanded)}
                className="link-underline mt-2"
                data-testid="about-read-more"
              >
                {expanded ? "Read less" : "Read more"}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Daniane */}
      <section className="section-padding bg-cream">
        <div className="container-custom grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <ScrollReveal direction="right">
              <PlaceholderImage
                label="Daniane Fernandes headshot — pending"
                className="w-full aspect-[4/5]"
              />
            </ScrollReveal>
          </div>
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Associate"
              title={<>Daniane Fernandes</>}
              className="mb-6"
            />
            <div className="space-y-5 text-slate-custom leading-relaxed">
              <ScrollReveal delay={0.05}>
                <p>
                  Daniane brings an engineer's precision to the people side of the work. Her background
                  spans corporate operations at a global healthcare company, where she worked closely
                  with Safety, Quality, Engineering, Planning, Maintenance and Procurement teams — always
                  in pursuit of the same thing the Mutuality Framework asks of any team: operational
                  excellence that doesn't come at the cost of the people delivering it.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p>
                  That combination, a strategic mindset that connects the big picture to operational
                  detail, and hands-on experience leading Continuous Improvement Projects that cut waste
                  without cutting corners, is exactly the discipline Building Mutuality brings to culture
                  audits and capability work. Daniane is currently pursuing a Master of Business in
                  Australia, and her focus throughout has stayed the same: people development and
                  leadership, and the analysis that makes both measurable rather than aspirational.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Faq
        dark
        title={<>About the <span className="text-gold">team</span></>}
        items={[
          { q: "What is Matthew Byrne known for?", a: "Being one of the leading global voices on integrating human intelligence and AI, Director of the AGSM General Manager Program, and author of Mutuality: The Future of Trust and the forthcoming The 5th Revolution." },
          { q: "Who is Daniane Fernandes?", a: "An Associate at Building Mutuality with an engineering and corporate operations background, focused on people development, leadership, and the operational discipline behind culture and capability work." },
          { q: "What is HI-AI Converge?", a: "A 1,000-delegate event Matthew convenes at ICC Sydney in October 2026, with 8,000 NSW high-school students voting on the questions that matter most." },
        ]}
      />
      <ExploreNext
        links={[
          { label: "The 5th Revolution", href: "/fifth-revolution" },
          { label: "Books", href: "/book" },
        ]}
      />
    </>
  );
}
