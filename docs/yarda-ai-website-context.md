# YARDA AI — Corporate Website

## Project Overview

Build the corporate/marketing website for **YARDA AI**, an AI company specializing in fraud detection for financial institutions in Africa and the diaspora. The website showcases the company's flagship product **YARDA** — an intelligent fraud detection platform for Money Transfer Operators (MTOs) and Mobile Money Operators (MMOs).

**Target URL:** `yarda.ai` (corporate site)
**Product URL:** `app.yarda.ai` (the SaaS dashboard — separate project, already built)

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript, static export via `output: "export"`)
- **Styling:** Tailwind CSS v4
- **Fonts:** Google Fonts via `next/font/google`
  - `Outfit` → headings (`font-display`)
  - `Space Grotesk` → body text (`font-body`)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **i18n:** French + English (toggle in navbar). French is the primary/default language. Use a simple key-based translation object (no heavy i18n library).
- **Deployment:** Vercel (static)
- **No backend, no database, no auth** — this is a pure static marketing site.

---

## Design System

### Palette — Violet Theme

```
Token          Hex       Usage
--navy         #110B2B   Dark primary background
--navy-800     #1A1040   Dark secondary background
--navy-700     #231555   Dark tertiary background
--purple       #7C3AED   Primary accent (buttons, links, highlights)
--purple-600   #6D28D9   Hover accent
--purple-400   #A78BFA   Light accent (text highlights)
--purple-100   #EDE9FE   Light accent background
--accent       #E879F9   Secondary accent (pink/fuchsia)
--accent-600   #D946EF   Hover secondary accent
--accent-100   #FDF2FF   Light secondary accent background
--gold         #F0C755   Premium badges, enterprise highlights
--gray-50      #F7F9FC   Light section backgrounds
--gray-100     #EEF2F7   Borders, input backgrounds
--gray-300     #C5CDD8   Tertiary text
--gray-400     #8896A6   Secondary text
--gray-600     #4A5568   Body text
--gray-900     #0D1B2A   Primary text (headings on light bg)
```

### globals.css

```css
@import "tailwindcss";

:root {
  --navy: #110B2B;
  --navy-800: #1A1040;
  --navy-700: #231555;
  --purple: #7C3AED;
  --purple-600: #6D28D9;
  --purple-400: #A78BFA;
  --purple-100: #EDE9FE;
  --accent: #E879F9;
  --accent-600: #D946EF;
  --accent-100: #FDF2FF;
  --gold: #F0C755;
  --gray-50: #F7F9FC;
  --gray-100: #EEF2F7;
  --gray-300: #C5CDD8;
  --gray-400: #8896A6;
  --gray-600: #4A5568;
  --gray-900: #0D1B2A;
}

@theme inline {
  --color-navy: var(--navy);
  --color-navy-800: var(--navy-800);
  --color-navy-700: var(--navy-700);
  --color-sky: var(--purple);
  --color-sky-600: var(--purple-600);
  --color-sky-400: var(--purple-400);
  --color-sky-100: var(--purple-100);
  --color-accent: var(--accent);
  --color-accent-600: var(--accent-600);
  --color-accent-100: var(--accent-100);
  --color-gold: var(--gold);
  --font-display: 'Outfit', system-ui, sans-serif;
  --font-body: 'Space Grotesk', system-ui, sans-serif;
}

body {
  font-family: var(--font-body);
  color: var(--gray-900);
}

html {
  scroll-behavior: smooth;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}

.glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.glass-light {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.text-gradient {
  background: linear-gradient(135deg, var(--purple) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glow-purple {
  box-shadow: 0 0 40px rgba(124, 58, 237, 0.2), 0 0 80px rgba(124, 58, 237, 0.1);
}

.glow-accent {
  box-shadow: 0 0 40px rgba(232, 121, 249, 0.15), 0 0 80px rgba(232, 121, 249, 0.08);
}

.mesh-bg {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(232, 121, 249, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 60% 80%, rgba(167, 139, 250, 0.08) 0%, transparent 50%),
    linear-gradient(180deg, var(--navy) 0%, #0E0820 100%);
}
```

### Component Patterns (Tailwind classes)

**Primary button:**
```
rounded-xl bg-gradient-to-r from-sky to-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky/25 transition-all hover:shadow-xl hover:brightness-110
```

**Secondary button (outline):**
```
rounded-xl px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 transition-all hover:bg-white/10 hover:ring-white/40
```

**Navbar (frosted glass on scroll):**
```
bg-white/80 shadow-lg shadow-navy/5 backdrop-blur-xl
```

**Card with hover lift:**
```
group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky/10
```

**Card gradient top accent (on hover):**
```html
<div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky to-accent opacity-0 transition-opacity group-hover:opacity-100" />
```

**Icon container with gradient hover:**
```
inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky/10 to-accent/10 text-sky transition-all duration-500 group-hover:from-sky group-hover:to-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky/20
```

**Section label:**
```html
<span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky">
  <span class="inline-block h-px w-6 bg-gradient-to-r from-sky to-accent" />
  LABEL TEXT
</span>
```

**Stat counter (gradient text):**
```
font-display text-5xl font-bold text-gradient md:text-6xl
```

**Pill badge (gradient):**
```
rounded-full bg-gradient-to-r from-sky/20 to-accent/20 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white/90 ring-1 ring-white/10
```

**Gold pill badge:**
```
rounded-full bg-gradient-to-r from-gold/20 to-gold/10 px-5 py-1.5 text-xs font-bold tracking-wider text-gold ring-1 ring-gold/20
```

**Language switch (active state):**
```
rounded-lg bg-gradient-to-r from-sky to-accent text-white shadow-sm
```

---

## Company: YARDA AI

### About
YARDA AI is an artificial intelligence company focused on building intelligent fraud detection and financial security solutions for African financial institutions and the diaspora. The company combines cutting-edge machine learning with deep domain expertise in African financial corridors.

### Mission
Protect African financial institutions and their customers from fraud using AI that understands the unique patterns of African financial transactions.

### Values
- **AI-first:** Every product decision is driven by what ML can uniquely solve
- **Africa-focused:** Built for the specific fraud patterns of African corridors (EUR→XOF, GBP→XOF, etc.)
- **Transparent:** Explainable AI — every fraud decision comes with a clear reason
- **Progressive:** Start protecting from day 1, get smarter over time

---

## Product: YARDA Platform

### What It Does
YARDA is a SaaS fraud detection platform that plugs into MTO/MMO transaction flows via API and provides real-time fraud scoring, alerting, and analytics.

### Key Features

**1. Hybrid AI Scoring Engine**
Three AI models working together, with phase-dependent weights:
- **Anomaly Detector** — Unsupervised ML that catches unknown fraud patterns from day 1 (no labeled data needed)
- **Fraud Classifier** — Supervised ML trained on your labeled data for precision detection
- **Network Detector (GNN)** — Graph neural network for fraud ring detection (coming soon)

Each transaction gets a combined score (0-100) and an automatic decision: PASS, REVIEW, ALERT, or BLOCK.

**2. Progressive Intelligence (4 Phases)**
The platform gets smarter as you use it:
| Phase | Requirement | What Happens |
|-------|------------|--------------|
| Detection | Day 1, no data needed | Anomaly detection catches outliers immediately |
| Learning | 100+ labeled transactions | ML model starts training, hybrid scoring begins |
| Classification | 1,000+ labeled transactions | ML takes the lead, high precision |
| Intelligence | Future | Graph AI detects fraud networks and rings |

**3. Smart Rules Engine**
Configurable business rules that run alongside AI:
- Velocity rules (too many transactions per hour)
- Amount anomaly rules (unusual amounts for this sender)
- Corridor rules (suspicious transfer routes)
- Time rules (unusual hours, rapid sequences)
- Blacklist/watchlist matching

**4. Real-Time Dashboard**
- Live transaction monitoring with fraud scores
- Review queue for flagged transactions
- One-click labeling (fraud/legitimate) that feeds back into model training
- Per-client analytics and KPIs
- Model performance tracking

**5. Explainable AI**
Every fraud decision includes:
- Which features contributed most to the score
- Which rules triggered
- Component breakdown (anomaly vs ML vs rules)
- SHAP-based feature importance

**6. Multi-Tenant Architecture**
- Each client (MTO/MMO) has isolated models, configs, and data
- Per-client scoring thresholds and fraud taxonomy
- Supports both MTO (corridor-based) and MMO (wallet/merchant) operators
- Multi-currency support (XOF, EUR, GBP, USD, etc.)

**7. Automatic Model Retraining**
- Champion/challenger model testing
- Drift detection triggers automatic retraining
- Models only promoted if they beat the current champion

**8. Simple API Integration**
```
POST /api/v1/predict/fraud
{
  "transaction": { "amount": 150000, "currency": "XOF", ... }
}
→ { "decision": "alert", "fraud_score": 0.78, "explanation": "..." }
```
Single API call, response in <200ms. SDKs for Python, Node.js.

### Target Customers
- **Money Transfer Operators (MTOs):** Companies sending money to/from Africa (e.g., Europe→Niger, Europe→Ivory Coast)
- **Mobile Money Operators (MMOs):** Mobile wallet providers in Africa (P2P, cash-in, cash-out, merchant payments)
- **Neobanks/Fintechs:** Serving the African diaspora

### Pricing Tiers (for the site)
- **Starter:** For small MTOs. Up to 10K transactions/month. Anomaly detection + rules engine.
- **Professional:** For growing operators. Up to 100K transactions/month. Full hybrid AI + dashboard + retraining.
- **Enterprise:** Unlimited. Custom thresholds, dedicated support, SLA, GNN fraud ring detection.

---

## Site Structure (Single-Page with Sections)

The website is a single-page scrolling site with a sticky navbar. Sections in order:

### 1. Navbar (sticky, frosted glass on scroll)
- YARDA AI logo (left)
- Nav links: Features, How it Works, Pricing, About
- Language toggle (FR/EN)
- CTA button: "Request a Demo" / "Demander une Demo"

### 2. Hero Section (dark, mesh-bg)
- Headline: "AI-Powered Fraud Detection for African Financial Corridors" / "Detection de Fraude par IA pour les Corridors Financiers Africains"
- Subheadline: Brief value prop (2 lines max)
- Two buttons: "Request a Demo" (primary) + "See How It Works" (secondary/outline)
- Visual: Abstract dashboard mockup or animated network graph showing fraud detection in action
- Trust badges: "< 200ms response time" | "99.9% uptime" | "SOC 2 compliant"

### 3. Problem Statement (light bg)
- "The fraud landscape in African financial corridors is evolving faster than traditional rule-based systems can keep up."
- 3 pain-point cards:
  - Rising fraud losses in MTO/MMO
  - Rule-based systems miss new patterns
  - No Africa-specific fraud intelligence

### 4. Features Section (alternating light/dark)
- 6-8 feature cards with icons, using the card hover pattern
- Grouped: AI Engine, Rules Engine, Dashboard, Explainability, Multi-tenant, Auto-retraining
- Each card: icon, title, 2-line description

### 5. How It Works (dark bg)
- 4-step visual flow:
  1. **Connect** — Plug in via REST API (< 1 hour integration)
  2. **Detect** — Anomaly detection starts catching fraud immediately
  3. **Learn** — Label transactions, ML model trains on your data
  4. **Evolve** — Platform gets smarter, catches more, false positives drop
- This maps directly to the 4 phases (Detection → Learning → Classification → Intelligence)

### 6. Stats/Social Proof (light bg, gradient text numbers)
- Key metrics: transactions processed, fraud detected, clients protected, response time
- (Use impressive but realistic placeholder numbers)

### 7. Pricing Section (light bg)
- 3 tiers: Starter, Professional, Enterprise
- Feature comparison grid
- "Contact Sales" CTA for Enterprise

### 8. About / Team (light bg)
- Brief company description
- Focus on Africa expertise + AI capability
- Optional: founder photo/bio

### 9. CTA Section (dark bg, mesh)
- "Ready to protect your transactions?" / "Pret a proteger vos transactions?"
- Email input + "Request Demo" button
- Or simple "Contact Us" form (name, email, company, message)

### 10. Footer (dark bg)
- YARDA AI logo
- Links: Features, Pricing, About, Contact, Privacy Policy, Terms
- Social links (LinkedIn, Twitter/X)
- "Made in Africa, for Africa"
- Copyright

---

## Content Guidelines

- **Tone:** Professional but approachable. Confident, not aggressive. Technical credibility without jargon overload.
- **Language:** Default to French. English as secondary. All text must be translatable via the i18n system.
- **No stock photos.** Use abstract visuals, gradient shapes, icons, and subtle animations.
- **Mobile-first.** Every section must look excellent on mobile.
- **Performance:** Target 95+ Lighthouse score. Lazy load below-fold content. Optimize images.
- **Accessibility:** Proper heading hierarchy, alt text, keyboard navigation, color contrast ratios.

---

## File Structure

```
src/
  app/
    layout.tsx          # Root layout (fonts, metadata, providers)
    page.tsx            # Single page with all sections
    globals.css         # Design system styles
  components/
    navbar.tsx          # Sticky navbar with frosted glass
    hero.tsx            # Hero section
    problem.tsx         # Problem statement section
    features.tsx        # Features grid
    how-it-works.tsx    # 4-step flow
    stats.tsx           # Stats/social proof
    pricing.tsx         # Pricing tiers
    about.tsx           # About section
    cta.tsx             # CTA / contact form
    footer.tsx          # Footer
    lang-toggle.tsx     # FR/EN language switcher
  lib/
    i18n.ts             # Translation strings (fr + en)
  public/
    logo.png            # YARDA AI logo
    icon.png            # YARDA AI icon
```

---

## Important Notes

- Use Tailwind CSS token names (`sky`, `accent`, `navy`, `gold`) as mapped in the `@theme inline` block — NOT raw hex values in components.
- All component text must go through the i18n system. No hardcoded strings.
- French is the DEFAULT language. Write French translations first, English second.
- The site must be fully static — `output: "export"` in next.config.ts. No API routes, no server components that fetch data.
- Use Framer Motion for scroll-triggered animations (fade-in, slide-up) — keep them subtle and performant.
- The navbar should transition from transparent (over dark hero) to frosted glass (white bg) on scroll.
- Every CTA button ("Request a Demo") should scroll to or link to the contact/CTA section at the bottom.
