import { defineComponent, ref, PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import IconSvg from '../icon'
// import style from "./index.module.scss"

const BackIcon = defineComponent({
  // props: {},

  setup(props, content) {
    const router = useRouter()
    const route = useRoute()

    const goBack = () => {
      const { redirect_to } = route.query
      if (redirect_to) {
        router.push(redirect_to.toString())
      } else {
        router.back()
      }
    }
    return () => <IconSvg name="left" onClick={goBack} />
  },
})
BackIcon.displayName = 'BackIcon'
export default BackIcon
