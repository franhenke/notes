export function getDatesOfNext4Days(dates) {
  const currentDate = new Date()
  const currentDateTime = currentDate.getTime()
  const currentDateCopy = new Date(currentDateTime)
  const in4DaysDate = new Date(
    currentDateCopy.setDate(currentDateCopy.getDate() + 4)
  )

  const datesNext4DaysSorted = dates
    .filter((date) => {
      const itemDateTime = new Date(date.when).getTime()
      if (itemDateTime <= currentDateTime) {
        return true
      }
      if (itemDateTime <= in4DaysDate) {
        return true
      }
      return false
    })
    .sort((a, b) => {
      const dateA = new Date(a.when)
      const dateB = new Date(b.when)
      return dateA - dateB
    })

  return datesNext4DaysSorted
}
