import { defineComponent, ref, PropType, reactive, toRaw } from "vue";
import { RouterView, useRouter } from "vue-router";
import Button from "../../../components/button";
import { EmojiSelect } from "../../../components/emoji-select";
import IconSvg from "../../../components/icon";
import MainLayout from "../../../components/main-layout";
import { TagForm } from "../../../components/tag/tag-form";
import validata, { RulesType } from "../../../shared/validata";
import style from "./index.module.scss"

export const TagCreate = defineComponent({
  props: {
  },

  setup(props, content) {
    const router = useRouter()
    const goBack = () => {
      router.replace('/item/create')
    }
    return () => <>
      <MainLayout>
        {{
          icon: () => <IconSvg name="left" class={style.menu_icon} onClick={goBack} />,
          title: () => '新建标签',
          default: () => <>
            <TagForm />
          </>
        }}
      </MainLayout>
    </>
  }
})
export default TagCreate 