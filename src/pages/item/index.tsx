import { defineComponent, ref, PropType } from "vue";
import { RouterView } from "vue-router";

export const ItemPage = defineComponent({

  setup(props, content) {
    return () => <>
      <RouterView />
    </>
  }
})
export default ItemPage 