"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 12500, suffix: "+", label: "Loads Removed" },
  { target: 1840,  suffix: "+", label: "5-Star Reviews" },
  { target: 95,    suffix: "%", label: "Eco-Diverted Waste" },
  { target: 7,     suffix: " Cities", label: "GTA Served" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60 * 1.8;
        let i = 0;
        const id = setInterval(() => {
          i++;
          setVal(Math.round(target * (i / steps)));
          if (i >= steps) { setVal(target); clearInterval(id); }
        }, 1000 / 60);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl font-black" style={{ color: "var(--cream)" }}>
      {val.toLocaleString()}{suffix}
    </div>
  );
}

export default function HeroStats() {
  return (
    <section className="py-14" style={{ background: "var(--orange)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter target={s.target} suffix={s.suffix} />
              <p className="text-xs mt-2 uppercase tracking-wider font-semibold" style={{ color: "rgba(242,223,167,.75)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
