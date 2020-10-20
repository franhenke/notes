import React, { useContext } from 'react'
import Contact from './Contact'
import { GlobalContext } from '../assets/context/GlobalState'

const ContactList = () => {
  const { contacts } = useContext(GlobalContext)

  return (
    <div className="contacts-container">
      {contacts.length > 0 ? (
        contacts.map((contact) => <Contact contact={contact} />)
      ) : (
        <div>No contacts, yet</div>
      )}
    </div>
  )
}

export default ContactList
