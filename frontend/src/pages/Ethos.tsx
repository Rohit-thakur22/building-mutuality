import { useSeo } from "@/hooks/useSeo";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Faq } from "@/components/Faq";
import { ExploreNext } from "@/components/ExploreNext";

const values = [
  { title: "Respect", body: "We begin from the belief that every person brings intelligence, experience and worth to the table." },
  { title: "Inclusion", body: "The future of AI cannot be shaped by a technical few. Inclusion means making sure more people can understand enough to take part." },
  { title: "Connection", body: "Trust is built between people, not installed. Connection is the deliberate work of building relationships strong enough to hold honesty and change." },
  { title: "Equality", body: "Working smarter should never mean leaving people behind." },
];

export default function Ethos() {
  useSeo(
    "Our Ethos | Respect, Inclusion & Trust in AI Leadership",
    "The four values that shape every engagement at Building Mutuality — respect, inclusion, connection and equality — and our Acknowledgement of Country."
  );
  return (
    <>
      <PageHero
        eyebrow="Our Ethos"
        title="Our Ethos"
        intro="How we work matters as much as what we deliver. Four values shape everything Building Mutuality does."
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full bg-cream rounded-2xl p-8 md:p-10 hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="font-sora font-semibold text-2xl md:text-3xl text-navy mb-4">
                    {v.title}
                  </h3>
                  <p className="text-slate-custom leading-relaxed">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Acknowledgement of Country */}
      <section className="bg-navy" data-testid="acknowledgement">
        <div className="container-custom py-20 lg:py-28 max-w-4xl text-center">
          <ScrollReveal>
            <span className="eyebrow mb-6 block">Acknowledgement of Country</span>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed font-sora">
              Building Mutuality acknowledges the Gadigal people of the Eora Nation as the Traditional
              Custodians of Pirrama — the land on which we work — and their continuing connection to
              land, waters and community. We pay our respect to them and their cultures, and to Elders
              past and present.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Faq
        title={<>Our <span className="text-gold">ethos</span></>}
        items={[
          { q: "What values guide Building Mutuality's work?", a: "Four: respect, inclusion, connection and equality." },
          { q: "Who are the Traditional Custodians of the land Building Mutuality works on?", a: "The Gadigal people of the Eora Nation, Traditional Custodians of Pirrama." },
        ]}
      />
      <ExploreNext
        links={[
          { label: "About Matthew Byrne", href: "/about" },
          { label: "The 5th Revolution", href: "/fifth-revolution" },
        ]}
      />
    </>
  );
}
