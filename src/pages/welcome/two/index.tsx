import { defineComponent } from 'vue';
import style from './index.module.scss'
import clock from '../../../assets/icons/clock.svg'
import { RouterLink } from 'vue-router';
import WelcomeLayout from '../../../components/welcome/layout';

export const OneStep = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout >
        {{
          icon: () => <img src={clock} />,
          text: () => <h2> 每日提醒<br /> 不会遗漏每一笔 </h2>,
          actions: () => <>
            <RouterLink class={style.fake} to='/start'>跳过</RouterLink>
            <RouterLink to='/welcome/3'>下一页</RouterLink>
            <RouterLink to='/start'>跳过</RouterLink>
          </>
        }}
      </WelcomeLayout>
    )
  }
})

export default OneStep