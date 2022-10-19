import { defineComponent, ref, PropType } from "vue";
import { useRouter } from "vue-router";
import IconSvg from "../../../components/icon";
import InputPad from "../../../components/input-pad";
import MainLayout from "../../../components/main-layout";
import { Tab, Tabs } from "../../../components/tabs";
import style from './index.module.scss'

export const ItemList = defineComponent({

  setup(props, content) {
    const router = useRouter()
    const selected = ref('支出')
    const changeActiveTab = (name: string) => {
      selected.value = name
    }
    const goBack = () => {
      router.go(-1)
    }

    const toAddTag = (type: string) => {
      router.push(`/tag/create?type=${type}`)
    }

    return () => <>
      <MainLayout>
        {{
          icon: () => <IconSvg name="menu" class={style.menu_icon} onClick={goBack} />,
          title: () => <>山竹记账</>,
          default: () => <>
            <div class={style.body_wrapper}>
              <Tabs v-model:selected={selected.value} class={style.tabs_wrapper}>
                <Tab name="本月" class={style.tag_wrapper}>
                  xxx
                </Tab>
                <Tab name="上月" class={style.tag_wrapper}>
                  cc
                </Tab>
                <Tab name="今年" class={style.tag_wrapper}>
                  cc
                </Tab>
                <Tab name="自定义" class={style.tag_wrapper}>
                  cc
                </Tab>
              </Tabs>
            </div>
          </>
        }}
      </MainLayout>
    </>
  }
})
export default ItemList 