import { defineComponent, PropType, reactive, toRaw } from 'vue'
import { routerKey, useRoute } from 'vue-router'
import http from '../../../shared/axios'
import { RulesType, hasError, validata } from '../../../shared/validata'
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
    const route = useRoute()
    const formData = reactive({
      name: '',
      sign: '',
    })
    const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})
    const onSubmit = async (e: Event) => {
      e.preventDefault()
      const rules: RulesType<typeof formData> = [
        { key: 'name', required: true, message: '必填' },
        { key: 'sign', required: true, message: '必填' },
      ]
      Object.assign(errors, {
        email: [],
        code: [],
      })
      Object.assign(errors, validata(formData, rules))
      console.log(formData)

      if (hasError(errors)) {
        return
      }
      const response = await http
        .post('/tags', {
          kind: route.query.type!.toString(),
          ...formData,
        })
        .catch(() => {})
      console.log(response)
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
          <Button type="submit" class={[s.button]}>
            确定
          </Button>
        </FormItem>
      </Form>
    )
  },
})
