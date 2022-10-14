import { defineComponent } from 'vue';
import style from '../index.module.scss'
import { RouterLink } from 'vue-router';
import WelcomeLayout from '../layout';
import IconSvg from '../../icon';

export const FourFooter = () => {
  return <>
    <RouterLink to='/welcome/3'>上一步</RouterLink>
    <RouterLink to='/start'>开始</RouterLink>
    <RouterLink class={style.fake} to='/start'>跳过</RouterLink>
  </>
}
FourFooter.displayName = 'FourFooter'

export const FourMain = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <IconSvg name='cloud' class={style.icon} />,
      text: () => <h2> 会挣钱<br /> 还要会省钱 </h2>,
    }
    return () => (
      <WelcomeLayout v-slots={slots} />
    )
  }
})
FourMain.displayName = 'FourMain'

export default { FourMain, FourFooter }