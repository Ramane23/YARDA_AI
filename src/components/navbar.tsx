"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";
import { LangToggle } from "./lang-toggle";

const NAV_LINKS = [
  { href: "/features", key: "nav.features" as const },
  { href: "/how-it-works", key: "nav.howItWorks" as const },
  { href: "/about", key: "nav.about" as const },
  { href: "/references", key: "nav.references" as const },
];

export function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-lg shadow-navy/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_with_name.png"
            alt="YARDA AI"
            width={200}
            height={56}
            className={`h-24 w-auto transition-all ${
              scrolled ? "brightness-0" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? "text-sky"
                  : scrolled
                  ? "text-gray-600 hover:text-sky"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {t(key)}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden items-center gap-4 md:flex">
          <LangToggle />
          <Link
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-sky to-accent px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky/25 transition-all hover:shadow-xl hover:brightness-110"
          >
            {t("nav.demo")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {NAV_LINKS.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium ${
                  pathname === href ? "text-sky" : "text-white/80"
                }`}
              >
                {t(key)}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <LangToggle />
              <Link
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-sky to-accent px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky/25"
              >
                {t("nav.demo")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
