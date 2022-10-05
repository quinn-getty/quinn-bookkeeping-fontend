import { createApp } from 'vue'
// import { App } from './App'
import './style.css'
// import App from './App.vue'

import {createRouter, createWebHashHistory} from 'vue-router'
import { Foo } from './pages/Foo'
import { Bar } from './pages/Bar'
import App from './App'

const routes = [
  { path: '/', component: Foo },
  { path: '/about', component: Bar },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})


const app = createApp(App)
app.use(router)
app.mount('#app')
