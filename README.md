# Vue 3 + TypeScript + Vite


# slots 怎么使用
## 俩种写法
```tsx

const CompoentsA = defineComponent({
  setup: (props, context) => {
    const { slotsA, slotsB, slotsC } = context.slots
    return () => (
      <div>
      { slotsA() }
      { slotsB() }
      { slotsC() }
      </div>
    )
  }
})

const CompoentsB = defineComponent({
  setup: (props, context) => {
    return () => (
      <CompoentsA >
        {{
          slotsA: () => <>slotsA</>, // tsx
          slotsB: () => <>slotsA</>, // tsx
          slotsC: () => <>slotsA</>, // tsx
        }}
      </CompoentsA>
    )
  }
})

const CompoentsB = defineComponent({
  setup: (props, context) => {
    const slots = {
      slotsA: () => <>slotsA</>, // tsx
      slotsB: () => <>slotsA</>, // tsx
      slotsC: () => <>slotsA</>, // tsx
    }}
    return () => (
      <CompoentsA v-slots={slots} />
    )
  }
})


```

# vue router config 可以使用多个组件

``` tsx
// config
const routes: RouteRecordRaw[] = [
  {
    path: '/a',
    component: Welcome,
    children: [
      { path: '1', components: { main: OneMain, footer: OneFooter } }, // OneMain 、 OneFooter 为组件
      // ....
    ]
  }
]


// 引用到的页面
export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
        <main> <RouterView name='main' /> </main>
        <footer> <RouterView name="footer" /> </footer>
      </div>
    )
  }
})


```