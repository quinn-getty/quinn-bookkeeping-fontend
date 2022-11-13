import { defineComponent, PropType, ref } from "vue";
import style from './index.module.scss'

export const Button = defineComponent({
  props: {
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>
    },
    level: {
      type: String as PropType<'important' | 'normal' | 'danger'>,
      default: 'important'
    },
    type: {
      type: String as PropType<'submit' | 'button'>,
      default: 'button'
    }
  },
  setup: (props, context) => {
    return () => (
      <button type={props.type} class={[style.button, style[props.level]]} onClick={props.onClick}>
        {context.slots.default?.()}
      </button>
    )
  }
})

export default Button