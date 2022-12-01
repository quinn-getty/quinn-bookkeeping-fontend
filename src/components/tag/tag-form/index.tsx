import { defineComponent, PropType, reactive, toRaw } from 'vue'
import { RulesType } from '../../../shared/validata'
import Button from '../../button'
import { Form, FormItem } from '../../form'
import s from './index.module.scss'
export const TagForm = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const formData = reactive({
      name: '',
      sign: '',
    })
    const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})
    const onSubmit = (e: Event) => {
      const rules: RulesType<typeof formData> = [
        { key: 'name', required: true, message: '必填' },
        { key: 'name', regexp: /^.{1,4}$/, message: '长度为4' },
        { key: 'sign', required: true, message: '必填' },
      ]
      Object.assign(errors, {
        name: undefined,
        sign: undefined,
      })
      Object.assign(errors, validate(formData, rules))
      e.preventDefault()
    }
    return () => (
      <Form onSubmit={onSubmit}>
        <FormItem
          label="标签名"
          type="text"
          v-model={formData.name}
          error={errors['name'] ? errors['name'][0] : '　'}
        />
        <FormItem
          label={'符号 ' + formData.sign}
          type="emojiSelect"
          v-model={formData.sign}
          error={errors['sign'] ? errors['sign'][0] : '　'}
        />
        <FormItem>
          <p class={s.tips}>记账时长按标签即可进行编辑</p>
        </FormItem>
        <FormItem>
          <Button class={[s.button]}>确定</Button>
        </FormItem>
      </Form>
    )
  },
})

function validate(
  formData: { name: string; sign: string },
  rules: RulesType<{ name: string; sign: string }>,
): any {
  throw new Error('Function not implemented.')
}
