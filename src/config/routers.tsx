import { RouteRecordRaw } from "vue-router"
import { Bar } from "../pages/Bar"
import Welcome from "../pages/welcome"
import { TwoFooter, TwoMain } from "../components/welcome/two"
import { OneFooter, OneMain } from "../components/welcome/one"
import { ThreeFooter, ThreeMain } from "../components/welcome/three"
import { FourFooter, FourMain } from "../components/welcome/four"

import Start from "../pages/start"
import ItemList from "../pages/item/list"
import ItemCreate from "../pages/item/create"
import ItemPage from "../pages/item"

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  { path: '/about', component: Bar },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      { path: '', redirect: '/welcome/1' },
      { path: '1', name: 'Welcome1', components: { main: OneMain, footer: OneFooter } },
      { path: '2', name: 'Welcome2', components: { main: TwoMain, footer: TwoFooter } },
      { path: '3', name: 'Welcome3', components: { main: ThreeMain, footer: ThreeFooter } },
      { path: '4', name: 'Welcome4', components: { main: FourMain, footer: FourFooter } },
    ]
  },
  { path: '/start', component: Start },
  {
    path: '/item',
    component: ItemPage,
    children: [
      { path: '', component: ItemList },
      { path: 'create', component: ItemCreate },
    ]
  }
]

export default routes