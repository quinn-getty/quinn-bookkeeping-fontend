import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from 'vue-router';
import style from './index.module.scss'
import IconSvg from '../../components/icon';
import useSwipe from '../../hooks/useSwipe';
import throttle from '../../shared/throttle';

export const Welcome = defineComponent({
  setup: (props, context) => {
    const routerType = ref<'pre' | 'next' | undefined>()
    const router = useRouter()
    const route = useRoute()
    const main = ref<HTMLElement | null>(null)
    const { direction, swiping } = useSwipe(main)

    router.beforeEach((to, form, next) => {
      if (to.path.includes('/welcome')) {
        routerType.value = form.path > to.path ? 'pre' : 'next'
      } else {
        routerType.value = undefined
      }
      return next()
    })

    const next = throttle(() => {
      console.log(route.name);
      switch (route.name) {
        case 'Welcome1': router.push({ name: 'Welcome2' }); break;
        case 'Welcome2': router.push({ name: 'Welcome3' }); break;
        case 'Welcome3': router.push({ name: 'Welcome4' }); break;
        case 'Welcome4': router.push('/start'); break;
      }
    }, 500)

    const pre = throttle(() => {
      switch (route.name) {
        case 'Welcome2': router.push({ name: 'Welcome1' }); break;
        case 'Welcome3': router.push({ name: 'Welcome2' }); break;
        case 'Welcome4': router.push({ name: 'Welcome3' }); break;
      }
    }, 500)

    watchEffect(() => {
      if (swiping.value) {
        if (direction.value === 'left') {
          next()
        } else if (direction.value === 'right') {
          pre()
        }
      }
    })

    return () => (
      <div class={style.wrapper}>
        <header>
          <IconSvg name='mangosteen' />
          <h1>山竹记账</h1>
        </header>
        <main class={style.main} ref={main}>
          <RouterView name="main">
            {({ Component: X, route: R }: { Component: VNode, route: RouteLocationNormalizedLoaded }) => {
              return (
                <Transition
                  enterFromClass={style[`slide_fade_enter_${routerType.value}`]}
                  leaveToClass={style[`slide_fade_leave_${routerType.value}`]}
                  enterActiveClass={style.slide_fade_enter_active}
                  leaveActiveClass={style.slide_fade_leave_active}
                >
                  {X}
                </Transition>
              )
            }
            }
          </RouterView>
        </main>
        <footer>
          <RouterView name="footer" />
        </footer>
      </div>
    )
  }
})

export default Welcome