import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const services = ["Furniture Removal","Estate Cleanouts","Appliance Disposal","Construction Debris","Commercial Junk","Yard Waste"];
const areas    = ["Toronto","Mississauga","Brampton","Oakville","Milton","Vaughan","Markham"];
const company  = [
  { label: "About Us",  href: "/about"    },
  { label: "Services",  href: "/services" },
  { label: "Pricing",   href: "/pricing"  },
  { label: "Contact",   href: "/contact"  },
];
const socials = [
  { char: "f",  label: "Facebook"  },
  { char: "in", label: "Instagram" },
  { char: "𝕏",  label: "Twitter"   },
  { char: "G",  label: "Google"    },
];

export default function Footer() {
  return (
    <footer className="footer-root">

      {/* ── NEWSLETTER BAND ── */}
      <div className="footer-newsletter-band">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <div>
              <div className="footer-badge">
                <span className="footer-badge-dot" />
                Free Newsletter
              </div>
              <h4 className="footer-nl-heading">
                Get Junk Removal Tips &amp;<br />
                <span className="text-orange">Exclusive Deals</span> in Your Inbox
              </h4>
              <p className="footer-nl-sub">
                Join 2,400+ GTA homeowners who get seasonal decluttering tips, eco-recycling guides, and subscriber-only pricing deals.
              </p>
              <div className="footer-avatars">
                <div className="flex -space-x-2">
                  {["S","R","L","M"].map((i) => (
                    <div key={i} className="footer-avatar">{i}</div>
                  ))}
                </div>
                <p className="footer-avatar-label">
                  <span className="text-white font-semibold">2,400+</span> subscribers · No spam · Unsubscribe anytime
                </p>
              </div>
            </div>
            {/* Right: form */}
            <div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER ── */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="footer-grid">

          {/* Brand */}
          <div className="">
            <Link href="/" className="footer-logo-link">
              <span className="footer-logo-icon">🚛</span>
              <span className="footer-logo-text">JunkAway<span className="text-orange">Pro</span></span>
            </Link>
            <p className="footer-brand-desc">
              Ontario&apos;s trusted full-service junk removal company serving the GTA with fast, eco-friendly, upfront-priced hauling since 2014.
            </p>
            <div className="footer-badges">
              {["✅ Licensed & Insured","♻️ Eco-Certified","⭐ 4.9 Rated"].map((b) => (
                <span key={b} className="footer-badge-pill">{b}</span>
              ))}
            </div>
            <div className="footer-socials">
              {socials.map(({ char, label }) => (
                <a key={label} href="#" aria-label={label} className="footer-social-icon">{char}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="footer-col-heading">Services</h5>
            <ul className="footer-link-list">
              {services.map((s) => (
                <li key={s}><Link href="/services" className="footer-link">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="footer-col-heading">Company</h5>
            <ul className="footer-link-list">
              {company.map((c) => (
                <li key={c.href}><Link href={c.href} className="footer-link">{c.label}</Link></li>
              ))}
            </ul>
            <h5 className="footer-col-heading" style={{ marginTop: "2rem" }}>Contact</h5>
            <ul className="footer-link-list">
              <li><a href="tel:+16475550192" className="footer-link-orange">647-555-0192</a></li>
              <li><a href="mailto:hello@junkawaypro.ca" className="footer-link">hello@junkawaypro.ca</a></li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h5 className="footer-col-heading">Service Areas</h5>
            <ul className="footer-link-list">
              {areas.map((a) => (
                <li key={a} className="footer-area-item">
                  <span className="text-orange">📍</span>{a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} JunkAway Pro. All rights reserved. Built by{" "}
            <a href="https://www.siinfotech.ca" target="_blank" rel="noopener noreferrer" className="footer-link-dim">
              SI Infotech
            </a>
          </p>
          <div className="footer-legal-links">
            {["Privacy Policy","Terms of Service","Accessibility"].map((t) => (
              <a key={t} href="#" className="footer-link-dim">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
