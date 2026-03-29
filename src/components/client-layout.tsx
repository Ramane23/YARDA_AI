"use client";

import { ReactNode } from "react";
import { I18nProvider } from "@/lib/i18n-context";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </I18nProvider>
  );
}
