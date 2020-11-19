export function sortDatesNext4Days(dates) {
  const currentDate = new Date()
  const currentDateTime = currentDate.getTime()
  const next4Days = new Date(currentDate.setDate(currentDate.getDate() + 4))

  const datesNext4DaysSorted = dates
    .filter((date) => {
      const itemDateTime = new Date(date.date).getTime()
      if (itemDateTime <= currentDateTime) {
        return true
      }
      if (itemDateTime <= next4Days) {
        return true
      }
      return false
    })
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateA - dateB
    })
  return datesNext4DaysSorted
}
