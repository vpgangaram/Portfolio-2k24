import '@/assets/main.scss'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AOS from 'aos'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VCol, VContainer, VRow } from 'vuetify/components'

const app = createApp(App)

const vuetify = createVuetify({
  components: { VCol, VContainer, VRow },
  theme: {
    defaultTheme: 'light'
  }
})
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')

AOS.init({
  once: true,
  duration: 700,
  offset: 80,
  easing: 'ease-out-cubic',
  disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
