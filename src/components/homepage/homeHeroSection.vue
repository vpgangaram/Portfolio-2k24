<template>
  <v-container fluid class="container">
    <v-row data-aos="fade-up">
      <v-col class="intro">
        <p class="eyebrow">Senior Developer · Web &amp; AI · Bengaluru, India</p>
        <h1>Building for the web.<br /><span>From idea to production.</span></h1>
        <p class="summary">
          I’m Vinayak P G, a Senior Developer focused on web and AI. I bring products end to end—
          from frontend architecture and AI integrations to APIs, performance, and deployment.
        </p>
        <div class="hero-actions">
          <a class="primary-link" href="#projects">Explore my work</a>
          <a class="text-link" href="mailto:gangaramanavar@gmail.com">Let’s talk</a>
        </div>
      </v-col>
    </v-row>
    <v-row class="workHistory" data-aos="fade-up" data-aos-delay="100">
      <v-col cols="12" sm="6" class="history-card">
        <p class="card-label">Current</p>
        <h2>Senior Developer — Web &amp; AI</h2>
        <p>
          <a href="https://luxeveda.com/" target="_blank" rel="noopener noreferrer">Luxeveda</a>
        </p>
      </v-col>
      <v-col cols="12" sm="6" class="history-card">
        <p class="card-label">Earlier experience</p>
        <h2>Frontend Development Intern</h2>
        <p>
          <a href="https://www.vtiger.com/" target="_blank" rel="noopener noreferrer">Vtiger CRM</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 80rem;
  padding: clamp(3.5rem, 9vw, 7.5rem) clamp(1.25rem, 5vw, 4rem) 3rem !important;
  margin-inline: auto;
  padding-bottom: 3rem;

  .intro {
    max-width: 58rem;
    padding-bottom: 4rem;
    position: relative;

    .eyebrow {
      display: flex;
      align-items: center;
      margin-bottom: 1.25rem;
      color: var(--accent);
      font-size: clamp(0.7rem, 1.4vw, 0.85rem);
      font-weight: 600;
      letter-spacing: 0.1em;
      line-height: 1.5;
      text-transform: uppercase;

      &::before {
        content: '';
        width: 1.75rem;
        height: 1px;
        margin-right: 0.7rem;
        background: currentColor;
      }
    }

    h1 {
      max-width: 15ch;
      font-size: clamp(2.75rem, 7.2vw, 6.5rem);
      font-weight: 800;
      line-height: 0.98;
      letter-spacing: -0.06em;
      margin: 0;

      span {
        color: var(--text50);
      }
    }

    .summary {
      max-width: 42rem;
      margin-top: 1.75rem;
      font-size: clamp(1.05rem, 1.5vw, 1.2rem);
      line-height: 1.8;
    }

    .hero-actions {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .primary-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 3rem;
      padding: 0.75rem 1.25rem;
      border-radius: 999px;
      background: var(--text);
      color: var(--main);
      transition:
        transform 220ms ease,
        opacity 220ms ease;

      &:hover {
        transform: translateY(-2px);
        opacity: 0.84;
      }
    }

    .text-link {
      color: var(--text);
      text-underline-offset: 0.3em;
      text-decoration: underline;
    }
  }

  .workHistory {
    align-items: stretch;

    .history-card {
      display: flex;
      min-width: 0;
      flex-direction: column;
      align-items: flex-start;
      padding: 1.35rem 1.5rem;
      border: 1px solid var(--border);
      border-radius: 1rem;
      background: var(--surface);
      transition:
        transform 260ms ease,
        border-color 260ms ease;

      &:hover {
        transform: translateY(-3px);
        border-color: var(--accent);
      }

      .card-label {
        color: var(--accent);
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      h2 {
        max-width: 100%;
        margin: 0.75rem 0 0.25rem;
        color: var(--text);
        font-size: clamp(1.2rem, 2vw, 1.45rem);
        line-height: 1.35;
        overflow-wrap: anywhere;
      }

      a {
        color: var(--text50);
        text-decoration: underline;
        text-underline-offset: 0.2em;

        &:hover {
          color: var(--text);
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .container {
    padding-top: 3.25rem !important;
    padding-bottom: 2rem;

    .intro {
      padding-bottom: 2rem;

      h1 {
        font-size: clamp(2.55rem, 12vw, 3.5rem);
        line-height: 1;
      }

      .hero-actions {
        gap: 1rem;
        margin-top: 1.5rem;
      }
    }

    .workHistory {
      .history-card {
        padding: 1.1rem;
      }
    }
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .container {
    padding-top: 5rem !important;

    .intro {
      h1 {
        font-size: clamp(3.25rem, 7vw, 5rem);
      }
    }
  }
}
</style>
