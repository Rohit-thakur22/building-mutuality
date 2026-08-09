import { useSeo } from "@/hooks/useSeo";
import { Building2, Users, Package, Wrench } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { StatCounter } from "@/components/StatCounter";
import { Faq } from "@/components/Faq";
import { ExploreNext } from "@/components/ExploreNext";

const range = [
  {
    title: "The AGSM General Manager Program",
    desc: "The flagship five-day residential Matthew directs, consistently ranked the best executive education programme in Australia by the Financial Times.",
  },
  {
    title: "\u201CLeading at the Next Level\u201D",
    desc: "Nine two-hour masterclasses for emerging and senior leaders.",
  },
  {
    title: "Human Intelligence workshops",
    desc: "Built directly from the White Whale research, preparing leadership teams to direct AI rather than be directed by it.",
  },
  {
    title: "Custom in-house programmes",
    desc: "Designed and delivered for a single organisation, as with Perenti, Calvary, CASA and Opal HealthCare.",
  },
];

const architecture = [
  "Story-led, human-centred teaching",
  "An experiential component",
  "A small-group breakout on a real challenge",
  "A single, well-designed one-page tool to take away",
];

const faqs = [
  {
    q: "What is the AGSM General Manager Program?",
    a: "The flagship five-day residential programme Matthew Byrne directs, consistently ranked the best executive education programme in Australia by the Financial Times.",
  },
  {
    q: "What are the Human Intelligence workshops?",
    a: "Programmes built directly from the White Whale research, designed to prepare leadership teams to direct AI rather than be directed by it.",
  },
  {
    q: "Can programmes be delivered in-house for a single organisation?",
    a: "Yes — custom in-house programmes have been designed and delivered for organisations including Perenti, Calvary, CASA and Opal HealthCare.",
  },
];

export default function Programmes() {
  useSeo(
    "Leadership Programmes | Executive Education for the AI Era",
    "Story-led leadership programmes from the AGSM General Manager Program to Human Intelligence workshops — built on White Whale research."
  );
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Programmes" }]}
        eyebrow="Leadership Programmes"
        title="Leadership Programmes"
        intro="Leadership programmes that build the human capability behind every transition — and, increasingly, behind every AI transition. Delivered through AGSM or designed in-house, Matthew's programmes are the Human Intelligence Framework in practice: story-led, experiential and grounded in two decades of research."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="The Range"
            title={<>From flagship residentials to <span className="text-gold">in-house design</span></>}
            className="mb-12"
          />
          <StaggerContainer className="grid md:grid-cols-2 gap-5">
            {range.map((r, i) => (
              <StaggerItem key={i}>
                <div className="h-full bg-cream rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-l-4 border-gold">
                  <h3 className="font-sora font-semibold text-xl text-navy mb-3">{r.title}</h3>
                  <p className="text-slate-custom leading-relaxed">{r.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="How They Work"
              title={<>Every session, the same <span className="text-gold">architecture</span></>}
              dark
              className="mb-8"
            />
            <ScrollReveal>
              <p className="text-white/70 leading-relaxed mb-6">
                Every session shares the same architecture — and no technical background is assumed.
              </p>
            </ScrollReveal>
            <StaggerContainer className="space-y-3">
              {architecture.map((a, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                    <span className="font-sora font-bold text-gold">{i + 1}</span>
                    <span className="text-white/90">{a}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <ScrollReveal direction="left">
            <div className="bg-gradient-to-br from-gold/20 to-transparent border border-gold/30 rounded-2xl p-10 text-center">
              <p className="eyebrow mb-4">Who They're For</p>
              <p className="text-white/80 leading-relaxed mb-8">
                Senior managers and functional or divisional heads sensing the next step is coming;
                aspiring general managers; high-potential leaders whose organisations are investing in
                their growth.
              </p>
              <div className="border-t border-white/15 pt-8">
                <p className="font-sora font-bold text-5xl text-gold">
                  <StatCounter value={10} />–<StatCounter value={200} />
                </p>
                <p className="text-white/60 text-sm mt-2 uppercase tracking-widest">Cohort size</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Faq items={faqs} title={<>Programme <span className="text-gold">questions</span></>} />
      <ExploreNext
        links={[
          { label: "Executive Coaching", href: "/services/executive-coaching" },
          { label: "The 5th Revolution", href: "/fifth-revolution" },
        ]}
      />
    </>
  );
}
