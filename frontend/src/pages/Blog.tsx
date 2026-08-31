import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { CTABand } from "@/components/CTABand";
import { ExploreNext } from "@/components/ExploreNext";
import { blogPosts, blogCategories } from "@/data/blog";

export default function Blog() {
  const [active, setActive] = useState("All");
  useSeo(
    "Blog | Building Mutuality",
    "Ideas on human intelligence, trust and leading the AI transition — from Matthew Byrne and Building Mutuality."
  );

  const filtered = active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);
  const [featured, ...rest] = filtered;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Ideas for leading the AI transition"
        intro="Short, practical thinking on human intelligence, trust and the work of leadership in the age of AI."
      />

      {/* Category filter */}
      <section className="bg-white border-b border-navy/10 sticky top-20 z-30">
        <div className="container-custom py-4 flex flex-wrap gap-2">
          {blogCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === c
                  ? "bg-navy text-white"
                  : "bg-cream text-navy hover:bg-navy/10"
              }`}
              data-testid={`blog-filter-${c}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <ScrollReveal>
              <Link
                to={`/blog/${featured.slug}`}
                className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                data-testid="blog-featured"
              >
                <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <div className="p-8 lg:pr-12">
                  <div className="flex items-center gap-3 text-xs text-slate-custom mb-4">
                    <span className="text-gold font-semibold uppercase tracking-wider">{featured.category}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                  </div>
                  <h2 className="font-sora font-bold text-2xl md:text-3xl text-navy leading-tight mb-4 group-hover:text-gold transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-slate-custom leading-relaxed mb-6 max-w-[60ch]">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-gold font-semibold group-hover:gap-2 transition-all">
                    Read article <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="pb-16 md:pb-24 bg-cream">
        <div className="container-custom">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
                  data-testid={`blog-card-${post.slug}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-slate-custom mb-3">
                      <span className="text-gold font-semibold uppercase tracking-wider">{post.category}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-sora font-semibold text-lg text-navy leading-snug mb-2 group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-custom text-sm leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-navy/10">
                      <span className="text-xs text-slate-custom">{post.date}</span>
                      <ArrowUpRight className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABand />
      <ExploreNext
        links={[
          { label: "The 5th Revolution", href: "/fifth-revolution" },
          { label: "Resources", href: "/resources" },
          { label: "Books", href: "/book" },
        ]}
      />
    </>
  );
}
