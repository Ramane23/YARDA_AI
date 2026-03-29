"use client";

import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { FeaturesPreview } from "@/components/features-preview";
import { Stats } from "@/components/stats";
import { CtaContact } from "@/components/cta-contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <FeaturesPreview />
      <Stats />
      <CtaContact />
    </>
  );
}
