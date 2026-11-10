<template>
  <v-container fluid class="container" aria-labelledby="about-title">
    <v-row class="row1">
      <v-col class="intro" cols="12" lg="6" md="6" sm="12">
        <div data-aos="fade-right">
          <p class="eyebrow">A little about me</p>
          <h1 id="about-title">I build it end to end.</h1>
        </div>
        <p data-aos="fade-up">
          I’m Vinayak P G, a Senior Developer focused on web and AI, based in Bengaluru. I enjoy
          owning the full journey—from shaping frontend architecture and building product
          experiences to connecting APIs, integrating AI capabilities, improving performance, and
          shipping to production.
        </p>
        <a href="mailto:gangaramanavar@gmail.com" class="social-link" data-aos="fade-up">
          <span aria-hidden="true">↗</span>
          <span>Get in touch</span>
        </a>
      </v-col>
      <v-col cols="12" lg="5" md="5" sm="12" data-aos="fade-left">
        <img
          src="/vinayakProfilePic.webp"
          alt="Portrait of Vinayak P G"
          width="1000"
          height="1000"
          loading="lazy"
          decoding="async"
        />
      </v-col>
    </v-row>
    <v-row class="career-row" data-aos="fade-up" aria-labelledby="experience-title">
      <v-col cols="12">
        <p class="eyebrow">Experience</p>
        <h2 id="experience-title">A path through web development.</h2>
      </v-col>
      <v-col cols="12" md="6">
        <article class="career-card">
          <p class="career-label">Current</p>
          <h3>Senior Developer — Web &amp; AI</h3>
          <p class="career-company">Luxeveda</p>
          <p>
            Grew from Web Development Executive into a senior role, contributing to web
            architecture, AI-powered capabilities, platform performance, and delivery.
          </p>
        </article>
      </v-col>
      <v-col cols="12" md="6">
        <article class="career-card">
          <p class="career-label">Earlier experience</p>
          <h3>Frontend Development Intern</h3>
          <p class="career-company">Vtiger CRM</p>
          <p>Started my professional journey learning and contributing to frontend development.</p>
        </article>
      </v-col>
      <v-col cols="12">
        <p class="education">
          <strong>Education</strong>
          Bachelor of Engineering · Don Bosco Institute of Technology, Bengaluru · 2018–2022
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 80rem;
  padding: clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem) 0 !important;
  margin-inline: auto;

  img {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: top;
    max-width: 100%;
    border-radius: 1.25rem;
    height: auto;
  }

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
      max-width: 10ch;
      font-size: clamp(3rem, 6vw, 5rem);
      font-weight: 800;
      line-height: 1;
      letter-spacing: -0.06em;
      margin: 0;
    }

    .eyebrow {
      margin-bottom: 1rem;
      color: var(--accent);
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      line-height: 1.5;
      text-transform: uppercase;
    }

    p {
      padding-top: 1.75rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1.75rem;
      color: var(--text);
      text-decoration: underline;
      text-underline-offset: 0.3em;
    }
  }

  .career-row {
    margin-top: clamp(4rem, 8vw, 7rem);

    .eyebrow,
    .career-label {
      color: var(--accent);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    h2 {
      margin: 0.5rem 0 1rem;
      font-size: clamp(2rem, 4vw, 3rem);
      line-height: 1.1;
      letter-spacing: -0.05em;
    }

    .career-card {
      height: 100%;
      padding: 1.5rem;
      border: 1px solid var(--border);
      border-radius: 1rem;
      background: var(--surface);

      h3 {
        margin: 0.5rem 0 0.2rem;
        color: var(--text);
        font-weight: 700;
      }

      .career-company {
        margin-bottom: 0.75rem;
        color: var(--text50);
        font-weight: 600;
      }
    }

    .education {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem 1rem;
      margin-top: 0.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border);

      strong {
        color: var(--text);
      }
    }
  }
}

@media (max-width: 960px) {
  .container {
    .row1 > .v-col {
      flex: 0 0 100%;
      max-width: 100%;
    }

    img {
      max-width: min(100%, 34rem);
    }

    .intro {
      padding-bottom: 2rem;
    }
  }
}

@media (max-width: 600px) {
  .container {
    padding-top: 3rem !important;

    .intro {
      h1 {
        font-size: clamp(2.75rem, 12vw, 4rem);
      }
    }

    .career-row {
      margin-top: 3rem;

      .career-card {
        padding: 1.2rem;
      }
    }
  }
}
</style>
