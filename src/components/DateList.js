import React, { useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import SingleDateItem from './SingleDateItem'

const DateList = () => {
  const { contacts, dates } = useContext(GlobalContext)

  function contactName(date) {
    const contactRef = contacts.find((contact) => contact.id === date.contactId)
    if (typeof contactRef != 'undefined') {
      return contactRef.firstName
    } else return null
  }

  dates.sort(function compare(a, b) {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateA - dateB
  })

  // const sortedDates = dates
  //   .slice()
  //   .sort((a, b) => b.date.format('YYYY/MM/DD') - a.date.format('YYYY/MM/DD'))
  // console.log(sortedDates)

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
