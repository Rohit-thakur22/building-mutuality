export interface ResourceItem {
  title: string;
  date?: string;
  note?: string;
  comingSoon?: boolean;
}

export interface ResourceCategory {
  slug: string;
  number: string;
  title: string;
  desc: string;
  intro?: string;
  items: ResourceItem[];
}

export const resourceCategories: ResourceCategory[] = [
  {
    slug: "white-whale-research",
    number: "01",
    title: "The White Whale & 5th Revolution Research",
    desc: "The five-part research series, now the anchor category.",
    intro:
      "The longitudinal AI implementation research behind The 5th Revolution — read the series that established best-practice AI integration across 1,300+ source-audited cases.",
    items: [
      { title: "The White Whale: What Moby-Dick Teaches Us About the AI Transition", date: "23 May 2026" },
      { title: "The Why Needs a How: Satya Nadella, the White Whale, and the Architecture of Human Intelligence", date: "17 June 2026" },
      { title: "Navigating the White Whale: Leading the AI Transition Without Leaving People Behind", date: "17 June 2026", note: "Practitioner guide" },
      { title: "The Missing Variable in Every AI Transition", date: "5 July 2026", note: "On \u201Cmattering\u201D" },
      { title: "The White Whale: When AI Moves Faster Than Human Intelligence", date: "11 July 2026", note: "The N=1,000+ research report" },
    ],
  },
  {
    slug: "white-papers",
    number: "02",
    title: "White Papers & Insights",
    desc: "Building HI Capability, How AI Amplifies Your Culture, Why AI Feels So Scary to Humans, and the framework white paper.",
    intro: "Deeper, practical papers translating the research into what leaders can do next.",
    items: [
      { title: "Building HI Capability", date: "27 March 2026" },
      { title: "How AI Amplifies Your Culture", date: "6 March 2026" },
      { title: "Why AI Feels So Scary to Humans", date: "17 February 2026" },
      { title: "The Fifth Revolution: Empowering Human Intelligence in the AI Era", date: "6 November 2025" },
    ],
  },
  {
    slug: "collaborations",
    number: "03",
    title: "Collaborations",
    desc: "Mattering, Problem Finders First, the organisational-truth paper, The Love Handles of the Organisation.",
    intro: "Research developed with partners across professional services and education. Pending publication confirmation.",
    items: [
      { title: "Mattering", comingSoon: true },
      { title: "Problem Finders First", comingSoon: true },
      { title: "The organisational-truth paper", comingSoon: true },
      { title: "The Love Handles of the Organisation", comingSoon: true },
    ],
  },
  {
    slug: "news",
    number: "04",
    title: "Newsletters and News",
    desc: "The Human Intelligence newsletter archive and media coverage.",
    intro: "The Human Intelligence newsletter archive and Building Mutuality in the media.",
    items: [
      { title: "Human Intelligence — EP.9: The Standard Nobody Was Keeping", date: "25 July 2026" },
      { title: "Matthew Byrne and Rory Sutherland Live on LinkedIn: The Trust Gap", date: "29 May 2026" },
      { title: "Matthew Byrne: CXO 2.0 Dubai Guest Speaker & Interview", date: "Nov 2025 / Feb 2026" },
      { title: "Mutuality: The Future of Trust — Available Now", date: "15 November 2025", note: "Launch announcement" },
    ],
  },
];

export function getCategory(slug: string) {
  return resourceCategories.find((c) => c.slug === slug);
}
