<template>
  <v-container fluid class="contact-page" aria-labelledby="contact-title">
    <header class="contact-intro" data-aos="fade-up">
      <p class="eyebrow">Get in touch</p>
      <h1 id="contact-title">Let’s talk about what you’re building.</h1>
      <p class="intro-copy">
        I’m open to web and AI development opportunities, projects, collaborations, and other
        conversations about building for the web. Share a little about what you have in mind.
      </p>
    </header>

    <v-row class="contact-layout">
      <v-col cols="12" lg="7" class="form-column" data-aos="fade-up">
        <section class="contact-card" aria-labelledby="form-title">
          <div class="card-heading">
            <p class="card-eyebrow">Send a message</p>
            <h2 id="form-title">What can I help with?</h2>
          </div>

          <div
            v-if="submissionState === 'success'"
            class="form-feedback form-feedback--success"
            role="status"
            aria-live="polite"
          >
            Thanks for reaching out. Your message has been sent.
          </div>
          <div
            v-else-if="submissionState === 'error'"
            class="form-feedback form-feedback--error"
            role="alert"
          >
            {{ errorMessage }}
          </div>

          <form
            name="contact"
            method="POST"
            action="/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            @submit.prevent="submitForm"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label for="contact-bot-field">Leave this field empty</label>
              <input
                id="contact-bot-field"
                v-model="form.botField"
                name="bot-field"
                tabindex="-1"
                autocomplete="off"
              />
            </div>

            <div class="field-grid">
              <div class="field">
                <label for="contact-name">Your name <span aria-hidden="true">*</span></label>
                <input
                  id="contact-name"
                  v-model.trim="form.name"
                  name="name"
                  type="text"
                  autocomplete="name"
                  maxlength="120"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="field">
                <label for="contact-email">Email address <span aria-hidden="true">*</span></label>
                <input
                  id="contact-email"
                  v-model.trim="form.email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  maxlength="254"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label for="contact-inquiry"
                >What’s this about? <span aria-hidden="true">*</span></label
              >
              <select id="contact-inquiry" v-model="form.inquiry" name="inquiry" required>
                <option disabled value="">Choose a topic</option>
                <option>Job opportunity</option>
                <option>Freelance or contract project</option>
                <option>Consulting</option>
                <option>Collaboration</option>
                <option>Other development inquiry</option>
              </select>
            </div>

            <div class="field">
              <label for="contact-message">Your message <span aria-hidden="true">*</span></label>
              <textarea
                id="contact-message"
                v-model.trim="form.message"
                name="message"
                rows="6"
                minlength="10"
                maxlength="5000"
                placeholder="Tell me a little about the project, role, or idea."
                required
              ></textarea>
              <p class="field-hint">
                Please include enough detail for me to understand how I can help.
              </p>
            </div>

            <button
              class="submit-button"
              type="submit"
              :disabled="submissionState === 'submitting'"
            >
              {{ submissionState === 'submitting' ? 'Sending…' : 'Send message' }}
              <span aria-hidden="true">↗</span>
            </button>
            <p class="privacy-note">
              Your message is sent securely through Netlify Forms so I can reply.
            </p>
          </form>
        </section>
      </v-col>

      <v-col cols="12" lg="5" class="details-column" data-aos="fade-up" data-aos-delay="100">
        <section class="contact-card contact-details" aria-labelledby="details-title">
          <div class="card-heading">
            <p class="card-eyebrow">Prefer a direct hello?</p>
            <h2 id="details-title">Reach me here.</h2>
          </div>

          <div class="direct-links">
            <a href="mailto:gangaramanavar@gmail.com">
              <span class="link-label">Email</span>
              <span class="link-value">gangaramanavar@gmail.com</span>
              <span class="link-arrow" aria-hidden="true">↗</span>
            </a>
            <a href="tel:+918310168918">
              <span class="link-label">Phone</span>
              <span class="link-value">+91 83101 68918</span>
              <span class="link-arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <div class="social-links" aria-label="Professional profiles">
            <a
              href="https://www.linkedin.com/in/vinayak-p-gangaramanavar"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/vpgangaram" target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://leetcode.com/u/gangaramanavar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p class="availability">
            Based in Bengaluru, India<br />
            <span>Open to development opportunities</span>
          </p>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

const form = reactive({
  name: '',
  email: '',
  inquiry: '',
  message: '',
  botField: ''
})

const submissionState = ref<SubmissionState>('idle')
const errorMessage = ref('')

async function submitForm() {
  if (form.botField) {
    submissionState.value = 'error'
    errorMessage.value = 'This message could not be submitted. Please email me directly instead.'
    return
  }

  if (import.meta.env.DEV) {
    submissionState.value = 'error'
    errorMessage.value =
      'The form is ready, but Netlify can accept submissions after deployment. You can email me directly in the meantime.'
    return
  }

  submissionState.value = 'submitting'
  errorMessage.value = ''

  const body = new URLSearchParams()
  body.set('form-name', 'contact')
  body.set('name', form.name)
  body.set('email', form.email)
  body.set('inquiry', form.inquiry)
  body.set('message', form.message)
  body.set('bot-field', form.botField)

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    })

    if (!response.ok) {
      throw new Error(`Contact form request failed with status ${response.status}.`)
    }

    submissionState.value = 'success'
    form.name = ''
    form.email = ''
    form.inquiry = ''
    form.message = ''
    form.botField = ''
  } catch (error) {
    console.error('Contact form submission failed.', error)
    submissionState.value = 'error'
    errorMessage.value =
      'Your message could not be sent right now. Please try again or email me directly at gangaramanavar@gmail.com.'
  }
}
</script>

<style lang="scss" scoped>
.contact-page {
  width: 100%;
  max-width: 80rem;
  padding: clamp(3.5rem, 8vw, 6.5rem) clamp(1.25rem, 5vw, 4rem) 5rem !important;
  margin-inline: auto;
}

.contact-intro {
  max-width: 54rem;
  margin-bottom: clamp(2rem, 5vw, 3.5rem);

  .eyebrow,
  .card-eyebrow {
    color: var(--accent);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    line-height: 1.5;
    text-transform: uppercase;
  }

  h1 {
    max-width: 14ch;
    margin: 0.75rem 0 1rem;
    font-size: clamp(2.75rem, 6vw, 5.25rem);
    font-weight: 800;
    letter-spacing: -0.06em;
    line-height: 1;
    overflow-wrap: anywhere;
  }

  .intro-copy {
    max-width: 43rem;
    font-size: clamp(1rem, 1.5vw, 1.15rem);
    line-height: 1.8;
  }
}

.contact-layout {
  align-items: flex-start;
}

.contact-card {
  height: 100%;
  padding: clamp(1.25rem, 3vw, 2rem);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  background: var(--surface);
}

.card-heading {
  margin-bottom: 1.75rem;

  h2 {
    margin: 0.4rem 0 0;
    font-size: clamp(1.6rem, 3vw, 2.25rem);
    line-height: 1.15;
    letter-spacing: -0.045em;
  }
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.field {
  display: grid;
  min-width: 0;
  gap: 0.5rem;
  margin-bottom: 1.1rem;

  label {
    color: var(--text);
    font-size: 0.9rem;
    font-weight: 600;

    span {
      color: var(--accent);
    }
  }

  input,
  select,
  textarea {
    width: 100%;
    min-width: 0;
    padding: 0.8rem 0.9rem;
    border: 1px solid var(--border);
    border-radius: 0.7rem;
    background: var(--bg-color);
    color: var(--text);
    font: inherit;
    font-size: 1rem;
    line-height: 1.5;

    &::placeholder {
      color: var(--text50);
      opacity: 1;
    }

    &:focus-visible {
      border-color: var(--accent);
      outline-color: var(--accent);
    }
  }

  textarea {
    min-height: 9rem;
    resize: vertical;
  }
}

.field-hint,
.privacy-note {
  color: var(--text50);
  font-size: 0.82rem;
  line-height: 1.5;
}

.privacy-note {
  margin-top: 0.85rem;
}

.submit-button {
  display: inline-flex;
  min-height: 3rem;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 0.75rem 1.25rem;
  border: 0;
  border-radius: 999px;
  background: var(--text);
  color: var(--main);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition:
    opacity 180ms ease,
    transform 180ms ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:disabled {
    cursor: wait;
    opacity: 0.65;
  }
}

.form-feedback {
  margin-bottom: 1.25rem;
  padding: 0.9rem 1rem;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.55;

  &--success {
    border-color: #3c8a61;
    background: color-mix(in srgb, #3c8a61 10%, var(--bg-color));
    color: var(--text);
  }

  &--error {
    border-color: #b64747;
    background: color-mix(in srgb, #b64747 9%, var(--bg-color));
    color: var(--text);
  }
}

.direct-links {
  display: grid;

  > a {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.2rem 1rem;
    padding: 1rem 0;
    border-top: 1px solid var(--border);
    color: var(--text);
    text-decoration: none;

    &:hover .link-value {
      color: var(--accent);
    }
  }

  .link-label {
    grid-column: 1;
    color: var(--text50);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .link-value {
    grid-column: 1;
    overflow-wrap: anywhere;
    font-weight: 600;
    transition: color 180ms ease;
  }

  .link-arrow {
    grid-column: 2;
    grid-row: 1 / span 2;
    align-self: center;
    color: var(--accent);
  }
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border);

  a {
    display: inline-flex;
    min-height: 2.5rem;
    align-items: center;
    gap: 0.35rem;
    padding: 0.45rem 0.75rem;
    border: 1px solid var(--border);
    border-radius: 999px;
    color: var(--text);
    font-size: 0.85rem;
    text-decoration: none;
    transition:
      border-color 180ms ease,
      color 180ms ease;

    &:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
  }
}

.availability {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border);
  color: var(--text);
  font-size: 0.92rem;
  line-height: 1.7;

  span {
    color: var(--text50);
  }
}

@media (max-width: 600px) {
  .contact-page {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .field-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
