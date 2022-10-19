import { defineComponent, ref, PropType } from "vue";
import style from "./index.module.scss"

export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>
    },
    onChange: {
      type: Function as PropType<(e?: MouseEvent) => void>
    }
  },

  setup(props, context) {
    return () => {
      const tabs = context.slots.default?.()
      if (!tabs) return () => null
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].type !== Tab) {
          throw new Error('<Tabs> only accepts <Tab> as children')
        }
      }
      return <div class={style.tabs}>
        <ol class={style.tabs_nav}>
          {tabs.map(item =>
            <li class={item.props?.name === props.selected ? style.selected : ''}
              onClick={() => context.emit('update:selected', item.props?.name)}
            >
              {item.props?.name}
            </li>)}
        </ol>
        {tabs.find(item => item.props?.name === props.selected)}
      </div>
    }
  }
})

export const Tab = defineComponent({
  props: {
    key: {
      type: String as PropType<string>
    },
    name: {
      type: String as PropType<string>
    },
    title: {
      type: String as PropType<string>
    },
  },

  setup(props, context) {
    return () => <div class={style.tab}>{context.slots.default?.()}</div>
  }
})