import type { Metadata } from "next";
import { MovedNotice } from "@/components/moved-notice";

/**
 * `/references` used to list client references and testimonials that could
 * not be substantiated; the page was removed. This stub keeps old links and
 * search results working by sending visitors to the About page.
 *
 * The site is a static export, where `next.config` redirects are not
 * supported, so the redirect is an HTML meta refresh (works without
 * JavaScript; React hoists it into <head>).
 */
const DESTINATION = "/about";

export const metadata: Metadata = {
  title: "YARDA AI",
  robots: { index: false, follow: true },
};

export default function ReferencesMovedPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${DESTINATION}`} />
      <MovedNotice href={DESTINATION} />
    </>
  );
}
