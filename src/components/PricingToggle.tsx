"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const BASE = "https://cdn.prod.website-files.com/695a3cceefe59f7b8ee1f77a";
const LOGO = `${BASE}/6973a72cebbbf19eca3d5d06_LOGO%20heat.svg`;

const sharedFeatures = [
  "Accesso a tutti i piani di allenamento",
  "Allenamenti organizzati e filtrabili",
  "Live workout settimanali",
  "Ricette semplici e bilanciate",
  "Calendario e monitoraggio del percorso",
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="rgba(232,82,26,0.15)" />
      <path
        d="M5.5 9l2.5 2.5 4.5-4.5"
        stroke="#e8521a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingToggle() {
  const [yearly, setYearly] = useState(true);

  return (
    <div className="flex flex-col items-center gap-12">
      {/* Toggle */}
      <div
        className="flex items-center gap-1 p-1 rounded-full border border-black/10"
        style={{ background: "#f5f2ee" }}
        role="group"
        aria-label="Seleziona periodo di fatturazione"
      >
        <button
          onClick={() => setYearly(false)}
          aria-pressed={!yearly ? "true" : "false"}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            !yearly
              ? "bg-[#e8521a] text-white shadow"
              : "text-[#7a7060] hover:text-[#111]"
          }`}
        >
          Mensile
        </button>
        <button
          onClick={() => setYearly(true)}
          aria-pressed={yearly ? "true" : "false"}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            yearly
              ? "bg-[#e8521a] text-white shadow"
              : "text-[#7a7060] hover:text-[#111]"
          }`}
        >
          Annuale
        </button>
      </div>

      {/* Cards — items-stretch garantisce stessa altezza */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl mx-auto items-stretch">

        {/* Piano Mensile */}
        <article
          className="rounded-[40px] border border-black/10 pt-8 px-9 pb-9 flex flex-col gap-6 transition-all hover:-translate-y-1"
          style={{ background: "#f5f2ee" }}
          aria-label="Piano mensile HEAT"
        >
          <div className="flex flex-col gap-1.5">
            <h3
              className="font-display font-bold text-[#111111]"
              style={{ fontSize: "26px", letterSpacing: "-0.01em" }}
            >
              Piano Mensile
            </h3>
            <p className="text-[13px] text-[#7a7060]">
              Perfetto per chi vuole iniziare senza impegni
            </p>
          </div>

          <div className="flex flex-col gap-1">
            {/* Riga vuota allineata col prezzo barrato dell'annuale */}
            <div className="h-5" aria-hidden="true" />
            <div className="flex items-baseline gap-1">
              <span className="font-display font-bold text-[#111] text-2xl">€</span>
              <span className="font-display font-bold text-[#111]" style={{ fontSize: "56px", lineHeight: 1 }}>
                24,99
              </span>
            </div>
            <span className="text-[13px] text-[#7a7060]">/mese · fatturato mensilmente</span>
          </div>

          <ul className="flex flex-col gap-3 flex-1">
            {sharedFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#4a4038]">
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            variant="outline"
            className="w-full rounded-full border-[#111]/20 text-[#111] hover:bg-[#111]/5 font-semibold py-5"
          >
            <a href="https://www.heatfitness.app" rel="noopener">
              Inizia ora
            </a>
          </Button>
        </article>

        {/* Piano Annuale */}
        <article
          className="relative rounded-[40px] border-2 border-[#e8521a] pt-8 px-9 pb-9 flex flex-col gap-6 transition-all hover:-translate-y-1 overflow-hidden"
          style={{
            background: "linear-gradient(160deg, rgba(232,82,26,0.08) 0%, #f5f2ee 60%)",
          }}
          aria-label="Piano annuale HEAT – consigliato"
        >
          {/* Badge superiore — fuori dal flusso, non altera l'altezza */}
          <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none">
            <span className="bg-[#e8521a] text-white text-[10px] font-bold tracking-widest uppercase px-5 py-1.5 rounded-b-2xl whitespace-nowrap">
              Solo per i primi 500 utenti
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            <h3
              className="font-display font-bold text-[#111111]"
              style={{ fontSize: "26px", letterSpacing: "-0.01em" }}
            >
              Piano Annuale
            </h3>
            <p className="text-[13px] text-[#7a7060]">
              La scelta migliore per chi vuole continuità
            </p>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[14px] text-[#a89e92] line-through">€149,99/anno</span>
            <div className="flex items-baseline gap-1">
              <span className="font-display font-bold text-[#111] text-2xl">€</span>
              <span className="font-display font-bold text-[#111]" style={{ fontSize: "56px", lineHeight: 1 }}>
                99,99
              </span>
            </div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#e8521a]">
              Per sempre · risparmi 33%
            </span>
          </div>

          <ul className="flex flex-col gap-3 flex-1">
            {sharedFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#4a4038]">
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            className="w-full rounded-full bg-[#e8521a] hover:bg-[#c43f0d] text-white font-semibold shadow-lg shadow-orange-200 py-5"
          >
            <a href="https://www.heatfitness.app" rel="noopener">
              Inizia ora
            </a>
          </Button>
        </article>
      </div>
    </div>
  );
}
