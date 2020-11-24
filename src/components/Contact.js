import React, { useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import { Link } from 'react-router-dom'
import plusIcon from '../assets/icons/plus-circle.svg'

const Contact = ({ contact }) => {
  const { removeContact, dates, removeDate } = useContext(GlobalContext)

  function handleRemoveDate(date) {
    removeDate(date.id)
  }

  async function handleDelete() {
    const relatedDate = dates.filter((date) => date.contactId === contact.id)
    try {
      removeContact(contact.id)
      relatedDate.forEach(handleRemoveDate)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Link to={`/home/contacts/${contact.id}`}>
        <div className="contact-item">
          {contact.image ? (
            <img src={contact.image} alt="" className="contact-photo" />
          ) : (
            <img src={plusIcon} alt="" className="contact-photo" />
          )}

          <h3>
            First Name:{' '}
            <span className="contact-info">{contact.firstName}</span>
          </h3>
          <h3>
            Last Name: <span className="contact-info">{contact.lastName}</span>
          </h3>

          <h3>
            Phone Number: <span className="contact-info">{contact.phone}</span>
          </h3>
          <h3>
            City: <span className="contact-info">{contact.city}</span>
          </h3>
          <h3>
            Birthday: <span className="contact-info">{contact.birthday}</span>
          </h3>
          <div className="button-container">
            <button
              className="contact-button-delete"
              onClick={() => handleDelete(contact.id)}
            >
              Remove Contact
            </button>
            {/* <Link
              className="button-add"
              to={`/home/dates/add-date/${contact.id}`}
            >
              Add new date
            </Link> */}
          </div>
        </div>
      </Link>
    </>
  )
}

export default Contact
