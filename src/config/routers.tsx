import { RouteRecordRaw } from "vue-router"
import { Bar } from "../pages/Bar"
import { Foo } from "../pages/Foo"
import Welcome from "../pages/welcome"
import WelcomeOne from "../pages/welcome/one"
import WelcomeTwo from "../pages/welcome/two"
import WelcomeThree from "../pages/welcome/three"
import WelcomeFour from "../pages/welcome/four"

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  { path: '/about', component: Bar },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      { path: '1', component: WelcomeOne },
      { path: '2', component: WelcomeTwo },
      { path: '3', component: WelcomeThree },
      { path: '4', component: WelcomeFour },
    ]
  }
]

export default routes