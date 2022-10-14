import { defineComponent, ref } from "vue";
import Button from "../../components/button";
import Center from "../../components/center";
import FloatButton from "../../components/float-button";
import IconSvg from "../../components/icon";
import style from './index.module.scss'

export const Start = defineComponent({

  setup(props, content) {
    return () => <>
      <nav>menu</nav>
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