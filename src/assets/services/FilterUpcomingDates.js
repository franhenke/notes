export function sortDatesNext4Days(dates) {
  const currentDate = new Date()
  const currentDateTime = currentDate.getTime()
  const next4Days = new Date(currentDate.setDate(currentDate.getDate() + 4))
  const next4DaysTime = next4Days.getTime()

  //the method .getTime is used to get numerical values (milliseconds since the UNIC epoch) which can easily be compared
  const datesNext4DaysSorted = dates
    .filter((date) => {
      const itemDateTime = new Date(date.date).getTime()
      if (itemDateTime >= currentDateTime && itemDateTime < next4DaysTime) {
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
