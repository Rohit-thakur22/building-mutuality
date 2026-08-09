import { useSeo } from "@/hooks/useSeo";
import { Newspaper, FileText, Users, Mail, LibraryBig, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Faq } from "@/components/Faq";
import { ExploreNext } from "@/components/ExploreNext";
import { CTABand } from "@/components/CTABand";

const categories = [
  { icon: Newspaper, title: "The White Whale & 5th Revolution Research", desc: "The five-part research series, now the anchor category.", anchor: "#research" },
  { icon: FileText, title: "White Papers & Insights", desc: "Building HI Capability, How AI Amplifies Your Culture, Why AI Feels So Scary to Humans, and the framework white paper.", anchor: "#papers" },
  { icon: Users, title: "Collaborations", desc: "Mattering, Problem Finders First, the organisational-truth paper, The Love Handles of the Organisation.", anchor: "#collaborations" },
  { icon: Mail, title: "Newsletters and News", desc: "The Human Intelligence newsletter archive and media coverage.", anchor: "#news" },
  { icon: LibraryBig, title: "Index", desc: "Full archive, everything in one place.", anchor: "#index" },
];

const research = [
  { title: "The White Whale: What Moby-Dick Teaches Us About the AI Transition", date: "23 May 2026" },
  { title: "The Why Needs a How: Satya Nadella, the White Whale, and the Architecture of Human Intelligence", date: "17 June 2026" },
  { title: "Navigating the White Whale: Leading the AI Transition Without Leaving People Behind", date: "17 June 2026", note: "Practitioner guide" },
  { title: "The Missing Variable in Every AI Transition", date: "5 July 2026", note: "On \u201Cmattering\u201D" },
  { title: "The White Whale: When AI Moves Faster Than Human Intelligence", date: "11 July 2026", note: "The N=1,000+ research report" },
];

const papers = [
  { title: "Building HI Capability", date: "27 March 2026" },
  { title: "How AI Amplifies Your Culture", date: "6 March 2026" },
  { title: "Why AI Feels So Scary to Humans", date: "17 February 2026" },
  { title: "The Fifth Revolution: Empowering Human Intelligence in the AI Era", date: "6 November 2025" },
];

const collaborations = [
  "Mattering",
  "Problem Finders First",
  "The organisational-truth paper",
  "The Love Handles of the Organisation",
];

const news = [
  { title: "Human Intelligence — EP.9: The Standard Nobody Was Keeping", date: "25 July 2026" },
  { title: "Matthew Byrne and Rory Sutherland Live on LinkedIn: The Trust Gap", date: "29 May 2026" },
  { title: "Matthew Byrne: CXO 2.0 Dubai Guest Speaker & Interview", date: "Nov 2025 / Feb 2026" },
  { title: "Mutuality: The Future of Trust — Available Now", date: "15 November 2025", note: "Launch announcement" },
];

function ItemRow({ title, date, note }: { title: string; date: string; note?: string }) {
  return (
    <StaggerItem>
      <a href="#" className="group flex items-start justify-between gap-4 bg-white rounded-2xl px-6 py-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
        <div>
          <p className="font-sora font-semibold text-navy leading-snug group-hover:text-gold transition-colors">{title}</p>
          <p className="text-slate-custom text-xs mt-1.5">
            {date}{note ? ` · ${note}` : ""}
          </p>
        </div>
        <ArrowUpRight className="text-gold shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={20} />
      </a>
    </StaggerItem>
  );
}

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
        intro="Everything Building Mutuality publishes lives here, now organised around the research: The White Whale & 5th Revolution Research, White Papers & Insights, Collaborations, Newsletters and News, and a full Index."
      />

      {/* Category cards */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c) => (
              <StaggerItem key={c.title}>
                <a href={c.anchor} className="group flex flex-col h-full bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5">
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
                    <c.icon className="text-gold group-hover:text-navy transition-colors duration-300" size={22} />
                  </div>
                  <h3 className="font-sora font-semibold text-lg text-navy mb-2 leading-snug">{c.title}</h3>
                  <p className="text-slate-custom text-sm leading-relaxed">{c.desc}</p>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="section-padding bg-white scroll-mt-24">
        <div className="container-custom max-w-4xl">
          <SectionHeading eyebrow="Category 01" title={<>The White Whale & <span className="text-gold">5th Revolution Research</span></>} className="mb-10" />
          <StaggerContainer className="space-y-3">
            {research.map((r) => <ItemRow key={r.title} {...r} />)}
          </StaggerContainer>
        </div>
      </section>

      {/* Papers */}
      <section id="papers" className="section-padding bg-cream scroll-mt-24">
        <div className="container-custom max-w-4xl">
          <SectionHeading eyebrow="Category 02" title={<>White Papers & <span className="text-gold">Insights</span></>} className="mb-10" />
          <StaggerContainer className="space-y-3">
            {papers.map((r) => <ItemRow key={r.title} {...r} />)}
          </StaggerContainer>
        </div>
      </section>

      {/* Collaborations */}
      <section id="collaborations" className="section-padding bg-white scroll-mt-24">
        <div className="container-custom max-w-4xl">
          <SectionHeading eyebrow="Category 03" title={<>Collab<span className="text-gold">orations</span></>} intro="Pending publication confirmation." className="mb-10" />
          <StaggerContainer className="flex flex-wrap gap-3">
            {collaborations.map((c) => (
              <StaggerItem key={c}>
                <span className="inline-flex items-center gap-2 bg-cream border border-navy/10 rounded-full px-5 py-3 text-navy font-medium text-sm">
                  {c}
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-gold/20 text-gold-dark px-2 py-0.5 rounded-full">Coming Soon</span>
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* News */}
      <section id="news" className="section-padding bg-cream scroll-mt-24">
        <div className="container-custom max-w-4xl">
          <SectionHeading eyebrow="Category 04" title={<>Newsletters and <span className="text-gold">News</span></>} className="mb-10" />
          <StaggerContainer className="space-y-3">
            {news.map((r) => <ItemRow key={r.title} {...r} />)}
          </StaggerContainer>
        </div>
      </section>

      <Faq
        dark
        title={<>Resource <span className="text-gold">questions</span></>}
        items={[
          { q: "How often does the Human Intelligence newsletter publish?", a: "Roughly fortnightly, tracking the same ideas as The 5th Revolution research." },
          { q: "Where can I read the White Whale research in full?", a: "The White Whale & 5th Revolution Research category on this page links to every instalment." },
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
