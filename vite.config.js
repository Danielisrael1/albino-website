import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Emits robots.txt and sitemap.xml at build time so the crawl files and the
 * page metadata always agree on one site URL (set in .env).
 */
function crawlFiles(siteUrl) {
  const base = siteUrl.replace(/\/+$/, '')
  return {
    name: 'wacwau-crawl-files',
    apply: 'build',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          `  <url>\n` +
          `    <loc>${base}/</loc>\n` +
          `    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>\n` +
          `    <changefreq>monthly</changefreq>\n` +
          `    <priority>1.0</priority>\n` +
          `  </url>\n` +
          `</urlset>\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const siteUrl = env.VITE_SITE_URL || 'https://danielisrael1.github.io/albino-website'
  return {
    plugins: [react(), crawlFiles(siteUrl)],
    server: { port: 5173, open: true },
    build: { assetsInlineLimit: 0 },
  }
})
