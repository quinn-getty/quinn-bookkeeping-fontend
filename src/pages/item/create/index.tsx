import { defineComponent, ref, PropType } from "vue";
import { useRouter } from "vue-router";
import IconSvg from "../../../components/icon";
import MainLayout from "../../../components/main-layout";
import { Tab, Tabs } from "../../../components/tabs";
import style from './index.module.scss'

export const ItemCreate = defineComponent({

  setup(props, content) {
    const router = useRouter()
    const selected = ref('支出')
    const changeActiveTab = (name: string) => {
      selected.value = name
    }
    const goBack = () => {
      router.go(-1)
    }
    return () => <>
      <MainLayout>
        {{
          icon: () => <IconSvg name="left" class={style.menu_icon} onClick={goBack} />,
          title: () => <>记一笔</>,
          default: () => <>
            <Tabs v-model:selected={selected.value}>
              <Tab name="支出">
                icon 列表
              </Tab>
              <Tab name="收入">
                icon 列表2
              </Tab>
            </Tabs>
          </>
        }}
      </MainLayout>
    </>
  }
})
export default ItemCreate 