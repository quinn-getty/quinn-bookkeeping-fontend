import { defineComponent, ref, PropType, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import IconSvg from "../../../components/icon";
import InputPad from "../../../components/input-pad";
import MainLayout from "../../../components/main-layout";
import { Tab, Tabs } from "../../../components/tabs";
import useTags from "../../../hooks/useTags";
import http from "../../../shared/axios";
import style from './index.module.scss'

export const ItemCreate = defineComponent({

  setup(props, content) {
    const router = useRouter()
    const route = useRoute()
    const type =  '支出'
    
    const selected = ref(type)
    const goBack = () => {
      router.go(-1)
    }
    const expenses = useTags('expenses')
    const income = useTags('income')
    console.log(expenses);
    

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
                <Tab name="支出">
                  <div class={style.tag_wrapper}>
                    <div class={style.tag} onClick={() => toAddTag('expenses')}>
                      <div class={style.sign}>
                        <IconSvg name="add" class={style.createTag} />
                      </div>
                      <div class={style.name}>
                        新增
                      </div>
                    </div>
                    {expenses.list.value.map(tag =>
                      <div class={[style.tag, style.selected]}>
                        <div class={style.sign}>
                          {tag.sign}
                        </div>
                        <div class={style.name}>
                          {tag.name}
                        </div>
                      </div>
                    )}
                  </div>
                  <div class={style.more}>
                    {
                      expenses.loading.value 
                      ? <>加载中...</>
                      : expenses.hasMore.value
                      ? <button onClick={expenses.getList} class={style.button}> 加载更多... </button>
                      : <>没有更多，请添加！</> 
                    }
                  </div>
                </Tab>
                <Tab name="收入" >
                  <div class={style.tag_wrapper}>
                    <div class={style.tag} onClick={() => toAddTag('income')}>
                      <div class={style.sign}>
                        <IconSvg name="add" class={style.createTag} />
                      </div>
                      <div class={style.name}>
                        新增
                      </div>
                    </div>
                    {income.list.value.map(tag =>
                      <div class={[style.tag, style.selected]}>
                        <div class={style.sign}>
                          {tag.sign}
                        </div>
                        <div class={style.name}>
                          {tag.name}
                        </div>
                      </div>
                    )}
                  </div>
                  <div class={style.more}>
                    {
                      income.loading.value 
                      ? <>加载中...</>
                      : income.hasMore.value
                      ? <button onClick={income.getList} class={style.button}> 加载更多... </button>
                      : <>没有更多，请添加！</> 
                    }
                  </div>
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


// color: #0A2417;
//     font-weight: bold;
//     font-family: 'Poppins';
//     font-size: 49px;
//     margin-bottom: 20px;
//     margin-left: auto;
//     margin-top: 23px;