"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11,22,40,.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.08)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black text-white transition-transform group-hover:scale-110" style={{ background: "#FF5C1A" }}>
              🚛
            </span>
            <span className="text-xl font-black text-white tracking-tight">
              JunkAway<span style={{ color: "#FF5C1A" }}>Pro</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="relative text-sm font-medium transition-colors duration-200 pb-1"
                    style={{ color: active ? "#fff" : "rgba(255,255,255,.72)" }}
                  >
                    {l.label}
                    <span
                      className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300"
                      style={{ background: "#FF5C1A", width: active ? "100%" : "0%" }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+16475550192" className="text-sm" style={{ color: "rgba(255,255,255,.7)" }}>
              24/7: <span className="font-bold" style={{ color: "#FF5C1A" }}>647-555-0192</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{ background: "#FF5C1A" }}
            >
              Free Estimate
            </Link>
          </div>

          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {[
              open ? "translateY(7px) rotate(45deg)"  : "",
              open ? "scaleX(0)"                       : "",
              open ? "translateY(-7px) rotate(-45deg)" : "",
            ].map((t, i) => (
              <span
                key={i}
                className="block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
                style={{ transform: t, opacity: i === 1 && open ? 0 : 1 }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "420px" : "0",
          background: "rgba(11,22,40,.98)",
          borderTop: open ? "1px solid rgba(255,255,255,.08)" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-3 text-sm font-medium border-b last:border-0"
              style={{
                color: pathname === l.href ? "#FF5C1A" : "rgba(255,255,255,.8)",
                borderColor: "rgba(255,255,255,.08)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:+16475550192" className="mt-4 text-sm font-bold" style={{ color: "#FF5C1A" }}>
            📞 647-555-0192
          </a>
          <Link href="/contact" className="mt-3 py-3 px-4 rounded-lg text-sm font-bold text-white text-center" style={{ background: "#FF5C1A" }}>
            Book Free Estimate
          </Link>
        </div>
      </div>
    </nav>
  );
}
