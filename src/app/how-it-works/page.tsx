"use client";

import { motion } from "framer-motion";
import { Plug, Search, GraduationCap, Rocket } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";
import { SectionLabel } from "@/components/section-label";
import { CtaContact } from "@/components/cta-contact";

const STEPS = [
  { icon: Plug, key: "step1" as const, phase: "Phase 1" },
  { icon: Search, key: "step2" as const, phase: "Phase 2" },
  { icon: GraduationCap, key: "step3" as const, phase: "Phase 3" },
  { icon: Rocket, key: "step4" as const, phase: "Phase 4" },
];

export default function HowItWorksPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="mesh-bg pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SectionLabel text={t("howItWorks.label")} />
            <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              {t("howItWorks.title")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              {t("howItWorks.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-sky via-accent to-sky/20 md:block" />

            <div className="space-y-16">
              {STEPS.map(({ icon: Icon, key, phase }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex gap-8"
                >
                  {/* Step number */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky to-accent text-white shadow-lg shadow-sky/25">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="flex-1 pb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-sky">
                      {phase}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-gray-900">
                      {t(`howItWorks.${key}.title`)}
                    </h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {t(`howItWorks.${key}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <SectionLabel text={t("howItWorks.api.label")} />
              <h2 className="mt-4 font-display text-3xl font-bold text-gray-900">
                {t("howItWorks.api.title")}
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {t("howItWorks.api.desc")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <div className="rounded-2xl bg-navy p-6 font-mono text-sm">
                <div className="text-gray-400">
                  <span className="text-accent">POST</span>{" "}
                  <span className="text-white">/api/v1/predict/fraud</span>
                </div>
                <pre className="mt-4 text-sky-400">
{`{
  "transaction": {
    "amount": 150000,
    "currency": "XOF",
    "corridor": "EUR_XOF"
  }
}`}
                </pre>
                <div className="mt-4 border-t border-white/10 pt-4 text-gray-400">
                  <span className="text-green-400">Response</span>{" "}
                  <span className="text-white/40">200 OK — 142ms</span>
                </div>
                <pre className="mt-2 text-accent/80">
{`{
  "decision": "alert",
  "fraud_score": 0.78,
  "explanation": "..."
}`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
