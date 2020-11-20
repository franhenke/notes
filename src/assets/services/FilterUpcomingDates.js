export function getDatesOfNext4Days(dates) {
  const currentDate = new Date()
  const currentDateTime = currentDate.getTime()
  const next4Days = new Date(currentDate.setDate(currentDate.getDate() + 4))

  const datesNext4DaysSorted = dates
    .filter((date) => {
      const itemDateTime = new Date(date.when).getTime()
      if (itemDateTime <= currentDateTime) {
        return true
      }
      if (itemDateTime <= next4Days) {
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

export function getTodaysDate(dates) {
  const today = new Date()
  const todayFormatted = today.toLocaleDateString()

  const showTodaysDates = dates
    .filter((date) => {
      const dateOfEncounter = new Date(date.when).getTime()
      if (dateOfEncounter === currentDayTime) {
        return true
      }
      if (dateOfEncounter === thisDay) {
        return true
      }
      return false
    })
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateA - dateB
    })
  return showTodaysDates
}
