# MantiDash

**A modern Mantine dashboard template** — built for speed, designed for scale. Start your next SaaS or internal tool on a solid foundation instead of from scratch.

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![Mantine](https://img.shields.io/badge/Mantine-8-339af0?logo=mantine)](https://mantine.dev/)
[![TanStack Router](https://img.shields.io/badge/TanStack_Router-1-f97316?logo=tanstack)](https://tanstack.com/router)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)

---

## ✨ What’s inside

- **Mantine UI** — Full set of components (Charts, Dates, Dropzone, Modals, Notifications, Spotlight, TipTap, etc.) with a consistent design system.
- **TanStack Router** — Type-safe routing, code splitting, and a structure that’s ready for growth.
- **Landing + Dashboard** — Marketing landing (hero, features, pricing, testimonials) and an authenticated dashboard layout with sidebar, header, and breadcrumbs.
- **Dark mode** — Theme switching with persistent preference.
- **Motion** — Animations and micro-interactions for a polished feel.
- **Widgets & layouts** — Overview, metrics, charts, tables, Kanban/Email placeholders, and reusable UI (metrics cards, progress rings, etc.).

**Status:** 🚧 **In progress** — New sections and components are added regularly. Some app pages (Kanban, Email, etc.) are placeholders for now.

---

## 🚀 Quick start

```bash
# clone and install
git clone https://github.com/nedois/manti-dash
cd manti-dash
pnpm install

# dev server (http://localhost:3000)
pnpm dev

# build
pnpm build

# preview production build
pnpm preview
```

---

## 🛠 Tech stack

| Layer        | Stack |
|-------------|--------|
| **UI**      | Mantine 8, Iconify, Recharts |
| **Routing** | TanStack Router |
| **Build**   | Vite 7 |
| **React**   | React 19 |
| **Animations** | Motion (Framer Motion) |
| **State**   | Zustand |
| **Editor**  | TipTap |
| **Lint / Test** | ESLint (Antfu), Vitest |

---

## 📁 Project structure

```
src/
├── animations/       # Motion variants and helpers
├── components/       # Shared components
├── layouts/          # App Layouts
├── providers/        # Custom react providers
├── routes/           # Application pages
├── sections/         # Pages related components
├── theme/            # Mantine overrides, colors, typography, etc.
├── hooks/            # Custom hooks
└── utilities/        # Helpers
```

---

## 🔮 Roadmap

- **Current:** Stabilize dashboard layouts, widgets, and landing; improve docs and examples.
- **Next:** More dashboard apps (Kanban, Email, etc.), auth flows, and data patterns.
- **Pro (paid):** Deeper integrations:
  - **AI & Ollama** — Chat, assistants, and local LLM workflows.
  - **Services** — Pre-built integrations and adapters for popular APIs and backends.
  - **Templates & blocks** — Ready-made screens and flows for common use cases.

The free template will stay a solid base; Pro will add the AI and service layer on top.

---

<p align="center">
  <strong>MantiDash</strong> — Mantine dashboard template. Build faster. Ship smarter.
</p>
