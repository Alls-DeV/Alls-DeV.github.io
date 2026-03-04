# Personal Website Project Instructions

## Tech Stack
- **Framework**: Astro (Strictly `.astro` files, no React, Svelte, or Vue).
- **Styling**: Vanilla CSS (scoped within Astro components) and standard global CSS (`src/styles/global.css`).
- **Assets**: Handled by Astro's built-in `astro:assets` module.

## Project Architecture
The website consists of a Homepage (which doubles as the "About" page) and a Blog.
- **Layouts**: `src/layouts/BaseLayout.astro` serves as the primary layout, containing the global `Navbar` and handling the dark/light mode toggle via `data-theme`.
- **Pages**: 
  - `src/pages/index.astro` (Homepage / About).
  - `src/pages/blog/index.astro` (Blog listing).
  - `src/pages/blog/[...slug].astro` (Individual blog posts).
- **Components**: Modular Astro components (e.g., `Navbar.astro`, `Hero.astro`, `AboutSection.astro`, `Timeline.astro`) located in `src/components/`.
- **Content Collections**: The blog uses Astro Content Collections (`src/content/blog/`), with the schema defined in `src/content/config.ts` using `zod`. Markdown files (`.md`) are used for blog entries.

## Execution Rules for Gemini CLI
1. When generating code, strictly use Astro standard practices (frontmatter fences `---`, scoped `<style>` tags).
2. Do not install additional UI frameworks; rely on standard HTML/CSS within Astro.
3. Build components modularly.
4. For assets, prioritize using the `Image` component from `astro:assets` when dealing with local images.
5. Respect the existing dark/light mode functionality (managed via `data-theme` attribute on the `<html>` element).