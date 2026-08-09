import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface FinalCTAProps {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  buttonLabel?: string;
  buttonHref?: string;
}

export function FinalCTA({
  eyebrow = "Get Started",
  title,
  body,
  buttonLabel = "Start a Conversation",
  buttonHref = "/contact",
}: FinalCTAProps) {
  return (
    <section className="relative bg-navy-dark overflow-hidden" data-testid="final-cta">
      <div className="absolute inset-0 opacity-25">
        <img src="/images/hi-ai-emotional.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/60" />
      </div>
      <div className="container-custom relative z-10 py-20 lg:py-28">
        <ScrollReveal className="max-w-3xl">
          <span className="eyebrow mb-5 block">{eyebrow}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] text-balance">
            {title}
          </h2>
          {body && (
            <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed">
              {body}
            </p>
          )}
          <Link to={buttonHref} className="btn-primary mt-8 text-base">
            {buttonLabel}
            <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
