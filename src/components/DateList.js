import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../assets/context/GlobalState'
import editIcon from '../assets/icons/edit.svg'

const DateList = () => {
  const { contacts, dates, editDate, removeDate } = useContext(GlobalContext)

  function contactName(date) {
    const contactRef = contacts.find((contact) => contact.id === date.contactId)
    if (typeof contactRef != 'undefined') {
      return contactRef.firstName
    } else return null
  }

  return (
    <div className="grid">
      <div className="contacts-container">
        <h2>Your next dates</h2>
        {dates.length > 0 ? (
          dates.map((date) => (
            <>
              <li className="date_item" key={date.id}>
                <h3>
                  {date.date} with
                  <span>{contactName(date)}</span>
                </h3>
              </li>
              <div className="button-container">
                <button
                  className="contact-button-delete"
                  onClick={() => removeDate(date.id)}
                >
                  Remove Date
                </button>
                <Link to={`/edit-date/${date.id}`}>
                  <button
                    className="edit-icon"
                    onClick={() => editDate(date.id)}
                  >
                    <img src={editIcon} alt="" />
                  </button>
                </Link>
              </div>
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
