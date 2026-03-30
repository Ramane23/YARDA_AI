export type Lang = "fr" | "en";

const translations = {
  // Navbar
  "nav.features": { fr: "Fonctionnalités", en: "Features" },
  "nav.howItWorks": { fr: "Comment ça marche", en: "How It Works" },
  "nav.about": { fr: "À propos", en: "About" },
  "nav.references": { fr: "Références", en: "References" },
  "nav.demo": { fr: "Demander une démo", en: "Request a Demo" },

  // Hero
  "hero.badge": {
    fr: "Conformité & gestion des risques par IA",
    en: "AI-Powered Compliance & Risk Management",
  },
  "hero.title": {
    fr: "Aidez vos opérateurs de transfert d'argent à anticiper les risques et renforcer leur conformité",
    en: "Help Your Money Transfer Operators Stay Ahead of Risks and Strengthen Compliance",
  },
  "hero.subtitle": {
    fr: "YARDA est la plateforme d'intelligence artificielle conçue pour les MTO et opérateurs de mobile money en Afrique de l'Ouest. Détection de fraude, lutte anti-blanchiment (LCB-FT), conformité réglementaire — prenez les devants sur chaque risque et renforcez votre sérieux auprès des régulateurs.",
    en: "YARDA is the AI platform built for MTOs and mobile money operators in West Africa. Fraud detection, anti-money laundering (AML/CFT), regulatory compliance — stay ahead of every risk and strengthen your credibility with regulators.",
  },
  "hero.cta.demo": { fr: "Demander une démo", en: "Request a Demo" },
  "hero.cta.howItWorks": {
    fr: "Découvrir comment ça marche",
    en: "See How It Works",
  },
  "hero.trust.speed": { fr: "< 200ms de réponse", en: "< 200ms Response" },
  "hero.trust.uptime": { fr: "99.9% de disponibilité", en: "99.9% Uptime" },
  "hero.trust.compliance": {
    fr: "Conforme LCB-FT",
    en: "AML/CFT Compliant",
  },

  // Problem
  "problem.label": { fr: "Le défi", en: "The Challenge" },
  "problem.title": {
    fr: "Les risques auxquels font face les opérateurs de transfert d'argent en Afrique de l'Ouest",
    en: "The Risks Facing Money Transfer Operators in West Africa",
  },
  "problem.subtitle": {
    fr: "Les MTO et opérateurs de mobile money sont exposés à des risques croissants : fraude, blanchiment d'argent, non-conformité réglementaire. Les conséquences sont lourdes — sanctions, perte de licence, atteinte à la réputation. Les outils traditionnels ne suffisent plus.",
    en: "MTOs and mobile money operators face growing risks: fraud, money laundering, regulatory non-compliance. The consequences are severe — sanctions, license revocation, reputational damage. Traditional tools are no longer enough.",
  },
  "problem.card1.title": {
    fr: "Fraude & blanchiment en hausse",
    en: "Rising Fraud & Money Laundering",
  },
  "problem.card1.desc": {
    fr: "Les corridors financiers ouest-africains (EUR→XOF, GBP→XOF, etc.) sont de plus en plus ciblés par des réseaux de fraude et de blanchiment sophistiqués. Les pertes augmentent chaque année et les méthodes évoluent constamment.",
    en: "West African financial corridors (EUR→XOF, GBP→XOF, etc.) are increasingly targeted by sophisticated fraud and laundering networks. Losses grow every year and methods constantly evolve.",
  },
  "problem.card2.title": {
    fr: "Pression réglementaire croissante",
    en: "Growing Regulatory Pressure",
  },
  "problem.card2.desc": {
    fr: "Les régulateurs (BCEAO, CENTIF, GAFI) renforcent leurs exigences en matière de LCB-FT et de KYC. Les opérateurs qui ne s'y conforment pas risquent des sanctions financières, voire la suspension de leur agrément.",
    en: "Regulators (BCEAO, CENTIF, FATF) are tightening AML/CFT and KYC requirements. Operators that fail to comply face financial penalties or even license suspension.",
  },
  "problem.card3.title": {
    fr: "Des outils inadaptés au contexte africain",
    en: "Tools Not Built for Africa",
  },
  "problem.card3.desc": {
    fr: "Les solutions globales de conformité ne comprennent pas les spécificités des transactions en Afrique de l'Ouest : volumes de cash-in/cash-out, corridors diaspora, réseaux de mobile money. Il faut une intelligence locale.",
    en: "Global compliance solutions don't understand West African transaction patterns: cash-in/cash-out volumes, diaspora corridors, mobile money networks. Local intelligence is needed.",
  },

  // Features Preview (Home)
  "featuresPreview.label": { fr: "Fonctionnalités", en: "Features" },
  "featuresPreview.title": {
    fr: "Une plateforme complète pour maîtriser vos risques",
    en: "A Complete Platform to Master Your Risks",
  },
  "featuresPreview.subtitle": {
    fr: "YARDA crée et déploie des modèles d'IA qui apprennent en continu sur vos données transactionnelles anonymisées — pour une détection de fraude qui s'adapte à votre réalité, pas à des règles génériques.",
    en: "YARDA creates and deploys AI models that continuously learn from your anonymized transaction data — for fraud detection that adapts to your reality, not generic rules.",
  },
  "featuresPreview.cta": {
    fr: "Voir toutes les fonctionnalités",
    en: "See All Features",
  },

  // Feature items
  "feature.ai.title": { fr: "Pipeline IA progressif", en: "Progressive AI Pipeline" },
  "feature.ai.desc": {
    fr: "Trois modèles d'IA déployés progressivement : d'abord la détection d'anomalies entraînée sur vos données transactionnelles anonymisées, puis un classificateur supervisé multi-labels entraîné sur les labels de votre équipe selon votre propre taxonomie de fraude, et enfin un modèle de détection de réseaux (GNN) où les transactions ne sont plus des entités individuelles mais des nœuds d'un graphe.",
    en: "Three AI models deployed progressively: first, anomaly detection trained on your anonymized transaction data, then a multi-label supervised classifier trained on your team's labels using your own fraud taxonomy, and finally a network detection model (GNN) where transactions are no longer individual entities but nodes in a graph.",
  },
  "feature.anonymized.title": {
    fr: "Données anonymisées & respect de la vie privée",
    en: "Anonymized Data & Privacy by Design",
  },
  "feature.anonymized.desc": {
    fr: "YARDA traite exclusivement des données transactionnelles anonymisées — aucune donnée personnelle n'est nécessaire ni utilisée. Vos clients partagent leurs flux de transactions dépourvus d'informations identifiantes, ce qui nous permet d'entraîner des modèles puissants tout en garantissant le respect total de la vie privée et de la réglementation.",
    en: "YARDA exclusively processes anonymized transaction data — no personal data is needed or used. Your clients share transaction flows stripped of identifying information, allowing us to train powerful models while fully respecting privacy and regulatory requirements.",
  },
  "feature.dashboard.title": {
    fr: "Tableau de bord en temps réel",
    en: "Real-Time Dashboard",
  },
  "feature.dashboard.desc": {
    fr: "Surveillez vos transactions en direct, gérez la file de révision des alertes, étiquetez en un clic selon votre taxonomie de fraude pour nourrir les modèles, et suivez vos KPIs de conformité par client et par corridor.",
    en: "Monitor transactions live, manage alert review queues, label with one click using your fraud taxonomy to feed the models, and track compliance KPIs by client and corridor.",
  },
  "feature.explainability.title": {
    fr: "IA explicable & piste d'audit",
    en: "Explainable AI & Audit Trail",
  },
  "feature.explainability.desc": {
    fr: "Chaque décision de risque est accompagnée d'une explication détaillée : facteurs contributifs, décomposition du score par modèle, importance des features (SHAP). Fournissez aux régulateurs des rapports clairs et une piste d'audit complète pour chaque alerte.",
    en: "Every risk decision comes with a detailed explanation: contributing factors, per-model score breakdown, feature importance (SHAP). Provide regulators with clear reports and a complete audit trail for every alert.",
  },
  "feature.multitenant.title": {
    fr: "Architecture multi-opérateur",
    en: "Multi-Operator Architecture",
  },
  "feature.multitenant.desc": {
    fr: "Chaque opérateur (MTO ou MMO) dispose de ses propres modèles, configurations et données isolées. Seuils de scoring personnalisés, taxonomie de fraude adaptée, support multi-devises (XOF, EUR, GBP, USD).",
    en: "Each operator (MTO or MMO) has its own models, configs, and isolated data. Custom scoring thresholds, adapted fraud taxonomy, multi-currency support (XOF, EUR, GBP, USD).",
  },
  "feature.retraining.title": {
    fr: "Réentraînement automatique",
    en: "Auto Retraining",
  },
  "feature.retraining.desc": {
    fr: "La plateforme détecte automatiquement la dérive des modèles, lance un réentraînement et ne promeut un nouveau modèle que s'il surpasse le modèle en place. Votre protection s'améliore en continu sans intervention manuelle.",
    en: "The platform automatically detects model drift, launches retraining, and only promotes a new model if it outperforms the current one. Your protection continuously improves without manual intervention.",
  },

  // Stats
  "stats.label": { fr: "En chiffres", en: "By the Numbers" },
  "stats.transactions": { fr: "Transactions analysées", en: "Transactions Analyzed" },
  "stats.transactions.value": { fr: "2M+", en: "2M+" },
  "stats.fraud": { fr: "Taux de détection", en: "Detection Rate" },
  "stats.fraud.value": { fr: "99.2%", en: "99.2%" },
  "stats.clients": { fr: "Opérateurs protégés", en: "Operators Protected" },
  "stats.clients.value": { fr: "15+", en: "15+" },
  "stats.response": { fr: "Temps de réponse", en: "Response Time" },
  "stats.response.value": { fr: "<200ms", en: "<200ms" },

  // How It Works
  "howItWorks.label": { fr: "Comment ça marche", en: "How It Works" },
  "howItWorks.title": {
    fr: "De l'intégration à l'intelligence en 4 étapes",
    en: "From Integration to Intelligence in 4 Steps",
  },
  "howItWorks.subtitle": {
    fr: "YARDA crée des modèles d'IA entraînés sur vos données transactionnelles anonymisées — sans aucune donnée personnelle. Chaque modèle apprend de votre activité et s'améliore en continu. C'est notre point fort : une IA qui comprend votre réalité.",
    en: "YARDA builds AI models trained on your anonymized transaction data — with zero personal data. Each model learns from your activity and continuously improves. This is our edge: AI that understands your reality.",
  },
  "howItWorks.step1.title": { fr: "Connectez & anonymisez", en: "Connect & Anonymize" },
  "howItWorks.step1.desc": {
    fr: "Partagez vos données transactionnelles anonymisées via notre API REST — aucune donnée personnelle n'est nécessaire. YARDA utilise uniquement les caractéristiques de la transaction (montant, devise, corridor, horodatage, etc.) sans aucune information identifiante. L'intégration se fait en moins d'une heure.",
    en: "Share your anonymized transaction data through our REST API — no personal data is needed. YARDA only uses transaction characteristics (amount, currency, corridor, timestamp, etc.) without any identifying information. Integration takes less than one hour.",
  },
  "howItWorks.step2.title": { fr: "Détectez les anomalies", en: "Detect Anomalies" },
  "howItWorks.step2.desc": {
    fr: "Le premier modèle d'IA s'entraîne sur vos données transactionnelles anonymisées pour apprendre les schémas normaux de votre activité. Sans aucun label nécessaire, il identifie immédiatement les transactions qui dévient du comportement habituel — les anomalies qui méritent une attention particulière.",
    en: "The first AI model trains on your anonymized transaction data to learn the normal patterns of your business. Without any labels needed, it immediately identifies transactions that deviate from usual behavior — anomalies that deserve closer attention.",
  },
  "howItWorks.step3.title": { fr: "Classifiez la fraude", en: "Classify Fraud" },
  "howItWorks.step3.desc": {
    fr: "À partir des alertes du modèle d'anomalies, vos équipes étiquettent les transactions selon votre propre taxonomie de fraude (multi-labels). Ces labels entraînent un modèle de classification supervisée qui apprend à distinguer chaque type de fraude spécifique à votre activité — avec une précision qui augmente à chaque étiquetage.",
    en: "From the anomaly model's alerts, your teams label transactions using your own fraud taxonomy (multi-label). These labels train a supervised classification model that learns to distinguish each type of fraud specific to your business — with accuracy that increases with every label.",
  },
  "howItWorks.step4.title": { fr: "Détectez les réseaux", en: "Detect Networks" },
  "howItWorks.step4.desc": {
    fr: "Le troisième modèle — un réseau de neurones sur graphe (GNN) — va au-delà de la transaction individuelle. Il analyse les relations entre transactions, expéditeurs et bénéficiaires pour détecter les réseaux frauduleux organisés, les schémas de blanchiment et les rings de fraude que les modèles classiques ne peuvent pas voir.",
    en: "The third model — a graph neural network (GNN) — goes beyond the individual transaction. It analyzes relationships between transactions, senders, and recipients to detect organized fraud networks, laundering patterns, and fraud rings that traditional models cannot see.",
  },
  "howItWorks.api.label": { fr: "Intégration API", en: "API Integration" },
  "howItWorks.api.title": {
    fr: "Une seule API, une réponse en millisecondes",
    en: "One API, millisecond response",
  },
  "howItWorks.api.desc": {
    fr: "Envoyez les détails de la transaction, recevez un score de risque, une décision et une explication complète — le tout en moins de 200ms. Compatible avec tous les systèmes de transfert existants.",
    en: "Send transaction details, receive a risk score, decision, and full explanation — all in under 200ms. Compatible with all existing transfer systems.",
  },

  // Pricing
  "pricing.label": { fr: "Tarification", en: "Pricing" },
  "pricing.title": {
    fr: "Un plan adapté à votre croissance",
    en: "A Plan That Grows With You",
  },
  "pricing.subtitle": {
    fr: "Commencez dès aujourd'hui, évoluez sans limites. Tous les plans incluent le support technique et les mises à jour de la plateforme.",
    en: "Start today, scale without limits. All plans include technical support and platform updates.",
  },
  "pricing.starter.name": { fr: "Starter", en: "Starter" },
  "pricing.starter.price": { fr: "Sur devis", en: "Contact Us" },
  "pricing.starter.desc": {
    fr: "Pour les petits MTO qui veulent structurer leur conformité et commencer la détection de fraude par IA.",
    en: "For small MTOs looking to structure their compliance and start AI fraud detection.",
  },
  "pricing.starter.f1": {
    fr: "Jusqu'à 10K transactions/mois",
    en: "Up to 10K transactions/month",
  },
  "pricing.starter.f2": { fr: "Détection d'anomalies", en: "Anomaly Detection" },
  "pricing.starter.f3": { fr: "Données 100% anonymisées", en: "100% Anonymized Data" },
  "pricing.starter.f4": { fr: "Tableau de bord basique", en: "Basic Dashboard" },
  "pricing.starter.f5": { fr: "Support par email", en: "Email Support" },

  "pricing.pro.name": { fr: "Professionnel", en: "Professional" },
  "pricing.pro.price": { fr: "Sur devis", en: "Contact Us" },
  "pricing.pro.desc": {
    fr: "Pour les opérateurs en croissance qui veulent l'IA hybride complète et une conformité renforcée.",
    en: "For growing operators who want full hybrid AI and strengthened compliance.",
  },
  "pricing.pro.badge": { fr: "Populaire", en: "Popular" },
  "pricing.pro.f1": {
    fr: "Jusqu'à 100K transactions/mois",
    en: "Up to 100K transactions/month",
  },
  "pricing.pro.f2": {
    fr: "IA hybride complète",
    en: "Full Hybrid AI",
  },
  "pricing.pro.f3": {
    fr: "Tableau de bord avancé + piste d'audit",
    en: "Advanced Dashboard + Audit Trail",
  },
  "pricing.pro.f4": {
    fr: "Réentraînement automatique",
    en: "Auto Retraining",
  },
  "pricing.pro.f5": { fr: "Support prioritaire", en: "Priority Support" },

  "pricing.enterprise.name": { fr: "Enterprise", en: "Enterprise" },
  "pricing.enterprise.price": { fr: "Sur mesure", en: "Custom" },
  "pricing.enterprise.desc": {
    fr: "Pour les grands opérateurs avec des volumes illimités, des exigences réglementaires spécifiques et un accompagnement dédié.",
    en: "For large operators with unlimited volumes, specific regulatory requirements, and dedicated support.",
  },
  "pricing.enterprise.f1": {
    fr: "Transactions illimitées",
    en: "Unlimited Transactions",
  },
  "pricing.enterprise.f2": {
    fr: "Détection de réseaux frauduleux (GNN)",
    en: "Fraud Network Detection (GNN)",
  },
  "pricing.enterprise.f3": { fr: "SLA garanti", en: "Guaranteed SLA" },
  "pricing.enterprise.f4": { fr: "Support dédié & accompagnement", en: "Dedicated Support & Onboarding" },
  "pricing.enterprise.f5": {
    fr: "Seuils & rapports personnalisés",
    en: "Custom Thresholds & Reports",
  },
  "pricing.cta": { fr: "Contactez-nous", en: "Contact Us" },

  // About
  "about.label": { fr: "À propos", en: "About" },
  "about.title": {
    fr: "Construire l'intelligence financière pour l'Afrique de l'Ouest",
    en: "Building Financial Intelligence for West Africa",
  },
  "about.p1": {
    fr: "YARDA AI est une entreprise d'intelligence artificielle née d'un constat simple : les opérateurs de transfert d'argent et de mobile money en Afrique de l'Ouest font face à des risques majeurs — fraude, blanchiment d'argent, financement du terrorisme — sans disposer des outils adaptés à leur réalité.",
    en: "YARDA AI is an artificial intelligence company born from a simple observation: money transfer and mobile money operators in West Africa face major risks — fraud, money laundering, terrorism financing — without having tools adapted to their reality.",
  },
  "about.p2": {
    fr: "Nous combinons le machine learning de pointe avec une expertise approfondie des corridors financiers ouest-africains pour offrir aux opérateurs une plateforme qui non seulement détecte les menaces, mais les aide à structurer leur conformité, renforcer leur crédibilité auprès des régulateurs (BCEAO, CENTIF, GAFI) et gagner la confiance de leurs partenaires bancaires.",
    en: "We combine cutting-edge machine learning with deep expertise in West African financial corridors to give operators a platform that not only detects threats, but helps them structure their compliance, strengthen their credibility with regulators (BCEAO, CENTIF, FATF), and earn the trust of their banking partners.",
  },
  "about.mission.label": { fr: "Notre mission", en: "Our Mission" },
  "about.mission.text": {
    fr: "Donner aux opérateurs financiers africains les outils d'intelligence artificielle nécessaires pour anticiper les risques, se conformer aux exigences réglementaires et bâtir une réputation solide auprès des régulateurs et des partenaires.",
    en: "Give African financial operators the AI tools they need to anticipate risks, comply with regulatory requirements, and build a solid reputation with regulators and partners.",
  },
  "about.values.label": { fr: "Nos valeurs", en: "Our Values" },
  "about.value1.title": { fr: "IA-first", en: "AI-First" },
  "about.value1.desc": {
    fr: "Chaque décision produit est guidée par ce que l'intelligence artificielle peut résoudre de manière unique — pas des règles statiques, mais une vraie intelligence adaptative.",
    en: "Every product decision is driven by what AI can uniquely solve — not static rules, but real adaptive intelligence.",
  },
  "about.value2.title": { fr: "Ancrage africain", en: "African Roots" },
  "about.value2.desc": {
    fr: "Conçu pour les réalités des corridors financiers ouest-africains. Nous comprenons vos flux, vos devises, vos régulateurs et vos contraintes opérationnelles.",
    en: "Built for the realities of West African financial corridors. We understand your flows, currencies, regulators, and operational constraints.",
  },
  "about.value3.title": { fr: "Transparence", en: "Transparency" },
  "about.value3.desc": {
    fr: "IA explicable — chaque décision est accompagnée d'une raison claire. Les régulateurs et vos équipes de conformité peuvent comprendre et auditer chaque alerte.",
    en: "Explainable AI — every decision comes with a clear reason. Regulators and your compliance teams can understand and audit every alert.",
  },
  "about.value4.title": { fr: "Progression continue", en: "Continuous Progress" },
  "about.value4.desc": {
    fr: "Protection dès le jour 1, amélioration continue avec le temps. Plus vous utilisez YARDA, plus la plateforme comprend vos risques spécifiques.",
    en: "Protection from day 1, continuous improvement over time. The more you use YARDA, the better the platform understands your specific risks.",
  },

  // Team
  "team.label": { fr: "L'équipe", en: "The Team" },
  "team.title": {
    fr: "Les personnes derrière YARDA",
    en: "The People Behind YARDA",
  },

  // References
  "references.label": { fr: "Références", en: "References" },
  "references.title": {
    fr: "Ils nous font confiance",
    en: "They Trust Us",
  },
  "references.subtitle": {
    fr: "Des opérateurs de transfert d'argent et de mobile money à travers l'Afrique de l'Ouest utilisent YARDA pour sécuriser leurs transactions et renforcer leur conformité réglementaire.",
    en: "Money transfer and mobile money operators across West Africa use YARDA to secure their transactions and strengthen their regulatory compliance.",
  },
  "references.testimonials.label": {
    fr: "Témoignages",
    en: "Testimonials",
  },
  "references.metrics.label": {
    fr: "Résultats concrets",
    en: "Proven Results",
  },
  "references.metric1.title": {
    fr: "Réduction de la fraude",
    en: "Fraud Reduction",
  },
  "references.metric1.value": { fr: "85%", en: "85%" },
  "references.metric1.desc": {
    fr: "de réduction moyenne des pertes liées à la fraude et au blanchiment chez nos clients.",
    en: "average reduction in fraud and money laundering losses across our clients.",
  },
  "references.metric2.title": {
    fr: "Faux positifs",
    en: "False Positives",
  },
  "references.metric2.value": { fr: "-60%", en: "-60%" },
  "references.metric2.desc": {
    fr: "de réduction des faux positifs par rapport aux systèmes basés sur des règles statiques.",
    en: "reduction in false positives compared to static rule-based systems.",
  },
  "references.metric3.title": {
    fr: "Conformité",
    en: "Compliance",
  },
  "references.metric3.value": { fr: "100%", en: "100%" },
  "references.metric3.desc": {
    fr: "de nos clients sont en conformité avec les exigences LCB-FT de leur régulateur après déploiement de YARDA.",
    en: "of our clients are compliant with their regulator's AML/CFT requirements after deploying YARDA.",
  },

  // CTA / Contact
  "cta.title": {
    fr: "Prêt à prendre les devants sur vos risques ?",
    en: "Ready to Stay Ahead of Your Risks?",
  },
  "cta.subtitle": {
    fr: "Demandez une démo et découvrez comment YARDA peut renforcer votre conformité, sécuriser vos transactions et améliorer votre crédibilité auprès des régulateurs.",
    en: "Request a demo and discover how YARDA can strengthen your compliance, secure your transactions, and improve your credibility with regulators.",
  },
  "cta.form.name": { fr: "Nom complet", en: "Full Name" },
  "cta.form.email": { fr: "Email professionnel", en: "Work Email" },
  "cta.form.company": { fr: "Entreprise", en: "Company" },
  "cta.form.message": { fr: "Message (optionnel)", en: "Message (optional)" },
  "cta.form.submit": { fr: "Envoyer la demande", en: "Send Request" },

  // Footer
  "footer.tagline": {
    fr: "Intelligence artificielle pour la conformité et la gestion des risques des opérateurs financiers africains.",
    en: "Artificial intelligence for compliance and risk management of African financial operators.",
  },
  "footer.nav": { fr: "Navigation", en: "Navigation" },
  "footer.legal": { fr: "Légal", en: "Legal" },
  "footer.privacy": {
    fr: "Politique de confidentialité",
    en: "Privacy Policy",
  },
  "footer.terms": {
    fr: "Conditions d'utilisation",
    en: "Terms of Service",
  },
  "footer.made": {
    fr: "Fait en Afrique, pour l'Afrique",
    en: "Made in Africa, for Africa",
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: string, lang: Lang): string {
  const entry = (translations as Record<string, Record<string, string>>)[key];
  return entry?.[lang] ?? key;
}
