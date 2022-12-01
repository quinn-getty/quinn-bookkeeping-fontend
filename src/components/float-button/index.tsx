import { defineComponent, ref } from 'vue'
import IconSvg from '../icon'
import style from './index.module.scss'

export const FloatButton = defineComponent({
  setup(props, content) {
    return () => (
      <div class={style.float_button}>
        <IconSvg name="add" class={style.icon} />
      </div>
    )
  },
})

export default FloatButton
