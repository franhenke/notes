import React, { useContext } from 'react'
import dayjs from 'dayjs'
import { GlobalContext } from '../assets/context/GlobalState'
import relativeTime from 'dayjs/plugin/relativeTime'
import UpcomingDate from './UpcomingDate'

const UpcomingDatesList = ({ upcomingDates }) => {
  const { contacts, dates } = useContext(GlobalContext)

  dayjs.extend(relativeTime)

  function contactName(date) {
    const contactRef = contacts.find((contact) => contact.id === date.contactId)
    if (typeof contactRef != 'undefined') {
      return contactRef.firstName
    } else return null
  }

  return (
    <div className="grid ">
      <div className="dates-container">
        <h2>Your next dates</h2>
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
