import { useSeo } from "@/hooks/useSeo";
import { ScrollText, Users2, ShieldAlert, GraduationCap, RefreshCcw, Cpu, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { StatCounter } from "@/components/StatCounter";
import { Faq } from "@/components/Faq";
import { ExploreNext } from "@/components/ExploreNext";

const caseStats = [
  { pre: "1 in ", value: 5, suf: "", label: "organisations expected to use AI to flatten structures (Gartner), potentially removing over half of middle-management roles." },
  { pre: "", value: 1800, suf: "", label: "roles Allianz has flagged disappearing from its travel operations." },
  { pre: "~", value: 2000, suf: "", label: "redundancies in WiseTech's AI transformation — and a petition signed by more than half its Australian engineers." },
  { pre: "", value: 55, suf: "%", label: "of leaders who made AI-related redundancies now believe they made the wrong decision (Orgvue)." },
];

const domains = [
  { icon: ScrollText, title: "HI Intent & Social Licence Governance", desc: "Has the organisation made a board-level commitment to responsible AI transition?" },
  { icon: Users2, title: "Mutuality & Co-Authorship", desc: "Are affected people able to shape AI design, deployment and correction?" },
  { icon: ShieldAlert, title: "Culture & Psychological Safety", desc: "Can people question AI outputs, report harms and learn without fear?" },
  { icon: GraduationCap, title: "HI Capability & Transition Architecture", desc: "Are people being developed for AI-enabled and unpredictable-domain work?" },
  { icon: RefreshCcw, title: "Responsible Work Redesign & Redeployment", desc: "Are roles decomposed and redesigned before redundancy is pursued?" },
  { icon: Cpu, title: "Responsible AI Integration & Accountability", desc: "Are AI systems embedded with clear reliance rules and human oversight?" },
  { icon: TrendingUp, title: "Value Creation, Reinvestment & Reporting", desc: "Is AI value translated into human value and reported credibly?" },
];

const gates = [
  "An AI use-case register",
  "Workforce-impact assessments",
  "Structured employee voice",
  "A redeployment-first protocol before redundancy",
  "Contestable high-impact decisions",
  "Managers trained in transition leadership",
  "Annual reporting",
];

const faqs = [
  { q: "Is HI Accreditation available now?", a: "Not yet — it's coming soon. This page describes what the standard will cover once it launches." },
  { q: "Who delivers HI Accreditation?", a: "HI Accreditation is developed in partnership with meetmagic. Matthew Byrne is the framework's original author; meetmagic leads facilitation and delivery." },
  { q: "How is HI Accreditation different from ISO/IEC 42001 or the EU AI Act?", a: "Those standards govern the technical system. HI Accreditation certifies the human side: whether employees have genuine voice and real pathways as their work changes." },
  { q: "What does the assessment cover?", a: "Seven domains anchored by the Human Intelligence Framework, underpinned by non-negotiable gates including a workforce-impact assessment and a redeployment-first protocol before redundancy." },
  { q: "What is CARL, the Commercial AI Risk Lens?", a: "A tool (ailosscalculator.com) that calculates the exposure of an AI transition, back-tested against real failures in the White Whale evidence bank — putting a number on social-licence loss before it happens." },
];

export default function HIAccreditation() {
  useSeo(
    "HI Accreditation | Human-Centred AI Standard (Coming Soon)",
    "HI Accreditation (coming soon): an independent standard certifying that your AI transition protects human capability and voice."
  );
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "HI Accreditation" }]}
        badge="Coming Soon"
        eyebrow="HI Accreditation"
        title="HI Accreditation"
        intro="HI Accreditation is an independent standard for responsible, human-centred AI transition, developed in partnership with meetmagic and built on what the White Whale research established as best practice. It gives an organisation a credible way to show it is using AI to build human value, not merely extract it — a guarantee of no blind displacement, not a promise that no role will ever change."
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            eyebrow="Why It Exists"
            title={<>Certifying the <span className="text-gold">missing layer</span></>}
            className="mb-6"
          />
          <ScrollReveal delay={0.1}>
            <p className="text-slate-custom leading-relaxed text-lg">
              Technical standards like ISO/IEC 42001, the NIST AI Risk Management Framework and the EU
              AI Act govern the systems. None certify whether an organisation is protecting human
              capability, giving employees genuine voice, or creating real pathways for people whose
              work is changing. HI Accreditation certifies that missing layer.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Case For It — stat heavy */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <SectionHeading
            eyebrow="The Case For It"
            title={<>The exposure is <span className="text-gold">calculable</span></>}
            dark
            className="mb-12"
          />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {caseStats.map((s, i) => (
              <StaggerItem key={i}>
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-gold/40 transition-colors duration-300">
                  <p className="font-sora font-bold text-4xl md:text-5xl text-gold mb-4">
                    {s.pre}
                    <StatCounter value={s.value} suffix={s.suf} />
                  </p>
                  <p className="text-white/65 text-sm leading-relaxed">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal>
            <p className="text-white/75 leading-relaxed max-w-3xl">
              The exposure is calculable: CARL, the Commercial AI Risk Lens (ailosscalculator.com),
              back-tested against real failures in the evidence bank, puts a number on social-licence
              loss before it happens.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Seven Domains */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <SectionHeading
            eyebrow="The Seven Accreditation Domains"
            title={<>Seven domains, one <span className="text-gold">human standard</span></>}
            className="mb-12"
          />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {domains.map((d, i) => (
              <StaggerItem key={i}>
                <div className="group h-full bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                      <d.icon className="text-gold group-hover:text-navy transition-colors duration-300" size={22} />
                    </div>
                    <span className="font-sora font-bold text-4xl text-gold/25">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-sora font-semibold text-lg text-navy mb-2 leading-snug">{d.title}</h3>
                  <p className="text-slate-custom text-sm leading-relaxed">{d.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works + gates */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="How It Works"
              title={<>An evidence-based <span className="text-gold">maturity assessment</span></>}
              className="mb-6"
            />
            <ScrollReveal delay={0.1}>
              <p className="text-slate-custom leading-relaxed">
                An evidence-based maturity assessment across the seven domains above, anchored by the
                Human Intelligence Framework: Mutuality → Culture → Capability → Integration.
              </p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-5 block">Mandatory Gates</p>
            </ScrollReveal>
            <StaggerContainer className="space-y-2.5">
              {gates.map((g, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-center gap-3 bg-cream rounded-xl px-5 py-3.5">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-navy text-sm font-medium">{g}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Dignified Transition Test — pull quote */}
      <section className="relative bg-navy-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/services-emotional.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-navy-dark/70" />
        </div>
        <div className="container-custom relative z-10 py-20 lg:py-28">
          <ScrollReveal className="max-w-4xl">
            <span className="eyebrow mb-6 block">The Dignified Transition Test</span>
            <p className="font-sora font-semibold text-2xl md:text-3xl lg:text-4xl text-white leading-[1.25] text-balance">
              Has redundancy been treated as the last responsible stage of a transition, or the first
              financial lever pulled when automation became available?{" "}
              <span className="text-gold">
                HI Accreditation rewards organisations that relocate human value into higher-judgement
                work.
              </span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Faq items={faqs} title={<>HI Accreditation <span className="text-gold">questions</span></>} />
      <ExploreNext
        links={[
          { label: "Culture Audits", href: "/services/culture-audits" },
          { label: "The 5th Revolution", href: "/fifth-revolution" },
        ]}
      />
    </>
  );
}
