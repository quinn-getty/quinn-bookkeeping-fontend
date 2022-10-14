import { RouterLink } from "vue-router"
import style from '../index.module.scss'
import { defineComponent } from 'vue';
import WelcomeLayout from '../layout';
import IconSvg from "../../icon";

export const OneFooter = () => {
  return <>
    <RouterLink class={style.fake} to='/start'>上一页</RouterLink>
    <RouterLink to='/welcome/2'>下一页</RouterLink>
    <RouterLink to='/start'>跳过</RouterLink>
  </>
}
OneFooter.displayName = 'OneFooter'

export const OneMain = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <IconSvg name='pig' class={style.icon} />,
      text: () => <h2> 会挣钱<br /> 还要会省钱 </h2>,
    }
    return () => (
      <WelcomeLayout v-slots={slots} />
    )
  }
})
OneMain.displayName = 'OneMain'

export default { OneMain, OneFooter }