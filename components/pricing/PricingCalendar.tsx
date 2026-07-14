"use client";
import { useState, useMemo } from "react";
import { getPricingForDate, serviceInfo, blockedDates, datePrices } from "@/data/pricing";
import Link from "next/link";

const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function toStr(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
}

export default function PricingCalendar() {
  const today = new Date();
  today.setHours(0,0,0,0);
  const [year,  setYear]  = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<string | null>(null);

  const pricing = useMemo(() => selected ? getPricingForDate(selected) : null, [selected]);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  while (cells.length % 7 !== 0) cells.push(null);

  function prev() { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); setSelected(null); }
  function next() { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); setSelected(null); }

  function getDayStyle(day: number) {
    const ds = toStr(year, month, day);
    const d = new Date(year, month, day);
    const isPast = d < today;
    const isBlocked = blockedDates.includes(ds);
    const isSelected = selected === ds;
    const hasSpecial = !!datePrices[ds];
    const dow = d.getDay();
    const isWeekend = dow === 0 || dow === 6;

    if (isPast || isBlocked) return { style: "cal-disabled cal-past", bg: "#F1F5F9", color: "#CBD5E0", dot: null };
    if (isSelected)          return { style: "cal-day selected ring-2", bg: "#FF5C1A", color: "#fff", dot: null };
    if (hasSpecial)          return { style: "cal-day", bg: "rgba(247,242,232,.8)", color: "var(--navy)", dot: "special" };
    if (isWeekend)           return { style: "cal-day", bg: "var(--slate)", color: "var(--navy)", dot: "weekend" };
    return                          { style: "cal-day", bg: "#fff",    color: "var(--navy)", dot: null };
  }

  const fmtPrice = (n: number) => `$${n}`;
  const services = Object.entries(serviceInfo) as [keyof typeof serviceInfo, typeof serviceInfo[keyof typeof serviceInfo]][];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

      {/* ── CALENDAR ── */}
      <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl" style={{ border: "1px solid var(--border)" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5" style={{ background: "var(--navy)" }}>
          <button onClick={prev} className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-all hover:scale-110" style={{ background: "rgba(242,223,167,.1)" }} aria-label="Previous month">‹</button>
          <h3 className="font-black text-white text-lg">{MONTHS[month]} {year}</h3>
          <button onClick={next} className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-all hover:scale-110" style={{ background: "rgba(242,223,167,.1)" }} aria-label="Next month">›</button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 px-4 pt-4 pb-2">
          {DAYS.map((d) => (
            <div key={d} className="text-center text-xs font-bold uppercase tracking-wide py-1" style={{ color: "var(--mid)" }}>{d}</div>
          ))}
        </div>

        {/* Day grid */}
        <div className="grid grid-cols-7 gap-1.5 px-4 pb-5">
          {cells.map((day, i) => {
            if (!day) return <div key={i} />;
            const ds = toStr(year, month, day);
            const { style, bg, color, dot } = getDayStyle(day);
            const d = new Date(year, month, day);
            const isPast = d < today;
            const isBlocked = blockedDates.includes(ds);

            return (
              <button
                key={i}
                onClick={() => !isPast && !isBlocked && setSelected(ds)}
                className={`${style} flex flex-col items-center justify-center py-2 min-h-[52px] w-full text-sm font-semibold`}
                style={{ background: bg, color }}
                aria-label={`${day} ${MONTHS[month]} ${year}`}
                aria-pressed={selected === ds}
                disabled={isPast || isBlocked}
              >
                <span>{day}</span>
                {dot === "special" && <span className="w-1.5 h-1.5 rounded-full mt-0.5" style={{ background: "var(--orange)" }} />}
                {dot === "weekend" && <span className="w-1.5 h-1.5 rounded-full mt-0.5" style={{ background: "#8896A4" }} />}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-5 flex-wrap px-5 py-4" style={{ borderTop: "1px solid #E2E8F0", background: "#FAFAFA" }}>
          {[
            { dot: "#FF5C1A", label: "Special pricing" },
            { dot: "#8896A4", label: "Weekend rate" },
            { dot: "#E2E8F0", label: "Unavailable" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2 text-xs" style={{ color: "var(--mid)" }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: l.dot }} />{l.label}
            </div>
          ))}
        </div>
      </div>

      {/* ── PRICE PANEL ── */}
      <div className="lg:col-span-2">
        {!selected ? (
          <div className="rounded-2xl p-8 text-center" style={{ background: "#F5F7FA", border: "2px dashed #E2E8F0" }}>
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "var(--navy)" }}>Select a Date</h3>
            <p className="text-sm" style={{ color: "var(--mid)" }}>Click any available date on the calendar to see live pricing for all service tiers.</p>
          </div>
        ) : pricing?.blocked ? (
          <div className="rounded-2xl p-8 text-center" style={{ background: "#FFF1F0", border: "2px solid #FCA5A5" }}>
            <div className="text-5xl mb-4">🚫</div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#DC2626" }}>Not Available</h3>
            <p className="text-sm" style={{ color: "#DC2626" }}>{pricing.note}</p>
            <p className="text-xs mt-2" style={{ color: "var(--mid)" }}>Please select another date.</p>
          </div>
        ) : pricing ? (
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ border: "1px solid var(--border)" }}>
            {/* Panel header */}
            <div className="px-6 py-5" style={{ background: "var(--navy)" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: "rgba(242,223,167,.55)" }}>Pricing for</p>
              <h3 className="text-xl font-black text-white">
                {new Date(selected + "T12:00:00").toLocaleDateString("en-CA", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
              </h3>
              {pricing.note && (
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(255,92,26,.25)", color: "var(--cream)" }}>
                  ⚡ {pricing.note}
                </div>
              )}
            </div>

            {/* Price rows */}
            <div className="divide-y" style={{ borderColor: "var(--border)" }}>
              {services.map(([key, info]) => (
                <div key={key} className="flex items-center justify-between px-6 py-4 hover:bg-amber-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{info.icon}</span>
                    <div>
                      <div className="text-sm font-bold" style={{ color: "var(--navy)" }}>{info.label}</div>
                      <div className="text-xs" style={{ color: "var(--mid)" }}>{info.desc}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black" style={{ color: "var(--orange)" }}>{fmtPrice(pricing[key])}<span className="text-sm font-normal" style={{ color: "var(--mid)" }}>+</span></div>
                    <div className="text-xs" style={{ color: "var(--mid)" }}>CAD</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Book CTA */}
            <div className="p-5" style={{ background: "var(--slate)" }}>
              <Link
                href={`/contact?date=${selected}`}
                className="block w-full text-center py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 hover:scale-[1.02] active:scale-95"
                style={{ background: "var(--orange)" }}
              >
                🚛 Book This Date — Free Estimate
              </Link>
              <p className="text-center text-xs mt-3" style={{ color: "var(--mid)" }}>Firm quote provided on-site. HST extra. No credit card required.</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
