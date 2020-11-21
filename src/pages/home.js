import React, { useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import { getDatesOfNext4Days } from '../assets/services/FilterUpcomingDates'
import UpcomingDatesList from '../components/UpcomingDatesList'
import Header from '../components/Header'
import FavoriteContactsList from '../components/FavoriteContactsList'

export const Home = () => {
  const { dates } = useContext(GlobalContext)
  const sortedUpcomingDates = getDatesOfNext4Days(dates)

  return (
    <div>
      <Header />
      <UpcomingDatesList sortedUpcomingDates={sortedUpcomingDates} />
      <FavoriteContactsList />
    </div>
  )
}
export default Home
