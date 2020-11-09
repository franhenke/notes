import React, { useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'

const DateList = () => {
  const { contacts, dates } = useContext(GlobalContext)

  function contactName(date) {
    const contactRef = contacts.find((contact) => contact.id === date.contactId)
    return contactRef.firstName
  }

  return (
    <div className="contacts-container">
      <h2>Your next dates</h2>
      {dates.length > 0 ? (
        dates.map((date) => (
          <li className="date_item" key={date.id}>
            <h3>
              {date.date} with <span>{contactName(date).toUpperCase()}</span>
            </h3>
          </li>
        ))
      ) : (
        <div>No dates yet</div>
      )}
    </div>
  )
}

export default DateList
