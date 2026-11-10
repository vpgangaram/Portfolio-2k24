<template>
  <header class="site-header">
    <div class="header-inner">
      <RouterLink to="/" class="brand-link" aria-label="Vinayak P G home">
        <span class="brand-name">Vinayak P G</span>
      </RouterLink>

      <nav class="desktop-navigation" aria-label="Main navigation">
        <RouterLink :to="{ name: 'home' }">Work</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <a
          href="https://www.linkedin.com/in/vinayak-p-gangaramanavar"
          target="_blank"
          rel="noopener noreferrer"
          >LinkedIn<span class="visually-hidden"> (opens in a new tab)</span></a
        >
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

      <div class="desktop-actions">
        <button
          class="theme-toggle"
          type="button"
          role="switch"
          :aria-checked="isDark"
          :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="toggleTheme"
        >
          <span class="theme-icon" aria-hidden="true">{{ isDark ? '☾' : '☼' }}</span>
          <span>{{ isDark ? 'Dark' : 'Light' }}</span>
        </button>
      </div>

      <button
        ref="menuButton"
        class="menu-button"
        type="button"
        aria-label="Open navigation menu"
        aria-controls="mobile-navigation"
        :aria-expanded="isDrawerOpen"
        @click="openDrawer"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <Teleport to="body">
    <Transition name="drawer">
      <div v-if="isDrawerOpen" class="mobile-drawer-layer">
        <button
          class="drawer-backdrop"
          type="button"
          tabindex="-1"
          aria-label="Close navigation menu"
          @click="closeDrawer"
        ></button>
        <section
          id="mobile-navigation"
          ref="drawerPanel"
          class="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
          @keydown="handleDrawerKeydown"
        >
          <div class="drawer-header">
            <span id="drawer-title" class="drawer-title">Navigation</span>
            <button
              ref="closeButton"
              class="drawer-close"
              type="button"
              aria-label="Close navigation menu"
              @click="closeDrawer"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav class="drawer-links" aria-label="Mobile navigation">
            <RouterLink :to="{ name: 'home' }" @click="closeDrawer">Work</RouterLink>
            <RouterLink to="/about" @click="closeDrawer">About</RouterLink>
            <a
              href="https://www.linkedin.com/in/vinayak-p-gangaramanavar"
              target="_blank"
              rel="noopener noreferrer"
              @click="closeDrawer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <RouterLink to="/contact" @click="closeDrawer">Contact</RouterLink>
          </nav>
          <button
            class="theme-toggle drawer-theme-toggle"
            type="button"
            role="switch"
            :aria-checked="isDark"
            :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
            @click="toggleTheme"
          >
            <span class="theme-icon" aria-hidden="true">{{ isDark ? '☾' : '☼' }}</span>
            <span>Use {{ isDark ? 'light' : 'dark' }} theme</span>
          </button>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useTheme } from 'vuetify'

const theme = useTheme()
const route = useRoute()
const isDark = computed(() => theme.global.current.value.dark)
const isDrawerOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
const drawerPanel = ref<HTMLElement | null>(null)
let previousBodyOverflow = ''

function toggleTheme() {
  const nextTheme = isDark.value ? 'light' : 'dark'
  theme.global.name.value = nextTheme
  document.body.classList.remove('light', 'dark')
  document.body.classList.add(nextTheme)
  localStorage.setItem('theme', nextTheme)
}

async function openDrawer() {
  isDrawerOpen.value = true
  await nextTick()
  closeButton.value?.focus()
}

function closeDrawer() {
  isDrawerOpen.value = false
  nextTick(() => menuButton.value?.focus())
}

function handleViewportChange() {
  if (window.innerWidth > 760 && isDrawerOpen.value) {
    closeDrawer()
  }
}

function handleDrawerKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    event.preventDefault()
    closeDrawer()
    return
  }

  if (event.key !== 'Tab' || !drawerPanel.value) {
    return
  }

  const focusableElements = drawerPanel.value.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )
  const firstElement = focusableElements.item(0)
  const lastElement = focusableElements.item(focusableElements.length - 1)

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault()
    lastElement?.focus()
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault()
    firstElement?.focus()
  }
}

watch(isDrawerOpen, (isOpen) => {
  if (isOpen) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = previousBodyOverflow
  }
})

watch(
  () => route.fullPath,
  () => {
    if (isDrawerOpen.value) {
      closeDrawer()
    }
  }
)

onMounted(() => {
  window.addEventListener('resize', handleViewportChange)

  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light' || savedTheme === 'dark') {
    theme.global.name.value = savedTheme
    document.body.classList.add(savedTheme)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleViewportChange)
  document.body.style.overflow = previousBodyOverflow
})
</script>

<style lang="scss" scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  border-bottom: 1px solid var(--border);
  background: color-mix(in srgb, var(--bg-color) 88%, transparent);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.header-inner {
  display: flex;
  width: min(100% - 3rem, 80rem);
  min-height: 5rem;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-inline: auto;
}

.brand-link {
  flex: 0 0 auto;
  color: var(--text);
  text-decoration: none;
}

.brand-name {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.desktop-navigation {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(1.25rem, 3vw, 2.5rem);
  margin-left: auto;

  a {
    color: var(--text50);
    font-size: 0.95rem;
    text-decoration: none;
    text-underline-offset: 0.4em;
    transition: color 180ms ease;

    &:hover,
    &:focus-visible,
    &.router-link-active {
      color: var(--text);
    }
  }

  .router-link-active {
    text-decoration: underline;
  }
}

.desktop-actions {
  flex: 0 0 auto;
}

.theme-toggle {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.55rem 0.85rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    border-color 180ms ease,
    background-color 180ms ease;

  &:hover {
    border-color: var(--accent);
  }
}

.theme-icon {
  color: var(--accent);
  font-size: 1.1rem;
  line-height: 1;
}

.menu-button {
  display: none;
  width: 2.75rem;
  height: 2.75rem;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--surface);
  cursor: pointer;

  span {
    width: 1rem;
    height: 2px;
    border-radius: 2px;
    background: var(--text);
  }
}

.mobile-drawer-layer {
  position: fixed;
  z-index: 40;
  inset: 0;
  display: flex;
  justify-content: flex-end;
}

.drawer-backdrop {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background: rgba(10, 10, 10, 0.48);
  cursor: default;
}

.mobile-drawer {
  position: relative;
  z-index: 1;
  display: flex;
  width: min(24rem, calc(100% - 2rem));
  height: 100%;
  flex-direction: column;
  padding: max(1.25rem, env(safe-area-inset-top)) 1.5rem max(1.5rem, env(safe-area-inset-bottom));
  border-left: 1px solid var(--border);
  background: var(--bg-color);
  box-shadow: -1rem 0 3rem rgba(0, 0, 0, 0.14);
}

.drawer-header {
  display: flex;
  min-height: 3rem;
  align-items: center;
  justify-content: space-between;
}

.drawer-title {
  color: var(--text);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.drawer-close {
  display: grid;
  width: 2.75rem;
  height: 2.75rem;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--surface);
  color: var(--text);
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
}

.drawer-links {
  display: grid;
  gap: 0.25rem;
  margin-top: 2.5rem;

  a {
    display: flex;
    min-height: 3.75rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border);
    color: var(--text);
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: -0.03em;
    text-decoration: none;

    &.router-link-active {
      color: var(--accent);
    }
  }
}

.drawer-theme-toggle {
  width: 100%;
  justify-content: flex-start;
  margin-top: auto;
  padding-inline: 1rem;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 220ms ease;

  .drawer-backdrop {
    transition: opacity 220ms ease;
  }

  .mobile-drawer {
    transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;

  .drawer-backdrop {
    opacity: 0;
  }

  .mobile-drawer {
    transform: translateX(100%);
  }
}

@media (max-width: 760px) {
  .header-inner {
    width: calc(100% - 2rem);
    min-height: 4.25rem;
    gap: 1rem;
  }

  .desktop-navigation,
  .desktop-actions {
    display: none;
  }

  .menu-button {
    display: flex;
  }
}

@media (min-width: 761px) and (max-width: 900px) {
  .header-inner {
    width: calc(100% - 2.5rem);
    gap: 1.25rem;
  }

  .desktop-navigation {
    gap: 1.1rem;
  }

  .theme-toggle {
    padding-inline: 0.7rem;
  }
}
</style>
