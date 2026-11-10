import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = resolve(projectRoot, 'dist')
const homepagePath = resolve(distRoot, 'index.html')
const baseHtml = await readFile(homepagePath, 'utf8')
const prerenderedRoutes = [
  {
    path: 'about',
    title: 'About Vinayak P G | Senior Developer - Web & AI',
    description:
      'Learn about Vinayak P G, a Bengaluru-based Senior Developer working across web architecture, AI integrations, APIs, and end-to-end product delivery.'
  },
  {
    path: 'contact',
    title: 'Contact Vinayak P G | Senior Developer - Web & AI',
    description:
      'Get in touch with Vinayak P G about web development, AI projects, professional opportunities, and collaborations.'
  }
]

function replaceExactlyOnce(html, pattern, replacement, label) {
  const matches = html.match(new RegExp(pattern.source, 'g')) ?? []
  if (matches.length !== 1) {
    throw new Error(`Expected one ${label} tag in the built homepage, found ${matches.length}.`)
  }
  return html.replace(pattern, replacement)
}

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

for (const route of prerenderedRoutes) {
  const title = escapeAttribute(route.title)
  const description = escapeAttribute(route.description)
  const canonical = `https://vinayakpg.netlify.app/${route.path}`
  const routePath = resolve(distRoot, route.path, 'index.html')
  let html = baseHtml

  html = replaceExactlyOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, 'title')
  html = replaceExactlyOnce(
    html,
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${description}" />`,
    'description'
  )
  html = replaceExactlyOnce(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${canonical}" />`,
    'canonical'
  )
  html = replaceExactlyOnce(
    html,
    /<meta\s+property="og:title"[\s\S]*?\/>/,
    `<meta property="og:title" content="${title}" />`,
    'Open Graph title'
  )
  html = replaceExactlyOnce(
    html,
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${description}" />`,
    'Open Graph description'
  )
  html = replaceExactlyOnce(
    html,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${canonical}" />`,
    'Open Graph URL'
  )
  html = replaceExactlyOnce(
    html,
    /<meta\s+name="twitter:title"[\s\S]*?\/>/,
    `<meta name="twitter:title" content="${title}" />`,
    'Twitter title'
  )
  html = replaceExactlyOnce(
    html,
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${description}" />`,
    'Twitter description'
  )

  await mkdir(dirname(routePath), { recursive: true })
  await writeFile(routePath, html)
}
