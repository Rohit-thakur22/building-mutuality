import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export interface ExploreLink {
  label: string;
  href: string;
}

export function ExploreNext({ links }: { links: ExploreLink[] }) {
  return (
    <section className="bg-cream border-t border-navy/10" data-testid="explore-next">
      <div className="container-custom py-14 lg:py-16">
        <ScrollReveal>
          <span className="eyebrow mb-6 block">Explore Next</span>
        </ScrollReveal>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link) => (
            <StaggerItem key={link.href}>
              <Link
                to={link.href}
                className="group flex items-center justify-between gap-3 bg-white rounded-2xl px-5 py-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full"
                data-testid={`explore-link-${link.href}`}
              >
                <span className="font-sora font-semibold text-navy text-sm md:text-base leading-snug">
                  {link.label}
                </span>
                <ArrowUpRight
                  className="text-gold shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  size={20}
                />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
