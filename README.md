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