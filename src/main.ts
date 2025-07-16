import '@/assets/styles.css'
// Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: false,
  mirror: true,
  offset: 100,
})

app.mount('#app')
