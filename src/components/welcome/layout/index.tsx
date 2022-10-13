import { defineComponent } from 'vue';
import style from './index.module.scss'

export const WelcomeLayout = defineComponent({
  setup: (props, context) => {
    const { icon, text, actions } = context.slots
    console.log(context.slots);

    return () => (
      <div class={style.wrapper}>
        <div class={style.card}>
          {icon?.()}<br />
          {text?.()}
        </div>
        <div class={style.actions}>
          {actions?.()}
        </div>

      </div>
    )
  }
})

export default WelcomeLayout