import { defineComponent, ref, PropType, reactive, toRaw } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import BackIcon from '../../../components/back-icon'
import Button from '../../../components/button'
import { EmojiSelect } from '../../../components/emoji-select'
import IconSvg from '../../../components/icon'
import MainLayout from '../../../components/main-layout'
import { TagForm } from '../../../components/tag/tag-form'
import style from './index.module.scss'

export const TagCreate = defineComponent({
  props: {},

  setup(props, content) {
    return () => (
      <>
        <MainLayout>
          {{
            icon: () => <BackIcon class={style.menu_icon} />,
            title: () => '新建标签',
            default: () => (
              <>
                <TagForm />
              </>
            ),
          }}
        </MainLayout>
      </>
    )
  },
})
export default TagCreate
