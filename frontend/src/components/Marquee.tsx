interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className = "" }: MarqueeProps) {
  // Duplicate the set so the -50% translate loops seamlessly
  const loop = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`} data-testid="marquee">
      {/* edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-navy to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-navy to-transparent" />

      <div className="marquee-track">
        {loop.map((item, i) => (
          <div
            key={i}
            className="group flex items-center justify-center shrink-0 mx-3"
            aria-hidden={i >= items.length}
          >
            <div className="flex items-center justify-center h-16 px-8 rounded-xl border border-white/10 bg-white/[0.04] transition-colors duration-300 group-hover:border-gold/40 group-hover:bg-white/[0.07]">
              <span className="font-sora text-lg md:text-xl font-bold uppercase tracking-[0.15em] text-white/45 whitespace-nowrap transition-colors duration-300 group-hover:text-gold">
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
