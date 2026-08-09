import { ImageOff } from "lucide-react";

interface PlaceholderImageProps {
  label: string;
  className?: string;
  dark?: boolean;
}

export function PlaceholderImage({
  label,
  className = "",
  dark = false,
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed ${
        dark
          ? "border-white/25 bg-white/5 text-white/50"
          : "border-navy/20 bg-cream text-navy/45"
      } ${className}`}
      data-testid="placeholder-image"
      role="img"
      aria-label={label}
    >
      <ImageOff size={28} strokeWidth={1.5} />
      <span className="text-xs font-medium tracking-wide px-4 text-center">
        {label}
      </span>
    </div>
  );
}
