"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  SlidersHorizontal,
  LayoutDashboard,
  MessageSquareText,
  Users,
  RefreshCcw,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";
import { SectionLabel } from "./section-label";

const ICONS = [
  Brain,
  SlidersHorizontal,
  LayoutDashboard,
  MessageSquareText,
  Users,
  RefreshCcw,
] as const;

const FEATURE_KEYS = [
  "ai",
  "rules",
  "dashboard",
  "explainability",
  "multitenant",
  "retraining",
] as const;

export function FeaturesPreview() {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionLabel text={t("featuresPreview.label")} />
          <h2 className="mt-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">
            {t("featuresPreview.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            {t("featuresPreview.subtitle")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_KEYS.map((key, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky/10"
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-sky to-accent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky/10 to-accent/10 text-sky transition-all duration-500 group-hover:from-sky group-hover:to-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-gray-900">
                  {t(`feature.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {t(`feature.${key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky transition-colors hover:text-sky-600"
          >
            {t("featuresPreview.cta")}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
