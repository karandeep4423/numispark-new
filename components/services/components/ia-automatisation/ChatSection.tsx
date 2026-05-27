import ChatDemo from "./ChatDemo";

const CHAT_FEATURES = [
  "Connecté à votre CRM, vos docs, vos APIs",
  "Réponses sourcées et traçables",
  "Exécute des actions, ne se contente pas de parler",
];

export default function ChatSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(5,255,224,0.12), transparent 50%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-20 lg:px-12 xl:px-16">
        <div>
          <p className="mb-4 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-[#05ffe0]">
            {"{ Démo · Assistant IA }"}
          </p>
          <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight sm:text-[40px] lg:text-[48px]">
            Vos collaborateurs,
            <br />
            <span className="bg-gradient-to-r from-white to-[#05ffe0] bg-clip-text text-transparent">
              augmentés par l&apos;IA.
            </span>
          </h2>
          <p className="mt-6 max-w-md font-[Neue_Montreal] text-[15px] leading-[1.7] text-white/60 lg:text-[17px]">
            Un assistant connecté à vos données qui répond, agit et déclenche
            des workflows. Pas un gadget — un copilote intégré à vos outils
            du quotidien.
          </p>

          <ul className="mt-8 space-y-3">
            {CHAT_FEATURES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-[Neue_Montreal] text-[15px] text-white/75"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#05ffe0]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ChatDemo />
        </div>
      </div>
    </section>
  );
}
