import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Book Junk Removal | Free Estimate | GTA Ontario",
  description: "Book your free junk removal estimate online. JunkAway Pro serves Toronto, Mississauga, Brampton, Oakville, Milton and Vaughan. Same-day available. Call 647-555-0192.",
  alternates: { canonical: "https://www.junkawaypro.ca/contact" },
  openGraph: { title: "Book Junk Removal | Free Estimate | JunkAway Pro", url: "https://www.junkawaypro.ca/contact" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How quickly can you come for junk removal?", acceptedAnswer: { "@type": "Answer", text: "We offer same-day junk removal across the GTA. Book before noon for the best chance of a same-day slot." } },
    { "@type": "Question", name: "Do you provide a firm price or just an estimate?", acceptedAnswer: { "@type": "Answer", text: "We provide a firm, all-inclusive price on-site before any work begins. The price only changes if volume is significantly more than described — and we always get your approval first." } },
  ],
};

const areas = ["Toronto","Mississauga","Brampton","Oakville","Milton","Vaughan","Markham"];
const faqs = [
  { q: "How much does junk removal cost in Toronto?", a: "Pricing depends on volume. Single items start around $99. A half-truck load typically runs $250–$350. A full truck for a large cleanout is usually $450–$600. We always give you a firm price before we start." },
  { q: "Do you offer same-day junk removal?", a: "Yes! We offer same-day junk removal across the GTA. Book before noon and we'll do our best to get a crew to you that day." },
  { q: "Is your price a firm quote or just an estimate?", a: "Our crew provides a firm, all-inclusive price on-site before work begins. It only changes if volume is significantly more than described — and we always get your approval first." },
  { q: "What happens to my junk after you take it?", a: "We sort everything at our facility. Items in good condition are donated to local charities. Electronics go to certified recyclers. We landfill only about 5% of what we remove." },
  { q: "Are you licensed and insured?", a: "Yes. JunkAway Pro is fully licensed in Ontario and carries $5 million in commercial general liability insurance. You're fully protected on every job." },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "var(--navy)" }}>
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(255,92,26,.16) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[.16em] mb-4" style={{ color: "var(--orange)" }}>Get In Touch</p>
          <h1 className="text-5xl font-black text-white tracking-tight leading-tight mb-4">Book Your Free Estimate</h1>
          <p className="text-lg" style={{ color: "rgba(242,223,167,.65)" }}>Fill out the form and we&apos;ll confirm your booking within 1 hour — or call us directly. We answer 7 days a week.</p>
        </div>
      </section>

      {/* CONTACT LAYOUT */}
      <section className="py-20" style={{ background: "var(--slate)" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <Suspense fallback={<div className="bg-white rounded-2xl p-8 text-center" style={{border:"1px solid #E2E8F0"}}>Loading form…</div>}>
              <ContactForm />
            </Suspense>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-black mb-6" style={{ color: "var(--navy)" }}>Get In Touch Directly</h2>
              {[
                { icon: "📞", label: "Phone (7 days a week)", value: <a href="tel:+16475550192" className="text-lg font-bold" style={{ color: "var(--orange)" }}>647-555-0192</a>, sub: "Mon–Fri 7am–8pm · Sat–Sun 8am–6pm" },
                { icon: "✉️", label: "Email Us", value: <a href="mailto:hello@junkawaypro.ca" className="font-medium" style={{ color: "var(--orange)" }}>hello@junkawaypro.ca</a>, sub: null },
                { icon: "📍", label: "Head Office", value: <span>100 City Centre Dr, Suite 500<br />Mississauga, Ontario L5B 2C9</span>, sub: null },
                { icon: "🕐", label: "Business Hours", value: <span>Mon–Fri: 7:00 AM – 8:00 PM<br />Sat–Sun: 8:00 AM – 6:00 PM</span>, sub: null },
              ].map(({ icon, label, value, sub }) => (
                <div key={label} className="flex gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: "rgba(255,92,26,.1)" }}>{icon}</div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--mid)" }}>{label}</div>
                    <div className="text-sm" style={{ color: "var(--text)" }}>{value}</div>
                    {sub && <div className="text-xs mt-0.5" style={{ color: "var(--mid)" }}>{sub}</div>}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "var(--navy)" }}>Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <span key={a} className="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: "var(--navy)" }}>📍 {a}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md" style={{ border: "1px solid var(--border)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.7835!2d-79.6442!3d43.5930!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47263b5c79a1%3A0x18c0bc8b1e11e94a!2s100+City+Centre+Dr%2C+Mississauga%2C+ON!5e0!3m2!1sen!2sca!4v1700000000000"
                width="100%" height="280" style={{ display: "block", border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JunkAway Pro office location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "var(--orange)" }}>Common Questions</p>
            <h2 className="text-4xl font-black tracking-tight" style={{ color: "var(--navy)" }}>Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white rounded-2xl group" style={{ border: "1px solid var(--border)" }}>
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-sm list-none" style={{ color: "var(--navy)" }}>
                  {f.q}
                  <span className="text-xl font-light ml-4 flex-shrink-0 transition-transform group-open:rotate-45" style={{ color: "var(--orange)" }}>+</span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
