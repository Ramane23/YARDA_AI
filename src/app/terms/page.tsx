"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n-context";

const content = {
  fr: {
    title: "Conditions Générales d'Utilisation",
    lastUpdated: "Dernière mise à jour : 29 mars 2026",
    sections: [
      {
        title: "1. Objet",
        text: `Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet de définir les modalités et conditions d'utilisation du site web yarda.ai et de la plateforme SaaS YARDA (ci-après « la Plateforme »), édités par YARDA AI, société à responsabilité limitée (SARL) de droit ivoirien, immatriculée au Registre du Commerce et du Crédit Mobilier (RCCM) d'Abidjan, ayant son siège social à Abidjan, Côte d'Ivoire (ci-après « YARDA AI », « nous », « notre »).

L'accès et l'utilisation de la Plateforme impliquent l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser la Plateforme.`,
      },
      {
        title: "2. Mentions légales",
        text: `Éditeur du site :
YARDA AI SARL
Forme juridique : Société à Responsabilité Limitée (SARL)
Siège social : Abidjan, Côte d'Ivoire
Email : contact@yarda.ai
Site web : https://yarda.ai

Directeur de la publication : Les co-fondateurs de YARDA AI

Hébergeur :
Vercel Inc.
440 N Barranca Ave #4133
Covina, CA 91723, États-Unis
https://vercel.com`,
      },
      {
        title: "3. Description des services",
        text: `YARDA AI fournit une plateforme SaaS (Software as a Service) de détection de fraude et de conformité réglementaire à destination des opérateurs de transfert d'argent (MTO) et des opérateurs de mobile money (MMO), principalement en Afrique de l'Ouest.

Les services comprennent notamment :
• Un moteur de scoring de risque basé sur l'intelligence artificielle hybride (détection d'anomalies, classification supervisée, analyse de réseaux)
• Un pipeline d'IA progressif (détection d'anomalies, classification supervisée, détection de réseaux)
• Un tableau de bord en temps réel pour le monitoring des transactions et la gestion des alertes
• Une API REST pour l'intégration avec les systèmes existants des clients
• Des rapports de conformité et une piste d'audit exploitable
• Un système de réentraînement automatique des modèles d'IA

L'accès à la Plateforme SaaS (app.yarda.ai) est réservé aux clients ayant souscrit un abonnement et est régi par un contrat de service distinct.`,
      },
      {
        title: "4. Accès au site web",
        text: `Le site web yarda.ai est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Les frais d'accès à Internet et d'équipement sont à votre charge.

YARDA AI met en œuvre tous les moyens raisonnables pour assurer un accès de qualité au site, mais n'est tenu à aucune obligation de résultat. L'accès au site peut être interrompu à tout moment pour des raisons de maintenance, de mise à jour ou pour toute autre raison, sans que cela ne donne lieu à une quelconque indemnisation.

Nous nous réservons le droit de modifier, suspendre ou interrompre tout ou partie du site à tout moment, sans préavis.`,
      },
      {
        title: "5. Propriété intellectuelle",
        text: `L'ensemble des éléments du site et de la Plateforme YARDA (textes, images, logos, marques, logiciels, algorithmes, modèles d'IA, bases de données, architecture technique) sont protégés par les lois ivoiriennes et internationales relatives à la propriété intellectuelle, notamment :

• La loi ivoirienne relative au droit d'auteur et aux droits voisins
• L'Accord de Bangui révisé relatif à la propriété intellectuelle (OAPI)
• Les conventions internationales applicables

La marque YARDA, le logo YARDA AI et tous les signes distinctifs associés sont la propriété exclusive de YARDA AI SARL.

Toute reproduction, représentation, modification, publication, distribution ou exploitation de tout ou partie de ces éléments, sans l'autorisation écrite préalable de YARDA AI, est strictement interdite et constitue une contrefaçon sanctionnée par la loi.`,
      },
      {
        title: "6. Utilisation du formulaire de contact",
        text: `Le site propose un formulaire de contact permettant aux visiteurs de demander une démonstration ou de poser des questions sur nos services. En utilisant ce formulaire, vous vous engagez à :

• Fournir des informations exactes et à jour
• Ne pas transmettre de contenu illicite, diffamatoire, injurieux ou contraire à l'ordre public
• Ne pas utiliser le formulaire à des fins de prospection commerciale non sollicitée (spam)

Les données transmises via le formulaire de contact sont traitées conformément à notre Politique de Confidentialité.`,
      },
      {
        title: "7. Responsabilité",
        text: `a) Limitation de responsabilité :
YARDA AI s'efforce de fournir des informations exactes et à jour sur son site web. Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité de toutes les informations présentées. Les informations fournies sur le site le sont à titre indicatif et ne constituent pas un conseil professionnel.

b) Liens externes :
Le site peut contenir des liens vers des sites tiers. YARDA AI n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leurs pratiques de confidentialité ou leur disponibilité.

c) Plateforme SaaS :
Les conditions de responsabilité relatives à l'utilisation de la Plateforme SaaS YARDA sont définies dans le contrat de service conclu avec chaque client. En aucun cas, YARDA AI ne saurait être tenue responsable de décisions prises par les opérateurs sur la base des scores et alertes générés par la Plateforme. Les scores de risque et décisions automatiques constituent une aide à la décision et ne se substituent pas au jugement humain.

d) Force majeure :
YARDA AI ne saurait être tenue responsable de tout manquement à ses obligations résultant d'un cas de force majeure tel que défini par le droit ivoirien, incluant notamment : catastrophes naturelles, pannes d'infrastructure Internet, actes de guerre, décisions gouvernementales.`,
      },
      {
        title: "8. Confidentialité et protection des données",
        text: `La collecte et le traitement des données personnelles effectués dans le cadre de l'utilisation du site et de la Plateforme sont régis par notre Politique de Confidentialité, accessible à l'adresse : https://yarda.ai/privacy

Cette politique de confidentialité fait partie intégrante des présentes CGU.

Conformément à la loi n°2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel en Côte d'Ivoire, vous disposez de droits spécifiques sur vos données, détaillés dans notre Politique de Confidentialité.`,
      },
      {
        title: "9. Conformité réglementaire",
        text: `YARDA AI opère dans le respect des réglementations applicables en matière de :

• Lutte contre le blanchiment de capitaux et le financement du terrorisme (LCB-FT), conformément aux directives de la BCEAO et de l'UEMOA
• Protection des données personnelles, conformément à la loi n°2013-450 du 19 juin 2013
• Réglementation des services financiers numériques en Côte d'Ivoire et dans l'espace UEMOA
• Recommandations du Groupe d'Action Financière (GAFI/FATF)

Nos clients restent seuls responsables de leur propre conformité réglementaire. YARDA AI fournit des outils d'aide à la conformité mais ne se substitue pas aux obligations légales et réglementaires incombant à chaque opérateur.`,
      },
      {
        title: "10. Modification des CGU",
        text: `YARDA AI se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le site.

La version en vigueur est celle accessible sur notre site à l'adresse : https://yarda.ai/terms

Il est de votre responsabilité de consulter régulièrement les CGU. La poursuite de l'utilisation du site après modification des CGU vaut acceptation des nouvelles conditions.`,
      },
      {
        title: "11. Droit applicable et juridiction compétente",
        text: `Les présentes CGU sont régies par le droit ivoirien.

En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGU, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.

À défaut d'accord amiable dans un délai de 30 jours, tout litige sera soumis à la compétence exclusive des tribunaux d'Abidjan, Côte d'Ivoire, sauf disposition légale contraire.

Pour les litiges impliquant des consommateurs résidant dans l'espace UEMOA, les règles de compétence territoriale du droit OHADA s'appliquent.`,
      },
      {
        title: "12. Contact",
        text: `Pour toute question concernant les présentes CGU :

YARDA AI SARL
Siège social : Abidjan, Côte d'Ivoire
Email : legal@yarda.ai
Email général : contact@yarda.ai
Site web : https://yarda.ai`,
      },
    ],
  },
  en: {
    title: "Terms of Service",
    lastUpdated: "Last updated: March 29, 2026",
    sections: [
      {
        title: "1. Purpose",
        text: `These Terms of Service (hereinafter "Terms") define the terms and conditions of use of the yarda.ai website and the YARDA SaaS platform (hereinafter "the Platform"), published by YARDA AI, a limited liability company (SARL) under Ivorian law, registered with the Trade and Personal Property Credit Registry (RCCM) of Abidjan, with its registered office in Abidjan, Côte d'Ivoire (hereinafter "YARDA AI", "we", "our").

Access to and use of the Platform implies full and unreserved acceptance of these Terms. If you do not accept these terms, you must not use the Platform.`,
      },
      {
        title: "2. Legal Notice",
        text: `Site publisher:
YARDA AI SARL
Legal form: Limited Liability Company (SARL)
Registered office: Abidjan, Côte d'Ivoire
Email: contact@yarda.ai
Website: https://yarda.ai

Publication director: The co-founders of YARDA AI

Host:
Vercel Inc.
440 N Barranca Ave #4133
Covina, CA 91723, United States
https://vercel.com`,
      },
      {
        title: "3. Description of Services",
        text: `YARDA AI provides a SaaS (Software as a Service) platform for fraud detection and regulatory compliance for money transfer operators (MTOs) and mobile money operators (MMOs), primarily in West Africa.

Services include:
• A risk scoring engine based on hybrid artificial intelligence (anomaly detection, supervised classification, network analysis)
• A progressive AI pipeline (anomaly detection, supervised classification, network detection)
• A real-time dashboard for transaction monitoring and alert management
• A REST API for integration with clients' existing systems
• Compliance reports and an actionable audit trail
• An automatic AI model retraining system

Access to the SaaS Platform (app.yarda.ai) is reserved for clients with an active subscription and is governed by a separate service agreement.`,
      },
      {
        title: "4. Website Access",
        text: `The yarda.ai website is freely accessible to any user with Internet access. Internet access and equipment costs are your responsibility.

YARDA AI uses all reasonable means to ensure quality access to the site but is not bound by any obligation of result. Access to the site may be interrupted at any time for maintenance, updates, or any other reason, without giving rise to any compensation.

We reserve the right to modify, suspend, or discontinue all or part of the site at any time, without notice.`,
      },
      {
        title: "5. Intellectual Property",
        text: `All elements of the site and the YARDA Platform (texts, images, logos, trademarks, software, algorithms, AI models, databases, technical architecture) are protected by Ivorian and international intellectual property laws, including:

• Ivorian copyright and related rights law
• The revised Bangui Agreement on intellectual property (OAPI)
• Applicable international conventions

The YARDA trademark, the YARDA AI logo, and all associated distinctive signs are the exclusive property of YARDA AI SARL.

Any reproduction, representation, modification, publication, distribution, or exploitation of all or part of these elements, without prior written authorization from YARDA AI, is strictly prohibited and constitutes infringement punishable by law.`,
      },
      {
        title: "6. Contact Form Use",
        text: `The site offers a contact form allowing visitors to request a demonstration or ask questions about our services. By using this form, you agree to:

• Provide accurate and up-to-date information
• Not transmit unlawful, defamatory, abusive, or public order-violating content
• Not use the form for unsolicited commercial prospecting (spam)

Data submitted through the contact form is processed in accordance with our Privacy Policy.`,
      },
      {
        title: "7. Liability",
        text: `a) Limitation of liability:
YARDA AI strives to provide accurate and up-to-date information on its website. However, we cannot guarantee the accuracy, completeness, or currency of all information presented. Information provided on the site is for informational purposes only and does not constitute professional advice.

b) External links:
The site may contain links to third-party websites. YARDA AI exercises no control over these sites and disclaims all responsibility for their content, privacy practices, or availability.

c) SaaS Platform:
Liability conditions relating to the use of the YARDA SaaS Platform are defined in the service agreement concluded with each client. Under no circumstances shall YARDA AI be held liable for decisions made by operators based on scores and alerts generated by the Platform. Risk scores and automatic decisions constitute decision-support tools and do not replace human judgment.

d) Force majeure:
YARDA AI shall not be held liable for any failure to fulfill its obligations resulting from force majeure as defined by Ivorian law, including but not limited to: natural disasters, Internet infrastructure failures, acts of war, government decisions.`,
      },
      {
        title: "8. Privacy and Data Protection",
        text: `The collection and processing of personal data carried out in connection with the use of the site and Platform are governed by our Privacy Policy, accessible at: https://yarda.ai/privacy

This privacy policy forms an integral part of these Terms.

In accordance with Law No. 2013-450 of June 19, 2013 on the protection of personal data in Côte d'Ivoire, you have specific rights over your data, detailed in our Privacy Policy.`,
      },
      {
        title: "9. Regulatory Compliance",
        text: `YARDA AI operates in compliance with applicable regulations regarding:

• Anti-money laundering and counter-terrorism financing (AML/CFT), in accordance with BCEAO and UEMOA directives
• Personal data protection, in accordance with Law No. 2013-450 of June 19, 2013
• Regulation of digital financial services in Côte d'Ivoire and the UEMOA zone
• Financial Action Task Force (FATF) recommendations

Our clients remain solely responsible for their own regulatory compliance. YARDA AI provides compliance support tools but does not substitute for the legal and regulatory obligations incumbent on each operator.`,
      },
      {
        title: "10. Modifications to Terms",
        text: `YARDA AI reserves the right to modify these Terms at any time. Modifications take effect upon publication on the site.

The current version is the one accessible on our website at: https://yarda.ai/terms

It is your responsibility to regularly review the Terms. Continued use of the site after modification of the Terms constitutes acceptance of the new conditions.`,
      },
      {
        title: "11. Governing Law and Jurisdiction",
        text: `These Terms are governed by Ivorian law.

In the event of a dispute relating to the interpretation or performance of these Terms, the parties undertake to seek an amicable solution before any legal action.

Failing amicable agreement within 30 days, any dispute shall be submitted to the exclusive jurisdiction of the courts of Abidjan, Côte d'Ivoire, unless otherwise provided by law.

For disputes involving consumers residing in the UEMOA zone, the territorial jurisdiction rules of OHADA law apply.`,
      },
      {
        title: "12. Contact",
        text: `For any questions regarding these Terms:

YARDA AI SARL
Registered office: Abidjan, Côte d'Ivoire
Email: legal@yarda.ai
General email: contact@yarda.ai
Website: https://yarda.ai`,
      },
    ],
  },
};

export default function TermsPage() {
  const { lang } = useTranslation();
  const c = content[lang];

  return (
    <>
      <section className="mesh-bg pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              {c.title}
            </h1>
            <p className="mt-4 text-white/50">{c.lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          {c.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-xl font-bold text-gray-900 md:text-2xl">
                {section.title}
              </h2>
              <div className="mt-4 whitespace-pre-line text-sm leading-relaxed text-gray-600">
                {section.text}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
