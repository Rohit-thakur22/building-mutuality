export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "engine-and-driver",
    title: "AI Is the Engine. Human Intelligence Is the Driver.",
    excerpt:
      "Every organisation is being handed a more powerful engine. Almost none are developing the driver. Here's why that gap decides everything.",
    date: "2 August 2026",
    category: "Human Intelligence",
    readTime: "5 min read",
    image: "/images/hi-ai-emotional.jpg",
    body: [
      "The arrival of powerful AI has handed every organisation a faster engine. The temptation is to press the accelerator and see how far it goes. But an engine without a capable driver doesn't win the race — it crashes sooner.",
      "Across the White Whale research, the same shape appeared in every failure: the technology accelerating while human capability lagged behind. The organisations that invested in their people early didn't just avoid the collapse — they arrived ahead.",
      "Human intelligence is the main story. AI is the context in which that story must now be renewed. The work of leadership in this era is to develop the driver as deliberately as you deploy the engine.",
    ],
  },
  {
    slug: "trust-is-infrastructure",
    title: "Trust Is the Real Infrastructure of the AI Era",
    excerpt:
      "You can install a model in an afternoon. Trust between people who are different from one another takes far longer — and it decides whether adoption sticks.",
    date: "21 July 2026",
    category: "Mutuality",
    readTime: "4 min read",
    image: "/images/process-emotional.jpg",
    body: [
      "Technology is installed. Trust is built. That distinction is easy to say and hard to live, because the second one has no shortcut and no vendor.",
      "The Mutuality Framework names six trust archetypes and six obstacles — replacing the vague instruction to \u201Cbuild trust\u201D with something you can see, diagnose and work on. Measured through the Mutuality Trust Index, it turns culture from a feeling into an evidence base.",
      "When AI amplifies whatever culture it lands in, thin trust doesn't stay hidden. It scales. The leaders who fix the foundation first are the ones whose transitions hold.",
    ],
  },
  {
    slug: "why-ai-feels-scary",
    title: "Why AI Feels So Scary — and What Leaders Can Do About It",
    excerpt:
      "AI has arrived in the territory we use to define human significance: language, judgement, meaning. Naming the fear is the first step to leading through it.",
    date: "9 July 2026",
    category: "Culture",
    readTime: "6 min read",
    image: "/images/services-emotional.jpg",
    body: [
      "The anxiety around AI isn't irrational. It has arrived in exactly the territory we have long used to define human worth — language, judgement, synthesis, the making of meaning.",
      "Leaders who dismiss that fear lose people. Leaders who name it, and then show a credible path where human capability is developed rather than displaced, keep them.",
      "Psychological safety isn't a soft add-on here. It's the condition under which people will question AI outputs, report harms and keep learning — the behaviours a responsible transition depends on.",
    ],
  },
  {
    slug: "white-whale-in-brief",
    title: "The White Whale, in Brief",
    excerpt:
      "1,300+ source-audited cases. A 0.86 correlation. A +0.73 advantage for the organisations that built capability first. The research behind The 5th Revolution.",
    date: "28 June 2026",
    category: "Research",
    readTime: "7 min read",
    image: "/images/chart-gap.jpg",
    body: [
      "The White Whale is the longitudinal AI implementation segmentation research project behind The 5th Revolution — 1,300+ source-audited AI transition cases tracked across a five-phase arc.",
      "The gap between accelerating AI and lagging human capability predicts the severity of what follows with a correlation of 0.86. Organisations that built human capability by design arrived with a measured +0.73 advantage — and a 1% public-backlash rate against 35% for everyone else.",
      "It is not a slogan; it is measured. And the evidence bank grows every month.",
    ],
  },
  {
    slug: "redeployment-before-redundancy",
    title: "Redeployment Before Redundancy",
    excerpt:
      "The dignified-transition test asks one question: was redundancy the last responsible stage of a transition, or the first financial lever pulled?",
    date: "15 June 2026",
    category: "HI Accreditation",
    readTime: "5 min read",
    image: "/images/article-leadership.jpg",
    body: [
      "When automation becomes available, the fastest path to a headline saving is to cut roles. The research suggests it is also the fastest path to social-licence loss — 55% of leaders who made AI-related redundancies later believed they made the wrong decision.",
      "HI Accreditation rewards organisations that decompose and redesign work before pursuing redundancy, and that relocate human value into higher-judgement work.",
      "It's a guarantee of no blind displacement — not a promise that no role will ever change.",
    ],
  },
  {
    slug: "mattering-at-work",
    title: "Mattering: The Missing Variable at Work",
    excerpt:
      "The felt sense of being valued and adding value is not a morale metric. It may be the variable that predicts whether an AI transition is survived or resented.",
    date: "1 June 2026",
    category: "Culture",
    readTime: "4 min read",
    image: "/images/article-hi-ai.jpg",
    body: [
      "Mattering is the felt sense of being valued and of adding value. It sounds soft until you watch what happens when it disappears from a team mid-transition.",
      "As AI absorbs tasks, the question underneath every desk becomes sharper: do I still matter here? Leaders who answer that clearly — with real pathways, not reassurance — keep discretionary effort alive.",
      "It is one of a widening set of research threads developed with partners across professional services and education.",
    ],
  },
];

export const blogCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
