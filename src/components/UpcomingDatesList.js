import React, { useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import UpcomingDate from './UpcomingDate'

const UpcomingDatesList = ({ upcomingDates }) => {
  const { contacts } = useContext(GlobalContext)

  function contactName(date) {
    const contactRef = contacts.find((contact) => contact.id === date.contactId)
    if (typeof contactRef != 'undefined') {
      return contactRef.firstName
    } else return null
  }

  return (
    <div className="grid ">
      <div className="dates-container">
        <h2>Upcoming Dates</h2>
        {upcomingDates.length > 0 ? (
          upcomingDates.map((date) => (
            <UpcomingDate key={date.id} date={date} contactName={contactName} />
          ))
        ) : (
          <div>No dates yet</div>
        )}
      </div>
    </div>
  )
}

export default UpcomingDatesList
