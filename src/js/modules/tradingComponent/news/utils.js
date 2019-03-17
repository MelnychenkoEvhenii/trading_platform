export const getMonthAgoInSec = () => {
  const d = new Date()
  d.setMonth(d.getMonth() - 1)
  d.setHours(0, 0, 0)
  d.setMilliseconds(0)
  return d.getTime() / 1000
}

export default null
