"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Clock, ShieldCheck } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="mesh-bg relative overflow-hidden pt-32 pb-24">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-sky/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="rounded-full bg-gradient-to-r from-sky/20 to-accent/20 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white/90 ring-1 ring-white/10">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 max-w-2xl font-display text-4xl font-bold leading-tight text-white md:text-5xl md:leading-tight"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-white/60"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Link
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-sky to-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky/25 transition-all hover:shadow-xl hover:brightness-110"
              >
                {t("hero.cta.demo")}
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-xl px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 transition-all hover:bg-white/10 hover:ring-white/40"
              >
                {t("hero.cta.howItWorks")}
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
            >
              {[
                { icon: Clock, text: t("hero.trust.speed") },
                { icon: ShieldCheck, text: t("hero.trust.uptime") },
                { icon: Zap, text: t("hero.trust.compliance") },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-white/50"
                >
                  <Icon className="h-4 w-4 text-sky-400" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Globe image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <Image
              src="/west_africa.png"
              alt="West Africa Globe"
              width={520}
              height={520}
              className="h-auto w-[340px] md:w-[460px] lg:w-[520px]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
