import { createApp } from 'vue'
import App from './App'
import FlexibleUi from '../src/lib'

const app = createApp(App)
app.use(FlexibleUi)
app.mount('#app')
