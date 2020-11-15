import React, { useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import SingleDate from './SingleDate'

const DateList = () => {
  const { contacts, dates, removeDate } = useContext(GlobalContext)

  function contactName(date) {
    const contactRef = contacts.find((contact) => contact.id === date.contactId)
    if (typeof contactRef != 'undefined') {
      return contactRef.firstName
    }
    if (typeof contactRef === 'undefined') {
      removeDate(date.id)
    }
  }

  return (
    <div className="grid">
      <div className="contacts-container">
        <h2>Your next dates</h2>
        {dates.length > 0 ? (
          dates.map((date) => (
            <>
              <SingleDate date={date} contactName={contactName} />
            </>
          ))
        ) : (
          <div>No dates yet</div>
        )}
      </div>
    </div>
  )
}

export default DateList
