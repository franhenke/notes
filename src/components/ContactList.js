import React, { useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import { Link } from 'react-router-dom'
import Contact from './Contact'
import ContactPicker from './ContactPicker'

const ContactList = () => {
  const { contacts } = useContext(GlobalContext)

  return (
    <div className="contacts-container">
      {contacts.length > 0 ? (
        contacts.map((contact) => <Contact contact={contact} />)
      ) : (
        <div>No contacts, yet</div>
      )}
      <Link className="link-to-form" to="/add">
        Add a new Contact
      </Link>

      <Link className="link-to-form" to="/add-date">
        Add a new Date
      </Link>
    </div>
  )
}

export default ContactList
