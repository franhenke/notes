import React, { useContext } from 'react'
import ContactList from '../components/ContactList'
import { GlobalContext } from '../assets/context/GlobalState'
import DateList from '../components/DateList'
import { sortDatesNext4Days } from '../assets/services/FilterUpcomingDates'
import UpcomingDatesList from '../components/UpcomingDatesList'

export const Home = () => {
  const { dates } = useContext(GlobalContext)

  const datesNext4Days = sortDatesNext4Days(dates)

  return (
    <div>
      <UpcomingDatesList upcomingDates={datesNext4Days} />
      <ContactList />
    </div>
  )
}
export default Home
