import { useSeo } from "@/hooks/useSeo";
import { Link } from "react-router-dom";
import { ExternalLink, Bell, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Faq } from "@/components/Faq";
import { ExploreNext } from "@/components/ExploreNext";

const purchaseLinks = [
  { label: "Amazon", href: "#" },
  { label: "Booktopia", href: "#" },
  { label: "Walmart", href: "#" },
  { label: "Waterstones", href: "#" },
];

const bookFaqs = [
  { q: "What is Mutuality: The Future of Trust about?", a: "It names six archetypes that block relational trust in organisations and sets out practical strategies to build mutuality deliberately." },
  { q: "When does The 5th Revolution launch?", a: "3 November 2026, with a foreword by Rory Sutherland." },
  { q: "Where can I buy Mutuality: The Future of Trust?", a: "Amazon, Booktopia, Walmart, Waterstones, or the dedicated site mutualitythefutureoftrust.com." },
];

export default function Books() {
  useSeo(
    "Books by Matthew Byrne | Mutuality & The 5th Revolution",
    "Explore Matthew Byrne's books on trust and AI leadership — Mutuality: The Future of Trust, available now, and The 5th Revolution, launching November."
  );
  return (
    <>
      <PageHero
        eyebrow="Books"
        title="Books by Matthew Byrne"
        intro="Two books on trust and human intelligence in the age of AI — one available now, one launching this November."
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal direction="right" className="lg:col-span-4">
            <PlaceholderImage label="Mutuality: The Future of Trust — cover" className="w-full aspect-[3/4] shadow-card-hover" />
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-8">
            <span className="inline-block bg-pillar-capability/15 text-pillar-capability text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              Available Now
            </span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-navy mb-2 leading-tight">
              Mutuality: The Future of Trust
            </h2>
            <p className="text-gold font-medium mb-5">The Executive's Handbook · with Denis Jenkins</p>
            <p className="text-slate-custom leading-relaxed mb-3">
              Held the #1 spot for new releases on Amazon for three consecutive months.
            </p>
            <p className="text-slate-custom leading-relaxed mb-8">
              Drawing on two decades of research, the book names six archetypes that block relational
              trust in organisations and sets out practical strategies to build mutuality instead.
            </p>
            <div className="flex flex-wrap gap-3">
              {purchaseLinks.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  className="inline-flex items-center gap-2 bg-cream hover:bg-navy hover:text-white text-navy font-medium text-sm px-4 py-2.5 rounded-lg transition-colors duration-300"
                >
                  {p.label} <ExternalLink size={14} />
                </a>
              ))}
              <a
                href="https://mutualitythefutureoftrust.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-navy font-medium text-sm px-4 py-2.5 rounded-lg transition-colors duration-300"
              >
                mutualitythefutureoftrust.com <ExternalLink size={14} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-custom grid lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal direction="right" className="lg:col-span-4">
            <div className="relative">
              <PlaceholderImage label="The 5th Revolution — cover art pending" className="w-full aspect-[3/4] opacity-80" dark />
              <span className="absolute top-4 -right-2 bg-gold text-navy text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded shadow-gold">
                Coming November
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-8">
            <span className="inline-block bg-gold/15 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              Coming November
            </span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-2 leading-tight">
              The 5th Revolution: Human Intelligence in the Age of AI
            </h2>
            <p className="text-gold font-medium mb-5">Foreword by Rory Sutherland · Launching 3 November 2026</p>
            <p className="text-white/75 leading-relaxed mb-3">
              This is a book about artificial intelligence — but it is mainly a book about people. AI is
              arriving in the territory we have long used to define human significance: language,
              judgement, synthesis, the making of meaning.
            </p>
            <p className="text-white/75 leading-relaxed mb-8">
              Its central claim: AI should enable humanity, not replace it. Anchored by the White Whale
              research and its 1,300+ case evidence bank, and written for thoughtful readers rather than
              technical specialists, the book offers a way to make sense of this turning point across
              twelve chapters and a set of practical companion exercises.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn-primary text-sm" data-testid="notify-me">
                <Bell size={16} /> Notify Me
              </button>
              <Link to="/fifth-revolution" className="btn-ghost text-sm">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Faq
        title={<>Book <span className="text-gold">questions</span></>}
        items={bookFaqs}
      />
      <ExploreNext
        links={[
          { label: "The 5th Revolution research", href: "/fifth-revolution" },
          { label: "About Matthew Byrne", href: "/about" },
        ]}
      />
    </>
  );
}
