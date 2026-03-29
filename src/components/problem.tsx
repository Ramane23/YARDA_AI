"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldOff, Globe } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";
import { SectionLabel } from "./section-label";

const ICONS = [TrendingUp, ShieldOff, Globe] as const;

export function Problem() {
  const { t } = useTranslation();

  const cards = [
    { title: t("problem.card1.title"), desc: t("problem.card1.desc") },
    { title: t("problem.card2.title"), desc: t("problem.card2.desc") },
    { title: t("problem.card3.title"), desc: t("problem.card3.desc") },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionLabel text={t("problem.label")} />
          <h2 className="mt-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">
            {t("problem.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            {t("problem.subtitle")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky/10"
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-sky to-accent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky/10 to-accent/10 text-sky transition-all duration-500 group-hover:from-sky group-hover:to-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
