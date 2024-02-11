import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Axios from "./api/index.js"

import * as ElementPlusIconsVue from '@element-plus/icons-vue'




const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.config.globalProperties.$api = Axios
app.use(router)
app.use(ElementPlus)

app.mount('#app')

