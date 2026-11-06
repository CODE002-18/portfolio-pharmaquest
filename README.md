# Aryan Tiwari — Personal Portfolio & PharmaQuest

A responsive, high-performance personal portfolio website for **Aryan Tiwari** (Fourth-Year Bachelor of Pharmacy student and digital creator), inspired by the visual design and interactive experience of the **Axevia Personal Portfolio WordPress Theme**.

Recreated using original React, Vite, Tailwind CSS, TypeScript, and interactive HTML5 Canvas engineering.

---

## 🌟 Key Highlights & Design Recreation

1. **Axevia Visual Aesthetic**:
   - **Hero Section Composition**: Massive brutalist typography (`CURIOUS BY SCIENCE. DRIVEN TO CREATE.`), technical hairline brackets `[ B.PHARM 2027 · WEB & TECH ]`, corner HUD brackets (`┌ ┐ └ ┘`), Explorer Stats box with dual meter bars, and real-time live local clock ticker.
   - **Interactive 4-Mode Hero Canvas**:
     - `01 HOME PARTICLES`: Interactive point cloud with mouse dispersion and elastic spring return.
     - `02 HOME CRT`: Digital oscilloscope audio-wave scanline frequency synthesizer.
     - `03 HOME MOLECULE`: 3D rotating molecular chemical bond lattice.
     - `04 HOME ORBIT`: Atomic and planetary orbital tracks.
   - **Axevia Top Navigation & Drawer**:
     - Waveform audio signal indicator.
     - Dynamic active section pill (`[1] HOME`, `[2] ABOUT`, `[3] SKILLS`, `[4] PROJECTS`, `[5] PHARMAQUEST`, `[6] CONTACT`).
     - 4-dot diamond menu button opening the full slide-out navigation drawer with 4 canvas scene presets and quick contact.
     - Dark / Light mode toggle.
   - **About Section**:
     - Oversized condensed `ABOUT` header.
     - High-contrast scanline CRT editorial portrait frame with technical HUD brackets.
     - 5-column Core Philosophies & Work Principles grid (`01 SCIENTIFIC RIGOR`, `02 SOLVE REAL NEEDS`, `03 DIGITAL CRAFTSMANSHIP`, `04 LIGHTWEIGHT & ACCESSIBLE`, `05 LIFELONG EXPLORATION`).
   - **Skills Section**:
     - 'A TOOLKIT CHOSEN FOR THE JOB' layout divided into 4 authentic sectors: `SECTOR_01 PHARMACEUTICAL SCIENCES`, `SECTOR_02 PROBLEM SOLVING`, `SECTOR_03 DIGITAL CREATION`, `SECTOR_04 CONTINUOUS LEARNING`.
     - Zero fabricated percentage bars or unearned titles.
   - **Projects Showcase**:
     - Vertical index track (`01`, `02`, `03`).
     - **BPharmHub (Primary Project)**: Detailed breakdown of the AKTU academic problem, solution purpose, semester 1-8 note indexing, syllabus downloads, and live link to `https://bpharmhub.xyz/`.
     - **Ludo Ianx (Secondary Project)**: Real-time multiplayer board game with room creation, live link to `https://ludo-ianx.onrender.com/?room=7GRU7X`.
     - Comprehensive case study brief modal.
   - **PharmaQuest: Explore My Journey**:
     - Interactive 4-station progression engine (`Discover`, `Build`, `Experiment`, `Future`).
     - Visual exploration telemetry (`0/4` to `4/4` / `100%`).
     - Unlocks the **Final Discovery Synthesis** upon complete exploration with inspirational quote and direct transmission call-to-action.
     - Working progress reset feature.
   - **Contact Section**:
     - Axevia `[ TRANSMISSION_FORM ]` with numbered fields `01 YOUR NAME`, `02 EMAIL ADDRESS`, `03 PROJECT TYPE`, `04 SCOPE`, and `05 MESSAGE` with live character counter `0 / 5000`.
     - Reactive transmission states (`READY` → `ENCRYPTING & TRANSMITTING...` → `TRANSMISSION CONFIRMED ✓`).
     - One-click email copy button with visual confirmation.

---

## 📁 Project Architecture & Central Configuration

All personal information, education records, project URLs, and quest data are maintained in a single centralized configuration file for instant updating:

```
src/
├── config/
│   └── portfolio.config.ts    # Centralized source of truth for personal info, projects, skills & quest
├── components/
│   ├── Navbar.tsx             # Top Bar Contract, waveform widget, section pill & 4-dot toggle
│   ├── NavigationDrawer.tsx   # Axevia slide-out menu & 4 canvas design presets
│   ├── InteractiveHeroCanvas.tsx # HTML5 Canvas engine (Particles, CRT, Molecule, Orbit)
│   ├── HeroSection.tsx        # Hero composition, headline, bio, explorer stats HUD
│   ├── AboutSection.tsx       # Narrative, portrait frame, 5-column philosophies
│   ├── SkillsSection.tsx      # 4 skill sectors with zero-pill discipline
│   ├── ProjectsSection.tsx    # BPharmHub & Ludo Ianx showcase with case study modal
│   ├── PharmaQuestSection.tsx # 4-station interactive journey & final discovery unlock
│   ├── ContactSection.tsx     # Axevia transmission form & one-click email copy
│   └── Footer.tsx             # Clean editorial footer & back to top action
├── assets/
│   └── images/                # Generated editorial portrait and project showcase assets
├── App.tsx                    # Root component orchestrating state, clock & scroll
├── index.css                  # Tailwind v4 configuration, font utilities, dot-matrix & scanlines
└── main.tsx                   # React 19 entry point
```

---

## 📋 Verified Personal Information

| Field | Value |
|---|---|
| **Name** | Aryan Tiwari |
| **Education** | Bachelor of Pharmacy (B.Pharm) |
| **Status** | Fourth-Year Student (Final Year) |
| **Expected Graduation** | June 2027 |
| **GitHub** | [code002-18](https://github.com/code002-18) |
| **College / University** | *Pending confirmation from Aryan* (AKTU curriculum focus) |
| **LinkedIn** | *Not available* |
| **Email** | `aryantiwaritiwari3@gmail.com` |
| **Primary Project** | [BPharmHub](https://bpharmhub.xyz/) |
| **Secondary Project** | [Ludo Ianx](https://ludo-ianx.onrender.com/?room=7GRU7X) |

---

## 🛠️ Local Development & Build Commands

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Run TypeScript linter
npm run lint

# Compile production build
npm run build

# Preview production build
npm run preview
```

---

## ☁️ AWS Amplify Deployment

This project includes pre-configured AWS Amplify files:
- `amplify.yml`: Build phases, artifacts directory (`dist`), and caching rules.
- `AWS_DEPLOYMENT.md`: Step-by-step console guide for connecting GitHub repository and configuring custom domains.
