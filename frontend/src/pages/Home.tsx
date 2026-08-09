import { useSeo } from "@/hooks/useSeo";
import { HomeHero } from "@/sections/HomeHero";
import { ProofStrip } from "@/sections/ProofStrip";
import { Testimonials } from "@/sections/Testimonials";
import { FifthRevIntro } from "@/sections/FifthRevIntro";
import { TwoFrameworks } from "@/sections/TwoFrameworks";
import { WhoWeHelpPreview } from "@/sections/WhoWeHelpPreview";
import { ServicesPreview } from "@/sections/ServicesPreview";
import { Faq } from "@/components/Faq";
import { FinalCTA } from "@/components/FinalCTA";
import { ExploreNext } from "@/components/ExploreNext";

const faqs = [
  {
    q: "What does Building Mutuality actually do?",
    a: "Helps executives, boards, public-sector leaders and educators lead AI adoption without losing the trust, culture and capability that make organisations work — through leadership programmes, executive coaching, culture audits and HI Accreditation, all built on The 5th Revolution research.",
  },
  {
    q: "What is The 5th Revolution?",
    a: "Matthew Byrne's research programme and forthcoming book arguing that AI should enable humanity, not replace it. It holds two practical frameworks — the Mutuality Framework for relational trust, and the Human Intelligence Framework for renewing human capability in the AI era.",
  },
  {
    q: "What is the White Whale?",
    a: "The longitudinal AI implementation segmentation research project behind The 5th Revolution — 1,300+ source-audited AI transition cases tracked across five phases, establishing the evidence base for best-practice AI integration.",
  },
  {
    q: "Who is Building Mutuality for?",
    a: "Executives bringing AI into an organisation, public-sector and government leaders, boards setting AI strategy, and educators preparing people for an AI-shaped future.",
  },
  {
    q: "What organisations has Matthew Byrne worked with?",
    a: "Perenti, the Australian Taxation Office, Calvary, McDonald's and DFAT, alongside his role as Program Director of the AGSM General Manager Program.",
  },
  {
    q: "Where should I start?",
    a: "Read The 5th Revolution page for the thinking, or start a conversation directly if you already know you want help.",
  },
];

export default function Home() {
  useSeo(
    "Building Mutuality | Home of The 5th Revolution",
    "Home of The 5th Revolution — the research-backed case that AI should enable humanity, not replace it, and the frameworks that make it practical."
  );
  return (
    <>
      <HomeHero />
      <ProofStrip />
      <Testimonials />
      <FifthRevIntro />
      <TwoFrameworks />
      <WhoWeHelpPreview />
      <ServicesPreview />
      <Faq items={faqs} title={<>Questions, <span className="text-gold">answered</span></>} />
      <FinalCTA
        eyebrow="Ready to Align Your AI Strategy?"
        title={<>The question isn't whether AI will reshape your organisation</>}
        body="It's whether your Human Intelligence will be prepared to shape AI in return."
      />
      <ExploreNext
        links={[
          { label: "The 5th Revolution", href: "/fifth-revolution" },
          { label: "Who We Help", href: "/who-we-help" },
          { label: "Services", href: "/services" },
          { label: "About Matthew Byrne", href: "/about" },
        ]}
      />
    </>
  );
}
