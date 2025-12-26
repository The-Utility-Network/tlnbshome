<p align="center">
  <img src="https://thelochnessbotanicalsociety.com/opengraph-image.png" alt="The Lochness Botanical Society" width="100%" />
</p>

<h1 align="center">🌿 The Lochness Botanical Society</h1>

<p align="center">
  <strong>Bio-Digital Orchestration for Sustainable Grow Operations</strong>
</p>

<p align="center">
  <a href="#features"><img src="https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js" alt="Next.js 16.1" /></a>
  <a href="#features"><img src="https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react" alt="React 19" /></a>
  <a href="#features"><img src="https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript" alt="TypeScript 5" /></a>
  <a href="#features"><img src="https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS 4" /></a>
</p>

<p align="center">
  <em>Harnessing decentralized power to enable greater access to botanical automation.</em><br/>
  <em>Pure-bred Industrial Automation as a Service (I3AS) for the cannabis industry.</em>
</p>

---

## 🌱 Overview

The **Lochness Botanical Society** (TLNBS) is a next-generation web experience for a forward-thinking botanical automation company. This repository powers a high-performance, immersive website showcasing advanced cannabis cultivation technologies, aquaponics systems, and Web3-integrated grow operations.

Built on the cutting edge of web technology, featuring:
- **Dynamic botanical grid animations** that pulse with life
- **Immersive dark-mode aesthetics** with deep forest color palettes
- **3D-inspired interactive components** via React Three Fiber
- **Framer Motion animations** for fluid, organic transitions

---

## ✨ Features

<table>
  <tr>
    <td align="center" width="25%">
      <br/>
      <h4>🧬 BotanicalGrid</h4>
      <p>Dynamic SVG-based background animation creating a living, breathing forest canopy effect</p>
    </td>
    <td align="center" width="25%">
      <br/>
      <h4>💧 Perennial Waters</h4>
      <p>Interactive showcase of aquaponics automation systems and water management technology</p>
    </td>
    <td align="center" width="25%">
      <br/>
      <h4>🏗️ Infrastructure</h4>
      <p>Visualization of modular grow facility automation and sensor integration</p>
    </td>
    <td align="center" width="25%">
      <br/>
      <h4>🌐 Web3 Ready</h4>
      <p>Built-in support for decentralized protocols and tokenized asset management</p>
    </td>
  </tr>
</table>

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Server Components) |
| **UI Library** | [React 19](https://react.dev/) with concurrent features |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (strict mode) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) (utility-first) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **3D Graphics** | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei) |
| **Maps** | [React Simple Maps](https://www.react-simple-maps.io/) + D3-Geo |
| **Fonts** | [Geist Sans & Mono](https://vercel.com/font) (via `next/font`) |
| **Images** | [Sharp](https://sharp.pixelplumbing.com/) for optimization |

---

## 📁 Project Structure

```
tlnbs/
├── 📂 public/                  # Static assets
│   ├── Medallions/             # Brand medallion graphics
│   ├── artifacts/              # Downloadable resources
│   ├── og-images/              # Open Graph images
│   ├── patterns/               # Background patterns
│   └── videos/                 # Video content
│
├── 📂 src/
│   ├── 📂 app/                 # Next.js App Router
│   │   ├── arthaneeti/         # Arthaneeti subsidiary
│   │   ├── codex/              # Knowledge codex
│   │   ├── comparisons/        # Service comparisons
│   │   ├── contact/            # Contact forms
│   │   ├── docs/               # Documentation
│   │   ├── industries/         # Industry solutions
│   │   ├── locations/          # Location pages
│   │   ├── our-model/          # Business model pages
│   │   ├── podcasts/           # Podcast content
│   │   │
│   │   │   # Subsidiary Pages
│   │   ├── cornucopia-robotics/
│   │   ├── digibazaar/
│   │   ├── elysium-athletica/
│   │   ├── ledger1/
│   │   ├── lochness-botanical-society/
│   │   ├── osiris-protocol/
│   │   ├── requiem-electric/
│   │   ├── the-graine-ledger/
│   │   └── vulcan-forge/
│   │
│   ├── 📂 components/          # React Components
│   │   ├── BotanicalGrid.tsx   # Animated background
│   │   ├── LochNessHero.tsx    # Hero section
│   │   ├── LochNessMission.tsx # Mission statement
│   │   ├── PerennialWaters.tsx # Aquaponics showcase
│   │   ├── Navbar.tsx          # Navigation
│   │   ├── Footer.tsx          # Footer
│   │   └── ...                 # 40+ additional components
│   │
│   ├── 📂 data/                # Data files
│   └── 📂 utils/               # Utility functions
│
├── scripts/                    # Build & utility scripts
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/tlnbs.git
cd tlnbs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |

---

## 🎨 Design System

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Deep Forest** | `#011a0f` | Primary background |
| **Botanical Green** | `#0a4a2a` | Accent color |
| **Mist** | `#ffffff10` | Glass overlays |
| **Chlorophyll** | `#22c55e` | Interactive elements |

### Typography

- **Headings**: Geist Sans (Variable)
- **Body**: Geist Sans (Variable)
- **Monospace**: Geist Mono (Variable)

---

## 🌐 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Main landing page |
| `/our-model` | Business model explanation |
| `/codex` | Knowledge base & terminology |
| `/docs` | Technical documentation |
| `/industries` | Industry solutions |
| `/locations` | Global presence |
| `/contact` | Contact forms |
| `/comparisons` | Service comparisons |
| `/podcasts` | Audio content |

### Subsidiary Routes
- `/cornucopia-robotics` — Robotics automation
- `/digibazaar` — Digital marketplace
- `/elysium-athletica` — Wellness & athletics
- `/ledger1` — Financial technology
- `/osiris-protocol` — Protocol development
- `/requiem-electric` — Energy solutions
- `/the-graine-ledger` — Agricultural records
- `/vulcan-forge` — Manufacturing

---

## 🔒 Security

- 🔐 Environment variables managed via `.env` files (git-ignored)
- 🛡️ No exposed API keys or credentials
- ✅ Content Security Policy headers configured
- 🔍 Regular dependency vulnerability scanning

---

## 📊 Performance

Optimized for Core Web Vitals:

- **LCP** < 2.5s — Server-side rendering + image optimization
- **FID** < 100ms — Minimal JavaScript on first paint
- **CLS** < 0.1 — Pre-allocated image dimensions

---

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a pull request.

```bash
# Create a feature branch
git checkout -b feature/amazing-feature

# Commit your changes
git commit -m 'Add amazing feature'

# Push to the branch
git push origin feature/amazing-feature

# Open a Pull Request
```

---

## 📄 License

© 2024 The Lochness Botanical Society. All rights reserved.

---

<p align="center">
  <sub>Built with 🌿 by the TLNBS Development Team</sub>
</p>
