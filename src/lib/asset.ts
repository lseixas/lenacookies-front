/** Resolve public/ paths with Vite base (GitHub Pages: /lenacookies-front/). */
export function asset(path: string): string {
  const clean = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${clean}`
}
