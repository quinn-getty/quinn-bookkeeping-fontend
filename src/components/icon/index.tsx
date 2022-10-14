import { defineComponent, ref, PropType } from "vue";
import style from './index.module.scss'

type PropsType = {
  name: string
  onClick: PropType<(e: MouseEvent) => void>,
  class: string
}
export const IconSvg = (props: PropsType) => {
  console.log(props);

  const name = `#${props.name}`
  return <>
    <svg class={[style.icon, props.class]}>
      <use xlinkHref={name}></use>
    </svg>
  </>
}
IconSvg.displayName = 'IconSvg'

export default IconSvg


// export const IconSvg = defineComponent({
//   props: {
//     class: {
//       type: String
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     onClick: {
//       type: Function as PropType<(e: MouseEvent) => void>
//     }
//   },

//   setup(props, content) {
//     console.log(props);

//     const name = `#${props.name}`
//     return () => <>
//       <svg class={[style.icon, props.class]}>
//         <use xlinkHref={name}></use>
//       </svg>
//     </>
//   }
// })
// export default IconSvg