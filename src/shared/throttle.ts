export const throttle = (fn: Function, time: number) => {
  let timer = NaN
  return (...arg: any[]) => {
    if (timer) {
      return
    } else {
      timer = setTimeout(() => {
        fn(...arg)
        clearTimeout(timer)
        timer = NaN
      }, time);
    }
  }
}

export default throttle