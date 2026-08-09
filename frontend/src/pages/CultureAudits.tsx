import { useSeo } from "@/hooks/useSeo";
import { Users, Eye, MessageSquare, HandHeart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Faq } from "@/components/Faq";
import { ExploreNext } from "@/components/ExploreNext";
import { CTABand } from "@/components/CTABand";

const measures = [
  {
    icon: Users,
    title: "System-First Mutual Orientation",
    desc: "Acting for mutual benefit rather than personal gain.",
    border: "border-pillar-mutuality",
    bg: "bg-pillar-mutuality/15",
    text: "text-pillar-mutuality",
  },
  {
    icon: Eye,
    title: "Open Sensemaking & Bias Suspension",
    desc: "Holding multiple perspectives and updating beliefs.",
    border: "border-pillar-culture",
    bg: "bg-pillar-culture/15",
    text: "text-pillar-culture",
  },
  {
    icon: MessageSquare,
    title: "Trust-Building Dialogue & Psychological Safety",
    desc: "Honest conversation under conflict and change.",
    border: "border-pillar-capability",
    bg: "bg-pillar-capability/15",
    text: "text-pillar-capability",
  },
  {
    icon: HandHeart,
    title: "Mutual Action, Accountability & Enablement",
    desc: "Shared ownership and learning, not blame.",
    border: "border-pillar-integration",
    bg: "bg-pillar-integration/15",
    text: "text-pillar-integration",
  },
];

const faqs = [
  {
    q: "What is the Mutuality Trust Index?",
    a: "A validated diagnostic that presents realistic workplace situations rather than self-rated virtue questions, revealing the gap between what people know is right and what they'd actually do under pressure.",
  },
  {
    q: "What does a culture audit measure?",
    a: "Four families of relational trust: System-First Mutual Orientation, Open Sensemaking & Bias Suspension, Trust-Building Dialogue & Psychological Safety, and Mutual Action, Accountability & Enablement.",
  },
];

export default function CultureAudits() {
  useSeo(
    "Culture Audits | Workplace Trust Assessment Australia",
    "The Mutuality Trust Index gives your organisation an evidence-based read on relational trust — so you know if your culture can hold what's coming."
  );
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Culture Audits" }]}
        eyebrow="Culture Audits"
        title="Culture Audits"
        intro="A rigorous, evidence-based read of the one thing that decides whether change (and AI) will strengthen your people or strain them: relational trust. This is the Mutuality Framework at work, delivered through the Mutuality Trust Index."
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            eyebrow="How It Works"
            title={<>The gaps reveal the <span className="text-gold">real culture</span></>}
            className="mb-6"
          />
          <ScrollReveal delay={0.1}>
            <p className="text-slate-custom leading-relaxed text-lg">
              Most culture surveys ask people to rate themselves on virtues, which invites flattering
              answers. Ours doesn't. The Mutuality Trust Index presents realistic workplace situations
              and asks what would be most effective, what the team would most likely do under pressure,
              and what you would do. The gaps reveal the real culture.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What It Measures"
            title={<>Four families of <span className="text-gold">relational trust</span></>}
            className="mb-12"
          />
          <StaggerContainer className="grid sm:grid-cols-2 gap-5">
            {measures.map((m) => (
              <StaggerItem key={m.title}>
                <div className={`group h-full bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 border-t-4 ${m.border}`}>
                  <div className={`w-14 h-14 rounded-xl ${m.bg} flex items-center justify-center mb-5`}>
                    <m.icon className={m.text} size={24} />
                  </div>
                  <h3 className="font-sora font-semibold text-lg text-navy mb-2 leading-snug">{m.title}</h3>
                  <p className="text-slate-custom text-sm leading-relaxed">{m.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            eyebrow="What You Receive"
            title={<>Every finding becomes a <span className="text-gold">development path</span></>}
            dark
            className="mb-6"
          />
          <ScrollReveal delay={0.1}>
            <p className="text-white/75 leading-relaxed text-lg">
              A clear report of your team's cultural strengths and biggest trust gaps. Individuals
              receive a confidential personal read; leaders receive an aggregated team picture. Every
              finding translates into a development path.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Faq items={faqs} title={<>Culture audit <span className="text-gold">questions</span></>} />
      <CTABand />
      <ExploreNext
        links={[
          { label: "The 5th Revolution", href: "/fifth-revolution" },
          { label: "HI Accreditation", href: "/services/hi-accreditation" },
        ]}
      />
    </>
  );
}
