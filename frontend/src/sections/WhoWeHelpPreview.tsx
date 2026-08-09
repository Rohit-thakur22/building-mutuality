import { Link } from "react-router-dom";
import { Briefcase, Landmark, Users, GraduationCap, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const segments = [
  {
    icon: Briefcase,
    title: "Executives",
    desc: "Bringing AI into an organisation and needing it to strengthen their people, not sideline them.",
  },
  {
    icon: Landmark,
    title: "Public-sector & government leaders",
    desc: "Working under scrutiny, duty of care and public trust.",
  },
  {
    icon: Users,
    title: "Boards",
    desc: "Setting AI strategy that is commercially sound and genuinely human.",
  },
  {
    icon: GraduationCap,
    title: "Educators & institutions",
    desc: "Preparing people for a future shaped by AI.",
  },
];

export function WhoWeHelpPreview() {
  return (
    <section className="section-padding bg-cream" data-testid="who-we-help-preview">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Who We Help"
          title={<>Wherever you're standing, there's a <span className="text-gold">way in</span></>}
          className="mb-12"
        />
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {segments.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group h-full bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5">
                <div className="w-12 h-12 rounded-xl bg-navy/5 group-hover:bg-gold/15 flex items-center justify-center mb-5 transition-colors duration-300">
                  <s.icon className="text-navy group-hover:text-gold transition-colors duration-300" size={22} />
                </div>
                <h3 className="font-sora font-semibold text-lg text-navy mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-slate-custom text-sm leading-relaxed">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-10">
          <Link to="/who-we-help" className="btn-secondary">
            Find Your Starting Point
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
