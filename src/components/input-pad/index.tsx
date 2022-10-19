import { defineComponent, ref, PropType } from "vue";
import { Time } from "../../shared/timer";
import IconSvg from "../icon";
import style from "./index.module.scss"
import { Popup, DatetimePicker } from 'vant';

export const InputPad = defineComponent({

  setup(props, content) {
    const appendText = (n: number | string) => {
      const nString = n.toString()
      const dotIndex = refAmount.value.indexOf('.')
      if (refAmount.value.length >= 13) {
        return
      }
      if (dotIndex >= 0 && refAmount.value.length - dotIndex > 2) {
        return
      }
      if (nString === '.') {
        if (dotIndex >= 0) { // 已经有小数点了
          return
        }
      } else if (nString === '0') {
        if (dotIndex === -1) { // 没有小数点
          if (refAmount.value === '0') { // 没小数点，但是有0
            return
          }
        }
      } else {
        if (refAmount.value === '0') {
          refAmount.value = ''
        }
      }
      refAmount.value += n.toString()
    }
    const buttonTextMap = [
      { text: '1', onClick: () => { appendText(1) } },
      { text: '2', onClick: () => { appendText(2) } },
      { text: '3', onClick: () => { appendText(3) } },
      { text: '4', onClick: () => { appendText(4) } },
      { text: '5', onClick: () => { appendText(5) } },
      { text: '6', onClick: () => { appendText(6) } },
      { text: '7', onClick: () => { appendText(7) } },
      { text: '8', onClick: () => { appendText(8) } },
      { text: '9', onClick: () => { appendText(9) } },
      { text: '.', onClick: () => { appendText('.') } },
      { text: '0', onClick: () => { appendText(0) } },
      { text: '清空', onClick: () => { refAmount.value = '0' } },
      { text: '提交', onClick: () => { } },
    ]
    const now = new Date()
    const refDate = ref<Date>(now)
    const refAmount = ref('0')
    const showSwitchTimePopup = ref(false)
    const setDate = (date: Date) => { refDate.value = date; hideTimePopup() }
    const hideTimePopup = () => {
      showSwitchTimePopup.value = !showSwitchTimePopup.value
    }

    return () => <>
      <div class={style.dateAndAmount}>
        <span class={style.date} onClick={hideTimePopup}>
          <IconSvg name="date" class={style.date_icon} />
          <span>{new Time(refDate.value).format()}</span>
        </span>
        <span class={style.amout}>{refAmount.value}</span>
      </div>
      <div class={style.button_wrapper}>
        {
          buttonTextMap.map(item => {
            return <button onClick={item.onClick}>
              {item.text}
            </button>
          })
        }
      </div>
      <Popup round position="bottom" v-model:show={showSwitchTimePopup.value} >
        <DatetimePicker value={refDate.value} type="date" title="选择年月日" onConfirm={setDate} onCancel={hideTimePopup} />
      </Popup>
      {/* InputPad */}
      {/* <buttonTextMap */}
    </>
  }
})
export default InputPad 