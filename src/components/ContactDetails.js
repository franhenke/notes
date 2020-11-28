import React, { useState, useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import { Link, useParams } from 'react-router-dom'
import editIcon from '../assets/icons/edit.svg'
import ContactInfoDetails from './ContactInfoDetails'
import PersonalInfoDetails from './PersonalInfoDetails'
import ContactDetailsCategories from './ContactDetailsCategories'

const ContactDetails = () => {
  const [infoType, setInfoType] = useState('contact-details')
  const {
    removeContact,
    editContact,
    contacts,
    dates,
    removeDate,
  } = useContext(GlobalContext)

  const { contactId } = useParams()
  const [selectedContact] = contacts.filter(
    (contact) => contactId === contact.id + ''
  )

  return (
    <div className="contact_details-header">
      <img
        className="contact_details-image"
        src={selectedContact.image}
        alt=""
      />
      <h3>
        {selectedContact.firstName} {selectedContact.lastName}
      </h3>
      <ContactDetailsCategories setInfoType={setInfoType} />
      <div className="contact_info-section">
        {infoType === 'contact-details' ? (
          <ContactInfoDetails contactInfos={selectedContact} />
        ) : (
          <PersonalInfoDetails contactInfos={selectedContact} />
        )}
      </div>
      <div className="button-container">
        <button
          className="contact-button-delete"
          onClick={() => handleDelete(selectedContact.id)}
        >
          Remove Contact
        </button>
        <Link
          className="button-add"
          to={`/dates/add-date/${selectedContact.id}`}
        >
          Add new date
        </Link>
        <Link to={`/home/contacts/edit/${selectedContact.id}`}>
          <button
            className="edit-icon"
            onClick={() => editContact(selectedContact.id)}
          >
            <img src={editIcon} alt="" />
          </button>
        </Link>
      </div>
    </div>
  )

  function handleRemoveDate(date) {
    removeDate(date.id)
  }

  async function handleDelete() {
    const relatedDate = dates.filter(
      (date) => date.contactId === selectedContact.id
    )
    try {
      removeContact(selectedContact.id)
      relatedDate.forEach(handleRemoveDate)
    } catch (err) {
      console.error(err)
    }
  }
}

export default ContactDetails
