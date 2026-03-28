# Bowler Stats Docs

Website for the Bowler Stats Discord bot (features, invite, Privacy Policy, Terms of Service).

This project is a **React** single-page app built with **Vite** and **React Router**.

**Support server:** https://discord.gg/kUARCbYxR4/

## Development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/`).

## Production build

```bash
npm run build
```

Output is in **`dist/`**, including a **`404.html`** copy of `index.html` so client-side routes work on **GitHub Pages** (which serves `404.html` for unknown paths).

The site assumes the repo is published at **`https://<user>.github.io/bowler-stats-docs/`**. The base path is set in `vite.config.js` (`/bowler-stats-docs/` in production). Change it if your Pages URL differs.

### Deploying to GitHub Pages (from `docs/` on `main`)

If you use the `/docs` folder as the publishing source:

1. Run `npm run build`.
2. Copy the contents of **`dist/`** into **`docs/`** (replace old files), or point your CI at `dist/` instead.

Static assets (images, `.nojekyll`) live under **`public/`** and are emitted into `dist/` on build.

## Project layout

| Path | Purpose |
|------|---------|
| `src/main.jsx` | Entry, router basename, theme provider |
| `src/App.jsx` | Route definitions |
| `src/components/Layout.jsx` | Top bar, nav, theme toggle, footer |
| `src/pages/*` | Page components |
| `src/data/commandsData.js` | Slash command list for the Commands page |
| `src/styles/global.css` | Site styles (migrated from the former `docs/assets/css/style.css`) |

Legacy static HTML/JS in `docs/` has been removed in favour of this app; keep **`public/assets/images`** (or your image assets) up to date for builds.
