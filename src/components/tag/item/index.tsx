import { SetupContext, ref, PropType } from 'vue'
import style from './index.module.scss'
type PropsType = {
  name: string
  sign: string
  value: string
  id: number
}

const TagItem = (props: PropsType) => {
  return (
    <div class={[style.tag, style.selected]} onClick={() => {}}>
      <div class={style.sign}>{props.sign}</div>
      <div class={style.name}>{props.name}</div>
    </div>
  )
}
TagItem.displayName = 'TagItem'
export default TagItem
