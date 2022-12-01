export const throttle = <T extends (...arg: any[]) => any>(
  fn: T,
  time: number,
) => {
  let timer = NaN
  let result: ReturnType<T>
  return (...arg: Parameters<T>) => {
    if (timer) {
      return result
    } else {
      result = fn(...arg)
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = NaN
      }, time)
      return result
    }
  }
}

export default throttle
