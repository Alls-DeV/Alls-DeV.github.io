# Personal Website Project Instructions

## Tech Stack
- **Framework**: Astro (Strictly `.astro` files, no React, Svelte, or Vue).
- **Styling**: Vanilla CSS (scoped within Astro components) and standard global CSS.

## Project Architecture
The website consists of a Homepage (which doubles as the "About" page) and a Blog. 

### 1. Global Layout (`src/layouts/BaseLayout.astro`)
- Must include a global **Navbar**:
  - Background color: Light gray.
  - Centered Links: "About" (routes to `/`) and "Blog" (routes to `/blog`).
  - Right-aligned element: A dark mode toggle icon (moon shape).
- Must handle global styles (font families, reset CSS, alternating section backgrounds).

### 2. Homepage (`src/pages/index.astro`)
Replicate the design from the reference image in `src/assets/homepage.png`, splitting the page into three distinct full-width sections:

**Section 1: Hero (White Background)**
- Layout: Flexbox/Grid with text on the left, profile image on the right.
- Title: "Hi, I'm Alessio 😺"
- Subtitle: "I like solving problems with and without numbers"
- Social Icons: Telegram, Email, GitHub, and LinkedIn arranged horizontally.
- Profile Picture: A circular cropped image of my face, that is at `src/assets/alessio_face.jpeg`.

**Section 2: About Me (Light Gray Background)**
- Heading: "About me"
- Content: Include the exact text from the reference image, preserving the `{TODO: ...}` placeholders so I can fill them in later (e.g., sports icons, blog post hyperlinks, software engineering details). 

**Section 3: Timeline (White Background)**
- Create a reusable `Timeline.astro` component.
- Visuals: A continuous vertical gray line on the left side with dots marking each entry.
- Entries: 
  - Show the Year range on the far left (e.g., 2024, 2023 - 2024).
  - Show the Company/Institution Logo in a rounded square.
  - Show the detailed description on the right (Eureka Labs, OpenAI, Tesla, Stanford PhD). Ensure links within the descriptions are styled correctly.

### 3. Blog (`src/pages/blog/index.astro` & `src/content/blog/`)
- Use Astro's **Content Collections** for the blog.
- **Blog Index**: A classic list view displaying the title, date, and a brief description of each markdown post. Clicking a post routes to its dedicated page.
- **Blog Post Layout**: A clean reading layout for individual articles.

## Execution Rules for Gemini CLI
1. When generating code, strictly use Astro standard practices (frontmatter fences `---`, scoped `<style>` tags).
2. Do not install additional UI frameworks; rely on standard HTML/CSS within Astro.
3. Build components modularly (e.g., `Navbar.astro`, `Hero.astro`, `AboutSection.astro`, `TimelineItem.astro`).
