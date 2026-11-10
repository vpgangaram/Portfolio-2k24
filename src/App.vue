<template>
  <div class="app-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <MainNavigation />
    <main id="main-content" tabindex="-1">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNavigation from './components/mainNavigation.vue'
</script>

<style scoped lang="scss">
.app-shell {
  width: 100%;
  overflow: clip;
}

.skip-link {
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 100;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: var(--text);
  color: var(--main);
  transform: translateY(-160%);
}

.skip-link:focus {
  transform: translateY(0);
}
</style>
