"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";

export function CtaContact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="mesh-bg py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mt-4 text-lg text-white/60">
            {t("cta.subtitle")}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="glass rounded-2xl p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder={t("cta.form.name")}
                className="rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-sky transition-all"
              />
              <input
                type="email"
                placeholder={t("cta.form.email")}
                className="rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-sky transition-all"
              />
            </div>
            <input
              type="text"
              placeholder={t("cta.form.company")}
              className="mt-4 w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-sky transition-all"
            />
            <textarea
              placeholder={t("cta.form.message")}
              rows={4}
              className="mt-4 w-full resize-none rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-sky transition-all"
            />
            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky to-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky/25 transition-all hover:shadow-xl hover:brightness-110"
            >
              <Send className="h-4 w-4" />
              {t("cta.form.submit")}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
