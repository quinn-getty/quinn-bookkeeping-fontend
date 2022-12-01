import { defineComponent, ref, PropType, reactive, toRaw } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import BackIcon from '../../../components/back-icon'
import Button from '../../../components/button'
import EmojiSelect from '../../../components/emoji-select'
import IconSvg from '../../../components/icon'
import MainLayout from '../../../components/main-layout'
import { TagForm } from '../../../components/tag/tag-form'
import { validata, RulesType } from '../../../shared/validata'
import style from './index.module.scss'

export const TagEdit = defineComponent({
  props: {},

  setup(props, content) {
    const formData = reactive({
      name: 'oks',
      sign: '👌',
    })
    const refError = ref<{ [_ in keyof typeof formData]?: string[] }>({})
    const onSubmit = (e: Event) => {
      e.preventDefault()
      console.log(formData)
      const data = toRaw(formData)
      const rules: RulesType<typeof data> = [
        { key: 'name', required: true, message: '必填' },
        { key: 'name', regexp: /^.{1,4}$/, message: '长度为4' },
        { key: 'sign', required: true, message: '必填' },
      ]
      const errors = validata(data, rules)
      refError.value = errors
    }
    return () => (
      <>
        <MainLayout>
          {{
            icon: () => <BackIcon class={style.menu_icon} />,
            title: () => '标签详情',
            default: () => (
              <>
                <TagForm />
                {/* <div class={s.actions}>
              <Button level='danger' class={s.removeTags} onClick={() => { }}>删除标签</Button>
              <Button level='danger' class={s.removeTagsAndItems} onClick={() => { }}>删除标签和记账</Button>
            </div> */}
              </>
            ),
          }}
        </MainLayout>
      </>
    )
  },
})

export default TagEdit
