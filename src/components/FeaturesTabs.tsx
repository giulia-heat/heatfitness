import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BASE = "https://cdn.prod.website-files.com/695a3cceefe59f7b8ee1f77a";

const features = [
  {
    id: "0",
    label: "00",
    title: "Scegli un piano\nSegui un percorso",
    description:
      "Iscriviti a un piano di allenamento e segui un programma diviso per settimane, pensato per accompagnarti passo dopo passo.",
    img: `${BASE}/697f9a8d9c772cffed327e2f_feature%201.png`,
    imgAlt: "Piani di allenamento HEAT",
  },
  {
    id: "1",
    label: "01",
    title: "Trova il piano perfetto per te",
    description:
      "Trovi tanti piani di allenamento diversi, organizzati per obiettivo, durata e livello.",
    img: `${BASE}/697e3187c2f7874fc3720f60_Change%20This.png`,
    imgAlt: "Scegli il piano HEAT giusto per te",
  },
  {
    id: "2",
    label: "02",
    title: "Lasciati ispirare",
    description:
      "Tanti allenamenti tra cui scegliere per seguire il tuo ritmo e il tuo momento.",
    img: `${BASE}/69a1a54b7e24fc2f82ad8742_Change%20This.png`,
    imgAlt: "Allenamenti ispirati su HEAT",
  },
  {
    id: "3",
    label: "03",
    title: "Mangia bene,\nsenza stress",
    description:
      "Ricette pratiche, filtrabili e facili da integrare nella tua routine quotidiana.",
    img: `${BASE}/697e783b9422637c278ae561_feature%204%20wf.png`,
    imgAlt: "Ricette e alimentazione su HEAT",
  },
  {
    id: "4",
    label: "04",
    title: "Scegli come allenarti",
    description:
      "Filtra gli allenamenti in base al tuo livello, al tempo che hai e a quello che vuoi allenare.",
    img: `${BASE}/697e785aa64f1abb3af6710d_feature%205%20wf.png`,
    imgAlt: "Filtri allenamento su HEAT",
  },
];

export default function FeaturesTabs() {
  return (
    <Tabs defaultValue="0" orientation="vertical" className="flex gap-14 items-start">
      {/* Tab list verticale */}
      <TabsList className="flex flex-col h-auto bg-transparent border-l border-black/10 rounded-none p-0 gap-0 shrink-0">
        {features.map((f) => (
          <TabsTrigger
            key={f.id}
            value={f.id}
            className="
              relative flex items-center px-5 py-5 rounded-none bg-transparent
              text-[#a89e92] font-semibold text-lg leading-none
              border-l-2 border-transparent -ml-px
              data-[state=active]:text-[#111111]
              data-[state=active]:border-[#e8521a]
              data-[state=active]:bg-transparent
              hover:text-[#4a4038]
              transition-all
            "
          >
            {f.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Pannelli */}
      <div className="flex-1 min-w-0">
        {features.map((f) => (
          <TabsContent
            key={f.id}
            value={f.id}
            className="mt-0 data-[state=inactive]:hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Testo */}
              <div className="flex flex-col gap-5">
                <h3
                  className="font-display font-bold text-[#111111] leading-tight"
                  style={{ fontSize: "clamp(28px, 3.2vw, 44px)", letterSpacing: "-0.01em" }}
                >
                  {f.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="text-[#7a7060] text-base leading-relaxed max-w-sm">
                  {f.description}
                </p>
                <a
                  href="#pricing"
                  className="
                    inline-flex items-center w-fit px-5 py-2.5 rounded-full
                    text-[#e8521a] border border-[#e8521a] text-sm font-semibold
                    uppercase tracking-wider
                    hover:bg-[#e8521a] hover:text-white transition-colors
                  "
                >
                  scopri di più
                </a>
              </div>

              {/* Screenshot — altezza max per non far esplodere il layout */}
              <div className="relative flex justify-center">
                <img
                  src={f.img}
                  alt={f.imgAlt}
                  loading="lazy"
                  className="rounded-2xl shadow-xl"
                  style={{ maxHeight: "480px", width: "auto", maxWidth: "100%" }}
                />
                <div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/5 h-12 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse, rgba(232,82,26,0.2) 0%, transparent 70%)",
                    filter: "blur(16px)",
                  }}
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
