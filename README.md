# Kitani Portfolio (Astro)

Static Astro portfolio with JSON-driven content, optimized for GitHub Pages.

## Tech
- Astro (static output)
- JSON content source (`src/data/portfolio.json`)
- Single-page responsive layout with agency/studio visual direction

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
1. Push this repository to GitHub (repo name expected: `Portfolio`).
2. In GitHub repo settings, enable **Pages** and set source to **GitHub Actions**.
3. Push to `main`; workflow at `.github/workflows/deploy.yml` will build and deploy.

## Customize content
Edit structured content in:
- `src/data/portfolio.json`

Replace visual assets in:
- `public/images/`
- `public/cv/Kitani-Islam-CV.pdf`
