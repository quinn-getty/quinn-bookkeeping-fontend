import { defineComponent, ref, PropType } from "vue";
import { RouterView } from "vue-router";

export const ItemPage = defineComponent({
  props: {
    // key: {
    //   type: String as PropType<T>
    // }
  },

  setup(props, content) {
    return () => <>
      <RouterView />
    </>
  }
})
export default ItemPage 