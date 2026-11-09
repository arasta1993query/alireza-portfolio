import { readFile, writeFile } from 'node:fs/promises'
import { renderPortfolio } from '../node_modules/.vite/portfolio-ssr/entry-server.js'

const entry = new URL('../dist/index.html', import.meta.url)
const placeholder = '<div id="app"></div>'
const html = await readFile(entry, 'utf8')

if (!html.includes(placeholder)) {
  throw new Error('Could not find the Vue mount point in dist/index.html.')
}

const content = await renderPortfolio()
await writeFile(entry, html.replace(placeholder, () => `<div id="app">${content}</div>`))
