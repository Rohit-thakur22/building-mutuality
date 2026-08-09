import { useState } from "react";
import { useSeo } from "@/hooks/useSeo";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Youtube, Instagram, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExploreNext } from "@/components/ExploreNext";
import { EASE } from "@/lib/motion";

const challenges = [
  "Starting AI transformation",
  "Overcoming adoption resistance",
  "Building AI capability",
  "Scaling AI integration",
  "Other",
];

const connect = [
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/matthewkbyrne", href: "https://www.linkedin.com/in/matthewkbyrne/" },
  { icon: Youtube, label: "YouTube", value: "@MatthewByrne.Mutuality", href: "https://www.youtube.com/@MatthewByrne.Mutuality" },
  { icon: Instagram, label: "Instagram", value: "@building_mutuality", href: "https://www.instagram.com/building_mutuality/" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const API = process.env.REACT_APP_BACKEND_URL;
  useSeo(
    "Contact | Start a Conversation with Building Mutuality",
    "Get in touch with Matthew Byrne and Building Mutuality — for leadership programmes, executive coaching, culture audits, HI Accreditation, or speaking enquiries."
  );

  const inputCls =
    "w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy text-base placeholder:text-slate-custom/60 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Start a Conversation"
        intro="Whether you're looking to book a consultation, a speaking engagement, or explore how The 5th Revolution's frameworks can help your organisation, get in touch below."
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-12 gap-12">
          {/* Left — direct details */}
          <ScrollReveal direction="right" className="lg:col-span-5">
            <h2 className="font-sora font-semibold text-2xl text-navy mb-8">Direct details</h2>
            <a
              href="mailto:matthew@mutuality.com.au"
              className="group flex items-center gap-4 bg-cream rounded-2xl p-5 mb-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center group-hover:bg-gold transition-colors">
                <Mail className="text-gold group-hover:text-navy transition-colors" size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-custom">Email</p>
                <p className="font-sora font-semibold text-navy">matthew@mutuality.com.au</p>
              </div>
            </a>

            <p className="text-xs uppercase tracking-widest text-slate-custom mb-4">Connect</p>
            <div className="space-y-3">
              {connect.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border border-navy/10 rounded-xl px-5 py-4 hover:border-gold hover:bg-cream transition-all duration-300"
                >
                  <c.icon className="text-gold" size={20} />
                  <div>
                    <p className="font-medium text-navy text-sm">{c.label}</p>
                    <p className="text-slate-custom text-xs">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="left" className="lg:col-span-7">
            <div className="bg-cream rounded-2xl p-7 md:p-10 shadow-card">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="flex flex-col items-center justify-center text-center py-16"
                    data-testid="contact-success"
                  >
                    <CheckCircle2 className="text-pillar-capability mb-5" size={56} />
                    <h3 className="font-sora font-semibold text-2xl text-navy mb-2">Message Sent!</h3>
                    <p className="text-slate-custom max-w-sm">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setError("");
                      setSubmitting(true);
                      const fd = new FormData(e.currentTarget);
                      const payload = {
                        first_name: String(fd.get("first_name") || ""),
                        last_name: String(fd.get("last_name") || ""),
                        email: String(fd.get("email") || ""),
                        organisation: String(fd.get("organisation") || ""),
                        challenge: String(fd.get("challenge") || ""),
                        message: String(fd.get("message") || ""),
                      };
                      try {
                        const res = await fetch(`${API}/api/contact`, {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(payload),
                        });
                        if (!res.ok) throw new Error("Request failed");
                        setSubmitted(true);
                      } catch (err) {
                        setError("Something went wrong. Please email matthew@mutuality.com.au directly.");
                      } finally {
                        setSubmitting(false);
                      }
                    }}
                    className="space-y-5"
                    data-testid="contact-form"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">First Name *</label>
                        <input required name="first_name" className={inputCls} data-testid="input-first-name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">Last Name *</label>
                        <input required name="last_name" className={inputCls} data-testid="input-last-name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Email *</label>
                      <input type="email" required name="email" className={inputCls} data-testid="input-email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Organisation *</label>
                      <input required name="organisation" className={inputCls} data-testid="input-organisation" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Primary Challenge</label>
                      <select required name="challenge" defaultValue="" className={inputCls} data-testid="select-challenge">
                        <option value="" disabled>Select an option</option>
                        {challenges.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Message (optional)</label>
                      <textarea rows={4} name="message" className={inputCls} data-testid="input-message" />
                    </div>
                    {error && (
                      <p className="text-destructive text-sm" data-testid="contact-error">{error}</p>
                    )}
                    <button type="submit" disabled={submitting} className="btn-primary w-full text-base disabled:opacity-60" data-testid="contact-submit">
                      {submitting ? "Sending…" : "Send Message"}
                      {!submitting && <ArrowRight size={18} />}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ExploreNext
        links={[
          { label: "Services", href: "/services" },
          { label: "Who We Help", href: "/who-we-help" },
        ]}
      />
    </>
  );
}
