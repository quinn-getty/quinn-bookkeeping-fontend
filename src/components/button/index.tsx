import { defineComponent, ref } from "vue";
import style from './index.module.scss'

export const Button = defineComponent({
  setup(props, content) {
    return () => <button class={style.button}>
      {content.slots.default?.()}
    </button>
  }
})

export default Button