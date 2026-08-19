# Driftwatch

> **Endpoint monitoring for small engineering teams—know when your API drifts before your users do.**

Driftwatch is a modern SaaS home page and technical endpoint monitoring prototype built for the **Acdyon Technologies Frontend Challenge (Part 2: The Premium Home Page)**.

---

## 🚀 Features

- **Hero & Clear Value Prop:** Direct, non-cluttered messaging with a live status brief.
- **Interactive Endpoint Monitor:** Live check surface with Availability, Latency Drift, and Payload Schema inspection.
- **Honest Copy & Zero Fake Social Proof:** Resists the fabricated testimonial trap. Real data over invented polish.
- **Responsive UI:** Fully responsive design supporting mobile (390px) to desktop (1440px+).
- **Dark / Light Mode:** Native toggle with translucent sticky navigation.
- **Restrained Motion:** Smooth animations respecting `prefers-reduced-motion`.
- **Easter Egg:** Keyboard shortcut / Konami Code secret (`↑ ↑ ↓ ↓ ← → ← → b a`).

---

## 🛠 Tech Stack

- **Framework:** React 19 + TypeScript
- **Styling:** Vanilla CSS & TailwindCSS v4 with Space Grotesk, Inter & JetBrains Mono typography
- **Build Tool:** Vite 7
- **Server:** Express (for serving static production build)

---

## 🚦 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or pnpm

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/mekaushikranjan/DriftWatch.git
cd DriftWatch

# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm run dev
```

The application will be running at `http://localhost:3000/`.

---

## 📋 Evaluation & Rationale

See [`DECISIONS.md`](./DECISIONS.md) for detailed architecture, trade-offs, and design strategy notes as required by the challenge specification.
