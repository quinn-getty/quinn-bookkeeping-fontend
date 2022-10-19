import { defineComponent, ref, PropType } from "vue";
import { useRouter } from "vue-router";
import IconSvg from "../../../components/icon";
import InputPad from "../../../components/input-pad";
import MainLayout from "../../../components/main-layout";
import { Tab, Tabs } from "../../../components/tabs";
import style from './index.module.scss'

export const ItemCreate = defineComponent({

  setup(props, content) {
    const router = useRouter()
    const selected = ref('支出')
    const changeActiveTab = (name: string) => {
      selected.value = name
    }
    const goBack = () => {
      router.go(-1)
    }
    const refExpensesTags = ref([
      { id: 1, name: '餐费', sign: '￥', category: 'expenses' },
      { id: 2, name: '打车', sign: '￥', category: 'expenses' },
      { id: 3, name: '聚餐', sign: '￥', category: 'expenses' },
      { id: 4, name: '打车', sign: '￥', category: 'expenses' },
      { id: 5, name: '聚餐', sign: '￥', category: 'expenses' },
      { id: 6, name: '打车', sign: '￥', category: 'expenses' },
      { id: 7, name: '聚餐', sign: '￥', category: 'expenses' },
    ])
    const refIncomeTags = ref([
      { id: 4, name: '工资', sign: '￥', category: 'income' },
      { id: 5, name: '彩票', sign: '￥', category: 'income' },
      { id: 6, name: '滴滴', sign: '￥', category: 'income' },
      { id: 11, name: '彩票', sign: '￥', category: 'income' },
      { id: 18, name: '滴滴', sign: '￥', category: 'income' },
      { id: 17, name: '彩票', sign: '￥', category: 'income' },
      { id: 19, name: '滴滴', sign: '￥', category: 'income' },
      { id: 4, name: '工资', sign: '￥', category: 'income' },
      { id: 5, name: '彩票', sign: '￥', category: 'income' },
      { id: 6, name: '滴滴', sign: '￥', category: 'income' },
      { id: 11, name: '彩票', sign: '￥', category: 'income' },
      { id: 18, name: '滴滴', sign: '￥', category: 'income' },
      { id: 17, name: '彩票', sign: '￥', category: 'income' },
      { id: 19, name: '滴滴', sign: '￥', category: 'income' },
      { id: 4, name: '工资', sign: '￥', category: 'income' },
      { id: 5, name: '彩票', sign: '￥', category: 'income' },
      { id: 6, name: '滴滴', sign: '￥', category: 'income' },
      { id: 11, name: '彩票', sign: '￥', category: 'income' },
      { id: 18, name: '滴滴', sign: '￥', category: 'income' },
      { id: 17, name: '彩票', sign: '￥', category: 'income' },
      { id: 4, name: '工资', sign: '￥', category: 'income' },
      { id: 5, name: '彩票', sign: '￥', category: 'income' },
      { id: 6, name: '滴滴', sign: '￥', category: 'income' },
      { id: 11, name: '彩票', sign: '￥', category: 'income' },
      { id: 18, name: '滴滴', sign: '￥', category: 'income' },
      { id: 17, name: '彩票', sign: '￥', category: 'income' },
      { id: 4, name: '工资', sign: '￥', category: 'income' },
      { id: 5, name: '彩票', sign: '￥', category: 'income' },
      { id: 6, name: '滴滴', sign: '￥', category: 'income' },
      { id: 11, name: '彩票', sign: '￥', category: 'income' },
      { id: 18, name: '滴滴', sign: '￥', category: 'income' },
      { id: 17, name: '彩票', sign: '￥', category: 'income' },
      { id: 4, name: '工资', sign: '￥', category: 'income' },
      { id: 5, name: '彩票', sign: '￥', category: 'income' },
      { id: 6, name: '滴滴', sign: '￥', category: 'income' },
      { id: 11, name: '彩票', sign: '￥', category: 'income' },
      { id: 18, name: '滴滴', sign: '￥', category: 'income' },
      { id: 17, name: '彩票', sign: '￥', category: 'income' },
      { id: 4, name: '工资', sign: '￥', category: 'income' },
      { id: 5, name: '彩票', sign: '￥', category: 'income' },
      { id: 6, name: '滴滴', sign: '￥', category: 'income' },
      { id: 11, name: '彩票', sign: '￥', category: 'income' },
      { id: 18, name: '滴滴', sign: '￥', category: 'income' },
      { id: 17, name: '彩票', sign: '￥', category: 'income' },
    ])

    const toAddTag = (type: string) => {
      router.push(`/tag/create?type=${type}`)
    }

    return () => <>
      <MainLayout>
        {{
          icon: () => <IconSvg name="left" class={style.menu_icon} onClick={goBack} />,
          title: () => <>记一笔</>,
          default: () => <>
            <div class={style['body-wrapper']}>
              <Tabs v-model:selected={selected.value} class={style.tabs_wrapper}>
                <Tab name="支出" class={style.tag_wrapper}>
                  <div class={style.tag} onClick={() => toAddTag('expenses')}>
                    <div class={style.sign}>
                      <IconSvg name="add" class={style.createTag} />
                    </div>
                    <div class={style.name}>
                      新增
                    </div>
                  </div>
                  {refExpensesTags.value.map(tag =>
                    <div class={[style.tag, style.selected]}>
                      <div class={style.sign}>
                        {tag.sign}
                      </div>
                      <div class={style.name}>
                        {tag.name}
                      </div>
                    </div>
                  )}
                </Tab>
                <Tab name="收入" class={style.tag_wrapper}>
                  <div class={style.tag} onClick={() => toAddTag('income')}>
                    <div class={style.sign}>
                      <IconSvg name="add" class={style.createTag} />
                    </div>
                    <div class={style.name}>
                      新增
                    </div>
                  </div>
                  {refIncomeTags.value.map(tag =>
                    <div class={[style.tag, style.selected]}>
                      <div class={style.sign}>
                        {tag.sign}
                      </div>
                      <div class={style.name}>
                        {tag.name}
                      </div>
                    </div>
                  )}
                </Tab>
              </Tabs>
              <div class={style.input_pad_wrapper}>
                <InputPad />
              </div>
            </div>
          </>
        }}
      </MainLayout>
    </>
  }
})
export default ItemCreate 