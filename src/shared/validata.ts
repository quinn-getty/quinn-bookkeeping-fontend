interface FormDataType {
  [_: string]: string | number | null | undefined | FormDataType
}

type FNType = string | number | null | undefined | FormDataType

export type RulesType<T> = RuleType<T>[]
type RuleType<T> = {
  key: keyof T
  message?: string
  required?: true
  regexp?: RegExp
  fn?: <F>(_: F) => { status: boolean; message?: string }
}

type ErrorsType<T> = {
  [k in keyof T]?: string[]
}

/**
 *
 * @param formData
 *
 * @param rules
 *  required > pettern > fn
 */
export const validata = <T>(formData: T, rules: RulesType<T>) => {
  const errors: ErrorsType<T> = {}
  rules.forEach((item) => {
    const { key } = item
    const value = formData[key]
    let isError = false //
    let message = item?.message || ''

    if (item?.required) {
      isError = !value
    } else if (item?.regexp) {
      console.log('regexp', !item.regexp.test((value || '').toString()))

      isError = !item.regexp.test((value || '').toString())
    } else if (item?.fn) {
      const { status, message: msg } = item.fn(value)
      isError = !status
      message = msg || message
    }

    if (isError) {
      errors[key] = errors[key] ?? []
      errors[key]?.push(message)
    }
  })
  return errors
}

export const hasError = (errors: Record<string, string[]>) => {
  for (let key in errors) {
    if (errors[key].length > 0) {
      return true
    }
  }
  return false
}

// export default validata
