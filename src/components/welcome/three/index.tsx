import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import WelcomeLayout from '../layout'
import style from '../index.module.scss'
import IconSvg from '../../icon'
import JumpButton from '../jump-button'

export const ThreeFooter = () => {
  return (
    <>
      <RouterLink to="/welcome/2">上一步</RouterLink>
      <RouterLink to="/welcome/4">下一页</RouterLink>
      <JumpButton />
    </>
  )
}
ThreeFooter.displayName = 'ThreeFooter'

export const ThreeMain = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <IconSvg name="chart" class={style.icon} />,
      text: () => (
        <h2>
          {' '}
          会挣钱
          <br /> 还要会省钱{' '}
        </h2>
      ),
    }
    return () => <WelcomeLayout v-slots={slots} />
  },
})
ThreeMain.displayName = 'ThreeMain'

export default { ThreeMain, ThreeFooter }
