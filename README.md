# Project Luma — Marketing & Product Website

Official marketing and product website for **Project Luma**, a Windows music companion that transforms music into music-reactive lighting, cinematic synchronized lyrics, and immersive visual worlds.

> **Phase 1: Marketing & Product Website Only**  
> Payment processing (Lemon Squeezy), server-side webhooks, and license key generation are deliberately decoupled and will be integrated in Phase 2.

---

## Brand & Product Core

- **Tagline**: *"Don't just listen. Feel it."*
- **Platform**: Windows 10 & 11 (64-bit)
- **Social**: `@luma.player`
- **Pricing Model**: One-time payment (Lifetime $5.99 / Exclusive $9.99). Zero subscriptions.
- **Audio Privacy**: 100% on-device WASAPI system audio loopback; zero telemetry; no audio recording.

---

## Architecture & Technology Stack

- **Framework**: React 18 + TypeScript + Vite 6
- **Styling**: Tailwind CSS + Custom Dark Theme (`#080B10` background, cool blue lighting, restrained violet accents)
- **Icons**: Lucide React
- **Typography**: Inter (editorial sans) + JetBrains Mono (technical indicators)
- **Routing**: Lightweight client-side hash router supporting deep linking (`#/privacy`, `#/terms`, `#/refunds`, `#/support`, `#features`, `#pricing`, `#faq`)
- **Assets**: Authentic desktop companion icons in `/public`

---

## Directory Structure

```text
project-luma-website/
├── public/
│   ├── favicon.png          # Luma 32x32 icon
│   └── icon.png             # Luma high-res brand icon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                   # Sticky nav with mobile menu & status
│   │   ├── Hero.tsx                     # Atmospheric hero section
│   │   ├── InteractivePlayerMockup.tsx  # Live interactive desktop companion demo
│   │   ├── Features.tsx                 # 5 core feature deep-dives
│   │   ├── VisualShowcase.tsx           # Interactive 8 Visual Worlds gallery
│   │   ├── HowItWorks.tsx               # 3-step zero-config guide
│   │   ├── Pricing.tsx                  # Lifetime ($5.99) & Exclusive ($9.99) tiers
│   │   ├── FAQ.tsx                      # Categorized interactive accordion
│   │   ├── FinalCTA.tsx                 # Conversion call to action
│   │   ├── Footer.tsx                   # Legal disclaimers, specs, social links
│   │   └── ComingSoonModal.tsx          # Honest pre-launch waitlist modal
│   ├── data/
│   │   └── mockData.ts                  # Tracks, visual modes, FAQs, pricing data
│   ├── pages/
│   │   ├── PrivacyPolicy.tsx            # Editable draft with placeholders
│   │   ├── TermsOfService.tsx           # Editable draft with placeholders
│   │   ├── RefundPolicy.tsx             # 14-day refund terms draft
│   │   └── SupportPage.tsx              # System specs & audio diagnostic guide
│   ├── types.ts                         # Type definitions
│   ├── App.tsx                          # App coordinator & router
│   ├── index.css                        # Atmospheric lighting & custom scrollbars
│   └── main.tsx                         # Entry point
├── index.html                           # SEO, Open Graph & Twitter meta tags
├── package.json                         # Scripts & dependencies
├── tailwind.config.js                   # Color system & glow utilities
├── tsconfig.json                        # Strict TypeScript configuration
└── vite.config.ts                       # Vite bundler configuration
```

---

## Local Development & Run Instructions

### 1. Development Server
To run the website locally in development mode:
```powershell
cd project-luma-website
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Type Checking & Production Build
```powershell
cd project-luma-website
npm run build
```
Generates an optimized static distribution in `project-luma-website/dist/`.

### 3. Production Preview
```powershell
cd project-luma-website
npm run preview
```
Serves the production build on [http://localhost:4173](http://localhost:4173).

---

## Phase 2 Integration Boundary (Lemon Squeezy)

The website is structured so that adding Lemon Squeezy checkout will be seamless:
1. In `src/components/Pricing.tsx` and `src/components/Navbar.tsx`, replace the `onSelectTier` call with Lemon Squeezy Checkout URLs or the Lemon.js overlay trigger (`LemonSqueezy.Url.Open(...)`).
2. Order fulfillment webhook endpoint will handle `order_created` events.
3. Server generates and issues the 3-device activation license key.
4. Device activation & recovery endpoints map to the license key.
