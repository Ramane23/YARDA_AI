"use client";

import { motion } from "framer-motion";
import {
  Brain,
  ShieldCheck,
  LayoutDashboard,
  MessageSquareText,
  Users,
  RefreshCcw,
  Check,
  Star,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";
import { SectionLabel } from "@/components/section-label";
import { CtaContact } from "@/components/cta-contact";

const ICONS = [
  Brain,
  ShieldCheck,
  LayoutDashboard,
  MessageSquareText,
  Users,
  RefreshCcw,
] as const;

const FEATURE_KEYS = [
  "ai",
  "anonymized",
  "dashboard",
  "explainability",
  "multitenant",
  "retraining",
] as const;

export default function FeaturesPage() {
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
            <SectionLabel text={t("featuresPreview.label")} />
            <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              {t("featuresPreview.title")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              {t("featuresPreview.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature deep-dive */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-24">
            {FEATURE_KEYS.map((key, i) => {
              const Icon = ICONS[i];
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center gap-12 md:flex-row ${
                    !isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon block */}
                  <div className="flex flex-1 items-center justify-center">
                    <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-sky/10 to-accent/10 glow-purple">
                      <Icon className="h-16 w-16 text-sky" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold text-gray-900 md:text-3xl">
                      {t(`feature.${key}.title`)}
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {t(`feature.${key}.desc`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionLabel text={t("pricing.label")} />
            <h2 className="mt-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">
              {t("pricing.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              {t("pricing.subtitle")}
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* Starter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white p-8"
            >
              <h3 className="font-display text-xl font-bold text-gray-900">
                {t("pricing.starter.name")}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {t("pricing.starter.desc")}
              </p>
              <div className="mt-6 font-display text-3xl font-bold text-gray-900">
                {t("pricing.starter.price")}
              </div>
              <ul className="mt-8 space-y-3">
                {(["f1", "f2", "f3", "f4", "f5"] as const).map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-sky" />
                    {t(`pricing.starter.${f}`)}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 block rounded-xl px-7 py-3 text-center text-sm font-semibold text-sky ring-1 ring-sky/20 transition-all hover:bg-sky/5"
              >
                {t("pricing.cta")}
              </a>
            </motion.div>

            {/* Professional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl border-2 border-sky bg-white p-8 shadow-xl shadow-sky/10"
            >
              <div className="absolute -top-3 right-8">
                <span className="rounded-full bg-gradient-to-r from-sky to-accent px-4 py-1 text-xs font-bold text-white">
                  {t("pricing.pro.badge")}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900">
                {t("pricing.pro.name")}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {t("pricing.pro.desc")}
              </p>
              <div className="mt-6 font-display text-3xl font-bold text-gradient">
                {t("pricing.pro.price")}
              </div>
              <ul className="mt-8 space-y-3">
                {(["f1", "f2", "f3", "f4", "f5"] as const).map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-sky" />
                    {t(`pricing.pro.${f}`)}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 block rounded-xl bg-gradient-to-r from-sky to-accent px-7 py-3 text-center text-sm font-bold text-white shadow-lg shadow-sky/25 transition-all hover:shadow-xl hover:brightness-110"
              >
                {t("pricing.cta")}
              </a>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-gray-100 bg-white p-8"
            >
              <div className="mb-4">
                <span className="rounded-full bg-gradient-to-r from-gold/20 to-gold/10 px-5 py-1.5 text-xs font-bold tracking-wider text-gold ring-1 ring-gold/20">
                  <Star className="mb-0.5 mr-1 inline h-3 w-3" />
                  Enterprise
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900">
                {t("pricing.enterprise.name")}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {t("pricing.enterprise.desc")}
              </p>
              <div className="mt-6 font-display text-3xl font-bold text-gray-900">
                {t("pricing.enterprise.price")}
              </div>
              <ul className="mt-8 space-y-3">
                {(["f1", "f2", "f3", "f4", "f5"] as const).map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-gold" />
                    {t(`pricing.enterprise.${f}`)}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 block rounded-xl px-7 py-3 text-center text-sm font-semibold text-sky ring-1 ring-sky/20 transition-all hover:bg-sky/5"
              >
                {t("pricing.cta")}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
