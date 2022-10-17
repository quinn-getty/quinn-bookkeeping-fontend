import { defineComponent, ref, PropType } from "vue";
import { useRouter } from "vue-router";
import IconSvg from "../../../components/icon";
import MainLayout from "../../../components/main-layout";
import style from './index.module.scss'

export const ItemCreate = defineComponent({

  setup(props, content) {
    const router = useRouter()
    const goBack = () => {
      router.go(-1)
    }
    return () => <>
      <MainLayout>
        {{
          icon: () => <IconSvg name="left" class={style.menu_icon} onClick={goBack} />,
          title: () => <>记一笔</>,
          default: () => <>
            xxx</>
        }}
      </MainLayout>
    </>
  }
})
export default ItemCreate 