import { createApp } from 'vue'
import App from './App.vue'

// plugins
import naive from 'naive-ui'

// create the app
const app = createApp(App)
app.use(naive)
app.mount('#app')
