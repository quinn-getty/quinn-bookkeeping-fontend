import { defineComponent, ref, PropType, reactive } from "vue";
import { useRouter } from "vue-router";
import IconSvg from "../../../components/icon";
import InputPad from "../../../components/input-pad";
import ItemSummary from "../../../components/item-summary";
import MainLayout from "../../../components/main-layout";
import { Tab, Tabs } from "../../../components/tabs";
import { Time } from "../../../shared/timer";
import style from './index.module.scss'

export const ItemList = defineComponent({

  setup(props, content) {
    const router = useRouter()
    const selected = ref('本月')
    const changeActiveTab = (name: string) => {
      selected.value = name
    }
    const goBack = () => {
      router.go(-1)
    }

    const toAddTag = (type: string) => {
      router.push(`/tag/create?type=${type}`)
    }

    const customTime = reactive({
      start: new Time().format(),
      end: new Time().format()
    })
    const time = new Time()
    const timeList = [
      {
        start: time.firstDayOfMonth(),
        end: time.lastDayOfMonth()
      },
      {
        start: time.add(-1, 'month').firstDayOfMonth(),
        end: time.add(-1, 'month').lastDayOfMonth()
      },
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfYear()
      }
    ]

    return () => <>
      <MainLayout>
        {{
          icon: () => <IconSvg name="menu" class={style.menu_icon} onClick={goBack} />,
          title: () => <>山竹记账</>,
          default: () => <>
            <div class={style.body_wrapper}>
              <Tabs v-model:selected={selected.value} class={style.tabs_wrapper}>
                <Tab name="本月" class={style.tag_wrapper}>
                  <ItemSummary
                    startDate={timeList[0].start.format()}
                    endDate={timeList[0].end.format()}
                  />
                </Tab>
                <Tab name="上月" class={style.tag_wrapper}>
                  <ItemSummary
                    startDate={timeList[1].start.format()}
                    endDate={timeList[1].end.format()}
                  />
                </Tab>
                <Tab name="今年" class={style.tag_wrapper}>
                  <ItemSummary
                    startDate={timeList[2].start.format()}
                    endDate={timeList[2].end.format()}
                  />
                </Tab>
                <Tab name="自定义" class={style.tag_wrapper}>
                  <ItemSummary
                    startDate={customTime.start}
                    endDate={customTime.end}
                  />
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