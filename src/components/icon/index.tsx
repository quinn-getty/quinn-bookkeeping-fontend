import { defineComponent, ref, PropType, SetupContext } from "vue";
import style from './index.module.scss'

type PropsType = {
  name: string
  class?: string,
  onClick?: (e: MouseEvent) => void
}
export const IconSvg = (props: PropsType, content: SetupContext) => {
  const name = `#${props.name}`
  return <>
    <svg class={[style.icon, props.class]} onClick={props.onClick}>
      <use xlinkHref={name}></use>
    </svg>
  </>
}
IconSvg.displayName = 'IconSvg'

export default IconSvg