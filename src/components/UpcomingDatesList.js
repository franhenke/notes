import React, { useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import UpcomingDate from './UpcomingDate'

const UpcomingDatesList = ({ sortedDates }) => {
  const { contacts } = useContext(GlobalContext)

  function contactName(date) {
    const contactRef = contacts.find((contact) => contact.id === date.contactId)
    return contactRef.firstName
  }

  function contactImage(date) {
    const contactRef = contacts.find((contact) => contact.id === date.contactId)
    return contactRef.image
  }

  return (
    <div className="grid ">
      <div className="dates-container">
        <h2>Upcoming Dates</h2>
        {sortedDates.length > 0 ? (
          sortedDates.map((date) => (
            <UpcomingDate
              key={date.id}
              date={date}
              contactName={contactName}
              contactImage={contactImage}
            />
          ))
        ) : (
          <div>No dates yet</div>
        )}
      </div>
    </div>
  )
}

export default UpcomingDatesList
