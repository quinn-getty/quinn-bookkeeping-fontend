import { defineComponent } from 'vue';
import style from './index.module.scss'
import pig from '../../../assets/icons/pig.svg'
import { RouterLink } from 'vue-router';
import WelcomeLayout from '../../../components/welcome/layout';

export const OneStep = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <img src={pig} />,
      text: () => <h2> 会挣钱<br /> 还要会省钱 </h2>,
      actions: () => <>
        <RouterLink class={style.fake} to='/start'>跳过</RouterLink>
        <RouterLink to='/welcome/2'>下一页</RouterLink>
        <RouterLink to='/start'>跳过</RouterLink>
      </>
    }
    return () => (
      <WelcomeLayout v-slots={slots} />
    )
  }
})

export default OneStep