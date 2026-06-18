# Friendly Robot Landing Page

Landing page for Friendly Robot (fbot.dev), a Sydney-based software company. Built with Vite + React + TypeScript.

## Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server on :8080 |
| `npm run build` | Production build to `dist/` |
| `npm run build:dev` | Dev-mode build (no minification) |
| `npm run build:analyze` | Build + bundle size analyzer |
| `npm run typecheck` | `tsc --noEmit` type check |
| `npm run lint` | ESLint across project |
| `npm run preview` | Serve production build locally |

## Code style

- ES module syntax only (no `require`)
- Destructure imports: `import { foo } from 'bar'`
- Run `prettier --write <file>` after every file edit

## Path Alias

`@/` maps to `src/` (see `vite.config.ts` and `tsconfig.json`). Always use `@/` aliases.

## Design System: Neobrutalism

This site uses a **neobrutalist** visual style: thick borders (2px default), hard shadows, bold typography, uppercase headings, and a dot-grid background.

### Brand Colors (CSS Variables in `src/index.css`)

| Variable | Hue (HSL) | Hex equivalent |
|----------|-----------|----------------|
| `--brand-primary` | 240 100% 50% | `#0000FF` (neon-blue) |
| `--brand-secondary` | 300 100% 50% | `#FF00FF` (electric-pink) |
| `--brand-accent` | 120 100% 50% | `#00FF00` (bright-green) |
| `--brand-background` | 48 100% 90% | light-beige |
| `--brand-foreground` | 240 10% 10% | deep-gray |

These map to Tailwind utilities via `src/index.css` `@layer base` definitions. Use `bg-brand-primary`, `text-brand-foreground`, etc.

### NeobrutalismBox

Reusable box component at `src/components/ui/neobrutalism-box.tsx`. Rounded, thick border, shadow. Variants: `white`, `primary`, `secondary`, `accent` (default is `white`).

```tsx
import { NeobrutalismBox } from "@/components/ui/neobrutalism-box";
<NeobrutalismBox variant="white" className="p-6">...</NeobrutalismBox>
```

## Architecture

### Routing (BrowserRouter in `src/App.tsx`)

All routes are defined in `src/App.tsx` using `React.lazy()` for code-splitting. Each page has a `Suspense` fallback spinner. **The catch-all `path="*"` route must always be last.** New routes go above the `{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}` comment.

### Sitemap Generation

The custom Vite plugin in `vite-sitemap-plugin.ts` auto-extracts routes from `src/App.tsx` via regex and writes `dist/sitemap.txt` on build. It parses `<Route path="..."` patterns (skips `*`). No manual sitemap update needed — but adding a new page means adding a route in `App.tsx`.

### 404.html

A second Vite plugin in `vite.config.ts` copies `dist/index.html` to `dist/404.html` after each build, enabling SPA fallback on static hosts.

### Page Layout

`PageLayout` (`src/components/PageLayout.tsx`) wraps every page: `Header` + `<main>` + `Footer`. Pages pass children into it.

### Product Pages and Header Dropdown

When adding a new product, **three things must be updated together**:

1. **Route in `src/App.tsx`** — add `<Route path="/products/<slug>" .../>` and a privacy policy route.
2. **`products` array in `src/components/Header.tsx`** — drives the desktop dropdown and mobile nav. Each entry has: `name`, `description`, `icon` (lucide-react component), `productLink`, `privacyLink`, optional `downloadLink`.
3. **Page component in `src/pages/`** — the actual product page.

### Scroll Animations

Homepage sections use CSS animations via `animate-fade-in` / `animate-slide-in-left` classes (defined in `tailwind.config.ts`). `Index.tsx` sets up an `IntersectionObserver` that adds the `.animate` class on scroll. Apply `style={{ animationDelay: ... }}` for staggered effects.

### Custom Hooks

| Hook | File | Purpose |
|------|------|---------|
| `useScroll` | `src/hooks/use-scroll.ts` | Detects if page has scrolled past a threshold (used by Header for sticky shadow) |
| `useClickOutside` | `src/hooks/use-click-outside.ts` | Fires callback when clicking outside a ref (used by products dropdown) |

### Error Boundary

`src/components/error-boundary.tsx` wraps the entire app at the top of `App.tsx`. Shows a branded error page on crash with a reload button.
