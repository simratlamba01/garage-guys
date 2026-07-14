import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Junk Removal Services & Pricing | GTA Ontario",
  description: "Furniture removal, estate cleanouts, appliance disposal, construction debris, commercial junk removal and more. Transparent volume-based pricing. Free on-site quotes across the GTA.",
  alternates: { canonical: "https://www.junkawaypro.ca/services" },
  openGraph: { title: "Junk Removal Services & Pricing | JunkAway Pro", url: "https://www.junkawaypro.ca/services" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does junk removal cost?", acceptedAnswer: { "@type": "Answer", text: "Single items start at $99. Half-truck loads $250–$350. Full truck for large cleanouts $450–$600. All quotes are firm and free." } },
    { "@type": "Question", name: "Do you recycle the junk you remove?", acceptedAnswer: { "@type": "Answer", text: "Yes — 95% of everything we haul is recycled or donated. We partner with certified recycling facilities and local charities across the GTA." } },
  ],
};

const serviceCards = [
  { icon: "🛋️", title: "Furniture & Household",  items: ["Sofas, sectionals & recliners","Bed frames & mattresses","Tables, chairs & wardrobes","Exercise & recreational equipment"] },
  { icon: "🔧", title: "Appliances & Electronics", items: ["Refrigerators & freezers","Washers, dryers & dishwashers","Stoves & microwaves","TVs, computers & e-waste"] },
  { icon: "🏗️", title: "Construction & Renovation", items: ["Drywall, lumber & flooring","Concrete, brick & tile","Insulation & roofing","Mixed renovation waste"] },
  { icon: "🧹", title: "Estate & Hoarding Cleanouts", items: ["Full home & condo cleanouts","Estate & probate cleanouts","Hoarding situation cleanouts","Foreclosure & rental cleanouts"] },
  { icon: "🏢", title: "Commercial & Office",     items: ["Office furniture & equipment","Retail fixture removal","Restaurant & kitchen gear","Warehouse & industrial"] },
  { icon: "🌿", title: "Yard & Outdoor",          items: ["Tree branches & stumps","Old sheds & playsets","Patio furniture & BBQs","Soil, sod & landscaping"] },
];

const cant = ["Hazardous chemicals & solvents","Propane tanks (pressurized)","Asbestos & lead paint","Biological & medical waste","Paint & oil-based products","Radioactive materials"];

const pricing = [
  { tier: "Starter",      price: "$99",  suffix: "+", popular: false, cap: "Up to ¼ truck",     items: ["1–3 items or small load","Single-piece furniture","Small appliance removal","Same-day available"] },
  { tier: "Half Truck",   price: "$299", suffix: "+", popular: true,  cap: "Up to ½ truck",     items: ["Multiple rooms","Mixed item types","Priority scheduling","Free eco-sort & donate","Same-day available"] },
  { tier: "Full Truck",   price: "$499", suffix: "+", popular: false, cap: "Full capacity",      items: ["Estate or whole-home","Commercial & office","Priority + same-day","Crew of 3 included","All item types"] },
];

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "var(--navy)" }}>
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(255,92,26,.16) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[.16em] mb-4" style={{ color: "var(--orange)" }}>What We Do</p>
          <h1 className="text-5xl font-black text-white tracking-tight leading-tight mb-4">Full-Service Junk Removal<br />for Every Need</h1>
          <p className="text-lg" style={{ color: "rgba(242,223,167,.65)" }}>Residential or commercial, small item or full estate — JunkAway Pro handles it all with transparent pricing and a professional crew.</p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "var(--orange)" }}>Our Services</p>
            <h2 className="text-4xl font-black tracking-tight" style={{ color: "var(--navy)" }}>What Can We Remove For You?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {serviceCards.map((s) => (
              <div key={s.title} className="rounded-2xl p-6 flex gap-5 card-hover" style={{ border: "1px solid var(--border)" }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: "var(--orange)" }}>{s.icon}</div>
                <div>
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--navy)" }}>{s.title}</h3>
                  <ul className="space-y-1">
                    {s.items.map((item) => (
                      <li key={item} className="text-sm flex items-center gap-2" style={{ color: "var(--text-body)" }}>
                        <span style={{ color: "var(--orange)", fontWeight: 700 }}>→</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CANNOT TAKE */}
      <section className="py-10" style={{ background: "var(--slate)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ border: "1px solid var(--border)" }}>
            <h3 className="text-lg font-bold mb-2" style={{ color: "var(--navy)" }}>📋 What We Can&apos;t Take</h3>
            <p className="text-sm mb-5" style={{ color: "var(--text-body)" }}>For safety and regulatory reasons, we&apos;re unable to haul:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cant.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-body)" }}>
                  <span className="font-black" style={{ color: "#EF4444" }}>✕</span>{c}
                </div>
              ))}
            </div>
            <p className="text-xs mt-5" style={{ color: "var(--mid)" }}>Not sure if your item qualifies? <Link href="/contact" className="font-semibold" style={{ color: "var(--orange)" }}>Call us</Link> and we&apos;ll point you in the right direction.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "var(--orange)" }}>Transparent Pricing</p>
            <h2 className="text-4xl font-black tracking-tight" style={{ color: "var(--navy)" }}>Simple Volume-Based Pricing</h2>
            <p className="mt-3 max-w-md mx-auto" style={{ color: "var(--text-body)" }}>Price by how much space your junk takes in our truck — no hourly rates, no surprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.tier} className="rounded-2xl p-7 relative card-hover" style={{
                background: p.popular ? "#0B1628" : "white",
                border: p.popular ? "2px solid #FF5C1A" : "2px solid #E2E8F0",
              }}>
                {p.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white" style={{ background: "var(--orange)" }}>Most Popular</div>
                )}
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: p.popular ? "rgba(242,223,167,.55)" : "#8896A4" }}>{p.tier}</p>
                <div className="text-5xl font-black mb-1" style={{ color: p.popular ? "white" : "#0B1628" }}>
                  {p.price}<span className="text-2xl font-normal" style={{ color: p.popular ? "rgba(255,255,255,.5)" : "#8896A4" }}>{p.suffix}</span>
                </div>
                <p className="text-sm mb-5" style={{ color: p.popular ? "rgba(242,223,167,.55)" : "#8896A4" }}>{p.cap}</p>
                <ul className="space-y-2 mb-7">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: p.popular ? "rgba(255,255,255,.8)" : "#4A5568" }}>
                      <span className="font-bold" style={{ color: "var(--orange)" }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block text-center py-3 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90" style={{ background: "var(--orange)" }}>
                  Book {p.tier}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-5" style={{ color: "var(--mid)" }}>All prices include labour, disposal fees, and eco-recycling. HST extra. Free on-site quote before any work begins.</p>
          <div className="text-center mt-6">
            <Link href="/pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90" style={{ background: "var(--navy)" }}>
              📅 View Pricing Calendar — Check Your Date →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: "var(--orange)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white tracking-tight mb-3">Get Your Free On-Site Estimate Today</h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,.85)" }}>We&apos;ll be there in your window. You see the price. You approve. We haul.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105" style={{ background: "var(--navy)" }}>Book Free Estimate</Link>
            <a href="tel:+16475550192" className="px-8 py-4 rounded-xl font-bold transition-all hover:scale-105" style={{ border: "2px solid rgba(255,255,255,.6)", color: "white" }}>📞 647-555-0192</a>
          </div>
        </div>
      </section>
    </>
  );
}
