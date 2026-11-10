<template>
  <homeHeroSection />
  <feturedProjects />
  <v-container fluid class="contact-section" data-aos="fade-up" aria-labelledby="contact-title">
    <p class="eyebrow">Have a project in mind?</p>
    <h2 id="contact-title">Let’s make something useful.</h2>
    <p class="contact-copy">
      For roles, collaborations, or a conversation about web and AI, get in touch.
    </p>
    <RouterLink class="contact-link" to="/contact"
      >Visit the contact page <span aria-hidden="true">↗</span></RouterLink
    >
  </v-container>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import homeHeroSection from '../components/homepage/homeHeroSection.vue'
import feturedProjects from '../components/homepage/feturedProjects.vue'
</script>

<style lang="scss" scoped>
.contact-section {
  width: calc(100% - clamp(2.5rem, 10vw, 8rem));
  max-width: 72rem;
  margin: clamp(3rem, 7vw, 5rem) auto 4rem;
  padding: clamp(1.5rem, 6vw, 4rem);
  border: 1px solid var(--border);
  border-radius: 1.5rem;
  background: var(--surface);
  text-align: center;

  .eyebrow {
    color: var(--accent);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0.75rem 0;
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 1.1;
    letter-spacing: -0.05em;
    text-align: center;
  }

  .contact-copy {
    max-width: 38rem;
    margin: 0 auto 1.25rem;
  }

  .contact-link {
    display: inline-flex;
    min-height: 2.75rem;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.65rem 1rem;
    border-radius: 999px;
    background: var(--text);
    color: var(--main);
    text-decoration: none;
    transition: opacity 180ms ease;

    &:hover {
      opacity: 0.82;
    }

    span {
      font-size: 1.1em;
    }
  }

  a:not(.contact-link) {
    color: var(--text);
    text-decoration: underline;
    text-underline-offset: 0.25em;
    overflow-wrap: anywhere;
  }
}

@media (max-width: 600px) {
  .contact-section {
    width: calc(100% - 2rem);
    margin-bottom: 2rem;

    .contact-copy {
      font-size: 0.95rem;
    }
  }
}
</style>
