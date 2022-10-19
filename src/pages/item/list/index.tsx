import { defineComponent, ref, PropType, reactive } from "vue";
import { Picker, Popup, DatetimePicker } from 'vant'
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
    const selected = ref('自定义')
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
    const typePopupVisible = ref(false)
    const hideTypePopupVisible = () => {
      typePopupVisible.value = !typePopupVisible.value
    }
    const type = ref('全部')
    const typeColumnsMap = { '全部': 1, '收入': 2, '支出': 3 }
    const typeColumns = ['全部', '收入', '支出']

    const startDate = ref(new Date())
    const startTimePopupVisible = ref(false)
    const hidestartTimePopup = () => {
      startTimePopupVisible.value = !startTimePopupVisible.value
    }

    const endDate = ref(new Date())
    const endTimePopupVisible = ref(false)
    const hideEndTimePopup = () => {
      endTimePopupVisible.value = !endTimePopupVisible.value
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
                <Tab name="自定义" class={style.custom_body}>
                  <div class={style.custom_title}>
                    <div class={style.select_time} onClick={hidestartTimePopup}>
                      {new Time(startDate.value).format()}
                    </div>
                    <span class={style.select_time_zhi}>至</span>
                    <div class={style.select_time} onClick={hideEndTimePopup}>
                      {new Time(endDate.value).format()}
                    </div>
                    <div class={style.select_type} onClick={hideTypePopupVisible}>
                      {type.value}
                    </div>
                  </div>
                  <ItemSummary
                    class={style.custom_content}
                    startDate={customTime.start}
                    endDate={customTime.end}
                  />
                </Tab>
              </Tabs>
            </div>
            <Popup v-model:show={typePopupVisible.value} round position="bottom">
              <Picker
                title="选择类型"
                columns={typeColumns}
                onConfirm={(val) => { type.value = val; hideTypePopupVisible() }}
                onCancel={hideTypePopupVisible}
              />
            </Popup>
            <Popup round position="bottom" v-model:show={startTimePopupVisible.value} >
              <DatetimePicker value={startDate.value} type="date" title="筛选开始时间" onConfirm={(val: Date) => { startDate.value = val; hidestartTimePopup() }} onCancel={hidestartTimePopup} />
            </Popup>
            <Popup round position="bottom" v-model:show={endTimePopupVisible.value} >
              <DatetimePicker value={endDate.value} type="date" title="筛选结束时间" onConfirm={(val: Date) => { endDate.value = val; hideEndTimePopup() }} onCancel={hideEndTimePopup} />
            </Popup>
          </>
        }}
      </MainLayout>
    </>
  }
})
export default ItemList 