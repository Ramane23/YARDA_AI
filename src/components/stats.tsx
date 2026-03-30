"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n-context";
import { SectionLabel } from "./section-label";
import { NetworkVisual } from "./network-visual";

const STAT_KEYS = ["transactions", "fraud", "clients", "response"] as const;

export function Stats() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionLabel text={t("stats.label")} />
        </motion.div>

        <div className="mt-8">
          <NetworkVisual />
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STAT_KEYS.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-5xl font-bold text-gradient md:text-6xl">
                {t(`stats.${key}.value`)}
              </div>
              <p className="mt-2 text-sm font-medium text-gray-400">
                {t(`stats.${key}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
