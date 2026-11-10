<template>
  <v-container fluid class="skills-section" aria-labelledby="skills-title">
    <div class="section-heading" data-aos="fade-up">
      <p class="eyebrow">Toolkit</p>
      <h2 id="skills-title">Tools for the whole stack.</h2>
    </div>
    <v-row>
      <v-col
        v-for="(group, index) in skillGroups"
        :key="group.name"
        cols="12"
        md="6"
        class="skill-column"
        data-aos="fade-up"
        :data-aos-delay="index * 70"
      >
        <section class="skill-card" :aria-labelledby="`skill-group-${index}`">
          <h3 :id="`skill-group-${index}`">{{ group.name }}</h3>
          <ul>
            <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
          </ul>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const skillGroups = [
  {
    name: 'Frontend engineering',
    skills: [
      'Vue.js',
      'React.js',
      'Nuxt.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SCSS'
    ]
  },
  {
    name: 'UI, design & delivery',
    skills: [
      'Tailwind CSS',
      'Vuetify',
      'Bootstrap',
      'Material UI',
      'Figma',
      'GSAP',
      'Vite',
      'Webpack',
      'CI/CD'
    ]
  },
  {
    name: 'State, APIs & data',
    skills: [
      'Pinia',
      'Vuex',
      'Zustand',
      'Context API',
      'Node.js',
      'REST APIs',
      'GraphQL',
      'PostgreSQL',
      'MongoDB'
    ]
  },
  {
    name: 'Architecture & AI',
    skills: [
      'AI / LLM integrations',
      'System design',
      'Micro-frontends',
      'Django REST Framework',
      'Core Web Vitals',
      'SEO',
      'SSR'
    ]
  }
]
</script>

<style lang="scss" scoped>
.skills-section {
  width: 100%;
  max-width: 80rem;
  padding: clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem) 4rem !important;
  margin-inline: auto;

  .section-heading {
    margin-bottom: 1.5rem;
  }

  .eyebrow {
    color: var(--accent);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    line-height: 1.5;
    text-transform: uppercase;
  }

  h2 {
    margin: 0.5rem 0 1rem;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.1;
    letter-spacing: -0.05em;
  }

  .skill-card {
    height: 100%;
    padding: 1.5rem;
    border: 1px solid var(--border);
    border-radius: 1rem;
    background: var(--surface);

    h3 {
      margin: 0 0 1rem;
      color: var(--text);
      font-size: 1.1rem;
      font-weight: 700;
      overflow-wrap: anywhere;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.55rem;
      padding: 0;
      list-style: none;
    }

    li {
      max-width: 100%;
      padding: 0.4rem 0.7rem;
      border-radius: 999px;
      background: var(--bg1);
      color: var(--text80);
      font-size: 0.85rem;
      font-weight: 500;
      overflow-wrap: anywhere;
    }
  }
}

@media (max-width: 600px) {
  .skills-section {
    padding-top: 3.5rem !important;
    padding-bottom: 3rem !important;

    .skill-card {
      padding: 1.2rem;
    }
  }
}
</style>
