# AI Coding Agent Instructions for BTSS Website

## Project Overview
**BTSS Website** is a marketing/portfolio website built with **Vite + React + TypeScript + shadcn-ui + Tailwind CSS**. It's a single-page application (SPA) showcasing B2B payment solutions. The project was scaffolded with Lovable and uses component-driven architecture.

**Key Tech Stack:**
- **Build**: Vite (port 8080)
- **UI Framework**: React 18 with TypeScript
- **Component Library**: shadcn-ui (Radix UI primitives + CVA variants)
- **Styling**: Tailwind CSS with custom HSL color system
- **State Management**: TanStack React Query (for async data)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Notifications**: Sonner + @radix-ui/react-toast

## Architecture & Key Patterns

### 1. **Component Structure**
- **Page-level**: `src/pages/` - Route pages (Index.tsx, NotFound.tsx)
- **Feature components**: `src/components/` - Composition of page sections:
  - `Header.tsx`, `Hero.tsx`, `About.tsx`, `Services.tsx`, `CaseStudy.tsx`, `WhyChooseUs.tsx`, `Contact.tsx`, `Footer.tsx`
  - Each is a self-contained section following the landing page layout
- **UI primitives**: `src/components/ui/` - shadcn-ui wrapped components with project-specific variants
  - All components use CVA (class-variance-authority) for variant management
  - Use `cn()` utility (from `@/lib/utils.ts`) to merge Tailwind classes: `className={cn("base-class", variant && "conditional")}`

### 2. **Routing Pattern**
- **Single route structure** in `App.tsx`:
  ```tsx
  <Route path="/" element={<Index />} />
  <Route path="*" element={<NotFound />} />
  ```
- **Comment in App.tsx**: `/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */`
- All content is in the Index page; add new routes before the wildcard

### 3. **Styling Conventions**
- **HSL CSS variables** defined in globals (src/index.css):
  - Primary, secondary, accent, destructive, success, muted colors
  - Light/dark variants: `primary-light`, `primary-dark`, etc.
  - Reference in Tailwind via: `bg-primary`, `text-accent`, etc.
- **Custom class patterns** in Tailwind config:
  - `container-custom` - centered container
  - `shadow-professional`, `shadow-professional-hover` - project-specific shadows
  - `card-professional` - styled cards
  - Animation classes: `animate-slide-up`, `animate-fade-in`, `animate-scale-in`
- **Section wrapper component** (`Section.tsx` in ui/):
  - Use for all major sections: `<Section id="section-name">...</Section>`

### 4. **Data Query Pattern**
- **TanStack React Query** for server state:
  - Create query hooks in component files or `src/hooks/`
  - Example pattern: `const { data, isLoading } = useQuery(...)`
- **Zod + React Hook Form** for form validation
- No Redux or Zustand (keep it simple for a marketing site)

### 5. **UI Component Variants**
- **Button component** (`button.tsx`) uses CVA variants:
  - `variant`: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "professional"
  - `size`: "default" | "sm" | "lg" | "icon"
  - Example: `<Button variant="professional" size="lg">CTA</Button>`
- **Most components** expose props through CVA to allow theme consistency

## Critical Developer Workflows

### Build & Development
```bash
npm run dev          # Start Vite dev server (http://localhost:8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint check
npm run preview      # Preview production build
```

### Path Aliases
- `@/*` resolves to `src/*` (e.g., `import { Button } from "@/components/ui/button"`)
- Always use `@/` for imports to avoid relative paths

### TypeScript Configuration
- **Relaxed settings** (see `tsconfig.json`):
  - `noImplicitAny: false` - allows implicit any
  - `noUnusedLocals: false`, `noUnusedParameters: false` - allows dead code (Lovable pattern)
  - `strictNullChecks: false` - allows null without explicit typing
  - Prefer clean code but these settings are intentional for rapid development

### Linting Rules
- ESLint config (`eslint.config.js`):
  - `@typescript-eslint/no-unused-vars: off` - dead code is allowed
  - React Hooks and React Refresh rules enabled
  - Focus on component exports and hook dependencies

## File Organization & Naming

| Location | Purpose | Example |
|----------|---------|---------|
| `src/components/` | Page sections (one component per file) | `Hero.tsx` (exported as named export) |
| `src/components/ui/` | shadcn-ui wrappers & primitives | `button.tsx`, `card.tsx` (lowercase, per shadcn convention) |
| `src/pages/` | Route page components | `Index.tsx`, `NotFound.tsx` |
| `src/lib/` | Utilities & helpers | `utils.ts` (contains `cn()` function) |
| `src/hooks/` | Custom React hooks | `use-toast.ts`, `use-mobile.tsx` |
| `src/assets/` | Images, fonts, static files | `hero.jpg` |

## Common Tasks & Examples

### Adding a New Section
1. Create `src/components/NewSection.tsx` as a named export
2. Import in `src/pages/Index.tsx` and add `<NewSection />`
3. Use `<Section id="new-section">` wrapper
4. Follow existing gradient & animation patterns (Hero.tsx as reference)

### Adding a UI Component
1. Copy shadcn component from `src/components/ui/`
2. Add custom CVA variants if needed (see button.tsx)
3. Use `cn()` for conditional class merging
4. Export as default

### Form Handling
- Use `React Hook Form` + `Zod` validation
- Example pattern in `Contact.tsx` (form submission)
- Integrate with `useToast()` for success/error messages

### Custom Animations
- Tailwind animations defined in `tailwind.config.ts`
- Common animations: `animate-slide-up`, `animate-fade-in`, `animate-scale-in`
- Define in theme → extend → keyframes/animation

## Dependencies Not Typically Used (But Available)
- `@tanstack/react-query` - rarely used for a static site, but set up for future API integration
- `date-fns` - available for date formatting
- Form components (calendar, combobox, select, etc.) - ready in ui/ if needed

## Project-Specific Notes
- **Lovable Integration**: Component tagger plugin in Vite config (development mode only)
- **Dark Mode**: `next-themes` is available but may not be fully configured
- **No Backend**: This is a frontend-only SPA; API calls would use React Query
- **No Tests**: No jest/vitest configured (Lovable convention)

## Quick Reference: Import Patterns
```tsx
// UI components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

// Icons
import { ArrowRight, Mail, Phone } from "lucide-react";

// Utilities
import { cn } from "@/lib/utils";

// Hooks
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
```
