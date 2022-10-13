import { RouteRecordRaw } from "vue-router"
import { Bar } from "../pages/Bar"
import { Foo } from "../pages/Foo"
import Welcome from "../pages/welcome"
import { TwoFooter, TwoMain } from "../components/welcome/two"
import { OneFooter, OneMain } from "../components/welcome/one"
import { ThreeFooter, ThreeMain } from "../components/welcome/three"
import { FourFooter, FourMain } from "../components/welcome/four"

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  { path: '/about', component: Bar },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      { path: '1', components: { main: OneMain, footer: OneFooter } },
      { path: '2', components: { main: TwoMain, footer: TwoFooter } },
      { path: '3', components: { main: ThreeMain, footer: ThreeFooter } },
      { path: '4', components: { main: FourMain, footer: FourFooter } },
    ]
  }
]

export default routes