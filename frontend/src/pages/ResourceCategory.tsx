import { useParams, Navigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { PageHero } from "@/components/PageHero";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { CTABand } from "@/components/CTABand";
import { ExploreNext } from "@/components/ExploreNext";
import { getCategory, resourceCategories } from "@/data/resources";

export default function ResourceCategory() {
  const { slug } = useParams();
  const category = getCategory(slug || "");

  useSeo(
    category ? `${category.title} | Resources | Building Mutuality` : "Resources",
    category?.intro
  );

  if (!category) return <Navigate to="/resources" replace />;

  const others = resourceCategories.filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: category.title }]}
        eyebrow={`Resources · Category ${category.number}`}
        title={category.title}
        intro={category.intro}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <StaggerContainer className="space-y-3">
            {category.items.map((item) => (
              <StaggerItem key={item.title}>
                <a
                  href="#"
                  className="group flex items-start justify-between gap-4 bg-cream rounded-2xl px-6 py-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                  data-testid="resource-item"
                >
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-sora font-semibold text-navy leading-snug group-hover:text-gold transition-colors">
                        {item.title}
                      </p>
                      {item.comingSoon && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider bg-gold/20 text-gold-dark px-2 py-0.5 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    {(item.date || item.note) && (
                      <p className="text-slate-custom text-xs mt-1.5">
                        {item.date}
                        {item.date && item.note ? " · " : ""}
                        {item.note}
                      </p>
                    )}
                  </div>
                  <ArrowUpRight className="text-gold shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={20} />
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABand />
      <ExploreNext
        links={[
          ...others.map((c) => ({ label: c.title, href: `/resources/${c.slug}` })),
          { label: "All Resources", href: "/resources" },
        ]}
      />
    </>
  );
}
