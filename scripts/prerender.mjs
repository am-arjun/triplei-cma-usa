// Injects the server-rendered page into dist/index.html, then removes the SSR bundle.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const ssrDir = fileURLToPath(new URL('../dist-ssr/', import.meta.url))

// Import by URL, not path: Node on Windows rejects `import('C:\\...')`.
const { render } = await import(new URL('../dist-ssr/entry-server.js', import.meta.url).href)
const template = await readFile(`${dist}index.html`, 'utf8')
const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) throw new Error('prerender: #root placeholder not found in dist/index.html')

await writeFile(`${dist}index.html`, template.replace(placeholder, `<div id="root">${render()}</div>`))
await rm(ssrDir, { recursive: true, force: true })
console.log('prerender: dist/index.html written')
