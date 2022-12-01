import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import Button from '../../components/button'
import Center from '../../components/center'
import FloatButton from '../../components/float-button'
import IconSvg from '../../components/icon'
import MainLayout from '../../components/main-layout'
import NavBar from '../../components/nav-bar'
import Overlay from '../../components/overlay'
import style from './index.module.scss'

export const Start = defineComponent({
  setup(props, content) {
    return () => (
      <>
        <MainLayout>
          {{
            icon: () => <Overlay />,
            title: () => <>山竹记账</>,
            default: () => (
              <>
                <Center class={style.pig_wrapper}>
                  <IconSvg class={style.pig} name="pig" />
                </Center>

                <div class={style.button_wrapper}>
                  <RouterLink to="/item/create">
                    <Button class={style.button}>开始记账</Button>
                  </RouterLink>
                </div>
                <RouterLink to="/item/create">
                  <FloatButton class={style.icon} />
                </RouterLink>
              </>
            ),
          }}
        </MainLayout>
      </>
    )
  },
})

export default Start
