"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail]       = useState("");
  const [status, setStatus]     = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage]   = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    // Replace this setTimeout with your real API call / Mailchimp / SendGrid / etc.
    setTimeout(() => {
      setStatus("success");
      setMessage("You're subscribed! 🎉 Watch your inbox for tips & deals.");
      setEmail("");
    }, 1000);
  };

  return (
    <div>
      <h5 className="font-bold text-white mb-1" style={{ fontSize: "1rem", letterSpacing: ".02em" }}>
        Stay in the Loop
      </h5>
      <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,.5)", lineHeight: 1.6 }}>
        Seasonal tips, special pricing deals &amp; eco-recycling news — no spam, ever.
      </p>

      {status === "success" ? (
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium"
          style={{ background: "rgba(34,197,94,.15)", border: "1px solid rgba(34,197,94,.35)", color: "#4ADE80" }}
        >
          <span className="text-lg">✅</span>
          <span>{message}</span>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); setMessage(""); }}
                placeholder="your@email.com"
                required
                aria-label="Email address for newsletter"
                className="flex-1 min-w-0 px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,.08)",
                  border: `1.5px solid ${status === "error" ? "#EF4444" : "rgba(255,255,255,.15)"}`,
                  color: "white",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--orange)")}
                onBlur={(e)  => (e.target.style.borderColor = status === "error" ? "#EF4444" : "rgba(255,255,255,.15)")}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-4 py-3 rounded-xl font-bold text-white text-sm flex-shrink-0 transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 disabled:opacity-60"
                style={{ background: "var(--orange)", fontFamily: "inherit" }}
                aria-label="Subscribe to newsletter"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-1.5">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    ...
                  </span>
                ) : "Subscribe"}
              </button>
            </div>
            {status === "error" && (
              <p className="text-xs mt-2" style={{ color: "#EF4444" }}>{message}</p>
            )}
          </form>
          <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,.3)" }}>
            🔒 We respect your privacy. Unsubscribe anytime.
          </p>
        </>
      )}
    </div>
  );
}
