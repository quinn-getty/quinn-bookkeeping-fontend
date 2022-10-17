import { defineComponent, ref, PropType } from "vue";

export const ItemList = defineComponent({
  props: {
    // key: {
    //   type: String as PropType<T>
    // }
  },

  setup(props, content) {
    return () => <>
      list
    </>
  }
})
export default ItemList 