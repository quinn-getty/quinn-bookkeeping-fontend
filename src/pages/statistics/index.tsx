import { defineComponent, ref, PropType, reactive, onMounted } from 'vue'
import { Picker, Popup, DatetimePicker } from 'vant'
import { useRouter } from 'vue-router'
import MainLayout from '../../components/main-layout'
import { Tab, Tabs } from '../../components/tabs'
import { Time } from '../../shared/timer'
import style from './index.module.scss'
import Overlay from '../../components/overlay'
import * as echarts from 'echarts'
import { Charts } from '../../components/statistics/charts'

const option = {
  title: {
    text: 'Stacked Line',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
}

export const ItemSummary = defineComponent({
  setup(props, content) {
    const refDiv = ref<HTMLDivElement>()
    onMounted(() => {
      if (refDiv.value) {
        var myChart = echarts.init(refDiv.value)
        option && myChart.setOption(option)
      }
    })
    return () => (
      <div>
        <div ref={refDiv}></div>
      </div>
    )
  },
})

export const StatisticsPage = defineComponent({
  setup(props, content) {
    const selected = ref('自定义')

    const customTime = reactive({
      start: new Time().format(),
      end: new Time().format(),
    })
    const time = new Time()
    const timeList = [
      {
        start: time.firstDayOfMonth(),
        end: time.lastDayOfMonth(),
      },
      {
        start: time.add(-1, 'month').firstDayOfMonth(),
        end: time.add(-1, 'month').lastDayOfMonth(),
      },
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfYear(),
      },
    ]
    const typePopupVisible = ref(false)
    const hideTypePopupVisible = () => {
      typePopupVisible.value = !typePopupVisible.value
    }
    const type = ref('全部')
    const typeColumnsMap = { 全部: 1, 收入: 2, 支出: 3 }
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

    return () => (
      <>
        <MainLayout>
          {{
            icon: () => <Overlay />,
            title: () => <>图标统计</>,
            default: () => (
              <>
                <div class={style.body_wrapper}>
                  <Tabs
                    v-model:selected={selected.value}
                    class={style.tabs_wrapper}
                  >
                    <Tab name="本月" class={style.custom_body}>
                      <div class={[style.custom_title]}>
                        <div />
                        <div
                          class={style.select_type}
                          onClick={hideTypePopupVisible}
                        >
                          {type.value}
                        </div>
                      </div>
                      <Charts />
                    </Tab>
                    <Tab name="上月" class={style.custom_body}>
                      <div class={style.custom_title}>
                        <div />
                        <div
                          class={style.select_type}
                          onClick={hideTypePopupVisible}
                        >
                          {type.value}
                        </div>
                      </div>
                      <Charts />
                    </Tab>
                    <Tab name="今年" class={style.custom_body}>
                      <div class={style.custom_title}>
                        <div />
                        <div
                          class={style.select_type}
                          onClick={hideTypePopupVisible}
                        >
                          {type.value}
                        </div>
                      </div>
                      <Charts />
                    </Tab>
                    <Tab name="自定义" class={style.custom_body}>
                      <div class={style.custom_title}>
                        <div
                          class={style.select_time}
                          onClick={hidestartTimePopup}
                        >
                          {new Time(startDate.value).format()}
                        </div>
                        <span class={style.select_time_zhi}>至</span>
                        <div
                          class={style.select_time}
                          onClick={hideEndTimePopup}
                        >
                          {new Time(endDate.value).format()}
                        </div>
                        <div
                          class={style.select_type}
                          onClick={hideTypePopupVisible}
                        >
                          {type.value}
                        </div>
                      </div>
                      <Charts />
                    </Tab>
                  </Tabs>
                </div>
                <Popup
                  v-model:show={typePopupVisible.value}
                  round
                  position="bottom"
                >
                  <Picker
                    title="选择类型"
                    columns={typeColumns}
                    onConfirm={(val) => {
                      type.value = val
                      hideTypePopupVisible()
                    }}
                    onCancel={hideTypePopupVisible}
                  />
                </Popup>
                <Popup
                  round
                  position="bottom"
                  v-model:show={startTimePopupVisible.value}
                >
                  <DatetimePicker
                    value={startDate.value}
                    type="date"
                    title="筛选开始时间"
                    onConfirm={(val: Date) => {
                      startDate.value = val
                      hidestartTimePopup()
                    }}
                    onCancel={hidestartTimePopup}
                  />
                </Popup>
                <Popup
                  round
                  position="bottom"
                  v-model:show={endTimePopupVisible.value}
                >
                  <DatetimePicker
                    value={endDate.value}
                    type="date"
                    title="筛选结束时间"
                    onConfirm={(val: Date) => {
                      endDate.value = val
                      hideEndTimePopup()
                    }}
                    onCancel={hideEndTimePopup}
                  />
                </Popup>
              </>
            ),
          }}
        </MainLayout>
      </>
    )
  },
})
export default StatisticsPage
