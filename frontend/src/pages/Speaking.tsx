import { useSeo } from "@/hooks/useSeo";
import { Link } from "react-router-dom";
import { Play, Mic, ArrowRight, Construction } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ExploreNext } from "@/components/ExploreNext";

export default function Speaking() {
  useSeo(
    "Speaking & Media | Building Mutuality",
    "Speaking and media with Matthew Byrne — content for this page is being finalised."
  );
  return (
    <>
      <PageHero
        eyebrow="Speaking & Media"
        title="Speaking & Media"
        intro="Content for this page is being finalised — check back soon."
      />

      {/* Placeholder banner */}
      <div className="bg-gold/15 border-y border-gold/30">
        <div className="container-custom py-4 flex items-center justify-center gap-3 text-gold-dark text-sm font-semibold">
          <Construction size={18} />
          Placeholder page — copy still to be drafted. Layout is ready to receive content.
        </div>
      </div>

      {/* Video showcase — real CXO 2.0 Dubai / Times Square asset */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <ScrollReveal className="max-w-2xl mb-10">
            <span className="eyebrow mb-4 block">Video Showcase</span>
            <h2 className="text-2xl md:text-3xl text-white">
              CXO 2.0 — Dubai & <span className="text-gold">Times Square</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover max-w-4xl">
              <video
                controls
                poster="/images/times-square-thumb.jpg"
                className="w-full aspect-video bg-navy-dark"
                data-testid="speaking-video"
              >
                <source src="/videos/times-square.mp4" type="video/mp4" />
              </video>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reserved slots */}
      <section className="section-padding bg-cream">
        <div className="container-custom space-y-12">
          <div>
            <span className="eyebrow mb-6 block">Speaking Engagements — coming soon</span>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1, 2, 3].map((i) => (
                <PlaceholderImage key={i} label="Engagement details — pending" className="w-full h-44" />
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow mb-6 block">Media Mentions — coming soon</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {[1, 2, 3, 4].map((i) => (
                <PlaceholderImage key={i} label="Media logo — pending" className="w-full h-28" />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="btn-secondary" data-testid="speaking-watch">
              <Play size={18} /> Watch
            </a>
            <Link to="/contact" className="btn-primary" data-testid="speaking-book">
              <Mic size={18} /> Book Matthew to Speak
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <ExploreNext
        links={[
          { label: "About Matthew Byrne", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
      />
    </>
  );
}
