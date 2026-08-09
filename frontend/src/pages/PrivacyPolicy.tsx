import { useSeo } from "@/hooks/useSeo";

const sections = [
  {
    h: "Introduction",
    p: 'Building Mutuality Pty Ltd (ABN 37 674 572 457) ("we," "us," "our") respects your privacy and is committed to protecting your personal information. This policy explains how we collect, use, disclose and safeguard your information when you visit mutuality.com.au or engage our services. It is aligned with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).',
  },
  {
    h: "Information We Collect",
    p: "We collect information you provide directly — such as your name, email address, organisation, role and the details you include in an enquiry when you contact us, subscribe to our newsletter, or engage our services. We also collect limited technical information automatically, such as your IP address, browser type and how you use our site, through analytics tools.",
  },
  {
    h: "How We Use Your Information",
    p: "We use your information to respond to your enquiries, deliver and improve our services, send you our newsletter and updates where you have asked to receive them, and understand how our site is used so we can make it better. We do not sell your personal information.",
  },
  {
    h: "Disclosure",
    p: "We may share your information with trusted service providers who help us operate our business and website, on the basis that they protect it and use it only for the purposes we specify. We may also disclose information where required by law.",
  },
  {
    h: "Cookies and Analytics",
    p: "Our site uses cookies and analytics tools (such as Google Analytics) to understand usage and improve your experience. You can control cookies through your browser settings; disabling them may affect how the site works.",
  },
  {
    h: "Data Security and Overseas Storage",
    p: "We take reasonable steps to protect your information from misuse, loss and unauthorised access. Some of our service providers may store data outside Australia; where they do, we take reasonable steps to ensure your information remains protected.",
  },
  {
    h: "Access, Correction and Complaints",
    p: "You may request access to the personal information we hold about you, ask us to correct it, or unsubscribe from our communications at any time. To do so, or to raise a privacy concern, contact us at matthew@mutuality.com.au. If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (oaic.gov.au).",
  },
  {
    h: "Changes to This Policy",
    p: "We may update this policy from time to time. The current version will always be available on this page, with the effective date shown below.",
  },
];

export default function PrivacyPolicy() {
  useSeo(
    "Privacy Policy | Building Mutuality",
    "How Building Mutuality collects, uses and protects your personal information, in line with the Australian Privacy Act 1988."
  );
  return (
    <div className="bg-white">
      <div className="container-custom max-w-3xl pt-32 pb-20 md:pt-40 md:pb-28">
        <h1 className="font-sora font-bold text-4xl md:text-5xl text-navy mb-3">Privacy Policy</h1>
        <p className="text-slate-custom mb-12">Effective date: 24 July 2026</p>

        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-sora font-semibold text-xl md:text-2xl text-navy mb-3">{s.h}</h2>
              <p className="text-slate-custom leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
