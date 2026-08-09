import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface CTABandProps {
  title?: React.ReactNode;
  eyebrow?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function CTABand({
  title = <>Together is <span className="text-gold">better</span>.</>,
  eyebrow = "Start a Conversation",
  buttonLabel = "Start a Conversation",
  buttonHref = "/contact",
}: CTABandProps) {
  return (
    <section className="bg-navy" data-testid="cta-band">
      <div className="container-custom py-14 lg:py-16">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="eyebrow mb-3 block">{eyebrow}</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
                {title}
              </h2>
            </div>
            <Link to={buttonHref} className="btn-primary text-base shrink-0">
              {buttonLabel}
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
