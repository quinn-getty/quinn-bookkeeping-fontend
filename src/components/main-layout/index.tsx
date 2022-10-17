import { defineComponent, ref, PropType } from "vue";
import NavBar from "../nav-bar";

export const MainLayout = defineComponent({
  setup(props, content) {
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