"use client";

interface AuditFormProps {
  dark?: boolean;
}

export default function AuditForm({ dark }: AuditFormProps) {
  const labelCls = `font-[Neue_Montreal] text-[14px] leading-6 ${
    dark ? "text-white" : "text-black"
  }`;

  const inputCls = `w-full border-0 border-b bg-transparent pb-3 pt-1 font-[Neue_Montreal] text-[14px] leading-6 outline-none ${
    dark
      ? "border-[#2a2a2a] text-white placeholder:text-white/40 focus:border-[#05ffe0]"
      : "border-[#d9d9d9] text-black placeholder:text-black/40 focus:border-black"
  }`;

  return (
    <form
      className="flex w-full flex-col gap-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-2">
        <label className={labelCls}>Nom complet</label>
        <input type="text" name="name" className={inputCls} aria-label="Nom complet" />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelCls}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="contact@bolieustudio.com"
          className={inputCls}
          aria-label="Email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelCls}>
          Téléphone{" "}
          <span className={dark ? "text-white/50" : "text-black/50"}>(optionnel)</span>
        </label>
        <input type="tel" name="phone" className={inputCls} aria-label="Téléphone" />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelCls}>Entreprise</label>
        <input type="text" name="company" className={inputCls} aria-label="Entreprise" />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelCls}>Url de votre site web</label>
        <input type="url" name="url" className={inputCls} aria-label="URL du site web" />
      </div>
      <div className="flex flex-col gap-2">
        <label className={`${labelCls} ${dark ? "text-white/50!" : "text-black/50!"}`}>
          Message
        </label>
        <textarea
          name="message"
          rows={3}
          className={`${inputCls} resize-none`}
          aria-label="Message"
        />
      </div>
      <button
        type="submit"
        className={`mt-4 inline-flex w-fit items-center gap-8 rounded-full border px-6 py-3.5 font-[Roboto_Mono] text-[12px] uppercase tracking-wider transition-colors duration-300 ${
          dark
            ? "border-white bg-[#0f0f0f] text-white hover:bg-white hover:text-black"
            : "border-black bg-white text-black hover:bg-black hover:text-white"
        }`}
      >
        Demander mon audit SEO gratuit
        <span className="text-sm leading-none">+</span>
      </button>
    </form>
  );
}
