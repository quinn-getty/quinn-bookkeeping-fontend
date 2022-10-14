import { defineComponent, ref, PropType } from "vue";
import style from "./index.module.scss"

export const Center = defineComponent({
  props: {
    direction: {
      type: String as PropType<'row' | 'col'>,
      default: 'row'
    }
  },

  setup(props, content) {
    return () => <div class={[style.center, style[`center-${props.direction}`]]}>
      {content.slots.default?.()}
    </div>
  }
})
export default Center 