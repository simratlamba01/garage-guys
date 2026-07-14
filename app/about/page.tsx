import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Our Story, Team & Values — GTA Junk Removal",
  description: "Learn about JunkAway Pro — founded in Milton, Ontario in 2014. Meet our team, learn our values, and discover why 1,800+ GTA customers trust us for junk removal.",
  alternates: { canonical: "https://www.junkawaypro.ca/about" },
  openGraph: { title: "About JunkAway Pro | GTA's Trusted Junk Removal Company", url: "https://www.junkawaypro.ca/about" },
};

const values = [
  { icon: "🤝", title: "Radical Honesty",            desc: "We quote the real price, every time. No bait-and-switch, no surprise fees on the invoice." },
  { icon: "♻️", title: "Environmental Responsibility", desc: "95% of removed material is recycled or donated to local charities and certified recycling facilities." },
  { icon: "⚡", title: "Speed & Reliability",         desc: "We show up in the window we promise. No vague ETAs, no no-shows — your time matters." },
  { icon: "❤️", title: "Community First",             desc: "We donate to local food banks and sponsor neighbourhood clean-up days across the GTA every quarter." },
];

const team = [
  { emoji: "👨‍💼", name: "Marcus Chen",   role: "Co-Founder & CEO" },
  { emoji: "👩‍💼", name: "Diana Chen",    role: "Co-Founder & COO" },
  { emoji: "👨‍🔧", name: "James Okafor", role: "Head of Operations" },
  { emoji: "👩‍💻", name: "Priya Sharma", role: "Customer Experience Lead" },
];

const eco = [
  { icon: "♻️", stat: "95%",            label: "Diverted",        desc: "Of all material stays out of landfill through recycling and donation partnerships." },
  { icon: "🏘️", stat: "14",             label: "Charity Partners", desc: "Furniture, clothing, and goods donated to GTA shelters and community organizations." },
  { icon: "🌍", stat: "100%",           label: "Carbon Offset",   desc: "We offset 100% of remaining fleet emissions through certified carbon offset programs." },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "var(--navy)" }}>
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(255,92,26,.16) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[.16em] mb-4" style={{ color: "var(--orange)" }}>Our Story</p>
          <h1 className="text-5xl font-black text-white tracking-tight leading-tight mb-4">Built on Hard Work &amp;<br />Honest Service</h1>
          <p className="text-lg" style={{ color: "rgba(242,223,167,.65)" }}>From a single truck in Milton, Ontario to the GTA&apos;s fastest-growing junk removal team — here&apos;s how we got here.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24" style={{ background: "var(--slate)" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="text-[9rem] font-black leading-none absolute -top-4 -left-4 select-none pointer-events-none" style={{ color: "var(--navy)", opacity: .05 }}>10</div>
            <div className="rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1628 0%, #152240 100%)" }}>
              <span className="text-8xl relative z-10">🚛</span>
              <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ background: "var(--orange)" }} />
            </div>
            <div className="absolute -bottom-5 -right-4 rounded-xl px-5 py-4 text-center text-white shadow-2xl" style={{ background: "var(--orange)" }}>
              <div className="text-3xl font-black leading-none">2014</div>
              <div className="text-xs mt-1 opacity-85">Founded in Milton, ON</div>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "var(--orange)" }}>Who We Are</p>
            <h2 className="text-4xl font-black tracking-tight mb-6" style={{ color: "var(--navy)" }}>Started With One Truck.<br />Grown by Trust.</h2>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-body)" }}>JunkAway Pro was founded in 2014 by Marcus and Diana Chen — a husband-and-wife team who saw a gap in the market: most junk removal companies were unreliable, opaque on pricing, and sent items straight to the landfill.</p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-body)" }}>We believed there was a better way — show up on time, quote honestly, and recycle or donate as much as possible. That philosophy worked. Today we operate a fleet of 12 trucks across the GTA with 40+ trained professionals.</p>
            <p className="leading-relaxed mb-8" style={{ color: "var(--text-body)" }}>Our mission hasn&apos;t changed: make junk removal easy, affordable, and genuinely good for the community. One load at a time.</p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="px-6 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90" style={{ background: "var(--orange)" }}>Book a Free Estimate</Link>
              <Link href="/services" className="px-6 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90" style={{ background: "var(--navy)" }}>See Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "var(--orange)" }}>What Drives Us</p>
            <h2 className="text-4xl font-black tracking-tight" style={{ color: "var(--navy)" }}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl p-6 card-hover" style={{ background: "#F5F7FA", borderLeft: "4px solid #FF5C1A" }}>
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--navy)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24" style={{ background: "var(--slate)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "var(--orange)" }}>The People Behind the Truck</p>
            <h2 className="text-4xl font-black tracking-tight" style={{ color: "var(--navy)" }}>Meet Our Leadership</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="text-center group">
                <div className="rounded-2xl aspect-square flex items-center justify-center text-6xl mb-4 transition-transform duration-300 group-hover:scale-105" style={{ background: "var(--navy)" }}>
                  {t.emoji}
                </div>
                <div className="font-bold text-sm" style={{ color: "var(--navy)" }}>{t.name}</div>
                <div className="text-xs mt-1" style={{ color: "var(--mid)" }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECO / SUSTAINABILITY */}
      <section className="py-24" style={{ background: "var(--navy)" }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "var(--orange)" }}>Our Commitment</p>
          <h2 className="text-4xl font-black text-white tracking-tight mb-3">Doing Right By the Planet</h2>
          <p className="max-w-xl mx-auto mb-14" style={{ color: "rgba(242,223,167,.65)" }}>We believe junk removal should be a force for good — not just for your home, but for the environment and community.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {eco.map((e) => (
              <div key={e.label} className="rounded-2xl p-8 text-center" style={{ background: "rgba(242,223,167,.05)", border: "1px solid rgba(255,255,255,.1)" }}>
                <div className="text-4xl mb-4">{e.icon}</div>
                <div className="text-4xl font-black text-white mb-1">{e.stat}</div>
                <div className="text-sm font-bold mb-3" style={{ color: "var(--orange)" }}>{e.label}</div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(242,223,167,.55)" }}>{e.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90 hover:scale-105" style={{ background: "var(--orange)" }}>
            Work With a Company That Cares →
          </Link>
        </div>
      </section>
    </>
  );
}
