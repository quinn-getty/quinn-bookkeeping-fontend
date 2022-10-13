import { defineComponent } from 'vue';
import style from './index.module.scss'

export const WelcomeLayout = defineComponent({
  setup: (props, context) => {
    const { icon, text } = context.slots
    return () => (
      <div class={style.wrapper}>
        <div class={style.card}>
          {icon?.()}<br />
          {text?.()}
        </div>
      </div>
    )
  }
})
WelcomeLayout.displayName = 'WelcomeLayout'
export default WelcomeLayout