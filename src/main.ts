import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ComponentLibrary } from '@thecopceski/vue-library'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ComponentLibrary)

app.mount('#app')
