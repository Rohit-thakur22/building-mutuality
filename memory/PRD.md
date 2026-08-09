# Building Mutuality — Product Requirements Doc

## Original Problem Statement
Design & build the full "Building Mutuality" marketing site (Matthew Byrne's "5th Revolution" work) from an approved brief: rebuilt homepage + all inner pages, matching the reference build pattern (React + TypeScript + Tailwind + shadcn/ui + Framer Motion, section components, react-router). Design & content pass — no backend, static form UI. Copy and colour tokens are locked/approved. Speaking page = placeholder shell only.

## Architecture
- Frontend-only (no backend used). CRA + craco, TypeScript, `@/` alias.
- Design system in `tailwind.config.js` + `src/index.css`: navy/gold/cream palette, Sora + Inter, btn-primary/secondary/ghost, section-padding, container-custom, pillar colours.
- Motion: Framer Motion (ScrollReveal / StaggerContainer / StaggerItem, single-element fade for hero — per-element mask animations were unreliable with the visual-edits babel plugin), Lenis smooth scroll (`?nolenis=1` bypass for tooling).
- Shared components: Navigation (hover dropdowns + mobile submenus), Footer, PageHero, SectionHeading, Faq (tone: white/cream/navy), StatCounter, PlaceholderImage (dashed, honours "never fake a real person"), Marquee, FinalCTA, CTABand, ExploreNext, Interviews, StickyConnect, SmoothScroll, Layout.

## User Personas
Executives adopting AI · public-sector/government leaders · boards setting AI strategy · educators/institutions.

## Pages (all implemented)
Home, Who We Help, The 5th Revolution (numbered manifesto), Services hub, Programmes, Executive Coaching, Culture Audits, HI Accreditation (coming-soon badge, 7 domains, stat-heavy, dignified-transition pull-quote), About (enriched: bio, stats, credentials grid, interviews, Daniane), Books, Ethos, Resources hub + 4 dedicated category pages (`/resources/:slug`), Speaking (placeholder shell + real CXO/Times-Square video), Contact (static form + success state), Privacy Policy.

## Implemented (2026-06)
- Full 15+ page site, verbatim approved copy, reference design system reused.
- Award-level homepage: kinetic hero, proof strip (lead + 3 stat blocks + separated marquee), testimonials, "main story" w/ regenerated contained gap chart, two balanced framework cards, who-we-help & services previews, interviews, FAQ, final CTA, explore-next.
- Layout correction pass: consistent vertical rhythm, constrained line-length, alternating bg seams, contained images, balanced cards, CTA band + Explore Next on every content page.
- Feature pass: nav hover dropdowns (Services + Resources sub-pages) + mobile expandable submenus; 4 dedicated resource category pages; sticky "Start a Conversation" button (all pages except /contact); interview embeds (LinkedIn iframe `activity:7490663256378806272`, YouTube `W5EjWImS9Vc`, real times-square.mp4) on Home + About; LinkedIn-sourced credentials/recognition grid on About.
- Verified by testing agent iterations 1, 2, 3 — frontend 100%.

## Backlog / Remaining (P1/P2)
- P1: Wire real form submission (backend) when ready; real headshots/book cover/client logos to replace dashed placeholders.
- P1: Approved Speaking-page copy (currently placeholder by design).
- P2: Instagram embed once a specific post is provided; in-page anchor nav for the longest pages; mobile sublink data-testids.
- P2: Replace remaining decorative reference images with final brand assets.

## Notes
- MOCKED/NON-FUNCTIONAL: contact form (no backend), purchase/Notify buttons, resource item links (`#`) — intentional for this design pass.
- UK spelling intentional. Colour tokens & approved copy are locked.
