import React, { useContext } from 'react'
import ContactList from '../components/ContactList'
import { GlobalContext } from '../assets/context/GlobalState'
import { getDatesOfNext4Days } from '../assets/services/FilterUpcomingDates'
import UpcomingDatesList from '../components/UpcomingDatesList'
import Header from '../components/Header'

export const Home = () => {
  const { dates } = useContext(GlobalContext)
  const datesNext4Days = getDatesOfNext4Days(dates)

  return (
    <div>
      <Header />
      <UpcomingDatesList upcomingDates={datesNext4Days} />
      <ContactList />
    </div>
  )
}
export default Home
