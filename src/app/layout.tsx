import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/client-layout";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YARDA AI — Detection de Fraude par IA pour l'Afrique",
  description:
    "Plateforme de detection de fraude par intelligence artificielle pour les operateurs de transfert d'argent et de mobile money en Afrique et dans la diaspora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
