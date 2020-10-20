import React, { useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import { Link } from 'react-router-dom'
import plusIcon from '../assets/icons/plus-circle.svg'

const Contact = ({ contact }) => {
  const { removeContact, editContact } = useContext(GlobalContext)
  return (
    <div className="contact-item">
      {contact.image ? (
        <img src={contact.image} alt="" className="contact-photo" />
      ) : (
        <img src={plusIcon} alt="" className="contact-photo" />
      )}

      <h3>
        First Name: <span className="contact-info">{contact.firstName}</span>
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
        <Link to={`/edit/${contact.id}`}>
          <button
            className="contact-button-edit"
            onClick={() => editContact(contact.id)}
          >
            Edit Contact
          </button>
        </Link>
        <button
          className="contact-button-delete"
          onClick={() => removeContact(contact.id)}
        >
          Remove Contact
        </button>
      </div>
    </div>
  )
}

export default Contact
