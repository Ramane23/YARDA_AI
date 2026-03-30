"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n-context";

const content = {
  fr: {
    title: "Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour : 29 mars 2026",
    sections: [
      {
        title: "1. Informations générales",
        text: `La présente politique de confidentialité décrit la manière dont YARDA AI, société à responsabilité limitée (SARL) de droit ivoirien, immatriculée au Registre du Commerce et du Crédit Mobilier (RCCM) d'Abidjan, ayant son siège social à Abidjan, Côte d'Ivoire (ci-après « YARDA AI », « nous », « notre » ou « nos »), collecte, utilise, stocke et protège les données à caractère personnel de ses utilisateurs, clients et visiteurs (ci-après « vous » ou « vos »).

Cette politique est établie conformément à :
• La loi n°2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel en Côte d'Ivoire
• Le Règlement n°08/CM/UEMOA relatif à la protection des données à caractère personnel dans l'espace UEMOA
• Les recommandations de l'Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire (ARTCI)
• Les bonnes pratiques internationales en matière de protection des données (RGPD européen, à titre de référence)`,
      },
      {
        title: "2. Responsable du traitement des données",
        text: `Le responsable du traitement des données à caractère personnel est :

YARDA AI SARL
Siège social : Abidjan, Côte d'Ivoire
Email : privacy@yarda.ai
Site web : https://yarda.ai

Pour toute question relative à la protection de vos données personnelles, vous pouvez contacter notre Délégué à la Protection des Données (DPO) à l'adresse : dpo@yarda.ai`,
      },
      {
        title: "3. Données collectées",
        text: `Dans le cadre de nos activités, nous pouvons collecter les catégories de données suivantes :

a) Données d'identification :
• Nom et prénom
• Adresse email professionnelle
• Numéro de téléphone
• Nom de l'entreprise et fonction

b) Données de connexion et de navigation :
• Adresse IP
• Type de navigateur et système d'exploitation
• Pages visitées et durée de navigation
• Cookies et technologies similaires (voir section 8)

c) Données transactionnelles (dans le cadre de notre plateforme SaaS) :
• Données de transactions financières transmises par nos clients opérateurs (MTO/MMO) via notre API
• Scores de risque et décisions de la plateforme
• Historique des alertes et révisions

d) Données de communication :
• Contenu des messages envoyés via notre formulaire de contact
• Historique des échanges avec notre support technique

Important : Les données transactionnelles traitées par notre plateforme sont transmises par nos clients opérateurs dans le cadre de leurs obligations de conformité LCB-FT. YARDA AI agit en tant que sous-traitant de ces données conformément aux contrats de traitement conclus avec chaque client.`,
      },
      {
        title: "4. Finalités du traitement",
        text: `Vos données personnelles sont traitées pour les finalités suivantes :

a) Exécution contractuelle :
• Fourniture de nos services de détection de fraude et de conformité
• Gestion de votre compte client et de votre abonnement
• Support technique et assistance

b) Intérêt légitime :
• Amélioration de nos services et de notre plateforme
• Analyses statistiques anonymisées sur les performances de nos modèles d'IA
• Sécurité de notre infrastructure et prévention des abus

c) Consentement :
• Envoi de communications marketing et newsletters
• Utilisation de cookies non essentiels

d) Obligation légale :
• Conformité aux obligations réglementaires en matière de LCB-FT
• Réponse aux demandes des autorités compétentes (CENTIF, BCEAO, ARTCI)
• Conservation des données conformément aux durées légales`,
      },
      {
        title: "5. Durée de conservation",
        text: `Nous conservons vos données personnelles pendant les durées suivantes :

• Données d'identification et de compte : pendant toute la durée de la relation contractuelle, puis 5 ans après la fin du contrat conformément aux obligations légales ivoiriennes
• Données de navigation et cookies : 13 mois maximum
• Données transactionnelles : conformément aux obligations légales de conservation en matière de LCB-FT (minimum 10 ans à compter de la clôture du compte ou de l'exécution de la transaction, conformément à la réglementation UEMOA)
• Données de communication : 3 ans à compter du dernier contact
• Données de prospection : 3 ans à compter du dernier contact

À l'expiration de ces délais, vos données sont supprimées ou anonymisées de manière irréversible.`,
      },
      {
        title: "6. Partage et transfert des données",
        text: `Vos données personnelles peuvent être partagées avec :

a) Nos sous-traitants techniques :
• Hébergeurs cloud (infrastructure sécurisée)
• Prestataires d'envoi d'emails
• Outils d'analyse et de monitoring

b) Autorités compétentes :
• Sur demande légale des autorités judiciaires ou réglementaires ivoiriennes
• Dans le cadre des obligations de déclaration de soupçon auprès de la CENTIF

c) Transferts internationaux :
Certaines données peuvent être transférées vers des pays situés hors de la Côte d'Ivoire et de l'espace UEMOA, notamment pour l'hébergement cloud. Dans ce cas, nous nous assurons que ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types, certifications de sécurité).

Nous ne vendons jamais vos données personnelles à des tiers.`,
      },
      {
        title: "7. Sécurité des données",
        text: `Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, toute modification, divulgation ou destruction :

• Chiffrement des données en transit (TLS 1.3) et au repos (AES-256)
• Architecture multi-tenant avec isolation stricte des données par client
• Contrôle d'accès basé sur les rôles (RBAC)
• Journalisation et monitoring continus des accès
• Tests de pénétration et audits de sécurité réguliers
• Formation du personnel aux bonnes pratiques de sécurité
• Plan de réponse aux incidents de sécurité

En cas de violation de données susceptible d'engendrer un risque élevé pour vos droits et libertés, nous vous en informerons dans les meilleurs délais conformément à la législation applicable.`,
      },
      {
        title: "8. Cookies et technologies similaires",
        text: `Notre site utilise des cookies et technologies similaires :

a) Cookies strictement nécessaires :
• Cookies de session et d'authentification
• Cookies de préférence linguistique (FR/EN)
Ces cookies sont indispensables au fonctionnement du site et ne nécessitent pas votre consentement.

b) Cookies analytiques :
• Mesure d'audience et statistiques de navigation
Ces cookies sont déposés uniquement avec votre consentement préalable.

c) Cookies marketing :
• Suivi des campagnes et personnalisation
Ces cookies sont déposés uniquement avec votre consentement préalable.

Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau de consentement ou les paramètres de votre navigateur.`,
      },
      {
        title: "9. Vos droits",
        text: `Conformément à la loi n°2013-450 du 19 juin 2013 et à la réglementation UEMOA, vous disposez des droits suivants :

• Droit d'accès : obtenir la confirmation que vos données sont traitées et en obtenir une copie
• Droit de rectification : faire corriger vos données inexactes ou incomplètes
• Droit de suppression : demander l'effacement de vos données dans les cas prévus par la loi
• Droit d'opposition : vous opposer au traitement de vos données pour des motifs légitimes
• Droit à la limitation : demander la limitation du traitement dans certains cas
• Droit à la portabilité : recevoir vos données dans un format structuré et couramment utilisé

Pour exercer ces droits, contactez-nous à : privacy@yarda.ai

Nous répondrons à votre demande dans un délai maximum de 30 jours. En cas de difficulté, vous pouvez introduire une réclamation auprès de l'ARTCI (Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire).`,
      },
      {
        title: "10. Modifications de cette politique",
        text: `Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Toute modification significative vous sera notifiée par email ou par un avis visible sur notre site web.

La version en vigueur est celle accessible sur notre site à l'adresse : https://yarda.ai/privacy

Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles mises à jour.`,
      },
      {
        title: "11. Contact",
        text: `Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :

YARDA AI SARL
Siège social : Abidjan, Côte d'Ivoire
Email général : contact@yarda.ai
Email DPO : dpo@yarda.ai
Email confidentialité : privacy@yarda.ai`,
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: March 29, 2026",
    sections: [
      {
        title: "1. General Information",
        text: `This privacy policy describes how YARDA AI, a limited liability company (SARL) under Ivorian law, registered with the Trade and Personal Property Credit Registry (RCCM) of Abidjan, with its registered office in Abidjan, Côte d'Ivoire (hereinafter "YARDA AI", "we", "our" or "us"), collects, uses, stores and protects the personal data of its users, clients and visitors (hereinafter "you" or "your").

This policy is established in accordance with:
• Law No. 2013-450 of June 19, 2013 on the protection of personal data in Côte d'Ivoire
• UEMOA Regulation No. 08/CM/UEMOA on the protection of personal data in the UEMOA zone
• Recommendations of the Telecommunications/ICT Regulatory Authority of Côte d'Ivoire (ARTCI)
• International best practices in data protection (EU GDPR, as reference)`,
      },
      {
        title: "2. Data Controller",
        text: `The data controller is:

YARDA AI SARL
Registered office: Abidjan, Côte d'Ivoire
Email: privacy@yarda.ai
Website: https://yarda.ai

For any questions regarding the protection of your personal data, you may contact our Data Protection Officer (DPO) at: dpo@yarda.ai`,
      },
      {
        title: "3. Data Collected",
        text: `In the course of our activities, we may collect the following categories of data:

a) Identification data:
• First and last name
• Professional email address
• Phone number
• Company name and position

b) Connection and browsing data:
• IP address
• Browser type and operating system
• Pages visited and browsing duration
• Cookies and similar technologies (see section 8)

c) Transactional data (within our SaaS platform):
• Financial transaction data transmitted by our operator clients (MTO/MMO) via our API
• Risk scores and platform decisions
• Alert and review history

d) Communication data:
• Content of messages sent through our contact form
• Technical support correspondence history

Important: Transactional data processed by our platform is transmitted by our operator clients as part of their AML/CFT compliance obligations. YARDA AI acts as a data processor for this data in accordance with processing agreements concluded with each client.`,
      },
      {
        title: "4. Purposes of Processing",
        text: `Your personal data is processed for the following purposes:

a) Contractual performance:
• Provision of our fraud detection and compliance services
• Management of your client account and subscription
• Technical support and assistance

b) Legitimate interest:
• Improvement of our services and platform
• Anonymized statistical analysis of our AI model performance
• Infrastructure security and abuse prevention

c) Consent:
• Sending marketing communications and newsletters
• Use of non-essential cookies

d) Legal obligation:
• Compliance with AML/CFT regulatory obligations
• Responding to requests from competent authorities (CENTIF, BCEAO, ARTCI)
• Data retention in accordance with legal requirements`,
      },
      {
        title: "5. Data Retention",
        text: `We retain your personal data for the following periods:

• Identification and account data: throughout the contractual relationship, then 5 years after contract termination in accordance with Ivorian legal obligations
• Browsing data and cookies: maximum 13 months
• Transactional data: in accordance with AML/CFT legal retention obligations (minimum 10 years from account closure or transaction execution, per UEMOA regulations)
• Communication data: 3 years from last contact
• Prospecting data: 3 years from last contact

Upon expiration of these periods, your data is deleted or irreversibly anonymized.`,
      },
      {
        title: "6. Data Sharing and Transfers",
        text: `Your personal data may be shared with:

a) Our technical subcontractors:
• Cloud hosting providers (secure infrastructure)
• Email sending providers
• Analytics and monitoring tools

b) Competent authorities:
• Upon legal request from Ivorian judicial or regulatory authorities
• As part of suspicious transaction reporting obligations to CENTIF

c) International transfers:
Some data may be transferred to countries outside Côte d'Ivoire and the UEMOA zone, particularly for cloud hosting. In such cases, we ensure these transfers are governed by appropriate safeguards (standard contractual clauses, security certifications).

We never sell your personal data to third parties.`,
      },
      {
        title: "7. Data Security",
        text: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, modification, disclosure or destruction:

• Data encryption in transit (TLS 1.3) and at rest (AES-256)
• Multi-tenant architecture with strict per-client data isolation
• Role-based access control (RBAC)
• Continuous access logging and monitoring
• Regular penetration testing and security audits
• Staff training on security best practices
• Security incident response plan

In the event of a data breach likely to result in a high risk to your rights and freedoms, we will notify you as soon as possible in accordance with applicable legislation.`,
      },
      {
        title: "8. Cookies and Similar Technologies",
        text: `Our website uses cookies and similar technologies:

a) Strictly necessary cookies:
• Session and authentication cookies
• Language preference cookies (FR/EN)
These cookies are essential for the website to function and do not require your consent.

b) Analytical cookies:
• Audience measurement and browsing statistics
These cookies are only placed with your prior consent.

c) Marketing cookies:
• Campaign tracking and personalization
These cookies are only placed with your prior consent.

You can manage your cookie preferences at any time via the consent banner or your browser settings.`,
      },
      {
        title: "9. Your Rights",
        text: `In accordance with Law No. 2013-450 of June 19, 2013 and UEMOA regulations, you have the following rights:

• Right of access: obtain confirmation that your data is being processed and obtain a copy
• Right of rectification: have your inaccurate or incomplete data corrected
• Right of erasure: request deletion of your data in cases provided by law
• Right to object: object to the processing of your data on legitimate grounds
• Right to restriction: request limitation of processing in certain cases
• Right to portability: receive your data in a structured, commonly used format

To exercise these rights, contact us at: privacy@yarda.ai

We will respond to your request within a maximum of 30 days. In case of difficulty, you may file a complaint with ARTCI (Telecommunications/ICT Regulatory Authority of Côte d'Ivoire).`,
      },
      {
        title: "10. Changes to This Policy",
        text: `We reserve the right to modify this privacy policy at any time. Any significant changes will be notified to you by email or through a visible notice on our website.

The current version is the one accessible on our website at: https://yarda.ai/privacy

We encourage you to regularly consult this page to stay informed of any updates.`,
      },
      {
        title: "11. Contact",
        text: `For any questions regarding this privacy policy or the processing of your personal data:

YARDA AI SARL
Registered office: Abidjan, Côte d'Ivoire
General email: contact@yarda.ai
DPO email: dpo@yarda.ai
Privacy email: privacy@yarda.ai`,
      },
    ],
  },
};

export default function PrivacyPage() {
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
