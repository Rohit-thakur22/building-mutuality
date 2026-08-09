import { Link } from "react-router-dom";
import { GraduationCap, UserRound, ClipboardCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const services = [
  {
    icon: GraduationCap,
    title: "Leadership Programmes",
    desc: "Story-led, experiential learning, from the flagship AGSM General Manager Program to Human Intelligence workshops and custom in-house work.",
    href: "/services/programmes",
    soon: false,
  },
  {
    icon: UserRound,
    title: "Executive Coaching",
    desc: "One-to-one and small-group coaching grounded in the Mutuality assessment and values discovery.",
    href: "/services/executive-coaching",
    soon: false,
  },
  {
    icon: ClipboardCheck,
    title: "Culture Audits",
    desc: "An evidence-based read on relational trust using the Mutuality Trust Index.",
    href: "/services/culture-audits",
    soon: false,
  },
  {
    icon: ShieldCheck,
    title: "HI Accreditation",
    desc: "An independent standard certifying that an AI transition protects human capability and voice.",
    href: "/services/hi-accreditation",
    soon: true,
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-white" data-testid="services-preview">
      <div className="container-custom">
        <SectionHeading
          eyebrow="How We Work With You"
          title={<>Four ways to build <span className="text-gold">human-centred AI leadership</span></>}
          className="mb-12"
        />
        <StaggerContainer className="grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <Link
                to={s.href}
                className="group flex gap-5 h-full bg-cream rounded-2xl p-6 md:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                data-testid={`service-preview-${s.href}`}
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-navy flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <s.icon className="text-gold group-hover:text-navy transition-colors duration-300" size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="font-sora font-semibold text-lg text-navy leading-snug">
                      {s.title}
                    </h3>
                    {s.soon && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider bg-gold/20 text-gold-dark px-2 py-0.5 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-slate-custom text-sm leading-relaxed mb-3">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
