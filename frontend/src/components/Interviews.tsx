import { Play } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

interface VideoItem {
  type: "youtube" | "linkedin" | "file";
  src: string;
  poster?: string;
  label: string;
  source: string;
}

const videos: VideoItem[] = [
  {
    type: "file",
    src: "/videos/hi-leadership-trust.mp4",
    label: "Human Intelligence, leadership & trust",
    source: "LinkedIn",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/W5EjWImS9Vc",
    label: "CXO 2.0 Dubai — Guest Speaker Interview",
    source: "YouTube",
  },
  {
    type: "file",
    src: "/videos/times-square.mp4",
    poster: "/images/times-square-thumb.jpg",
    label: "Featured on a Times Square billboard, New York",
    source: "CXO 2.0 Visionaries",
  },
];

export function Interviews() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden" data-testid="interviews">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="In His Own Words"
          title={<>Interviews &amp; <span className="text-gold">talks</span></>}
          intro="Matthew on human intelligence, trust and leading the AI transition — from LinkedIn, YouTube and the global stage."
          dark
          className="mb-12"
        />
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <StaggerItem key={i}>
              <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-gold/40 transition-colors duration-300 h-full flex flex-col">
                <div className="relative w-full h-[300px] md:h-[320px] bg-navy-dark">
                  {v.type === "file" ? (
                    <video
                      controls
                      poster={v.poster}
                      className="w-full h-full object-cover"
                      data-testid={`interview-video-${i}`}
                    >
                      <source src={v.src} type="video/mp4" />
                    </video>
                  ) : (
                    <iframe
                      src={v.src}
                      title={v.label}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      data-testid={`interview-video-${i}`}
                    />
                  )}
                </div>
                <div className="p-5 flex items-start gap-3 flex-1">
                  <Play size={16} className="text-gold mt-1 shrink-0" fill="currentColor" />
                  <div>
                    <p className="text-white font-medium text-sm leading-snug">{v.label}</p>
                    <p className="text-gold/70 text-xs mt-1 uppercase tracking-wider">{v.source}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
