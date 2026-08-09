interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      data-testid="marquee"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 pr-8">
            <span className="font-sora text-2xl md:text-4xl font-semibold text-white/25 whitespace-nowrap">
              {item}
            </span>
            <span className="text-gold text-2xl md:text-4xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
