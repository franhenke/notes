import React, { useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import { Link } from 'react-router-dom'
import * as ROUTES from './../assets/routes'
import Contact from './Contact'

const ContactList = () => {
  const { contacts } = useContext(GlobalContext)

  return (
    <div className="contacts-container">
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <div>No contacts, yet</div>
      )}
      <Link className="link-to-form" to={ROUTES.ADDCONTACT}>
        Add a new Contact
      </Link>

      <Link className="link-to-form" to={ROUTES.ADDDATE}>
        Add a new Date
      </Link>
    </div>
  )
}

export default ContactList
