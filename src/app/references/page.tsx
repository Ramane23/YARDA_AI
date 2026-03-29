"use client";

import { motion } from "framer-motion";
import { Building2, Quote, TrendingDown, Target, DollarSign } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";
import { SectionLabel } from "@/components/section-label";
import { CtaContact } from "@/components/cta-contact";

const CLIENTS = [
  "MTO Alpha",
  "TransAfrica Pay",
  "WalletConnect MMO",
  "SafeSend",
  "DiasporaPay",
  "AfriTransfer",
];

const TESTIMONIALS = [
  {
    quote: {
      fr: "Grâce à YARDA, nous avons réduit nos pertes liées à la fraude de 85% en seulement 3 mois. L'intégration API a été faite en une demi-journée. Nos rapports de conformité sont maintenant irréprochables auprès de la CENTIF.",
      en: "Thanks to YARDA, we reduced our fraud-related losses by 85% in just 3 months. The API integration was done in half a day. Our compliance reports are now impeccable with CENTIF.",
    },
    author: "Directeur des Opérations",
    company: "MTO Alpha",
  },
  {
    quote: {
      fr: "L'IA explicable nous permet de justifier chaque décision auprès des régulateurs. Nos équipes de conformité adorent la transparence et la piste d'audit complète.",
      en: "The explainable AI lets us justify every decision to regulators. Our compliance teams love the transparency and the complete audit trail.",
    },
    author: "Responsable Conformité",
    company: "TransAfrica Pay",
  },
  {
    quote: {
      fr: "Passer des règles statiques à l'IA hybride de YARDA a été un tournant. Moins de faux positifs, plus de vrais fraudeurs détectés, et une conformité LCB-FT renforcée.",
      en: "Switching from static rules to YARDA's hybrid AI was a turning point. Fewer false positives, more real fraudsters caught, and strengthened AML/CFT compliance.",
    },
    author: "CTO",
    company: "DiasporaPay",
  },
];

const METRIC_ICONS = [TrendingDown, Target, DollarSign] as const;
const METRIC_KEYS = ["metric1", "metric2", "metric3"] as const;

export default function ReferencesPage() {
  const { t, lang } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="mesh-bg pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SectionLabel text={t("references.label")} />
            <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              {t("references.title")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              {t("references.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {CLIENTS.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:shadow-lg hover:shadow-sky/5"
              >
                <Building2 className="h-10 w-10 text-gray-300" />
                <p className="mt-3 text-sm font-medium text-gray-600">
                  {client}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionLabel text={t("references.testimonials.label")} />
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-gray-100 bg-white p-8"
              >
                <Quote className="mb-4 h-8 w-8 text-sky/20" />
                <p className="text-sm leading-relaxed text-gray-600">
                  &ldquo;{testimonial.quote[lang]}&rdquo;
                </p>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionLabel text={t("references.metrics.label")} />
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {METRIC_KEYS.map((key, i) => {
              const Icon = METRIC_ICONS[i];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-gray-100 bg-white p-8 text-center"
                >
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky/10 to-accent/10 text-sky">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-6 font-display text-4xl font-bold text-gradient">
                    {t(`references.${key}.value`)}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-gray-900">
                    {t(`references.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {t(`references.${key}.desc`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
