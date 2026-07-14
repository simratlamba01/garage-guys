"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ContactForm() {
  const params = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    postalCode: "", serviceType: "", loadSize: "",
    preferredDate: "", message: "",
  });

  useEffect(() => {
    const date   = params.get("date");
    const postal = params.get("postal");
    setForm(f => ({
      ...f,
      ...(date   ? { preferredDate: date   } : {}),
      ...(postal ? { postalCode:    postal } : {}),
    }));
  }, [params]);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 border focus:border-orange-400 focus:ring-2 focus:ring-orange-100";
  const inputStyle = { borderColor: "#E2E8F0", fontFamily: "inherit", color: "#1A2535" };
  const labelStyle = { color: "#0B1628", fontSize: ".82rem", fontWeight: 700, display: "block", marginBottom: ".3rem" };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center shadow-xl" style={{ border: "1px solid #E2E8F0" }}>
        <div className="text-6xl mb-5">🎉</div>
        <h3 className="text-2xl font-black mb-3" style={{ color: "#0B1628" }}>We&apos;ve Got Your Request!</h3>
        <p className="mb-6" style={{ color: "#4A5568" }}>Our team will call or text you within 1 hour during business hours to confirm your booking details.</p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "#ECFDF5", color: "#065F46" }}>
          ✅ Confirmation email sent to {form.email}
        </div>
        <div className="mt-8">
          <Link href="/" className="text-sm font-semibold" style={{ color: "#FF5C1A" }}>← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden" style={{ border: "1px solid #E2E8F0" }}>
      <div className="px-8 py-6" style={{ background: "#0B1628" }}>
        <h2 className="text-xl font-black text-white">Request a Free On-Site Quote</h2>
        <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,.55)" }}>We respond within 1 hour during business hours.</p>
      </div>
      <form onSubmit={handleSubmit} className="px-8 py-7 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>First Name <span style={{ color: "#FF5C1A" }}>*</span></label>
            <input className={inputClass} style={inputStyle} type="text" placeholder="Marcus" required value={form.firstName} onChange={set("firstName")} autoComplete="given-name" />
          </div>
          <div>
            <label style={labelStyle}>Last Name <span style={{ color: "#FF5C1A" }}>*</span></label>
            <input className={inputClass} style={inputStyle} type="text" placeholder="Chen" required value={form.lastName} onChange={set("lastName")} autoComplete="family-name" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>Email <span style={{ color: "#FF5C1A" }}>*</span></label>
            <input className={inputClass} style={inputStyle} type="email" placeholder="marcus@email.com" required value={form.email} onChange={set("email")} autoComplete="email" />
          </div>
          <div>
            <label style={labelStyle}>Phone <span style={{ color: "#FF5C1A" }}>*</span></label>
            <input className={inputClass} style={inputStyle} type="tel" placeholder="647-555-0192" required value={form.phone} onChange={set("phone")} autoComplete="tel" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>Postal Code <span style={{ color: "#FF5C1A" }}>*</span></label>
            <input className={inputClass} style={inputStyle} type="text" placeholder="L5B 2C9" required value={form.postalCode} onChange={set("postalCode")} autoComplete="postal-code" />
          </div>
          <div>
            <label style={labelStyle}>Preferred Date</label>
            <input className={inputClass} style={inputStyle} type="date" value={form.preferredDate} onChange={set("preferredDate")} />
          </div>
        </div>
        <div>
          <label style={labelStyle}>Service Type</label>
          <select className={inputClass} style={{ ...inputStyle, appearance: "none" }} value={form.serviceType} onChange={set("serviceType")}>
            <option value="">Select a service…</option>
            <option>Furniture &amp; Household Removal</option>
            <option>Appliance &amp; Electronics Disposal</option>
            <option>Estate / Home Cleanout</option>
            <option>Construction &amp; Renovation Debris</option>
            <option>Commercial / Office Cleanout</option>
            <option>Yard &amp; Outdoor Debris</option>
            <option>Other / Not Sure</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Estimated Load Size</label>
          <select className={inputClass} style={{ ...inputStyle, appearance: "none" }} value={form.loadSize} onChange={set("loadSize")}>
            <option value="">How much junk?</option>
            <option>Small — a few items (¼ truck or less)</option>
            <option>Medium — a room or two (½ truck)</option>
            <option>Large — full home or office (full truck)</option>
            <option>Not sure — I need an on-site assessment</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Additional Details</label>
          <textarea
            className={inputClass} style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
            placeholder="Describe what needs to go, any access challenges (stairs, elevator, etc.)…"
            value={form.message} onChange={set("message")}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-95 disabled:opacity-70"
          style={{ background: "#FF5C1A" }}
        >
          {loading ? "Sending…" : "🚛 Request My Free Estimate"}
        </button>
        <p className="text-center text-xs" style={{ color: "#8896A4" }}>📋 No credit card required. Confirmed within 1 hour during business hours.</p>
      </form>
    </div>
  );
}
