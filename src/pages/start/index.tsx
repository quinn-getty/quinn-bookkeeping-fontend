import { defineComponent, ref } from "vue";
import Button from "../../components/button";
import FloatButton from "../../components/float-button";
import style from './index.module.scss'

export const Start = defineComponent({

  setup(props, content) {
    return () => <>
      xxxx
      <div class={style.button_wrapper}>
        <Button class={style.button}>xxxx</Button>
      </div>
      <FloatButton class={style.icon} />
    </>
  }
})

export default Start