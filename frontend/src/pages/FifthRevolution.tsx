import { useSeo } from "@/hooks/useSeo";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake, Sprout, Brain, Network } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { StatCounter } from "@/components/StatCounter";
import { Faq } from "@/components/Faq";
import { ExploreNext } from "@/components/ExploreNext";

const headlineStats = [
  { value: 1300, prefix: "", suffix: "+", decimals: 0, label: "source-audited cases" },
  { value: 0.86, prefix: "", suffix: "", decimals: 2, label: "correlation between the gap and severity" },
  { value: 0.73, prefix: "+", suffix: "", decimals: 2, label: "advantage for capability-first organisations" },
];

const pillars = [
  {
    n: "01",
    title: "Mutuality",
    desc: "Agree, out loud and with your people, that AI exists to enable them.",
    icon: Handshake,
    dot: "bg-pillar-mutuality",
    ring: "border-pillar-mutuality/40 bg-pillar-mutuality/15",
    text: "text-pillar-mutuality",
  },
  {
    n: "02",
    title: "Culture",
    desc: "Audit what AI will amplify; fix thin trust before you scale, not after.",
    icon: Sprout,
    dot: "bg-pillar-culture",
    ring: "border-pillar-culture/40 bg-pillar-culture/15",
    text: "text-pillar-culture",
  },
  {
    n: "03",
    title: "Capability",
    desc: "Fund human capability like infrastructure: named budget, board-level metric.",
    icon: Brain,
    dot: "bg-pillar-capability",
    ring: "border-pillar-capability/40 bg-pillar-capability/15",
    text: "text-pillar-capability",
  },
  {
    n: "04",
    title: "Integration",
    desc: "Bring AI in last, with human judgement visibly in the loop.",
    icon: Network,
    dot: "bg-pillar-integration",
    ring: "border-pillar-integration/40 bg-pillar-integration/15",
    text: "text-pillar-integration",
  },
];

const faqs = [
  { q: "What is The 5th Revolution, in one sentence?", a: "A research programme, forthcoming book and two frameworks arguing that AI should enable humanity rather than replace it — grounded in the White Whale, a 1,300+ case longitudinal study." },
  { q: "Is The 5th Revolution the same as the \u201C5IR\u201D or Fifth Industrial Revolution?", a: "No. The 5th Revolution is a specific, research-based programme for renewing human intelligence — distinct from broader conversations about the next industrial era." },
  { q: "What's the difference between the Mutuality Framework and the Human Intelligence Framework?", a: "The Mutuality Framework is about relational trust specifically — six archetypes, six obstacles. The Human Intelligence Framework is the broader four-pillar path (Mutuality, Culture, Capability, Integration) that an organisation follows to get AI right, with the Mutuality Framework underpinning its first pillar." },
  { q: "What is the White Whale study?", a: "A landmark, ongoing study mapping the widening gap between AI's acceleration and organisations' capacity to keep pace. The evidence bank has grown to 1,300+ source-audited cases as of August 2026 and continues to expand." },
  { q: "What is HI-AI Converge?", a: "A 1,000-delegate event at ICC Sydney in October 2026, bringing together leaders, educators and innovators with 8,000 NSW high-school students voting on the questions that matter most." },
];

function ChapterLabel({ n, title }: { n: string; title: string }) {
  return (
    <ScrollReveal className="flex items-center gap-4 mb-6">
      <span className="font-sora font-bold text-gold text-sm tracking-[0.3em]">{n}</span>
      <span className="h-px flex-1 max-w-[80px] bg-gold/40" />
      <span className="eyebrow">{title}</span>
    </ScrollReveal>
  );
}

export default function FifthRevolution() {
  useSeo(
    "The 5th Revolution | Research, Book & Frameworks",
    "The 5th Revolution: Matthew Byrne's research programme, book and two frameworks — grounded in the White Whale, a 1,300+ case AI implementation study."
  );
  return (
    <>
      <PageHero
        eyebrow="Research & Frameworks"
        title="The 5th Revolution"
      />

      {/* Chapter 01 — The Moment */}
      <section className="section-padding bg-cream">
        <div className="container-custom max-w-4xl">
          <ChapterLabel n="01" title="The Moment" />
          <SectionHeading
            title={<>A technology that changes how we <span className="text-gold">understand ourselves</span></>}
            className="mb-8"
          />
          <div className="space-y-5 text-slate-custom leading-relaxed text-lg">
            <ScrollReveal delay={0.05}>
              <p>
                Every so often, a technology arrives that doesn't just change what we can do. It changes
                how we understand ourselves. The printing press did it. Electricity did it. Artificial
                intelligence is doing it now, and this time it is arriving in the territory we have long
                used to define human significance: language, judgement, the making of meaning.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p>
                The 5th Revolution is Building Mutuality's response to that moment: a research programme,
                a forthcoming book, and two working frameworks. Its central argument:{" "}
                <span className="text-navy font-semibold">AI should enable humanity, not replace it.</span>{" "}
                Human intelligence is the main story; AI is the context in which that story must now be
                renewed. Together is better.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Chapter 02 — The White Whale */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 max-w-5xl">
          <ChapterLabel n="02" title="The Research Underneath" />
          <SectionHeading
            title={<>The White Whale — the claim is <span className="text-gold">measured</span></>}
            dark
            className="mb-10"
          />
          <StaggerContainer className="grid sm:grid-cols-3 gap-5 mb-10">
            {headlineStats.map((s, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-gold/40 transition-colors duration-300">
                  <p className="font-sora font-bold text-4xl md:text-5xl text-gold mb-3">
                    <StatCounter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal>
            <p className="text-white/75 leading-relaxed text-lg">
              The claim is not a slogan; it is measured. The White Whale is the longitudinal AI
              implementation segmentation research project behind the programme: 1,300+ source-audited
              AI transition cases tracked across a five-phase arc, the largest evidence bank of its kind.
              The gap between accelerating AI and lagging human capability predicts the severity of what
              follows with a correlation of 0.86. Organisations that built human capability by design
              arrived at the final phase with a measured +0.73 advantage, and a{" "}
              <span className="text-gold font-semibold">1% public-backlash rate against 35%</span> for
              everyone else. That is the evidence base that established best-practice AI integration, and
              it grows monthly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Chapter 03 — Mutuality Framework */}
      <section className="section-padding bg-cream">
        <div className="container-custom max-w-4xl">
          <ChapterLabel n="03" title="Trust as the Foundation" />
          <SectionHeading
            title={<>The Mutuality Framework — something you can <span className="text-gold">see and diagnose</span></>}
            className="mb-6"
          />
          <ScrollReveal delay={0.1}>
            <p className="text-slate-custom leading-relaxed text-lg">
              Every lasting change in an organisation runs on trust, and trust between people who are
              different from one another is the hardest kind to build. The Mutuality Framework names six
              trust archetypes and six obstacles, replacing the vague instruction to "build trust" with
              something you can actually see, diagnose and work on — measured through the Mutuality Trust
              Index.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Chapter 04 — HI Framework pillars */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-4xl">
            <ChapterLabel n="04" title="Renewing the Driver" />
            <SectionHeading
              title={<>The Human Intelligence Framework — the <span className="text-gold">four-pillar path</span></>}
              dark
              intro="AI is the engine; human intelligence is the driver — and every crash in the data happened where the engine outgrew the driver. This is the four-pillar path the uplift organisations followed."
              className="mb-14"
            />
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-pillar-mutuality via-pillar-capability to-pillar-integration opacity-40" />
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p) => (
                <StaggerItem key={p.n}>
                  <div className="relative text-center lg:text-left">
                    <div className={`w-16 h-16 rounded-2xl border ${p.ring} flex items-center justify-center mb-5 mx-auto lg:mx-0 relative z-10`}>
                      <p.icon className={p.text} size={26} />
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                      <span className={`font-sora font-bold text-2xl ${p.text}`}>{p.n}</span>
                      <span className={`w-2 h-2 rounded-full ${p.dot}`} />
                    </div>
                    <h3 className="font-sora font-semibold text-xl text-white mb-2">{p.title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* A Widening Body of Work */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            eyebrow="A Widening Body of Work"
            title={<>Deliberately collaborative, and <span className="text-gold">expanding</span></>}
            className="mb-6"
          />
          <div className="space-y-5 text-slate-custom leading-relaxed text-lg">
            <ScrollReveal delay={0.05}>
              <p>
                The 5th Revolution is deliberately collaborative, and it is expanding: research on
                mattering, the felt sense of being valued and adding value; problem finding as everyone's
                work; how AI surfaces the truths organisations have learned to live around; and the Love
                Handles of the Organisation. All are developed with research partners in professional
                services, alongside a youth and workforce readiness partnership spanning Sydney and
                Singapore.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p>
                In October 2026, <span className="text-navy font-semibold">HI-AI Converge</span> brings
                1,000 leaders, educators and innovators to ICC Sydney, with 8,000 NSW high-school students
                voting on the questions that matter most.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* A Note on the Name */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <div className="bg-cream border-l-4 border-gold rounded-2xl p-8 md:p-10">
              <span className="eyebrow mb-3 block">A Note on the Name</span>
              <p className="text-navy/85 leading-relaxed">
                Unlike the broader "5IR" conversation about the next industrial era, The 5th Revolution is
                a specific, research-based programme for one thing — renewing human intelligence so that
                people can lead AI.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Faq items={faqs} dark title={<>The 5th Revolution, <span className="text-gold">explained</span></>} />
      <ExploreNext
        links={[
          { label: "Culture Audits", href: "/services/culture-audits" },
          { label: "About Matthew Byrne", href: "/about" },
          { label: "The 5th Revolution book", href: "/book" },
        ]}
      />
    </>
  );
}
