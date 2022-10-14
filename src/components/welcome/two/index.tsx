import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import WelcomeLayout from '../layout';
import IconSvg from '../../icon';
import style from "../index.module.scss"

export const TwoFooter = () => {
  return <>
    <RouterLink to='/welcome/1'>上一步</RouterLink>
    <RouterLink to='/welcome/3'>下一页</RouterLink>
    <RouterLink to='/start'>跳过</RouterLink>
  </>
}
TwoFooter.displayName = 'TwoFooter'

export const TwoMain = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <IconSvg name='clock' class={style.icon} />,
      text: () => <h2> 会挣钱<br /> 还要会省钱 </h2>,
    }
    return () => (
      <WelcomeLayout v-slots={slots} />
    )
  }
})
TwoMain.displayName = 'TwoMain'

export default { TwoMain, TwoFooter }