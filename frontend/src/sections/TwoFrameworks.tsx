import { Link } from "react-router-dom";
import { Handshake, Layers, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const pillarDots = [
  { c: "bg-pillar-mutuality", label: "Mutuality" },
  { c: "bg-pillar-culture", label: "Culture" },
  { c: "bg-pillar-capability", label: "Capability" },
  { c: "bg-pillar-integration", label: "Integration" },
];

export function TwoFrameworks() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden" data-testid="two-frameworks">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pillar-mutuality/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Inside The 5th Revolution"
          title={<>Two frameworks that make it <span className="text-gold">practical</span></>}
          dark
          align="center"
          className="mb-12"
        />

        <StaggerContainer className="grid lg:grid-cols-2 gap-6">
          <StaggerItem>
            <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 hover:border-pillar-mutuality/50 hover:bg-white/[0.07] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-pillar-mutuality/20 border border-pillar-mutuality/40 flex items-center justify-center mb-6">
                <Handshake className="text-pillar-mutuality" size={26} />
              </div>
              <h3 className="font-sora font-semibold text-2xl text-white mb-4">
                The Mutuality Framework
              </h3>
              <p className="text-white/70 leading-relaxed">
                Relational trust as the foundation everything else stands on. Six trust
                archetypes, six obstacles, measured through the{" "}
                <span className="text-gold">Mutuality Trust Index</span>.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 hover:border-gold/50 hover:bg-white/[0.07] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center mb-6">
                <Layers className="text-gold" size={26} />
              </div>
              <h3 className="font-sora font-semibold text-2xl text-white mb-4">
                The Human Intelligence Framework
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                The four-pillar path the White Whale found in every organisation that got AI
                right: Mutuality, Culture, Capability, Integration. AI is the engine; HI is the
                driver.
              </p>
              <div className="flex flex-wrap gap-3">
                {pillarDots.map((p) => (
                  <span key={p.label} className="inline-flex items-center gap-2 text-white/60 text-xs font-medium">
                    <span className={`w-2.5 h-2.5 rounded-full ${p.c}`} />
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <div className="text-center mt-10">
          <Link to="/fifth-revolution" className="btn-ghost">
            See how the frameworks work
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
