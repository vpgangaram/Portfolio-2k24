import { createRouter, createWebHistory } from 'vue-router'

import AOS from 'aos'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Vinayak P G | Senior Developer - Web & AI',
        description:
          'Portfolio of Vinayak P G, a Senior Developer in Web and AI building high-performance web experiences from frontend architecture to deployment.'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about.vue'),
      meta: {
        title: 'About Vinayak P G | Senior Developer - Web & AI',
        description:
          'Learn about Vinayak P G, a Bengaluru-based Senior Developer working across web architecture, AI integrations, APIs, and end-to-end product delivery.'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: 'Contact Vinayak P G | Senior Developer - Web & AI',
        description:
          'Get in touch with Vinayak P G about web development, AI projects, professional opportunities, and collaborations.'
      }
    }
  ],
  scrollBehavior() {
    return {
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    }
  }
})

router.afterEach((to) => {
  const title = typeof to.meta.title === 'string' ? to.meta.title : 'Vinayak P G | Portfolio'
  const pageDescription =
    typeof to.meta.description === 'string'
      ? to.meta.description
      : 'Portfolio of Vinayak P G, Senior Developer in Web and AI.'

  document.title = title
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (description) {
    description.content = pageDescription
  }

  const canonicalPath = to.path.replace(/\/+$/, '') || '/'
  const canonicalUrl = new URL(canonicalPath, 'https://vinayakpg.netlify.app').href
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (canonical) {
    canonical.href = canonicalUrl
  }

  const socialMetadata = [
    ['meta[property="og:title"]', title],
    ['meta[property="og:description"]', pageDescription],
    ['meta[property="og:url"]', canonicalUrl],
    ['meta[name="twitter:title"]', title],
    ['meta[name="twitter:description"]', pageDescription]
  ]
  for (const [selector, content] of socialMetadata) {
    const meta = document.querySelector<HTMLMetaElement>(selector)
    if (meta) {
      meta.content = content
    }
  }

  requestAnimationFrame(() => AOS.refresh())
})

export default router
