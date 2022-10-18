import { defineComponent, ref, PropType } from "vue";
import { timer } from "../../shared/timer";
import IconSvg from "../icon";
import style from "./index.module.scss"
import { Popup, DatetimePicker } from 'vant';

export const InputPad = defineComponent({

  setup(props, content) {
    const buttonTextMap = [
      { text: '1' },
      { text: '2' },
      { text: '3' },
      { text: '清空' },
      { text: '4' },
      { text: '5' },
      { text: '6' },
      { text: '+' },
      { text: '7' },
      { text: '8' },
      { text: '9' },
      { text: '-' },
      { text: '.' },
      { text: '0' },
      { text: 'Del' },
      { text: 'OK' },
    ]
    const time = timer().format()
    const refDate = ref(new Date())
    const showSwitchTimePopup = ref(false)
    const setDate = (date: Date) => { refDate.value = date; hideTimePopup() }
    const hideTimePopup = () => {
      showSwitchTimePopup.value = !showSwitchTimePopup.value
    }

    return () => <>
      <div class={style.dateAndAmount}>
        <span class={style.date} onClick={hideTimePopup}>
          <IconSvg name="date" class={style.date_icon} />
          <span>{timer(refDate.value).format()}</span>
        </span>
        <span class={style.amout}>123232.1</span>
      </div>
      <div class={style.button_wrapper}>
        {
          buttonTextMap.map(item => {
            return <button>
              {item.text}
            </button>
          })
        }
      </div>
      <Popup round position="bottom" v-model:show={showSwitchTimePopup.value} >
        <DatetimePicker v-model={refDate.value} type="date" title="选择年月日" onConfirm={setDate} onCancel={hideTimePopup} />
      </Popup>
      {/* InputPad */}
      {/* <buttonTextMap */}
    </>
  }
})
export default InputPad 