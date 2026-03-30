"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/lib/i18n-context";
import { SectionLabel } from "./section-label";
import { NetworkVisual } from "./network-visual";

const STAT_KEYS = ["transactions", "fraud", "clients", "response"] as const;

// Define the numeric targets and how to format each stat
const STAT_CONFIG: Record<string, { target: number; prefix?: string; suffix: string; decimals?: number }> = {
  transactions: { target: 2, suffix: "M+" },
  fraud: { target: 99.2, suffix: "%", decimals: 1 },
  clients: { target: 15, suffix: "+" },
  response: { target: 200, prefix: "<", suffix: "ms" },
};

function AnimatedNumber({ target, prefix = "", suffix, decimals = 0, duration = 2 }: {
  target: number; prefix?: string; suffix: string; decimals?: number; duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <div ref={ref} className="font-display text-5xl font-bold text-gradient md:text-6xl">
      {prefix}{display}{suffix}
    </div>
  );
}

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
          {STAT_KEYS.map((key, i) => {
            const config = STAT_CONFIG[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <AnimatedNumber
                  target={config.target}
                  prefix={config.prefix}
                  suffix={config.suffix}
                  decimals={config.decimals}
                />
                <p className="mt-2 text-sm font-medium text-gray-400">
                  {t(`stats.${key}`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
