import { defineComponent, ref, PropType, SetupContext } from "vue";
import NavBar from "../nav-bar";
import style from './index.module.scss'

export const MainLayout = defineComponent({
  slots: ['icon', 'title'],
  setup(props, content: SetupContext) {
    return () => <div class={style.main_layout}>
      <NavBar class={style.main_layout_nav}>
        {{
          icon: () => content.slots.icon?.(),
          default: () => content.slots.title?.(),
        }}
      </NavBar>
      {
        content.slots.default?.()
      }
    </div>
  }
})
export default MainLayout 