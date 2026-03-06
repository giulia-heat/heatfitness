import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "10K+", label: "Utenti attivi" },
  { value: "500+", label: "Allenamenti disponibili" },
  { value: "4.9 ★", label: "Rating medio" },
];

const badges = [
  "Accesso immediato",
  "Live workout settimanali",
  "Ricette incluse",
  "Calendario e monitoraggio",
];

export default function SocialProof() {
  return (
    <section
      className="w-full border-y"
      style={{
        background: "#f5f2ee",
        borderColor: "rgba(17,17,17,0.08)",
      }}
    >
      {/* Numeri stats */}
      <div
        className="flex items-stretch justify-center divide-x"
        style={{ borderColor: "rgba(17,17,17,0.08)" }}
      >
        {stats.map((s, i) => (
          <div
            key={s.value}
            className="flex flex-col items-center justify-center gap-2 px-12 py-10"
            style={{
              borderColor: "rgba(17,17,17,0.08)",
              borderRightColor: i < stats.length - 1 ? "rgba(17,17,17,0.08)" : "transparent",
            }}
          >
            <span
              style={{
                fontFamily: "TT-Hoves, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(40px, 4.5vw, 60px)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: "#111111",
              }}
            >
              {s.value}
            </span>
            <span
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7a7060",
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Divisore */}
      <div style={{ height: "1px", background: "rgba(17,17,17,0.08)" }} />

      {/* Badge caratteristiche */}
      <div className="flex flex-wrap items-center justify-center gap-2 px-6 py-5">
        {badges.map((b) => (
          <Badge
            key={b}
            variant="outline"
            style={{
              borderRadius: "100px",
              padding: "6px 16px",
              fontSize: "12px",
              fontWeight: 500,
              borderColor: "rgba(17,17,17,0.15)",
              color: "#4a4038",
              background: "#ffffff",
              fontFamily: "Geist, sans-serif",
            }}
          >
            {b}
          </Badge>
        ))}
      </div>
    </section>
  );
}
