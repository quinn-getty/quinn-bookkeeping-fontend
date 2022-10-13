import { RouterLink } from "vue-router"
import style from '../index.module.scss'
import { defineComponent } from 'vue';
import pig from '../../../assets/icons/pig.svg'
import WelcomeLayout from '../layout';

export const OneFooter = () => {
  return <>
    <RouterLink class={style.fake} to='/start'>跳过</RouterLink>
    <RouterLink to='/welcome/2'>下一页</RouterLink>
    <RouterLink to='/start'>跳过</RouterLink>
  </>
}
OneFooter.displayName = 'OneFooter'

export const OneMain = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <img src={pig} />,
      text: () => <h2> 会挣钱<br /> 还要会省钱 </h2>,
    }
    return () => (
      <WelcomeLayout v-slots={slots} />
    )
  }
})
OneMain.displayName = 'OneMain'

export default { OneMain, OneFooter }