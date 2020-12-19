import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import ContactContext from '../../assets/context/contact/contactContext'
import ContactInfoDetails from '../ContactInfoDetails'
import PersonalInfoDetails from '../PersonalInfoDetails'
import ContactDetailsCategories from '../ContactDetailsCategories'
import editIcon from '../../assets/icons/edit.svg'

const ContactDetail = () => {
  const contactContext = useContext(ContactContext)
  const {
    contacts,
    deleteContact,
    setCurrent,
    getContactDetails,
  } = contactContext
  const [infoType, setInfoType] = useState('contact-details')
  let history = useHistory()
  const { contactId } = useParams()

  useEffect(() => {
    getContactDetails(contactId)
    // eslint-disable-next-line
  }, [])

  const onDelete = () => {
    deleteContact(_id)
    setTimeout(() => {
      history.push('/contacts')
    }, 1500)
  }

  console.log(contacts)
  const { firstName, lastName, image, _id } = contacts

  return (
    <div className="contact_details-header">
      <img className="contact_details-image" src={image} alt="" />
      <h3>
        {firstName} {lastName}
      </h3>
      <ContactDetailsCategories setInfoType={setInfoType} />
      <div className="contact_info-section">
        {infoType === 'contact-details' ? (
          <ContactInfoDetails contactInfos={contacts} />
        ) : (
          <PersonalInfoDetails contactInfos={contacts} />
        )}
      </div>
      <div className="button-container">
        <button className="contact-button-delete" onClick={onDelete}>
          Remove Contact
        </button>
        <Link className="button-add" to={`/dates/add-date/${_id}`}>
          Add new date
        </Link>
        <Link to={`/home/contacts/edit/${_id}`}>
          <button className="edit-icon" onClick={() => setCurrent(_id)}>
            <img src={editIcon} alt="" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ContactDetail
