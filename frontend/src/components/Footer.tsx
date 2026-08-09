import { Link } from "react-router-dom";
import { Linkedin, Youtube, Instagram, Mail, ArrowRight } from "lucide-react";

const siteLinks = [
  { name: "Home", href: "/" },
  { name: "Who We Help", href: "/who-we-help" },
  { name: "The 5th Revolution", href: "/fifth-revolution" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Ethos", href: "/ethos" },
];

const serviceLinks = [
  { name: "Programmes", href: "/services/programmes" },
  { name: "Executive Coaching", href: "/services/executive-coaching" },
  { name: "Culture Audits", href: "/services/culture-audits" },
  { name: "HI Accreditation", href: "/services/hi-accreditation" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/matthewkbyrne/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@MatthewByrne.Mutuality", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/building_mutuality/", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white" data-testid="site-footer">
      <div className="container-custom py-14 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.webp" alt="" className="w-8 h-8 object-contain invert brightness-0" />
              <h3 className="font-sora font-bold text-base tracking-tight">BUILDING MUTUALITY</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Home of The 5th Revolution — the research-backed case that AI should enable humanity, not replace it.
            </p>
          </div>

          <div>
            <h4 className="font-sora font-semibold mb-4 text-sm text-gold/90 uppercase tracking-wider">Site</h4>
            <ul className="space-y-2.5">
              {siteLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/60 hover:text-gold transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sora font-semibold mb-4 text-sm text-gold/90 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/60 hover:text-gold transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sora font-semibold mb-4 text-sm text-gold/90 uppercase tracking-wider">Connect</h4>
            <a
              href="mailto:matthew@mutuality.com.au"
              className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm mb-4"
            >
              <Mail size={15} /> matthew@mutuality.com.au
            </a>
            <div className="flex gap-2.5 mb-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300 hover:-translate-y-0.5"
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
              Start a Conversation
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Building Mutuality. All rights reserved.
          </p>
          <Link to="/privacy-policy" className="text-white/40 hover:text-gold transition-colors text-xs">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
