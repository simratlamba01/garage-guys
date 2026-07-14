import type { Metadata } from "next";
import Link from "next/link";
import PricingCalendar from "@/components/pricing/PricingCalendar";

export const metadata: Metadata = {
  title: "Pricing Calendar | Check Live Junk Removal Rates — GTA Ontario",
  description: "See real-time junk removal pricing for any date. Volume-based rates for GTA. Starter from $99, Half Truck from $299, Full Truck from $499. Weekend & special date pricing shown live.",
  alternates: { canonical: "https://www.junkawaypro.ca/pricing" },
  openGraph: { title: "Junk Removal Pricing Calendar | JunkAway Pro GTA", url: "https://www.junkawaypro.ca/pricing" },
};

const faqs = [
  { q: "Why do prices vary by date?", a: "Weekend dates (Saturday & Sunday) carry a small premium due to higher crew demand. Special promotional dates — like Canada Day or Black Friday — may have discounted rates. The calendar shows the exact price for whichever date you pick." },
  { q: "Is the calendar price the final price?", a: "Calendar prices are starting-point estimates by volume tier. Our crew gives you a firm, all-inclusive quote on-site before touching anything. You only pay if you approve." },
  { q: "What does the price include?", a: "All prices include crew labour, all heavy lifting, truck loading, eco-sorting at our facility, recycling fees, and donation drop-off. HST is added separately." },
  { q: "Can I lock in a date's price in advance?", a: "Yes — booking via the form reserves your date and the pricing shown on the calendar at time of booking. Prices are locked once we confirm your appointment." },
];

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "#0B1628" }}>
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(255,92,26,.16) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[.16em] mb-4" style={{ color: "#FF5C1A" }}>Live Pricing</p>
          <h1 className="text-5xl font-black text-white tracking-tight leading-tight mb-4">Pick Your Date.<br />See Your Price.</h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,.65)" }}>Click any date on the calendar to instantly see transparent, volume-based pricing for every service tier. No surprises.</p>
        </div>
      </section>

      {/* HOW PRICING WORKS */}
      <div style={{ background: "#152240" }}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-center gap-8 flex-wrap">
          {[["📅","Date-based pricing","Weekends & specials shown live"],["📦","Volume-based rates","Pay for how much space you use"],["✅","Firm on-site quote","Price locked before we touch anything"],["♻️","All fees included","Labour, eco-recycling, heavy lifting"]].map(([icon, bold, sub]) => (
            <div key={bold as string} className="flex items-center gap-2.5">
              <span className="text-xl">{icon}</span>
              <div>
                <div className="text-sm font-bold text-white">{bold}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,.45)" }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CALENDAR SECTION */}
      <section className="py-20" style={{ background: "#F5F7FA" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "#FF5C1A" }}>Interactive Pricing Calendar</p>
            <h2 className="text-4xl font-black tracking-tight mb-3" style={{ color: "#0B1628" }}>Select a Date to See Pricing</h2>
            <p className="max-w-lg mx-auto text-sm" style={{ color: "#4A5568" }}>
              Dates with an <span className="font-bold" style={{ color: "#FF5C1A" }}>orange dot</span> have special promotional pricing.
              Dates with a <span className="font-bold" style={{ color: "#8896A4" }}>grey dot</span> carry a weekend premium.
              Grey dates are unavailable.
            </p>
          </div>

          <PricingCalendar />
        </div>
      </section>

      {/* PRICING TIERS EXPLAINER */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "#FF5C1A" }}>Service Tiers</p>
            <h2 className="text-4xl font-black tracking-tight" style={{ color: "#0B1628" }}>What Each Tier Covers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { icon: "📦", tier: "Starter",       cap: "¼ Truck",  ex: "A few small items — perfect for a single appliance, mattress, or a handful of boxes." },
              { icon: "🚛", tier: "Half Truck",     cap: "½ Truck",  ex: "One or two rooms — ideal for apartment cleanouts, garage clear-outs, or a set of furniture." },
              { icon: "🚚", tier: "Full Truck",     cap: "Full",     ex: "Whole home or large office — the most popular choice for full-home cleanouts." },
              { icon: "🏠", tier: "Estate",         cap: "Multi-load",ex: "Estate or hoarding cleanouts that may need multiple trips or a larger crew." },
              { icon: "🏢", tier: "Commercial",     cap: "Business", ex: "Office, retail, or industrial jobs with after-hours scheduling available." },
            ].map((t) => (
              <div key={t.tier} className="rounded-2xl p-5 text-center card-hover" style={{ background: "#F5F7FA", border: "1px solid #E2E8F0" }}>
                <div className="text-3xl mb-3">{t.icon}</div>
                <div className="font-black text-base mb-1" style={{ color: "#0B1628" }}>{t.tier}</div>
                <div className="text-xs font-bold mb-3 px-2 py-0.5 rounded-full inline-block" style={{ background: "rgba(255,92,26,.1)", color: "#FF5C1A" }}>{t.cap}</div>
                <p className="text-xs leading-relaxed" style={{ color: "#4A5568" }}>{t.ex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW PRICING IS CALCULATED */}
      <section className="py-16" style={{ background: "#0B1628" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">How Our Pricing Works</h2>
          <p className="mb-10" style={{ color: "rgba(255,255,255,.65)" }}>Three factors determine your final price — all visible before you commit.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { n: "1", icon: "📦", title: "Volume",      desc: "How much space your junk takes up in our truck. More junk = larger tier. We help you estimate over the phone." },
              { n: "2", icon: "📅", title: "Date",        desc: "Weekend dates carry a 15% premium. Special promotional dates may have discounts — always shown on the calendar." },
              { n: "3", icon: "📍", title: "Accessibility",desc: "Stairs, elevator, long carry distance — these are assessed on-site and may affect the final firm quote." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm mb-4 mx-auto" style={{ background: "#FF5C1A", color: "white" }}>{f.n}</div>
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.55)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-20" style={{ background: "#F5F7FA" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "#FF5C1A" }}>Questions</p>
            <h2 className="text-4xl font-black tracking-tight" style={{ color: "#0B1628" }}>Pricing FAQ</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white rounded-2xl overflow-hidden group" style={{ border: "1px solid #E2E8F0" }}>
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-sm list-none" style={{ color: "#0B1628" }}>
                  {f.q}
                  <span className="text-xl font-light ml-4 flex-shrink-0 transition-transform group-open:rotate-45" style={{ color: "#FF5C1A" }}>+</span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#4A5568" }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "#FF5C1A" }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white tracking-tight mb-3">Ready to Book Your Date?</h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,.85)" }}>Select a date above, then hit &ldquo;Book This Date&rdquo; — we&apos;ll confirm within 1 hour.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105" style={{ background: "#0B1628" }}>Book Free Estimate</Link>
            <a href="tel:+16475550192" className="px-8 py-4 rounded-xl font-bold transition-all hover:scale-105" style={{ border: "2px solid rgba(255,255,255,.6)", color: "white" }}>📞 647-555-0192</a>
          </div>
        </div>
      </section>
    </>
  );
}
