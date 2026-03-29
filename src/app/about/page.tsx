"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Eye, Zap, User } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";
import { SectionLabel } from "@/components/section-label";
import { CtaContact } from "@/components/cta-contact";

const VALUES = [
  { icon: Brain, key: "value1" as const },
  { icon: Globe, key: "value2" as const },
  { icon: Eye, key: "value3" as const },
  { icon: Zap, key: "value4" as const },
];

const TEAM = [
  {
    name: "Membre 1",
    role: { fr: "Co-fondateur", en: "Co-founder" },
    bio: {
      fr: "Spécialiste en intelligence artificielle et machine learning, architecte de systèmes intelligents. Conçoit et développe les moteurs d'IA au cœur de la plateforme YARDA.",
      en: "Specialist in artificial intelligence and machine learning, intelligent systems architect. Designs and develops the AI engines at the core of the YARDA platform.",
    },
  },
  {
    name: "Membre 2",
    role: { fr: "Co-fondateur", en: "Co-founder" },
    bio: {
      fr: "Profil financier et audit, avec une expérience dans plusieurs cabinets du Big 4 — Deloitte, PwC, et actuellement EY. Apporte une expertise approfondie en conformité réglementaire, audit financier et gestion des risques.",
      en: "Finance and audit background, with experience across several Big 4 firms — Deloitte, PwC, and currently EY. Brings deep expertise in regulatory compliance, financial audit, and risk management.",
    },
  },
];

export default function AboutPage() {
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
            <SectionLabel text={t("about.label")} />
            <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              {t("about.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-gray-600">
              {t("about.p1")}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {t("about.p2")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <SectionLabel text={t("about.mission.label")} />
            <p className="mt-6 font-display text-2xl font-semibold leading-relaxed text-gray-900">
              &ldquo;{t("about.mission.text")}&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionLabel text={t("about.values.label")} />
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, key }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-gray-100 bg-white p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky/10"
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky/10 to-accent/10 text-sky transition-all duration-500 group-hover:from-sky group-hover:to-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-gray-900">
                  {t(`about.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {t(`about.${key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionLabel text={t("team.label")} />
            <h2 className="mt-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">
              {t("team.title")}
            </h2>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-2xl gap-8 sm:grid-cols-2">
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-gray-100 bg-white p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky/10"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sky/10 to-accent/10">
                  <User className="h-10 w-10 text-sky" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-sky">
                  {member.role[lang]}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {member.bio[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
