import { useSeo } from "@/hooks/useSeo";
import { Briefcase, Landmark, Users, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Faq } from "@/components/Faq";
import { ExploreNext } from "@/components/ExploreNext";

const segments = [
  {
    icon: Briefcase,
    title: "Executives Bringing AI Into an Organisation",
    body: "You're responsible for making AI work across a business, and you need it to strengthen your people, not sideline them. We help you build the trust and capability that let a whole organisation adopt AI well, on the path the White Whale research shows arrives ahead.",
  },
  {
    icon: Landmark,
    title: "Public-Sector and Government Leaders",
    body: "You're leading change inside a public institution, where scrutiny, duty of care and public trust raise the stakes. We bring experience from the ATO, DFAT and NSW Government to help you introduce AI carefully, humanly and defensibly.",
  },
  {
    icon: Users,
    title: "Boards Setting AI Strategy",
    body: "You're setting direction from the top, and you want an AI strategy that is both commercially sound and genuinely human. We help boards weigh the real risks, priced through research rather than opinion, and hold technology inside a wider human purpose.",
  },
  {
    icon: GraduationCap,
    title: "Educators and Institutions",
    body: "You're preparing people for a future shaped by AI, and you want to build human capability, not just technical skill. Our research spans youth and workforce readiness as well as the executive suite — helping you renew the judgement, trust and social intelligence that matter more in this era, not less.",
  },
];

const faqs = [
  {
    q: "I don't fit neatly into one of these four groups — should I still get in touch?",
    a: "Yes. These cover the most common starting points, not a strict list. If you're navigating AI adoption and want it to strengthen your people, that's the right fit.",
  },
  {
    q: "Do you work with organisations that haven't started using AI yet?",
    a: "That's often the ideal time to start — building trust, culture and capability foundations before a rollout is far more effective than repairing them afterwards.",
  },
  {
    q: "Does Building Mutuality work with education institutions on youth readiness, not just executive teams?",
    a: "Yes — the research programme includes a dedicated youth and workforce readiness partnership spanning Sydney and Singapore, alongside the executive-focused work.",
  },
];

export default function WhoWeHelp() {
  useSeo(
    "Who We Help | AI Leadership for Executives & Boards",
    "Executive, board, public-sector leader or educator: Building Mutuality helps you lead AI adoption with trust, backed by White Whale research."
  );
  return (
    <>
      <PageHero
        eyebrow="Who We Help"
        title="Who We Help"
        intro="You don't need to have it all worked out to begin. Wherever you're standing right now, there's a way in."
      />

      <section className="section-padding bg-white">
        <div className="container-custom space-y-6">
          {segments.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.05}>
              <div
                className={`group grid md:grid-cols-12 gap-6 md:gap-8 items-start rounded-2xl p-7 md:p-10 border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                  i % 2 === 0 ? "bg-cream border-navy/10" : "bg-navy border-navy text-white"
                }`}
                data-testid={`segment-${i + 1}`}
              >
                <div className="md:col-span-3 flex items-center gap-5">
                  <span
                    className={`font-sora font-bold text-5xl md:text-6xl ${
                      i % 2 === 0 ? "text-gold/40" : "text-gold"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      i % 2 === 0 ? "bg-navy" : "bg-white/10"
                    }`}
                  >
                    <s.icon className="text-gold" size={24} />
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3
                    className={`font-sora font-semibold text-xl md:text-2xl mb-3 ${
                      i % 2 === 0 ? "text-navy" : "text-white"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className={`leading-relaxed ${i % 2 === 0 ? "text-slate-custom" : "text-white/75"}`}>
                    {s.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Faq items={faqs} dark title={<>Common <span className="text-gold">questions</span></>} />
      <ExploreNext
        links={[
          { label: "Services", href: "/services" },
          { label: "The 5th Revolution", href: "/fifth-revolution" },
          { label: "Culture Audits", href: "/services/culture-audits" },
        ]}
      />
    </>
  );
}
