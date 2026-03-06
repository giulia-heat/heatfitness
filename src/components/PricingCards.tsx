import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const features = [
  "Accesso a tutti i piani di allenamento",
  "Allenamenti organizzati e filtrabili",
  "Live workout settimanali",
  "Ricette semplici e bilanciate",
  "Calendario e monitoraggio del percorso",
];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
      style={{ marginTop: "2px" }}
    >
      <circle cx="9" cy="9" r="9" fill="rgba(232,82,26,0.12)" />
      <path
        d="M5 9l3 3 5-5"
        stroke="#e8521a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingCards() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      style={{ background: "#f5f2ee", padding: "96px 0" }}
    >
      {/* Container centrato con max-width esplicito */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header sezione */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#e8521a",
              marginBottom: "16px",
            }}
          >
            Prezzi
          </p>
          <h2
            id="pricing-title"
            style={{
              fontFamily: "TT-Hoves, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#111111",
              margin: 0,
            }}
          >
            Semplici. Senza vincoli.
          </h2>
          <p
            style={{
              fontFamily: "Geist, sans-serif",
              color: "#7a7060",
              fontSize: "16px",
              lineHeight: 1.7,
              marginTop: "16px",
              maxWidth: "400px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Un unico abbonamento per accedere a tutto. Nessun costo nascosto.
          </p>
        </div>

        {/* Griglia card — allineate in alto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">

          {/* ── Piano Mensile ── */}
          <Card
            style={{
              background: "#ffffff",
              borderRadius: "28px",
              border: "1px solid rgba(17,17,17,0.1)",
              boxShadow: "none",
            }}
          >
            <CardHeader style={{ padding: "32px 32px 0" }}>
              <h3
                style={{
                  fontFamily: "TT-Hoves, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  letterSpacing: "-0.01em",
                  color: "#111111",
                  margin: 0,
                }}
              >
                Piano Mensile
              </h3>
              <p
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontSize: "13px",
                  color: "#7a7060",
                  marginTop: "4px",
                }}
              >
                Inizia senza impegni
              </p>
            </CardHeader>

            <CardContent style={{ padding: "24px 32px" }}>
              {/* Prezzo */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "2px", marginBottom: "4px" }}>
                <span
                  style={{
                    fontFamily: "TT-Hoves, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#111111",
                  }}
                >
                  €
                </span>
                <span
                  style={{
                    fontFamily: "TT-Hoves, sans-serif",
                    fontWeight: 700,
                    fontSize: "52px",
                    lineHeight: 1,
                    color: "#111111",
                  }}
                >
                  24,99
                </span>
              </div>
              <p
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontSize: "12px",
                  color: "#a89e92",
                  marginBottom: "28px",
                }}
              >
                /mese · fatturato mensilmente
              </p>

              {/* Feature list */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontFamily: "Geist, sans-serif",
                      fontSize: "13px",
                      color: "#4a4038",
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter style={{ padding: "0 32px 32px" }}>
              <Button
                asChild
                variant="outline"
                style={{
                  width: "100%",
                  borderRadius: "100px",
                  height: "48px",
                  fontFamily: "Geist, sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  borderColor: "rgba(17,17,17,0.2)",
                  color: "#111111",
                }}
              >
                <a href="https://www.heatfitness.app" rel="noopener">
                  Inizia ora
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* ── Piano Annuale ── */}
          <div>
            {/* Badge SOPRA la card, fuori dal flusso della card */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "0" }}>
              <span
                style={{
                  background: "#e8521a",
                  color: "#ffffff",
                  fontFamily: "Geist, sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "6px 20px 8px",
                  borderRadius: "0 0 16px 16px",
                }}
              >
                Più conveniente
              </span>
            </div>

            <Card
              style={{
                background: "linear-gradient(150deg, rgba(232,82,26,0.07) 0%, #ffffff 50%)",
                borderRadius: "28px",
                border: "2px solid #e8521a",
                boxShadow: "none",
              }}
            >
              <CardHeader style={{ padding: "28px 32px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <h3
                    style={{
                      fontFamily: "TT-Hoves, sans-serif",
                      fontWeight: 700,
                      fontSize: "20px",
                      letterSpacing: "-0.01em",
                      color: "#111111",
                      margin: 0,
                    }}
                  >
                    Piano Annuale
                  </h3>
                  <Badge
                    style={{
                      background: "rgba(232,82,26,0.1)",
                      color: "#e8521a",
                      borderRadius: "100px",
                      border: "none",
                      fontFamily: "Geist, sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      padding: "3px 10px",
                    }}
                  >
                    −33%
                  </Badge>
                </div>
                <p
                  style={{
                    fontFamily: "Geist, sans-serif",
                    fontSize: "13px",
                    color: "#7a7060",
                    marginTop: "4px",
                  }}
                >
                  La scelta di chi vuole continuità
                </p>
              </CardHeader>

              <CardContent style={{ padding: "24px 32px" }}>
                {/* Prezzo barrato */}
                <p
                  style={{
                    fontFamily: "Geist, sans-serif",
                    fontSize: "13px",
                    color: "#a89e92",
                    textDecoration: "line-through",
                    marginBottom: "4px",
                  }}
                >
                  €149,99/anno
                </p>

                {/* Prezzo finale */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "2px", marginBottom: "4px" }}>
                  <span
                    style={{
                      fontFamily: "TT-Hoves, sans-serif",
                      fontWeight: 700,
                      fontSize: "20px",
                      color: "#111111",
                    }}
                  >
                    €
                  </span>
                  <span
                    style={{
                      fontFamily: "TT-Hoves, sans-serif",
                      fontWeight: 700,
                      fontSize: "52px",
                      lineHeight: 1,
                      color: "#111111",
                    }}
                  >
                    99,99
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "Geist, sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#e8521a",
                    marginBottom: "28px",
                  }}
                >
                  Per sempre
                </p>

                {/* Feature list */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontFamily: "Geist, sans-serif",
                        fontSize: "13px",
                        color: "#4a4038",
                        lineHeight: 1.5,
                      }}
                    >
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter style={{ padding: "0 32px 32px" }}>
                <Button
                  asChild
                  style={{
                    width: "100%",
                    borderRadius: "100px",
                    height: "48px",
                    background: "#e8521a",
                    fontFamily: "Geist, sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#ffffff",
                    border: "none",
                    boxShadow: "0 8px 24px rgba(232,82,26,0.3)",
                  }}
                >
                  <a href="https://www.heatfitness.app" rel="noopener">
                    Inizia ora
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>

        </div>

        {/* Garanzie */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            marginTop: "32px",
          }}
        >
          {["Cancella quando vuoi", "Nessun vincolo", "Supporto incluso"].map((g) => (
            <span
              key={g}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "Geist, sans-serif",
                fontSize: "13px",
                color: "#7a7060",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e8521a" strokeWidth="2.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {g}
            </span>
          ))}
        </div>

      </div>

    </section>
  );
}
