import { defineComponent } from 'vue';
import style from './index.module.scss'
import pig from '../../../assets/icons/pig.svg'
import { RouterLink } from 'vue-router';

export const OneStep = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={style.wrapper}>
        <div class={style.card}>
          <img src={pig} /><br />
          <h2>
            会挣钱<br />
            还要会省钱
          </h2>
        </div>
        <div class={style.actions}>
          <RouterLink class={style.fake} to='/start'>跳过</RouterLink>
          <RouterLink to='/welcone/2'>下一页</RouterLink>
          <RouterLink to='/start'>跳过</RouterLink>
        </div>

      </div>
    )
  }
})

export default OneStep