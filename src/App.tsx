import { defineComponent } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const App = defineComponent({
  setup() {
    return () => (
      <>
        <RouterView />
      </>
    )
  },
})

export default App
