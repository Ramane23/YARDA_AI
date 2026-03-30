"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n-context";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/logo_with_name.png"
                alt="YARDA AI"
                width={200}
                height={56}
                className="h-24 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-colors hover:bg-white/10"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-colors hover:bg-white/10"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("footer.nav")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/features" className="hover:text-white transition-colors">{t("nav.features")}</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">{t("nav.howItWorks")}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{t("nav.about")}</Link></li>
              <li><Link href="/references" className="hover:text-white transition-colors">{t("nav.references")}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">{t("footer.privacy")}</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">{t("footer.terms")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm">{t("footer.made")}</p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} YARDA AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
