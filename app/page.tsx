import type { Metadata } from "next";
import Link from "next/link";
import HeroStats from "@/components/home/HeroStats";
import ReviewsSection from "@/components/home/ReviewsSection";

export const metadata: Metadata = {
  title: "JunkAway Pro | #1 Junk Removal in GTA Ontario — Same-Day Available",
  description: "JunkAway Pro — fast, affordable, eco-friendly junk removal across Toronto, Mississauga, Brampton, Oakville & the GTA. Free estimates. Same-day available. 4.9★ rated.",
  alternates: { canonical: "https://www.junkawaypro.ca" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "JunkAway Pro",
  description: "Professional full-service junk removal across the Greater Toronto Area.",
  url: "https://www.junkawaypro.ca",
  telephone: "+1-647-555-0192",
  email: "hello@junkawaypro.ca",
  address: { "@type": "PostalAddress", streetAddress: "100 City Centre Dr, Suite 500", addressLocality: "Mississauga", addressRegion: "Ontario", postalCode: "L5B 2C9", addressCountry: "CA" },
  geo: { "@type": "GeoCoordinates", latitude: 43.593, longitude: -79.644 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday","Sunday"], opens: "08:00", closes: "18:00" },
  ],
  areaServed: ["Toronto","Mississauga","Brampton","Oakville","Milton","Vaughan","Markham"],
  priceRange: "$$",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1840" },
};

const services = [
  { icon: "🛋️", title: "Furniture Removal",      desc: "Sofas, beds, desks, dressers — we handle bulky items and heavy lifting so you don't have to." },
  { icon: "🧹", title: "Estate & Home Cleanouts", desc: "Full-property cleanouts for moves, inheritances, or downsizing — done quickly and with care." },
  { icon: "🔧", title: "Appliance Disposal",      desc: "Fridges, washers, dryers — eco-certified recycling on every appliance we remove." },
  { icon: "🏗️", title: "Construction Debris",     desc: "Drywall, concrete, wood, tiles — post-reno cleanup made easy." },
  { icon: "🏢", title: "Commercial Junk",         desc: "Office cleanouts, retail fixtures, industrial equipment — minimize downtime." },
  { icon: "🌿", title: "Yard Waste & Debris",     desc: "Branches, soil, old sheds, outdoor furniture — get your yard back." },
];

const steps = [
  { n: "1", icon: "📅", title: "Book Online or Call", desc: "Schedule in under 2 minutes. Choose same-day, next-day, or a future date — 7 days a week." },
  { n: "2", icon: "🚛", title: "We Show Up & Quote",  desc: "Uniformed crew arrives in your 2-hour window with a firm, upfront price before touching anything." },
  { n: "3", icon: "✅", title: "Point & We're Done",  desc: "Just point at what needs to go. We haul, sweep up, then recycle or donate as much as possible." },
];

const checks = [
  "Upfront pricing — no surprise charges",
  "Insured & uniformed crew you can trust",
  "95% of items recycled or donated",
  "On-time arrival — guaranteed 2-hour window",
  "Satisfaction guarantee on every job",
];

const whyFeatures = [
  { icon: "⚡", title: "Same-Day Availability",  desc: "Book by noon for same-day service across the GTA when clutter can't wait." },
  { icon: "🌱", title: "Genuinely Eco-Friendly", desc: "Certified recyclers and local charities keep 95% of what we haul out of landfill." },
  { icon: "💳", title: "Transparent Pricing",    desc: "We quote by volume — you know the exact price before we lift a finger." },
  { icon: "🏅", title: "10+ Years of Expertise", desc: "Over a decade serving GTA homeowners, landlords, contractors, and businesses." },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#0B1628" }}>
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 65% 50%, rgba(255,92,26,.16) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-sm font-semibold" style={{ background: "rgba(255,92,26,.15)", border: "1px solid rgba(255,92,26,.35)", color: "#FF8C5A" }}>
              <span className="w-2 h-2 rounded-full animate-pulse-dot" style={{ background: "#FF5C1A" }} />
              Same-Day Available Across the GTA
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.06] tracking-tight mb-6">
              We Make Junk<br />
              <span style={{ color: "#FF5C1A" }}>Disappear.</span>
            </h1>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,.7)", maxWidth: 480 }}>
              Ontario&apos;s most-trusted junk removal team. Just point — we haul it away fast, clean, and affordably. 4.9★ rated by 1,800+ GTA customers.
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              <Link href="/contact" className="px-6 py-3.5 rounded-xl font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95" style={{ background: "#FF5C1A" }}>
                Book Free Estimate →
              </Link>
              <Link href="/pricing" className="px-6 py-3.5 rounded-xl font-bold transition-all duration-200 hover:scale-105" style={{ border: "2px solid rgba(255,255,255,.35)", color: "white" }}>
                View Pricing Calendar
              </Link>
            </div>
            <a href="tel:+16475550192" className="text-sm font-medium" style={{ color: "rgba(255,255,255,.55)" }}>
              📞 Or call us: <span style={{ color: "#FF5C1A", fontWeight: 700 }}>647-555-0192</span>
            </a>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
              {[["1K+","Loads / Month"],["4.9★","Avg Rating"],["95%","Eco-Diverted"]].map(([n,l]) => (
                <div key={l}>
                  <div className="text-3xl font-black text-white">{n}</div>
                  <div className="text-xs mt-1 uppercase tracking-wider" style={{ color: "rgba(255,255,255,.45)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero card */}
          <div className="hidden lg:block relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center" style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)" }}>
              <div className="text-center px-8">
                <div className="text-8xl mb-4 animate-float">🚛</div>
                <p className="text-2xl font-black text-white mb-1">JunkAway Pro</p>
                <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,.55)" }}>Full-Service Junk Removal GTA</p>
                <div className="flex gap-3 justify-center flex-wrap">
                  {["♻️ Eco-Friendly","⚡ Same-Day","✅ Free Quote"].map((t) => (
                    <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: "rgba(255,92,26,.2)", color: "#FF8C5A" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating review */}
            <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-3 min-w-[200px]">
              <div>
                <div className="text-yellow-400 text-base leading-none mb-0.5">★★★★★</div>
                <div className="text-sm font-bold text-gray-900">4.9 / 5 Rating</div>
                <div className="text-xs text-gray-500">1,840+ verified reviews</div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 rounded-2xl px-4 py-3 text-center text-white font-black text-sm shadow-xl leading-tight" style={{ background: "#FF5C1A" }}>
              FREE<br />ESTIMATES<br /><span className="text-xs font-normal opacity-80">No obligation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{ background: "#152240", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-center gap-8 flex-wrap">
          {[["🏆","10+ Years","in Business"],["♻️","Eco-Certified","Disposal"],["📋","Fully Licensed","& Insured"],["📍","7 GTA","Cities Served"],["⚡","Same-Day","Available"]].map(([icon,bold,rest]) => (
            <div key={bold} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,.65)" }}>
              <span>{icon}</span><strong className="text-white">{bold}</strong> {rest}
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24" style={{ background: "#F5F7FA" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "#FF5C1A" }}>Simple Process</p>
            <h2 className="text-4xl font-black tracking-tight" style={{ color: "#0B1628" }}>3 Steps to a Clutter-Free Space</h2>
            <p className="mt-3 max-w-lg mx-auto" style={{ color: "#4A5568" }}>No hidden fees, no heavy lifting. We handle everything from scheduling to responsible disposal.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-8 text-center shadow-sm card-hover">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 text-xl font-black" style={{ background: "#0B1628", color: "#FF5C1A" }}>{s.n}</div>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0B1628" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES SNAPSHOT ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "#FF5C1A" }}>What We Remove</p>
            <h2 className="text-4xl font-black tracking-tight" style={{ color: "#0B1628" }}>We Take Almost Anything</h2>
            <p className="mt-3 max-w-md mx-auto" style={{ color: "#4A5568" }}>From a single couch to a full estate cleanout — residential or commercial.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl p-6 card-hover relative overflow-hidden orange-bar" style={{ border: "1px solid #E2E8F0" }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: "rgba(255,92,26,.08)" }}>{s.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: "#0B1628" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90" style={{ background: "#0B1628" }}>
              View All Services & Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <HeroStats />

      {/* ── WHY US ── */}
      <section className="py-24" style={{ background: "#0B1628" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Promise card */}
          <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)" }}>
            <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "#FF5C1A" }}>Our Promise</p>
            <h3 className="text-2xl font-bold text-white mb-6">Every job done right — or we come back.</h3>
            <ul className="space-y-4">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white flex-shrink-0" style={{ background: "#FF5C1A" }}>✓</span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,.8)" }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "#FF5C1A" }}>Why JunkAway Pro</p>
            <h2 className="text-4xl font-black text-white tracking-tight mb-8">Not Just Haulers.<br />Professionals.</h2>
            <div className="space-y-6">
              {whyFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <span className="text-3xl flex-shrink-0 w-10 text-center">{f.icon}</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">{f.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.6)" }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90 hover:scale-105" style={{ background: "#FF5C1A" }}>
              Book Your Free Estimate →
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <ReviewsSection />

      {/* ── CTA BAND ── */}
      <section className="py-24 text-center" style={{ background: "#FF5C1A" }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "rgba(255,255,255,.75)" }}>Ready to Reclaim Your Space?</p>
          <h2 className="text-4xl font-black text-white tracking-tight mb-3">Your Free Estimate Takes 2 Minutes</h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,.8)" }}>No credit card. No obligation. Honest pricing and a crew that shows up on time.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 text-base" style={{ background: "#0B1628" }}>
              Book Online Now
            </Link>
            <a href="tel:+16475550192" className="px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 text-base" style={{ border: "2px solid rgba(255,255,255,.6)", color: "white" }}>
              📞 647-555-0192
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
