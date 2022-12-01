import { defineComponent, PropType, reactive, ref } from 'vue'
import { routerKey, useRoute, useRouter } from 'vue-router'
import Button from '../../components/button'
import { Form, FormItem } from '../../components/form'
import IconSvg from '../../components/icon'
import MainLayout from '../../components/main-layout'
import http from '../../shared/axios'
import { hasError, validata } from '../../shared/validata'
import s from './index.module.scss'
export const SignInPage = defineComponent({
  setup: (props, context) => {
    const router = useRouter()
    const route = useRoute()
    const formData = reactive({
      email: '',
      code: '',
    })
    const sendButtonDisabled = ref(false)
    const errors = reactive({
      email: [],
      code: [],
    })
    const onSubmit = async (e: Event) => {
      e.preventDefault()
      console.log(formData)

      Object.assign(errors, {
        email: [],
        code: [],
      })
      Object.assign(
        errors,
        validata(formData, [
          { key: 'email', required: true, message: '必填' },
          { key: 'email', regexp: /.+@.+/, message: '必须是邮箱地址' },
          { key: 'code', required: true, message: '必填' },
          { key: 'code', regexp: /^\d{6}$/, message: '六位数字' },
        ]),
      )
      if (hasError(errors)) {
        return
      }
      const response = await http.post<{ jwt: string }>('/session', formData)
      localStorage.setItem('jwt', response.data.jwt)
      const redirectTo = route.query.redirect_to?.toString() || '/'
      router.push(redirectTo)
    }
    const goBack = () => {
      router.go(-1)
    }
    const onError = (error: any) => {
      if (error.response.status === 422) {
        Object.assign(errors, error.response.data.errors)
      }
      throw error
    }
    const triggerCountdown = async () => {
      if (!formData.email) {
        return
      }
      sendButtonDisabled.value = true
      return http
        .post('validation_codes', { email: formData.email })
        .catch(onError)
        .then((res) => {
          console.log(res)
        })
        .finally(() => {
          sendButtonDisabled.value = false
        })
    }

    return () => (
      <MainLayout>
        {{
          title: () => '登录',
          icon: () => <IconSvg name="left" onClick={goBack} />,
          default: () => (
            <div class={s.wrapper}>
              <div class={s.logo}>
                <IconSvg class={s.icon} name="mangosteen" />
                <h1 class={s.appName}>山竹记账</h1>
              </div>
              <Form onSubmit={onSubmit}>
                <FormItem
                  label="邮箱地址"
                  type="text"
                  placeholder="请输入邮箱，然后点击发送验证码"
                  v-model={formData.email}
                  error={errors.email?.[0]}
                />
                <FormItem
                  label="验证码"
                  type="validationCode"
                  placeholder="请输入六位数字"
                  countFrom={60}
                  inputMaxLength="6"
                  disabled={sendButtonDisabled.value}
                  triggerCountdown={triggerCountdown}
                  v-model={formData.code}
                  error={errors.code?.[0]}
                />

                <FormItem style={{ paddingTop: '96px' }}>
                  <Button type="submit">登录</Button>
                </FormItem>
              </Form>
            </div>
          ),
        }}
      </MainLayout>
    )
  },
})
