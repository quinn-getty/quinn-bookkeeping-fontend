// export const timer = (date: Date = new Date()) => {
//   const api = {
//     format: (pattern = 'YYYY-MM-DD') => {
//       // 目前支持的格式有 YYYY MM DD HH mm ss SSS
//       const year = date.getFullYear()
//       const month = date.getMonth() + 1
//       const day = date.getDate()
//       const hour = date.getHours()
//       const minute = date.getMinutes()
//       const second = date.getSeconds()
//       const msecond = date.getMilliseconds()
//       return pattern.replace(/YYYY/g, year.toString())
//         .replace(/MM/, month.toString().padStart(2, '0'))
//         .replace(/DD/, day.toString().padStart(2, '0'))
//         .replace(/HH/, hour.toString().padStart(2, '0'))
//         .replace(/mm/, minute.toString().padStart(2, '0'))
//         .replace(/ss/, second.toString().padStart(2, '0'))
//         .replace(/SSS/, msecond.toString().padStart(3, '0'))
//     }
//   }
//   return api
// }

export class Time {
  date: Date;
  constructor(date: Date = new Date()) {
    this.date = date
  }

  format(pattern = 'YYYY-MM-DD') {
    // 目前支持的格式有 YYYY MM DD HH mm ss SSS
    const year = this.date.getFullYear()
    const month = this.date.getMonth() + 1
    const day = this.date.getDate()
    const hour = this.date.getHours()
    const minute = this.date.getMinutes()
    const second = this.date.getSeconds()
    const msecond = this.date.getMilliseconds()

    return pattern.replace(/YYYY/g, year.toString())
      .replace(/MM/, month.toString().padStart(2, '0'))
      .replace(/DD/, day.toString().padStart(2, '0'))
      .replace(/HH/, hour.toString().padStart(2, '0'))
      .replace(/mm/, minute.toString().padStart(2, '0'))
      .replace(/ss/, second.toString().padStart(2, '0'))
      .replace(/SSS/, msecond.toString().padStart(3, '0'))
  }

  firstDayOfMonth() {
    return new Time(new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0))
  }
  firstDayOfYear() {
    return new Time(new Date(this.date.getFullYear(), 0, 1, 0, 0, 0))
  }
  lastDayOfMonth() {
    return new Time(new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0, 0, 0, 0))
  }
  lastDayOfYear() {
    return new Time(new Date(this.date.getFullYear() + 1, 0, 0, 0, 0, 0))
  }
  add(amount: number, unit: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond') {
    // return new Time but not change this.date
    let date = new Date(this.date.getTime());
    switch (unit) {
      case 'year':
        date.setFullYear(date.getFullYear() + amount);
        break;
      case 'month':
        const d = date.getDate()
        date.setDate(1)
        date.setMonth(date.getMonth() + amount);
        const d2 = new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0, 0).getDate()
        date.setDate(Math.min(d, d2))
        break;
      case 'day':
        date.setDate(date.getDate() + amount);
        break;
      case 'hour':
        date.setHours(date.getHours() + amount);
        break;
      case 'minute':
        date.setMinutes(date.getMinutes() + amount);
        break;
      case 'second':
        date.setSeconds(date.getSeconds() + amount);
        break;
      case 'millisecond':
        date.setMilliseconds(date.getMilliseconds() + amount);
        break;
      default:
        throw new Error('Time.add: unknown unit');
    }
    return new Time(date)
  }

}