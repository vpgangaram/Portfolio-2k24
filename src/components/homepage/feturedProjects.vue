<template>
  <v-container id="projects" fluid class="container" aria-labelledby="projects-title">
    <v-row data-aos="fade-up">
      <v-col class="intro">
        <p class="eyebrow">Selected work</p>
        <h2 id="projects-title">Projects built to work in the real world.</h2>
        <p class="section-copy">
          A selection of frontend, commerce, and end-to-end product work. Project links open in a
          new tab.
        </p>
      </v-col>
    </v-row>
    <v-row class="workHistory">
      <v-col
        v-for="(project, index) in featuredProjects"
        :key="project.projectName"
        cols="12"
        md="6"
        class="project-card-wrap d-flex"
        data-aos="fade-up"
        :data-aos-delay="Math.min(index * 70, 280)"
      >
        <article class="project-card">
          <div class="project-heading">
            <div>
              <p class="project-role">{{ project.role }}</p>
              <h3>{{ project.projectName }}</h3>
            </div>
            <a
              class="project-link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Visit ${project.projectName} (opens in a new tab)`"
              >Visit project <span aria-hidden="true">↗</span></a
            >
          </div>
          <p class="project-summary">{{ project.summary }}</p>
          <ul v-if="project.highlights?.length" class="project-highlights">
            <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
          <ul class="project-tags" aria-label="Technologies and focus areas">
            <li class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</li>
          </ul>
          <div class="project-visual" :class="{ 'project-visual--image': project.image }">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="`${project.projectName} website preview`"
              loading="lazy"
              decoding="async"
            />
            <div v-else class="project-placeholder" aria-hidden="true">
              <span>{{ project.client }}</span>
              <strong>{{ project.visualLabel }}</strong>
              <small>{{ project.tags[0] }} · Selected work</small>
            </div>
          </div>
        </article>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
type ProjectItem = {
  projectName: string
  client: string
  role: string
  link: string
  summary: string
  tags: string[]
  visualLabel: string
  image?: string
  highlights?: string[]
}

const featuredProjects: ProjectItem[] = [
  {
    projectName: 'Dabur International',
    client: 'Dabur',
    role: 'Frontend Developer',
    link: 'https://www.daburinternational.com/',
    summary:
      'Frontend work on a multilingual Nuxt and GraphQL platform serving 18 global markets, with a focus on performance and reliable delivery.',
    tags: ['Nuxt.js', 'GraphQL', 'i18n', 'Performance'],
    visualLabel: 'Global web platform',
    image: '/images/daburInternational.webp',
    highlights: [
      'Core Web Vitals score improved from 38 to 85+',
      'Nuxt migration reduced initial page load by 1.2 seconds'
    ]
  },
  {
    projectName: 'Praan',
    client: 'Praan',
    role: 'Frontend Developer',
    link: 'https://praan.io/',
    summary:
      'Built responsive interfaces for a deep-tech climate platform, with attention to interactive experiences and cross-device rendering.',
    tags: ['Vue.js', 'GSAP', 'Responsive UI'],
    visualLabel: 'Climate technology',
    image: '/images/praan.webp'
  },
  {
    projectName: 'Beretta Gallery USA',
    client: 'Beretta Gallery USA',
    role: 'Shopify Developer',
    link: 'https://berettagalleryusa.com/',
    summary:
      'Developed Shopify storefront experiences for a luxury retail brand, with a focus on clear product discovery and responsive presentation.',
    tags: ['Shopify', 'E-commerce', 'Frontend'],
    visualLabel: 'Luxury storefront'
  },
  {
    projectName: '45R USA',
    client: '45R USA',
    role: 'Shopify Developer',
    link: 'https://shop45rusa.com/',
    summary:
      'Created modular storefront interfaces and fluid shopping interactions, keeping product browsing and page performance in focus.',
    tags: ['Shopify', 'E-commerce', 'Performance'],
    visualLabel: 'Commerce experience'
  },
  {
    projectName: 'Pioxazon',
    client: 'PI Industries',
    role: 'End-to-end development & deployment',
    link: 'https://pioxazon.piindustries.com/',
    summary:
      'Delivered an enterprise portal end to end, building a modular Vue.js and Tailwind CSS interface for internal asset management.',
    tags: ['Vue.js', 'Tailwind CSS', 'Deployment'],
    visualLabel: 'Enterprise portal'
  }
]
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 80rem;
  padding: clamp(3.5rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem) 0 !important;
  margin-inline: auto;

  .intro {
    width: 100%;
    max-width: 56rem;
    padding-bottom: 2rem;

    .eyebrow {
      color: var(--accent);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      line-height: 1.5;
      text-transform: uppercase;
    }

    h2 {
      margin: 0.5rem 0;
      color: var(--text);
      font-size: clamp(2rem, 5vw, 3.4rem);
      line-height: 1.1;
      letter-spacing: -0.05em;
    }

    .section-copy {
      max-width: 42rem;
    }
  }

  .workHistory {
    .project-card-wrap {
      margin-bottom: 1.5rem;
      display: flex;
    }

    .project-card {
      width: 100%;
      min-width: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 1.4rem;
      border-radius: 1.25rem;
      background: var(--surface);
      border: 1px solid var(--border);
      transition:
        transform 260ms ease,
        border-color 260ms ease;

      &:hover {
        transform: translateY(-3px);
        border-color: var(--accent);
      }
    }

    .project-heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;

      > div {
        min-width: 0;
      }
    }

    .project-role {
      color: var(--accent);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      line-height: 1.5;
      text-transform: uppercase;
    }

    h3 {
      margin: 0.3rem 0 0;
      color: var(--text);
      font-size: clamp(1.3rem, 2vw, 1.65rem);
      font-weight: 700;
      line-height: 1.25;
      letter-spacing: -0.03em;
    }

    .project-link {
      flex: 0 0 auto;
      color: var(--text);
      font-size: 0.85rem;
      text-decoration: underline;
      text-underline-offset: 0.25em;
    }

    .project-summary {
      margin: 1rem 0;
      overflow-wrap: anywhere;
    }

    .project-highlights {
      display: grid;
      gap: 0.4rem;
      margin: 0 0 1rem;
      padding-left: 1.1rem;

      li {
        color: var(--text80);
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1.5;
      }
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin: auto 0 0.75rem;
      padding-top: 0.5rem;
      padding-left: 0;
      list-style: none;

      .tag {
        padding: 0.35rem 0.65rem;
        border-radius: 999px;
        background-color: var(--bg1);
        color: var(--text80);
        font-size: 0.78rem;
        font-weight: 500;
      }
    }

    .project-visual {
      display: grid;
      min-height: 0;
      aspect-ratio: 16 / 9;
      margin-top: 0.75rem;
      border-radius: 1rem;
      overflow: hidden;
      background:
        radial-gradient(circle at 85% 20%, rgba(166, 75, 55, 0.24), transparent 35%),
        linear-gradient(135deg, var(--bg1), var(--bg2));

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      .project-placeholder {
        display: flex;
        min-height: 0;
        flex-direction: column;
        justify-content: flex-end;
        gap: 0.5rem;
        padding: 1.5rem;

        span,
        small {
          color: var(--text50);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        strong {
          max-width: 13ch;
          color: var(--text);
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.05em;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .container {
    padding-top: 3.5rem !important;

    .intro {
      padding-bottom: 1.5rem;
    }

    .workHistory {
      .project-card {
        padding: 1.1rem;
      }

      .project-heading {
        flex-direction: column;
      }

      .project-visual .project-placeholder {
        padding: 1.1rem;
      }
    }
  }
}

@media (min-width: 601px) and (max-width: 959px) {
  .container {
    .workHistory {
      .project-card {
        padding: 1.2rem;
      }

      .project-heading {
        flex-wrap: wrap;
      }
    }
  }
}
</style>
