import { defineComponent, ref } from "vue";
import Button from "../../components/button";
import Center from "../../components/center";
import FloatButton from "../../components/float-button";
import IconSvg from "../../components/icon";
import NavBar from "../../components/nav-bar";
import Overlay from "../../components/overlay";
import style from './index.module.scss'

export const Start = defineComponent({

  setup(props, content) {
    const overlayVisible = ref(false)
    const iconClick = () => {
      overlayVisible.value = !overlayVisible.value
    }
    return () => <>
      <NavBar>
        {{
          icon: () => <IconSvg name="menu" onClick={iconClick} class={style.menu_icon} />,
          default: () => <>山竹记账</>
        }}
      </NavBar>
      <Overlay visible={overlayVisible.value} onClose={iconClick}></Overlay>
      <Center class={style.pig_wrapper}>
        <IconSvg class={style.pig} name="pig" />
      </Center>

      <div class={style.button_wrapper}>
        <Button class={style.button}>测试</Button>
      </div>
      <FloatButton class={style.icon} />
    </>
  }
})

export default Start