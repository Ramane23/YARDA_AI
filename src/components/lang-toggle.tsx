"use client";

import { useTranslation } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

export function LangToggle() {
  const { lang, setLang } = useTranslation();

  return (
    <div className="flex items-center rounded-lg bg-white/10 p-0.5 text-sm font-semibold">
      {(["FR", "EN"] as const).map((l) => {
        const value = l.toLowerCase() as Lang;
        const active = lang === value;
        return (
          <button
            key={l}
            onClick={() => setLang(value)}
            className={`rounded-md px-3 py-1 transition-all ${
              active
                ? "bg-gradient-to-r from-sky to-accent text-white shadow-sm"
                : "text-white/60 hover:text-white"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
