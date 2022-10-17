import { defineComponent, ref, PropType } from "vue";

export const ItemCreate = defineComponent({
  props: {
    // key: {
    //   type: String as PropType<T>
    // }
  },

  setup(props, content) {
    return () => <>
      create
    </>
  }
})
export default ItemCreate 