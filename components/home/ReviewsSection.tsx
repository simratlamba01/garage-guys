const reviews = [
  { init: "S", name: "Sarah M.",       loc: "Mississauga, ON", text: "The crew cleared my entire basement — 20 years of stuff — in under two hours. Swept up after themselves too. Absolutely amazing." },
  { init: "R", name: "Raj P.",         loc: "Brampton, ON",    text: "Post-renovation debris pickup — professional, fast, and the price was exactly what they quoted. No drama, no mess left behind." },
  { init: "L", name: "Linda K.",       loc: "Oakville, ON",    text: "Cleared my late mother's home with such respect and care. They even donated her furniture to local charities. Truly grateful." },
  { init: "M", name: "Marcus T.",      loc: "North York, ON",  text: "Sent a full crew the next morning for our office move. Efficient, courteous, and competitively priced. Our go-to." },
  { init: "T", name: "Tom & Julie W.", loc: "Burlington, ON",  text: "They took an old hot tub two other companies refused. Careful with my deck, had it out in 90 minutes. Worth every penny." },
  { init: "A", name: "Aisha B.",       loc: "Vaughan, ON",     text: "As a property manager I use JunkAway Pro after every tenant turnover. Reliable, fast, always communicate ETAs." },
];

export default function ReviewsSection() {
  return (
    <section className="py-24" style={{ background: "#F5F7FA" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[.16em] mb-3" style={{ color: "#FF5C1A" }}>Customer Reviews</p>
          <h2 className="text-4xl font-black tracking-tight" style={{ color: "#0B1628" }}>Real GTA Customers, Real Results</h2>
          <p className="mt-3" style={{ color: "#4A5568" }}>Don&apos;t take our word for it — here&apos;s what your neighbours are saying.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <article key={r.name} className="bg-white rounded-2xl p-6 shadow-sm card-hover" style={{ border: "1px solid #E2E8F0" }}
              itemScope itemType="https://schema.org/Review">
              <div className="text-yellow-400 text-base mb-3">★★★★★</div>
              <p className="text-sm leading-relaxed italic mb-5" style={{ color: "#4A5568" }} itemProp="reviewBody">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0" style={{ background: "#0B1628", color: "#FF5C1A" }}>{r.init}</div>
                <div>
                  <div className="text-sm font-bold" style={{ color: "#0B1628" }} itemProp="author">{r.name}</div>
                  <div className="text-xs" style={{ color: "#8896A4" }}>📍 {r.loc}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
