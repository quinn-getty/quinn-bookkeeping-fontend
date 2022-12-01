import { defineComponent, ref, PropType } from 'vue'
import { useRouter } from 'vue-router'
import IconSvg from '../icon'
// import style from "./index.module.scss"

const BackIcon = defineComponent({
  // props: {},

  setup(props, content) {
    const router = useRouter()

    const goBack = () => {
      router.go(-1)
    }
    return () => <IconSvg name="left" onClick={goBack} />
  },
})
BackIcon.displayName = 'BackIcon'
export default BackIcon
