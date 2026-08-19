# DECISIONS

**Track selected:** Part 2 — Premium Home Page

I invented **Driftwatch**, a monitoring product for small engineering teams. It watches endpoint availability, response windows, and payload shape, then makes a meaningful change easier to see before it becomes a customer-facing incident. The concept deliberately avoids invented customers, testimonials, adoption metrics, or partner logos.

## 1. Why this approach over the obvious alternative I rejected

The “ingestion strategy” wording is aimed primarily at Part 1, so for Part 2 I treated the question as a design-strategy decision. I rejected the familiar landing-page shortcut: a generic centered headline, gradient treatment, broad feature grid, social-proof logos, and numerical claims. It could look finished quickly but would not prove what Driftwatch does or meet the assessment’s honesty constraint.

I instead used a calm technical-monitoring direction: a warm off-white canvas, structured Space Grotesk typography, JetBrains Mono metadata, restrained teal signal states, and a recurring telemetry-pulse mark. The central endpoint monitor is the evidence. Visitors can switch among availability, latency, and schema checks; the selected row changes the state tag, trend line, rationale, and next moves. This provides a focused interaction rather than making unsubstantiated claims about reliability.

## 2. One time-limit trade-off, and what I would do with a real week

Under the time limit, I built a high-fidelity front-end prototype using clearly labelled example endpoint data instead of a real monitoring backend. This allowed me to focus on hierarchy, accessible controls, responsive layout, restrained motion, and a complete light/dark theme rather than build a shallow service. The page was checked at 390px mobile width and 1440px desktop width, with no visible horizontal overflow.

With a real week, I would connect a small, low-risk demo API, store endpoint baselines, run scheduled checks, and show an inspectable response diff. I would also test the monitor language and incident states with several small engineering teams, then refine the information density from observed use.

## 3. AI tools: use, verification, and changes

I used AI to accelerate visual exploration, code scaffolding, and alternative layout ideas. I personally selected the Driftwatch concept, set the final content hierarchy, wrote and edited the copy, implemented the stateful monitor interaction, and revised the page against the supplied visual reference. I also verified the TypeScript check and production build, inspected full-page desktop and mobile renders, and removed fabricated testimonials, customer counts, and logos. I can explain the purpose and behavior of each interface component in a follow-up discussion.
