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
        id: <span className="contact-info">{contact.id}</span>
      </h3>
      <h3>
        First Name: <span className="contact-info">{contact.firstName}</span>
      </h3>
      <h3>
        Last Name: <span className="contact-info">{contact.lastName}</span>
      </h3>

      <h3>
        Phone Number: <span className="contact-info">{contact.phone}</span>
      </h3>

      <Link to={`/edit/${contact.id}`}>
        <button onClick={() => editContact(contact.id)}>Edit Contact</button>
      </Link>
      <button onClick={() => removeContact(contact.id)}>Remove Contact</button>
    </div>
  )
}

export default Contact
