# Personal Website Project Instructions

## Project Overview
This is a personal website and blog built with **Astro**. It serves as a professional portfolio and a platform for sharing blog posts. The project prioritizes performance, clean architecture, and a seamless dark/light mode experience.

## Tech Stack
- **Framework**: Astro (Strictly `.astro` files, no React, Svelte, or Vue).
- **Styling**: Vanilla CSS with CSS Variables for theming. Styles are scoped within components or defined globally in `src/styles/global.css`.
- **Content**: Markdown (`.md`) managed through Astro Content Collections.
- **Icons/Assets**: Managed via `astro:assets`. Local images are stored in `src/assets/`.

## Project Architecture
- **Layouts**: `src/layouts/BaseLayout.astro` is the main layout, containing the `Navbar`, `Footer`, and the dark mode toggle logic.
- **Pages**:
  - `src/pages/index.astro`: Homepage and About section.
  - `src/pages/blog/index.astro`: Blog listing page.
  - `src/pages/blog/[...slug].astro`: Dynamic route for individual blog posts.
- **Components**: Modular and reusable Astro components located in `src/components/` (e.g., `Hero.astro`, `Timeline.astro`, `Navbar.astro`).
- **Content Collections**: Blog posts are defined in `src/content/blog/` with a schema enforced in `src/content/config.ts` using Zod.

## Third-Party Integrations
- **Comments**: The blog uses **Giscus** (`src/components/Giscus.astro`) for comments, which leverages GitHub Discussions. It automatically synchronizes with the site's dark/light theme via a `MutationObserver`.

## Building and Running
- `npm run dev`: Starts the development server at `http://localhost:4321`.
- `npm run build`: Generates a static production build in the `dist/` directory.
- `npm run preview`: Previews the production build locally.

## Development Conventions
1. **Component-First Design**: Break down UI into small, focused Astro components in `src/components/`.
2. **Vanilla CSS**: Avoid external CSS frameworks. Use CSS Variables defined in `src/styles/global.css` for consistent theming.
3. **Theming**: Always respect the `data-theme` attribute on the `<html>` element. Use the semantic CSS variables (e.g., `--bg-color`, `--text-color`) to ensure compatibility with both light and dark modes.
4. **Content Collections**: When adding new blog posts, ensure they adhere to the schema in `src/content/config.ts` (title, description, pubDate, etc.).
5. **Image Optimization**: Use the `<Image />` component from `astro:assets` for all local images to ensure they are optimized during the build process.
6. **No External Frameworks**: Do not introduce React, Vue, or other UI libraries unless explicitly requested. Keep the site lightweight by sticking to standard Astro/HTML/CSS.
