import { createApp } from 'vue'
import './style.scss'

import { createRouter } from 'vue-router'
import App from './App'
import routes from './config/routers'
import history from './shared/history'
import '@svgstore'
import 'vant/lib/index.css';

const router = createRouter({ history, routes })


const app = createApp(App)
app.use(router)
app.mount('#app')
