import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { App } from '@/app/App'

/** Used at build time by scripts/prerender.mjs so crawlers get the full page as HTML. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
