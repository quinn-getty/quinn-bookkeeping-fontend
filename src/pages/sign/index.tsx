import { defineComponent, PropType, reactive } from 'vue';
import { routerKey, useRouter } from 'vue-router';
import Button from '../../components/button';
import { Form, FormItem } from '../../components/form';
import IconSvg from '../../components/icon';
import MainLayout from '../../components/main-layout';
import validata from '../../shared/validata';
import s from './index.module.scss';
export const SignInPage = defineComponent({
  setup: (props, context) => {
    const router = useRouter()
    const formData = reactive({
      email: '',
      code: ''
    })
    const errors = reactive({
      email: [],
      code: []
    })
    const onSubmit = (e: Event) => {
      e.preventDefault()
      Object.assign(errors, {
        email: [], code: []
      })
      Object.assign(errors, validata(formData, [
        { key: 'email', required: true, message: '必填' },
        { key: 'email', regexp: /.+@.+/, message: '必须是邮箱地址' },
        { key: 'code', required: true, message: '必填' },
      ]))
    }
    const goBack = () => {
      router.go(-1)
    }
    return () => (
      <MainLayout>{
        {
          title: () => '登录',
          icon: () => <IconSvg name="left" onClick={goBack} />,
          default: () => (
            <div class={s.wrapper}>
              <div class={s.logo}>
                <IconSvg class={s.icon} name="mangosteen" />
                <h1 class={s.appName}>山竹记账</h1>
              </div>
              <Form onSubmit={onSubmit}>
                <FormItem label="邮箱地址" type="text"
                  placeholder='请输入邮箱，然后点击发送验证码'
                  v-model={formData.email} error={errors.email?.[0]} />
                <FormItem label="验证码" type="validationCode"
                  placeholder='请输入六位数字'
                  v-model={formData.code} error={errors.code?.[0]} />
                <FormItem style={{ paddingTop: '96px' }}>
                  <Button>登录</Button>
                </FormItem>
              </Form>
            </div>
          )
        }
      }</MainLayout>
    )
  }
})
