import React, { useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'

import SingleDateItem from './SingleDateItem'

const DateList = () => {
  const { contacts, dates } = useContext(GlobalContext)

  dates.sort(function compare(a, b) {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateA - dateB
  })

  function contactName(date) {
    const contactRef = contacts.find((contact) => contact.id === date.id)
    if (typeof contactRef != 'undefined') {
      return contactRef.firstName
    } else return null
  }

  return (
    <div className="grid ">
      <div className="dates-container">
        <h2>Your next dates</h2>
        {dates.length > 0 ? (
          dates.map((date) => (
            <SingleDateItem
              key={date.id}
              date={date}
              contactName={contactName}
            />
          ))
        ) : (
          <div>No dates yet</div>
        )}
      </div>
    </div>
  )
}

export default DateList
