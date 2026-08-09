import { Link } from "react-router-dom";
import { Newspaper, FileText, Users, Mail, ArrowUpRight } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { PageHero } from "@/components/PageHero";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Faq } from "@/components/Faq";
import { CTABand } from "@/components/CTABand";
import { ExploreNext } from "@/components/ExploreNext";
import { resourceCategories } from "@/data/resources";

const icons = [Newspaper, FileText, Users, Mail];

export default function Resources() {
  useSeo(
    "Resources | White Whale Research, Articles & Newsletter",
    "The White Whale research, white papers, collaborations, the Human Intelligence newsletter and media coverage — from Matthew Byrne and Building Mutuality."
  );
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Resources"
        intro="Everything Building Mutuality publishes, organised around the research. Choose a collection to explore its full archive."
      />

      <section className="section-padding bg-cream">
        <div className="container-custom">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {resourceCategories.map((c, i) => {
              const Icon = icons[i % icons.length];
              return (
                <StaggerItem key={c.slug}>
                  <Link
                    to={`/resources/${c.slug}`}
                    className="group flex gap-5 h-full bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
                    data-testid={`resource-category-${c.slug}`}
                  >
                    <div className="w-14 h-14 shrink-0 rounded-xl bg-navy flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                      <Icon className="text-gold group-hover:text-navy transition-colors duration-300" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h3 className="font-sora font-semibold text-lg text-navy leading-snug">{c.title}</h3>
                        <ArrowUpRight className="text-gold shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={20} />
                      </div>
                      <p className="text-slate-custom text-sm leading-relaxed mb-3">{c.desc}</p>
                      <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                        {c.items.length} {c.items.length === 1 ? "entry" : "entries"}
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <Faq
        dark
        title={<>Resource <span className="text-gold">questions</span></>}
        items={[
          { q: "How often does the Human Intelligence newsletter publish?", a: "Roughly fortnightly, tracking the same ideas as The 5th Revolution research." },
          { q: "Where can I read the White Whale research in full?", a: "Open the White Whale & 5th Revolution Research collection above — every instalment is listed there." },
        ]}
      />
      <CTABand />
      <ExploreNext
        links={[
          { label: "The 5th Revolution", href: "/fifth-revolution" },
          { label: "Books", href: "/book" },
        ]}
      />
    </>
  );
}
