import { defineComponent, ref, PropType } from "vue";
import style from './index.module.scss'

type PropsType = {
  name: string
  class?: string
}
export const IconSvg = (props: PropsType, content: any) => {
  console.log(content);

  const name = `#${props.name}`
  return <>
    <svg class={[style.icon, props.class]}>
      <use xlinkHref={name}></use>
    </svg>
  </>
}
IconSvg.displayName = 'IconSvg'

export default IconSvg