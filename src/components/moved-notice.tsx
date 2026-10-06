"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n-context";

/** Shown for an instant on a retired URL before the browser follows the redirect. */
export function MovedNotice({ href }: { href: string }) {
  const { t } = useTranslation();
  return (
    <section className="mesh-bg flex min-h-[60vh] items-center justify-center px-6 pt-32 pb-20">
      <p className="text-center text-white/80">
        {t("moved.text")}{" "}
        <Link href={href} className="font-semibold text-white underline">
          {t("moved.link")}
        </Link>
      </p>
    </section>
  );
}
