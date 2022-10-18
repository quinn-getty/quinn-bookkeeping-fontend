import { defineComponent, ref, PropType, SetupContext } from "vue";
import NavBar from "../nav-bar";

export const MainLayout = defineComponent({
  slots: ['icon', 'title'],
  setup(props, content: SetupContext) {
    return () => <>
      <NavBar>
        {{
          icon: () => content.slots.icon?.(),
          default: () => content.slots.title?.(),
        }}
      </NavBar>
      {
        content.slots.default?.()
      }
    </>
  }
})
export default MainLayout 