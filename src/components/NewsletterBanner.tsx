"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Placeholder — integra con la tua piattaforma email
    setSent(true);
  }

  return (
    <section
      aria-label="Inizia con HEAT"
      style={{ background: "#e8521a" }}
      className="w-full py-20 px-6"
    >
      <div
        className="flex flex-col items-center gap-8 text-center"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <div className="flex flex-col gap-3">
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
          >
            Inizia oggi.<br />
            Al resto pensa HEAT.
          </h2>
          <p className="text-white/80 text-base leading-relaxed">
            Allenamenti già programmati, progressioni guidate e un metodo che evolve con te. Tu devi solo iniziare.
          </p>
        </div>

        {sent ? (
          <p className="text-white font-semibold text-lg">
            Perfetto! Ti contatteremo presto.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 w-full max-w-md"
            noValidate
          >
            <Input
              type="email"
              placeholder="La tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Indirizzo email"
              className="h-12 rounded-full px-5 border-0 bg-white text-[#111] placeholder:text-[#a89e92] focus-visible:ring-2 focus-visible:ring-white/50 flex-1"
            />
            <Button
              type="submit"
              className="h-12 px-7 rounded-full font-bold text-[#e8521a] bg-white hover:bg-white/90 shrink-0"
            >
              Inizia con HEAT
            </Button>
          </form>
        )}

        <p className="text-white/55 text-[12px]">
          Prezzo bloccato a €99,99 per i primi 500 abbonati. Non aumenterà ai rinnovi.
        </p>
      </div>
    </section>
  );
}
