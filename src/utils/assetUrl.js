/** Resolves a path under `public/` for the current Vite base URL (dev vs GitHub Pages). */
export function assetUrl(relativePath) {
  const path = relativePath.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${path}`;
}
