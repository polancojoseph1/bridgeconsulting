# Bridge AI — Portfolio Site

AI consulting, automation systems, and executive training portfolio for Bridge AI (Joseph Polanco).

## Stack

- **React 19** + **TypeScript**
- **Vite 8** (dev server on port 5000)
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **Framer Motion** for animations
- **Lucide React** for icons

## Structure

```
src/
  App.tsx       — Main page (all sections)
  data.ts       — All content data (services, stats, process steps, case studies, differentiators, prototypes)
  index.css     — Design tokens, component classes, animations
  main.tsx      — Entry point (no auth)
public/         — Static prototype screenshots
```

## Running locally

```bash
npm run dev     # starts on port 5000
```

## Deployment

Configured as a **static** site — `npm run build` outputs to `dist/`.

## Design system

All design tokens are CSS custom properties defined in `index.css` (`:root`). Component utility classes (`.btn-primary`, `.btn-ghost`, `.glass-card`, `.card-hover`, etc.) are in the `@layer utilities` block. Color palette: electric cyan (`--primary-fixed`), soft violet (`--secondary-fixed-dim`), warm amber (`--accent-fixed`) on dark surfaces.

## Notes

- No authentication — Clerk was removed as it is not needed
- All page content lives in `src/data.ts` for easy editing
- `src/App.tsx` imports: `caseStudies`, `differentiators`, `processSteps`, `services`, `stats`, `prototypes`
