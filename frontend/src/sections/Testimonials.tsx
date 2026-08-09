import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const testimonials = [
  {
    quote:
      "Matthew turns complexity into momentum. I've seen his work forge relational trust at scale — exactly what cities and institutions need to deliver world-class outcomes. He equips leaders to think boldly and act responsibly, with rare humility and rigour.",
    name: "Adam Mather-Brown",
  },
  {
    quote:
      "Matthew blends evidence, empathy and edge. His Mutuality framework and 'Leadership Is Not Rocket Science' practice lift leaders' confidence and create safer, more adaptive teams that deliver real results. He's a trusted partner in meaningful change.",
    name: "Lesley Mitchell",
  },
  {
    quote:
      "A golden nugget for leaders. After 43 years in the workforce, I know this book fills a real gap — chapter 10's six archetypes of the modern executive manager give you a way to reflect on your own leadership and work with each type in your team.",
    name: "Lawrence Kirk",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-white" data-testid="testimonials">
      <div className="container-custom">
        <SectionHeading
          eyebrow="What Leaders Say"
          title={<>Trusted by the people who <span className="text-gold">lead change</span></>}
          align="center"
          className="mb-12"
        />

        <StaggerContainer className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <TestimonialCard t={t} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile swipe carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-4 [scrollbar-width:none]">
          {testimonials.map((t) => (
            <div key={t.name} className="snap-center shrink-0 w-[85%]">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: { quote: string; name: string } }) {
  return (
    <div className="h-full bg-cream rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
      <Quote className="text-gold mb-4" size={34} fill="currentColor" />
      <p className="text-navy/85 italic leading-relaxed text-base flex-1">
        “{t.quote}”
      </p>
      <p className="mt-6 font-sora font-semibold text-gold">— {t.name}</p>
    </div>
  );
}
