"use client";

export function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky">
      <span className="inline-block h-px w-6 bg-gradient-to-r from-sky to-accent" />
      {text}
    </span>
  );
}
