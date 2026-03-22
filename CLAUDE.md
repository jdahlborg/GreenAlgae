# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Web application for **GreenAlgae Mauritius** — a Spirulina microalgae biofertilizer business based in Mauritius. Grows Spirulina in open raceway ponds and sells biofertilizer pellets ($8–15/kg) and liquid biopesticide ($15–25/L) to Mauritian smallholder farmers. Target market: 12,000+ smallholders covered by the SFWF 60% government subsidy on bio-inputs.

Business stage: seed / pre-pilot (2026). Stage 1 raise: $150K. No pilot data yet — projections based on tropical benchmarks.

Key numbers: $47K Year 1 revenue, $175K Year 3, breakeven at 18–24 months, 20 t/ha/yr conservative yield assumption.

Future upside (not in baseline): phycocyanin pigment (FDA blue dye ban 2026), supplement powder, Madagascar export, carbon credits.

**Business plan PDF:** `~/Downloads/GreenAlgae Mauritius BusinessPlan.pdf`

## Commands

```bash
npm install

npm run dev       # dev server at http://localhost:5173
npm run build     # production build (output: /build)
npm run preview   # preview production build

npm run check     # TypeScript + Svelte type checking
npm run lint      # prettier check + eslint
npm run format    # auto-format

npm test          # run tests once
npm run test:unit # watch mode
```

## Architecture

```
src/
  app.css              # Tailwind entry (@import "tailwindcss")
  app.html             # HTML shell
  lib/                 # Shared components and utilities
  routes/              # File-based routing
    +layout.svelte     # Root layout (imports app.css)
    +page.svelte       # Home page
```

## Tech Stack

SvelteKit (Svelte 5) · TypeScript · Tailwind CSS v4 (via `@tailwindcss/vite`) · Vitest · ESLint · Prettier

Prettier: tabs, single quotes, no trailing commas, 100-char print width.

## Notes

- Node v23 requires `--force` on npm installs due to engine constraints in some deps
- Tailwind v4 needs no `tailwind.config.ts` — configured via CSS and Vite plugin
