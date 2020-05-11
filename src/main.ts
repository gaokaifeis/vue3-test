import { createApp } from 'vue'
import { router } from './router/index.ts'
import { globalState } from './store/index.ts'
import App from './App.vue'

const app = createApp(App)
app.provide('state', globalState)
app.use(router)
app.mount('#app')