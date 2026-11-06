# QA Test Report: Aryan Tiwari Portfolio & PharmaQuest

**Evaluation Date**: 2026-11-04  
**Framework**: React 19, Vite, Tailwind CSS v4, TypeScript  
**Design Reference**: Axevia Personal Portfolio WordPress Theme  

---

## 1. Test Summary

| Test Category | Items Tested | Status | Notes |
|---|---|---|---|
| **Compilation & Build** | `tsc --noEmit`, `npm run build` | **PASSED** | Clean build without warnings or errors. Static assets bundled to `dist/`. |
| **Top Bar Contract** | 3-Zone Header, Wordmark, 6 Nav Links, Axevia Status Pill | **PASSED** | Single-line controls, zero wrapping, smooth scroll on click. |
| **Axevia Navigation Drawer** | Open/Close toggle, backdrop dismiss, Esc key, 4 canvas scene presets | **PASSED** | Keyboard accessible, traps scroll, updates canvas mode instantly. |
| **Interactive Hero Canvas** | Particles, CRT scanlines, Molecule, Orbit modes | **PASSED** | Fullscreen backdrop canvas spanning the whole hero screen. Mouse & touch reactive. |
| **Dual Theme System** | Complete Light / Dark mode pairing across all sections | **PASSED** | Persistent localStorage theme toggle. All surfaces, text, inputs, cards & borders fully paired. |
| **Mobile Responsiveness** | Viewports at 360px, 375px, 390px, 768px, 1440px | **PASSED** | Mobile tabs in Projects, fluid full-width buttons, responsive HUD box, zero horizontal overflow. |

---

## 2. Responsive Viewport Verification

- **375px / 390px (Mobile)**:
  - Top navigation collapses to Brand + Section Pill + Drawer toggle (within 15% sticky cap).
  - Hero columns stack gracefully: Headline -> Canvas -> HUD Box.
  - Project showcase stacks image preview and problem/purpose cards cleanly without horizontal scroll.
  - PharmaQuest stations render as a 1-column grid with clear touch targets.
- **768px (Tablet)**:
  - Hero and About sections expand with generous breathing room.
  - Skills sectors render in 2-column flow.
  - PharmaQuest stations form a 2x2 grid.
- **1440px (Desktop Baseline)**:
  - Full 3-column Axevia hero layout (Typographic Powerhouse + Canvas Point Cloud + Explorer Stats HUD).
  - Left vertical index bar in Projects section (`01`, `02`, `03`).
  - 5-column Core Philosophies grid in About section.

---

## 3. Remaining Information Aryan Must Provide

Before final public deployment or production launch, Aryan should confirm the following details in `src/config/portfolio.config.ts`:

1. **College / University Name**:
   - Current setting: Marked as `"Not yet confirmed (AKTU affiliated)"`.
   - Action: Once confirmed, update `personal.academic.institution` in `src/config/portfolio.config.ts`.
2. **LinkedIn Profile URL** (Optional):
   - Current setting: Set to `null` (omitted from UI per specifications).
   - Action: If Aryan creates a professional LinkedIn profile in the future, set the URL in `personal.socials.linkedin`.
3. **Contact Form Backend Endpoint** (Optional):
   - Current setting: Submissions provide immediate UI confirmation and offer a direct `mailto:` fallback link.
   - Action: If desired, connect a serverless form handler (such as Formspree or AWS API Gateway / Lambda) in `src/components/ContactSection.tsx`.
