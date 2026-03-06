"use client";
import { useState } from "react";

const faqs = [
  {
    id: "faq-1",
    question: "Cos'è HEAT? È diversa da Cotto al Dente?",
    answer:
      "HEAT è l'evoluzione dell'app Cotto al Dente. Stessi valori, stessa qualità, ma un'esperienza ancora più chiara, più guidata e pensata per guidarti verso il tuo obiettivo. Se conoscevi Cotto al Dente, con HEAT ti sentirai subito a casa.",
  },
  {
    id: "faq-2",
    question: "Se avevo già un abbonamento su Cotto al Dente?",
    answer:
      "Se avevi un abbonamento attivo su Cotto al Dente, resta valido anche su HEAT. Non devi riacquistare nulla: il tuo abbonamento continua senza interruzioni e senza costi aggiuntivi.",
  },
  {
    id: "faq-3",
    question: "A chi è adatta HEAT?",
    answer:
      "HEAT è pensata per chi vuole allenarsi da casa o dove preferisce in modo flessibile, migliorare tono, forza e forma fisica, e seguire programmi chiari senza improvvisare. Non serve essere esperti: trovi piani per diversi livelli.",
  },
  {
    id: "faq-4",
    question: "Quanto tempo devo allenarmi a settimana?",
    answer:
      "Dipende da te. Su HEAT trovi allenamenti di diversa durata, anche brevi, e puoi scegliere i giorni in base alla tua routine. L'obiettivo è rendere l'allenamento sostenibile nel tempo, non perfetto.",
  },
  {
    id: "faq-5",
    question: "Posso disdire quando voglio?",
    answer:
      "Sì. Puoi gestire o disdire il tuo abbonamento in qualsiasi momento, senza vincoli e senza costi nascosti.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {faqs.map((faq) => {
        const isOpen = open === faq.id;
        return (
          <div
            key={faq.id}
            style={{
              background: "#e4e0da",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : faq.id)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                padding: "20px 24px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontSize: "15px",
                fontWeight: 600,
                color: isOpen ? "#e8521a" : "#111111",
                transition: "color 0.2s",
              }}
            >
              <span>{faq.question}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isOpen ? "#e8521a" : "#111111"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  flexShrink: 0,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.25s, stroke 0.2s",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div
              style={{
                maxHeight: isOpen ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <p
                style={{
                  padding: "0 24px 20px",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: "#7a7060",
                  margin: 0,
                }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
