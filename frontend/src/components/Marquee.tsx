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
      <div
        className="flex w-max hover:[animation-play-state:paused]"
        style={{ animation: "marquee 55s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12 pr-12">
            <span className="font-sora text-xl md:text-2xl font-semibold text-white/45 whitespace-nowrap tracking-wide">
              {item}
            </span>
            <span className="text-gold/60 text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
