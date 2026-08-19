# Almanac — Product & Design Direction

## Three possible directions

### 1. Editorial Instrument Panel
**Very Brief Intro:** A precise, contemporary publishing aesthetic: confident serif headlines framed by carefully engineered software surfaces. It makes calm operational software feel collectible rather than corporate.

**Probability:** 0.07

### 2. Lunar Utility
**Very Brief Intro:** A deep-space, monochrome command environment with restrained technical flourishes. It frames work as an elegant, quiet ritual rather than a noisy productivity contest.

**Probability:** 0.04

### 3. Summer Workshop
**Very Brief Intro:** Warm paper, ink, and hand-drawn marks turn planning into a tactile studio practice. The experience feels optimistic, physical, and human.

**Probability:** 0.09

## Chosen approach — Editorial Instrument Panel

### Product concept

**Almanac** is a private weekly operating system for independent product teams. It turns scattered notes, decisions, and customer signals into a single deliberate plan for the week—without pretending to replace the team’s judgment.

### Design Movement

The interface draws on **contemporary editorial design and Swiss information architecture**, combining an art-director’s type hierarchy with the order of a field notebook and the calm utility of professional tools.

### Core Principles

1. **Evidence before ornament:** Product UI and discernible workflows lead the composition; decoration only clarifies hierarchy.
2. **Asymmetry with discipline:** Narrow marginal notes, deliberate crop lines, and offset panels add energy without losing readability.
3. **Calm density:** The page has information-rich moments, but every detail earns its position through generous whitespace and restrained color.
4. **Tactile precision:** Fine rules, paper grain, ink-like marks, and purposeful shadows give digital work a grounded, considered presence.

### Color Philosophy

The site lives on a warm **newsprint** ground rather than sterile white. Deep **ink navy** establishes trust and focus, while a saturated **vermilion** creates rare moments of action and decision. Moss is used only for quiet confirmation inside product surfaces. The result should feel like a well-edited journal with a single, unmistakable red pencil mark.

### Layout Paradigm

The home page is composed as an **editorial spread**, not a standard centered marketing stack. A persistent narrow rule and vertical reading index frame left-aligned content. The hero reads across an uneven two-column spread: language on the left, a product specimen on the right. Subsequent chapters alternate full-bleed paper fields, pinned marginal notes, and inset application panels.

### Signature Elements

1. A vermilion **asterisk/starburst** used as a recurring decision marker and interactive brand mark.
2. Fine ink rules with edition labels, timestamp-style metadata, and oversized chapter numbers.
3. Softly layered product paper cards with restrained rotation and shadows, resembling an edited working desk.

### Interaction Philosophy

Interactions should reward attention, not demand it. Hovering a product card exposes a small editorial annotation; pressing the primary CTA changes it from an instruction into a direct action. The demo panel lets the visitor switch focus states to see how Almanac prioritizes a week.

### Animation

Content enters as a measured editorial reveal: rules draw in, labels fade up, then panels lift by a few pixels with 40–70ms staggering. Hover transitions last 160–220ms and use transform and opacity only. The decision marker subtly rotates on CTA hover, while the interactive workboard crossfades its focused content. All nonessential motion is disabled for `prefers-reduced-motion`.

### Typography System

**DM Serif Display** carries headlines and product statements at high contrast, while **Manrope** handles interface labels and body copy with rational clarity. Metadata is set in uppercase Manrope with expanded tracking; large serif headings stay left aligned and may use an italic word to add editorial cadence. No default sans-serif treatment is used for the brand name.

### Brand Essence

**Almanac is the weekly operating system for independent product teams who want sharper priorities, not louder dashboards.**

Personality: **deliberate, candid, cultivated**.

### Brand Voice

Headlines are concise, declarative, and observational. CTAs sound like a next decision, never a generic sign-up command. Microcopy is specific about what the product does and does not claim.

Example: “A clearer week starts with the work you can finally see.”

Example: “Open the weekly brief.”

### Wordmark & Logo

The wordmark is a custom-feeling serif “Almanac” wordmark paired with an asymmetric vermilion **asterisk/starburst**: a small editorial proofreading mark that signals an important decision. The standalone mark is used at a prominent size in the header and favicon.

### Signature Brand Color

**Decision Vermilion — #E64C2E.** It is the single color reserved for choices, momentum, and the Almanac mark.

## Reference-driven redesign specification

The user supplied a complete Driftwatch landing-page reference and asked that Almanac be made in that direction. This reference now supersedes the prior Editorial Instrument Panel visual system while preserving Almanac’s honest weekly-planning product concept and its interactive brief.

### Ground-truth visual direction

Almanac will adopt the reference’s **calm technical-monitoring product** aesthetic: an off-white application canvas, a sticky translucent navigation bar, clean Space Grotesk headings, Inter body copy, and JetBrains Mono for product telemetry. The hero is a concise left-aligned proposition followed by a large rounded live-status interface specimen. Thin neutral borders, generous 14–20px radii, soft layered shadows, and a disciplined teal accent replace the editorial paper texture, serif typography, vermilion accents, and asymmetrical image-led composition.

### Revised tokens

| Role | Value | Purpose |
| --- | --- | --- |
| Canvas | `#F3F2EE` | Warm low-contrast foundation from the reference |
| Raised surface | `#FFFFFF` | Application cards and navigation controls |
| Ink | `#14171A` | Primary text and strong CTA field |
| Soft ink | `#52585E` | Explanatory copy |
| Rule | `#DDDBD4` | Quiet structural edges |
| Signal teal | `#12A594` | States, focus, and primary action |
| Alert amber | `#E8A23D` | Limited attention/at-risk indicator |
| Auxiliary violet | `#6C63FF` | Secondary trend context only |

### Layout translation

The revised page uses the reference’s restrained `1160px` content wrap, large horizontal breathing space, 88px hero top offset, and recurring rounded product panels. The central weekly brief becomes the signature live-status card: a toolbar with live state, a three-row focus table, small trend-line graphics, and a detail drawer that responds to the existing focus control. Feature content is rendered as a three-column information grid, followed by a process timeline and a contained dark CTA band.

### Interaction translation

The revised experience retains one focused, useful interaction: visitors select **Signal**, **Decision**, or **Delivery** inside the weekly brief panel. The selected row updates the panel’s status, trend, rationale, and working moves. A light/dark switch is fully implemented across the entire page; it is not a decorative half-theme. A single Konami-code easter egg opens a concise status overlay, matching the assessment’s optional bonus prompt.
