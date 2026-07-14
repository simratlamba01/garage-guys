"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "/",         label: "Home"     },
  { href: "/about",    label: "About"    },
  { href: "/services", label: "Services" },
  { href: "/pricing",  label: "Pricing"  },
  { href: "/contact",  label: "Contact"  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

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
        background: scrolled ? "rgba(27,45,79,.97)"  : "transparent",
        backdropFilter: scrolled ? "blur(16px)"      : "none",
        borderBottom:   scrolled ? "1px solid rgba(242,223,167,.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-[80px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.png"
              alt="Garage Guys Logo"
              width={52}
              height={52}
              className="rounded-xl transition-transform duration-300 group-hover:scale-105"
              style={{ objectFit: "contain" }}
            />
            {/* <span className="text-xl font-black text-white tracking-tight hidden sm:block">
              Garage<span style={{ color: "#C4622D" }}>Guys</span>
            </span>
            */}
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
                    style={{ color: active ? "#F2DFA7" : "rgba(242,223,167,.65)" }}
                  >
                    {l.label}
                    <span
                      className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300"
                      style={{ background: "#C4622D", width: active ? "100%" : "0%" }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+16475550192" className="text-sm" style={{ color: "rgba(242,223,167,.65)" }}>
              24/7: <span className="font-bold" style={{ color: "#C4622D" }}>647-555-0192</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{ background: "#C4622D" }}
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
                className="block w-6 h-0.5 rounded-full transition-all duration-300 origin-center"
                style={{ background: "#F2DFA7", transform: t, opacity: i === 1 && open ? 0 : 1 }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "440px" : "0",
          background: "rgba(27,45,79,.98)",
          borderTop: open ? "1px solid rgba(242,223,167,.1)" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-3 text-sm font-medium border-b last:border-0"
              style={{
                color: pathname === l.href ? "#C4622D" : "rgba(242,223,167,.75)",
                borderColor: "rgba(242,223,167,.08)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:+16475550192" className="mt-4 text-sm font-bold" style={{ color: "#C4622D" }}>
            📞 647-555-0192
          </a>
          <Link href="/contact" className="mt-3 py-3 px-4 rounded-xl text-sm font-bold text-white text-center" style={{ background: "#C4622D" }}>
            Book Free Estimate
          </Link>
        </div>
      </div>
    </nav>
  );
}
