import { SetupContext, ref, PropType, onMounted } from 'vue'
import http from '../shared/axios'
import style from './index.module.scss'
type PropsType = {
  kind: string
}

type TagType = {
  id: number
  name: string
  sign: string
  category: string
}

const useTags = (kind: string) => {
  const list = ref<TagType[]>([])
  const page = ref(0)
  const hasMore = ref(true)
  const loading = ref(false)

  const getList = async () => {
    if (!hasMore.value) {
      return
    }
    loading.value = true
    const response = await http.get<{
      resources: TagType[]
      pager: {
        page: number
        per_page: number
        count: number
      }
    }>('/tags', {
      kind,
      page: page.value + 1,
    })
    loading.value = false
    list.value.push(...response.data.resources)
    page.value++
    hasMore.value =
      +response.data.pager.page * +response.data.pager.per_page !==
      response.data.pager.count
  }
  onMounted(() => {
    getList()
  })

  return { list, page, hasMore, loading, getList }
}
useTags.displayName = 'useTags'
export default useTags
