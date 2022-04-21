import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import 'element-plus/dist/index.css'
import api from './api/index'

const app = createApp(App)
// app.config.globalProperties.$Api = api
app.provide('$Api', api)
app.use(createPinia())
app.use(router)
app.mount('#app')
