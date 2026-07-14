// ══════════════════════════════════════════════════════════════
//  JUNKAWAY PRO — PRICING CONFIGURATION
//  Edit this file to customize pricing per date / service
// ══════════════════════════════════════════════════════════════

export type ServiceKey = "starter" | "half_truck" | "full_truck" | "estate" | "commercial";

export interface ServicePricing {
  starter: number;
  half_truck: number;
  full_truck: number;
  estate: number;
  commercial: number;
}

// ── 1. BASE PRICES (default for every date) ──────────────────
export const basePrices: ServicePricing = {
  starter:    99,
  half_truck: 299,
  full_truck: 499,
  estate:     649,
  commercial: 799,
};

// ── 2. DATE OVERRIDES (format: "YYYY-MM-DD") ─────────────────
// Only add the services you want to change. Others stay at base.
export const datePrices: Record<string, Partial<ServicePricing>> = {
  "2025-07-01": { starter: 79, half_truck: 249, full_truck: 429 },        // Canada Day deal
  "2025-08-04": { starter: 79, half_truck: 249, full_truck: 429 },        // Civic Holiday deal
  "2025-11-28": { starter: 79, half_truck: 239, full_truck: 399, estate: 549, commercial: 699 }, // Black Friday
  "2025-12-26": { starter: 129, half_truck: 379, full_truck: 599 },       // Boxing Day premium
  "2026-01-02": { starter: 119, half_truck: 349, full_truck: 549 },       // Post NY premium
  "2026-08-18": { starter: 200, half_truck: 349, full_truck: 549 },       // Post NY premium
};

// ── 3. BLOCKED DATES (no bookings accepted) ───────────────────
export const blockedDates: string[] = [
  "2025-12-25",
  "2025-01-01",
  "2026-01-01",
  "2026-12-25",
];

// ── 4. DAY-OF-WEEK MULTIPLIERS (0=Sun … 6=Sat) ───────────────
// 1.0 = standard, 1.15 = 15% weekend surcharge, 0.9 = discount
export const dowMultipliers: Record<number, number> = {
  0: 1.15, // Sunday
  1: 1.0,  // Monday
  2: 1.0,  // Tuesday
  3: 1.0,  // Wednesday
  4: 1.0,  // Thursday
  5: 1.0,  // Friday
  6: 1.15, // Saturday
};

// ── SERVICE LABELS ────────────────────────────────────────────
export const serviceInfo: Record<ServiceKey, { label: string; icon: string; desc: string }> = {
  starter:    { label: "Starter Load",   icon: "📦", desc: "1–3 items · up to ¼ truck" },
  half_truck: { label: "Half Truck",     icon: "🚛", desc: "1–2 rooms · up to ½ truck" },
  full_truck: { label: "Full Truck",     icon: "🚚", desc: "Full home or large cleanout" },
  estate:     { label: "Estate Cleanout",icon: "🏠", desc: "Full estate / hoarding job" },
  commercial: { label: "Commercial",     icon: "🏢", desc: "Office, retail, industrial" },
};

// ── HELPER ────────────────────────────────────────────────────
export function getPricingForDate(dateStr: string): ServicePricing & { blocked: boolean; surcharge: boolean; note: string } {
  if (blockedDates.includes(dateStr)) {
    return { ...basePrices, blocked: true, surcharge: false, note: "Not available — closed on this date." };
  }
  const dow = new Date(dateStr + "T12:00:00").getDay();
  const mult = dowMultipliers[dow] ?? 1.0;
  const ov = datePrices[dateStr] ?? {};
  const round5 = (n: number) => Math.round(n / 5) * 5;
  const surcharge = mult !== 1.0;
  const specialNote = datePrices[dateStr] ? "Special pricing active on this date 🎉" : "";
  const sundayNote = surcharge ? `Weekend rate (${((mult - 1) * 100).toFixed(0)}% premium applies)` : "";
  return {
    starter:    round5((ov.starter    ?? basePrices.starter)    * mult),
    half_truck: round5((ov.half_truck ?? basePrices.half_truck) * mult),
    full_truck: round5((ov.full_truck ?? basePrices.full_truck) * mult),
    estate:     round5((ov.estate     ?? basePrices.estate)     * mult),
    commercial: round5((ov.commercial ?? basePrices.commercial) * mult),
    blocked: false,
    surcharge,
    note: specialNote || sundayNote,
  };
}
