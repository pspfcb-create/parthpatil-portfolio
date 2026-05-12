
# Parth Patil — Data Analyst Portfolio

A single-page scrollable site matching the PRD's dark-navy + gold theme and the inspiration screenshots (rounded gold pill labels, big bold display type, gold accents on key words, circular gold icons).

## Design System (from PRD §4)

Tokens added to `src/styles.css` (converted to oklch):
- `--background` → #0D1B3E (navy)
- `--card` / secondary surface → #111D3C
- `--primary` (gold) → #F5A623
- `--accent` (gold-dark) → #B8860B
- `--foreground` → #FFFFFF, `--muted-foreground` → #CCCCCC
- `--border` → #2A3A6A
- Font: Poppins (Google Fonts) for headings + body
- Display weights 700–900 for hero name, gold highlight on key words
- Pill "label" component: rounded-full, gold border, two-tone text (matches "DATA ANALYST PORTFOLIO", "About Me", "Technical Skills", "Notable Projects" pills in screenshots)

## Information Architecture

Per PRD: single-page, anchor-linked nav, fixed header. Smooth scroll with offset.

Sections (in order):
1. **Home / Hero** (`#home`) — full viewport. Left: gold pill "DATA ANALYST PORTFOLIO", giant "PARTH PATIL" (gold on last name), tagline "I help people finding insights through data". Right: circular portrait with gold disc background (placeholder avatar generated). Animated chevron-down scroll cue at bottom.
2. **About Me** (`#about`) — gold pill label, large "Hello, I'm Parth!" on left, paragraph on right with gold-highlighted key terms (Data Analyst, SQL/Python/Power BI, etc., from resume Summary). Social icon buttons (LinkedIn, email, GitHub) + outlined "Projects" button + gold-outlined "Download CV" button.
3. **Skills** (`#skills`) — gold pill "Technical Skills". 4-column grid with vertical dividers (matches screenshot 3):
   - Programming & Querying: SQL, Python, MySQL
   - Libraries & Frameworks: Pandas, NumPy, Matplotlib, Seaborn
   - BI & Visualization: Power BI, Tableau, Power Query, DAX, Excel, Google Sheets, Jupyter, GitHub
   - Analytical Methods: EDA, Statistical Modeling, Regression, A/B Testing, Hypothesis Testing, ETL, Forecasting, Segmentation
   Each tool item = gold circular icon (lucide) + label.
4. **Background** (`#background`) — gold pill "Education & Experience Background". Two-column layout: EDUCATION (MBA – CSIBER Kolhapur, 2025) and EXPERIENCE (Business Analyst Intern – Quantum IT Innovation; Data Analyst Intern – Shivshakti Distributors). Card-per-entry with gold circular logo placeholder, role/company in gold, bullet achievements from resume.
5. **Projects** (`#projects`) — gold pill "Notable Projects". Numbered cards "01", "02", "03"… with title in gold, dashboard image (placeholder / generated thumbnail), description, **Tools** and **Analysis** rows, and link buttons (GitHub / Dashboard).
   - Use the **3 real projects** from the resume (Customer Shopping Behavior, E-Commerce Sustainable Growth, Credit Card Analytics).
   - PRD mentions 20 projects but only lists 5 in the visible table excerpt and the resume has 3 with real metrics. To stay truthful and avoid fabricated case-study copy, ship the 3 resume projects in v1; structure the cards/grid so more can be added later by editing one array. (Confirmed as a sensible default — flag in plan.)
6. **Certifications** (`#certifications`) — card grid: HackerRank SQL Gold Badge (2026), Complete Python Bootcamp – Udemy (2024), AWS Cloud Practitioner.
7. **Contact** (`#contact`) — gold pill "Contact Info". Left: Phone (+91-9359321365), Email (parthpatil2611@gmail.com), LinkedIn (linkedin.com/in/parth-s-patil), GitHub (github.com/ParthPatilAnalyst) — each with gold circular icon. Right: large "Let's connect and work together!" headline with gold highlight. Simple contact form (name, email, message) with gold-outlined submit (mailto fallback, no backend per PRD §3.2).

Footer: small © Parth Patil 2026 line.

## Technical Approach

- Single TanStack route: `src/routes/index.tsx` renders all sections (PRD explicitly specifies single-page anchor scroll, so this is the documented exception to the multi-route rule).
- Components in `src/components/portfolio/`: `Nav.tsx`, `Hero.tsx`, `About.tsx`, `Skills.tsx`, `Background.tsx`, `Projects.tsx`, `Certifications.tsx`, `Contact.tsx`, `SectionLabel.tsx` (the gold pill).
- Fixed top nav with anchor links, gold underline on hover, smooth scroll via CSS `scroll-behavior` + `scroll-margin-top` on sections.
- IntersectionObserver hook for fade-in-on-scroll.
- Hero portrait + project thumbnails generated via `imagegen` (portrait: stylized male data-analyst illustration on gold disc; project thumbs: abstract dashboard mockups in matching palette).
- SEO via `head()` on the index route: title "Parth Patil — Data Analyst Portfolio", description, og tags, JSON-LD `Person` schema.
- Resume PDF copied to `public/Parth_Patil_Resume.pdf` for the Download CV button.
- Fully responsive: 4-col skills → 2-col tablet → 1-col mobile; hero stacks on mobile; nav collapses to hamburger sheet.

## Out of Scope (v1)

Per PRD: no blog, no CMS, no auth. Contact form uses mailto (no backend). Projects 4–20 deferred until real content provided.

## Open Question

The PRD lists 20 projects but the resume only contains 3 with real metrics. **Plan ships the 3 real ones**; if you'd like, I can scaffold 17 additional placeholder cards using the titles/tools from the PRD table (Sales Performance Dashboard, Supply Chain Analytics, HR Attrition, etc.) with "Coming soon" badges. Tell me in your reply if you want the placeholder cards too.
