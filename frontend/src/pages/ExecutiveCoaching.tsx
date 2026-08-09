import { useSeo } from "@/hooks/useSeo";
import { Compass, Clock, Target } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Faq } from "@/components/Faq";
import { ExploreNext } from "@/components/ExploreNext";

const details = [
  { icon: Clock, label: "Session length", value: "60–90 minutes" },
  { icon: Target, label: "Typical engagement", value: "10 sessions over 6 months" },
  { icon: Compass, label: "Format", value: "Standalone or bundled with a programme" },
];

const faqs = [
  {
    q: "How long does an executive coaching engagement last?",
    a: "Typically ten sessions over six months, shaped around each client's needs.",
  },
  {
    q: "How long are coaching sessions?",
    a: "60–90 minutes each.",
  },
  {
    q: "Can coaching be combined with a leadership programme?",
    a: "Yes — coaching can be standalone or bundled with a programme.",
  },
];

export default function ExecutiveCoaching() {
  useSeo(
    "Executive Coaching | Trust-Based Leadership Coaching",
    "One-to-one executive coaching grounded in the Mutuality Framework — helping senior leaders build trust deliberately and lead well through AI change."
  );
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Executive Coaching" }]}
        eyebrow="Executive Coaching"
        title="Executive Coaching"
        intro="One-to-one and small-group coaching for senior leaders navigating complexity, scale and the arrival of AI. Grounded in the Mutuality Framework, coaching pairs honest challenge with genuine care."
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="How It Works"
              title={<>It begins with the <span className="text-gold">Mutuality assessment</span></>}
              className="mb-6"
            />
            <ScrollReveal delay={0.1}>
              <p className="text-slate-custom leading-relaxed">
                Coaching begins with the Mutuality assessment and a structured values-discovery process
                to establish how a leader tends to show up under pressure. From there, a tailored
                development path is worked through over a series of sessions, with the option to
                reassess.
              </p>
            </ScrollReveal>
          </div>
          <div>
            <SectionHeading
              eyebrow="Who It's For"
              title={<>Leaders carrying <span className="text-gold">real complexity</span></>}
              className="mb-6"
            />
            <ScrollReveal delay={0.1}>
              <p className="text-slate-custom leading-relaxed">
                Executives and senior leaders carrying real complexity, and high-potential leaders whose
                organisations are investing in their growth.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Session Details"
            title={<>What an engagement <span className="text-gold">looks like</span></>}
            className="mb-12"
          />
          <StaggerContainer className="grid md:grid-cols-3 gap-5">
            {details.map((d) => (
              <StaggerItem key={d.label}>
                <div className="h-full bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 text-center">
                  <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mx-auto mb-5">
                    <d.icon className="text-gold" size={24} />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-slate-custom mb-2">{d.label}</p>
                  <p className="font-sora font-semibold text-lg text-navy">{d.value}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Faq items={faqs} title={<>Coaching <span className="text-gold">questions</span></>} />
      <ExploreNext
        links={[
          { label: "Leadership Programmes", href: "/services/programmes" },
          { label: "The 5th Revolution", href: "/fifth-revolution" },
        ]}
      />
    </>
  );
}
