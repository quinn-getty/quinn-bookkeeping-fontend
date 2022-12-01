import { SetupContext, ref, PropType } from 'vue'
import style from './index.module.scss'
type PropsType = {
  class?: string
}

export const NavBar = (props: PropsType, ctx: SetupContext) => {
  const { slots } = ctx
  return (
    <div class={[style.nav_bar, props.class]}>
      <span class={style.icon_wrapper}>{slots.icon?.()}</span>
      <span class={style.title_wrapper}>{slots.default?.()}</span>
    </div>
  )
}
export default NavBar
