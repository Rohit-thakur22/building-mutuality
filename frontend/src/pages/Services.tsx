import { useSeo } from "@/hooks/useSeo";
import { Link } from "react-router-dom";
import { GraduationCap, UserRound, ClipboardCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Faq } from "@/components/Faq";
import { ExploreNext } from "@/components/ExploreNext";

const services = [
  {
    icon: GraduationCap,
    title: "Leadership Programmes",
    desc: "Story-led, experiential leadership development — from the flagship AGSM General Manager Program to Human Intelligence workshops and custom in-house work.",
    href: "/services/programmes",
    soon: false,
  },
  {
    icon: UserRound,
    title: "Executive Coaching",
    desc: "One-to-one and small-group coaching grounded in the Mutuality assessment.",
    href: "/services/executive-coaching",
    soon: false,
  },
  {
    icon: ClipboardCheck,
    title: "Culture Audits",
    desc: "An evidence-based read of your organisation's relational trust, using the Mutuality Trust Index.",
    href: "/services/culture-audits",
    soon: false,
  },
  {
    icon: ShieldCheck,
    title: "HI Accreditation",
    desc: "An independent standard certifying that your AI transition protects human capability and voice.",
    href: "/services/hi-accreditation",
    soon: true,
  },
];

const flow = ["Culture Audit", "Programmes / Coaching", "HI Accreditation"];

const faqs = [
  {
    q: "Do I need to start with a Culture Audit before anything else?",
    a: "Not always, but it's the most common starting point because it gives you an evidence base for everything that follows.",
  },
  {
    q: "Can these services be delivered together as one engagement?",
    a: "Yes. Most clients combine at least two — commonly a Culture Audit followed by Leadership Programmes or Executive Coaching.",
  },
  {
    q: "Is HI Accreditation available now?",
    a: "It's coming soon — see the HI Accreditation page for what it will cover once launched.",
  },
];

export default function Services() {
  useSeo(
    "Services | Leadership, Coaching, Culture & AI Accreditation",
    "Four ways to build human-centred AI leadership: leadership programmes, coaching, culture audits and HI Accreditation, grounded in 1,300+ cases of research."
  );
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services"
        intro="Every engagement starts from the same evidence: across 1,300+ documented AI transitions, the organisations that built human capability alongside the technology arrived ahead — with trust intact. The right service depends on what you're trying to build: capability in your leaders, clarity in yourself, an honest read of your culture, or a credible standard to prove your AI transition is being done right."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-2 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <Link
                  to={s.href}
                  className="group flex gap-5 h-full bg-cream rounded-2xl p-7 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
                  data-testid={`service-card-${s.href}`}
                >
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-navy flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                    <s.icon className="text-gold group-hover:text-navy transition-colors duration-300" size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="font-sora font-semibold text-xl text-navy">{s.title}</h3>
                      {s.soon && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider bg-gold/20 text-gold-dark px-2 py-0.5 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-slate-custom leading-relaxed mb-3">{s.desc}</p>
                    <span className="inline-flex items-center gap-1 text-gold font-medium group-hover:gap-2 transition-all">
                      Explore <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-custom">
          <SectionHeading
            eyebrow="How the Services Fit Together"
            title={<>A sequence, not a <span className="text-gold">menu</span></>}
            dark
            className="mb-10"
          />
          <ScrollReveal>
            <p className="text-white/75 leading-relaxed max-w-3xl mb-12">
              A Culture Audit often comes first — it tells you where trust actually stands before
              committing to a programme design or coaching cadence. Programmes and Coaching
              frequently run in parallel. HI Accreditation typically comes once the groundwork is in
              place, as the formal proof point for boards, regulators and your own people.
            </p>
          </ScrollReveal>
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            {flow.map((step, i) => (
              <ScrollReveal key={step} delay={i * 0.12} className="flex-1">
                <div className="flex items-center gap-4 h-full">
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-6 text-center">
                    <span className="font-sora font-bold text-gold text-sm block mb-1">
                      Step {i + 1}
                    </span>
                    <span className="text-white font-semibold">{step}</span>
                  </div>
                  {i < flow.length - 1 && (
                    <ArrowRight className="text-gold shrink-0 rotate-90 md:rotate-0" size={22} />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faqs} title={<>Service <span className="text-gold">questions</span></>} />
      <ExploreNext
        links={[
          { label: "The 5th Revolution", href: "/fifth-revolution" },
          { label: "Who We Help", href: "/who-we-help" },
        ]}
      />
    </>
  );
}
