import { defineComponent } from 'vue';
import style from './index.module.scss'
import cloud from '../../../assets/icons/cloud.svg'
import { RouterLink } from 'vue-router';
import WelcomeLayout from '../../../components/welcome/layout';

export const OneStep = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout >
        {{
          icon: () => <img src={cloud} />,
          text: () => <h2> 每日提醒<br /> 不会遗漏每一笔 </h2>,
          actions: () => <>
            <RouterLink class={style.fake} to='/start'>跳过</RouterLink>
            <RouterLink to='/start'>下一页</RouterLink>
            <RouterLink to='/start'>跳过</RouterLink>
          </>
        }}
      </WelcomeLayout>
      // <div class={style.wrapper}>
      //   <div class={style.card}>
      //     <img src={cloud} /><br />
      //     <h2>
      //       会挣钱<br />
      //       还要会省钱
      //     </h2>
      //   </div>
      //   <div class={style.actions}>
      //     <RouterLink class={style.fake} to='/start'>跳过</RouterLink>
      //     <RouterLink to='/start'>下一页</RouterLink>
      //     <RouterLink class={style.fake} to='/start'>跳过</RouterLink>
      //   </div>

      // </div>
    )
  }
})

export default OneStep