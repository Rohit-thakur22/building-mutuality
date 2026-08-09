import { ScrollReveal } from "@/components/ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <ScrollReveal className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && <span className="eyebrow mb-4 block">{eyebrow}</span>}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl leading-[1.1] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            dark ? "text-white/70" : "text-slate-custom"
          }`}
        >
          {intro}
        </p>
      )}
    </ScrollReveal>
  );
}
