type PropsType = {
  name: string
}
export const IconSvg = (props: PropsType) => {
  const name = `#${props.name}`
  return <>
    <svg>
      <use xlinkHref={name}></use>
    </svg>
  </>
}
IconSvg.displayName = 'IconSvg'

export default IconSvg