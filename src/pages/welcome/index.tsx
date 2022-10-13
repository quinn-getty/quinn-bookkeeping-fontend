import { defineComponent, Transition, VNode } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router';
import style from './index.module.scss'
import IconSvg from '../../components/icon';

export const Welcome = defineComponent({
  setup: (props, context) => {
    console.log(context, props)
    return () => (
      <div class={style.wrapper}>
        <header>
          <IconSvg name='mangosteen' />
          <h1>山竹记账</h1>
        </header>
        <main class={style.main}>
          <RouterView name="main">
            {({ Component: X, route: R }: { Component: VNode, route: RouteLocationNormalizedLoaded }) => {
              return (
                <Transition
                  enterFromClass={style.slide_fade_enter_from}
                  enterActiveClass={style.slide_fade_enter_active}
                  leaveToClass={style.slide_fade_leave_to}
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