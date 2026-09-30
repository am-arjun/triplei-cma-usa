// Injects the server-rendered page into dist/index.html, then removes the SSR bundle.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const ssrDir = fileURLToPath(new URL('../dist-ssr/', import.meta.url))

const { render } = await import(`${ssrDir}entry-server.js`)
const template = await readFile(`${dist}index.html`, 'utf8')
const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) throw new Error('prerender: #root placeholder not found in dist/index.html')

await writeFile(`${dist}index.html`, template.replace(placeholder, `<div id="root">${render()}</div>`))
await rm(ssrDir, { recursive: true, force: true })
console.log('prerender: dist/index.html written')
