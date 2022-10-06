import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import style from './welcome.module.scss'

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={style.wrapper}>welcome
        {/* <RouterView /> */}
      </div>
    )
  }
})

export default Welcome