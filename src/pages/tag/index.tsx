import { defineComponent, ref, PropType } from 'vue'
import { RouterView } from 'vue-router'
// import style from "./index.module.scss"

export const TagsPage = defineComponent({
  props: {
    // key: {
    //   type: String as PropType<T>
    // }
  },

  setup(props, content) {
    return () => (
      <>
        <RouterView />
      </>
    )
  },
})
export default TagsPage
