import React, { useContext } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../assets/context/GlobalState'
import EditDateForm from './EditDateForm'

const DateList = () => {
  const { contacts, dates } = useContext(GlobalContext)

  function contactName(date) {
    const contactRef = contacts.find((contact) => contact.id === date.contactId)
    if (typeof contactRef != 'undefined') {
      return contactRef.firstName
    }
  }

  return (
    <div className="contacts-container">
      <h2>Your next dates</h2>
      {dates.length > 0 ? (
        dates.map((date) => (
          <>
            <li className="date_item" key={date.date}>
              <h3>
                {date.date} with
                <span>{contactName(date)}</span>
              </h3>
            </li>
          </>
        ))
      ) : (
        <div>No dates yet</div>
      )}
    </div>
  )
}

export default DateList
