import { SetupContext, ref, PropType } from "vue";
import { RouterLink } from "vue-router";
import IconSvg from "../icon";
import style from "./index.module.scss"
type PropsType = {
  visible: boolean,
  onClose?: (e: MouseEvent) => void
}

export const Overlay = (props: PropsType, ctx: SetupContext) => {
  if (!props?.visible) {
    return <div></div>
  }
  const onClickSignIn = () => { }
  return <>
    <div class={style.mask} onClick={props.onClose}></div>
    <div class={style.overlay}>
      <section class={style.currentUser} onClick={onClickSignIn}>
        <h2>未登录用户</h2>
        <p>点击这里登录</p>
      </section>
      <nav>
        <ul class={style.action_list}>
          <li>
            <RouterLink to="/statistics" class={style.action}>
              <IconSvg name="charts" />
              <span>统计图表</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/statistics" class={style.action}>
              <IconSvg name="export" />
              <span>导出数据</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/statistics" class={style.action}>
              <IconSvg name="notify" />
              <span>记账提醒</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    {/* Overlay */}
  </>
}
export default Overlay