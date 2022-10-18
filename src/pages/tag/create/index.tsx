import { defineComponent, ref, PropType, reactive, toRaw } from "vue";
import { RouterView } from "vue-router";
import Button from "../../../components/button";
import EmojiSelect from "../../../components/emoji-select";
import IconSvg from "../../../components/icon";
import MainLayout from "../../../components/main-layout";
import style from "./index.module.scss"

export const TagCreate = defineComponent({
  props: {
  },

  setup(props, content) {
    const goBack = () => {

    }
    const formData = reactive({
      name: '',
      sign: '',
    })
    const onSubmit = (e: Event) => {
      e.preventDefault()
      console.log(formData);
      const data = toRaw(formData)
      const rules = [
        { key: 'name', required: true, pettern: '', message: '必填' },
        { key: 'name', pettern: /^.{1,4}$/, message: '长度为4' },
        { key: 'sign', required: true, message: '必填' },
      ]

    }
    return () => <>
      <MainLayout>
        {{
          icon: () => <IconSvg name="left" class={style.menu_icon} onClick={goBack} />,
          title: () => '新建标签',
          default: () => <>
            <form class={style.form} onSubmit={onSubmit}>
              <div class={style.formRow}>
                <label class={style.formLabel}>
                  <span class={style.formItem_name}>标签名</span>
                  <div class={style.formItem_value}>
                    <input v-model={formData.name} class={[style.formItem, style.input, style.error]}></input>
                  </div>
                  <div class={style.formItem_errorHint}>
                    <span>必填</span>
                  </div>
                </label>
              </div>
              <div class={style.formRow}>
                <label class={style.formLabel}>
                  <span class={style.formItem_name}>符号 {formData.sign}</span>
                  <div class={style.formItem_value}>
                    <EmojiSelect v-model={formData.sign} class={[style.formItem, style.emojiList, style.error]} />
                  </div>
                  <div class={style.formItem_errorHint}>
                    <span>必填</span>
                  </div>
                </label>
              </div>
              <p class={style.tips}>记账时长按标签即可进行编辑</p>
              <div class={style.formRow}>
                <div class={style.formItem_value}>
                  <Button class={[style.formItem, style.button]}>确定</Button>
                </div>
              </div>
            </form>
          </>
        }}
      </MainLayout>
    </>
  }
})
export default TagCreate 