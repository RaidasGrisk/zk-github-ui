import { createApp } from 'vue'
import App from './App.vue'

// plugins
import naive from 'naive-ui'

// create the app
const app = createApp(App)

// global access to window
app.config.globalProperties.window = window

app.use(naive)
app.mount('#app')
