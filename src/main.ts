import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// AOS
import 'aos/dist/aos.css'
import AOS from 'aos'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
})

app.use(createPinia())
app.AOS = new AOS.init({});
app.use(router)
app.use(vuetify)
app.use(AOS)
app.mount('#app')
