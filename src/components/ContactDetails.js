import React, { useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import { Link, useParams } from 'react-router-dom'
import plusIcon from '../assets/icons/plus-circle.svg'
import editIcon from '../assets/icons/edit.svg'

const ContactDetails = () => {
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

  return (
    <div className="grid">
      <div className="contact_details-header">
        <img
          className="contact_details-image"
          src={selectedContact.image}
          alt=""
        />
        <h3>
          {selectedContact.firstName} {selectedContact.lastName}
        </h3>
        <section className="grid">
          <div className="categories">
            <button className="btn-category">Contact details</button>
            <button className="btn-category">Personal info</button>
          </div>
        </section>
        <div className="button-container">
          <button
            className="contact-button-delete"
            onClick={() => handleDelete(selectedContact.id)}
          >
            Remove Contact
          </button>
          <Link
            className="button-add"
            to={`/home/dates/add-date/${selectedContact.id}`}
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
    </div>
  )
}

export default ContactDetails