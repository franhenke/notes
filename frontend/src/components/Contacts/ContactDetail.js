import React, { useState } from 'react'
import ContactInfoDetails from './ContactInfoDetails'
import PersonalInfoDetails from './PersonalInfoDetails'
import ContactDetailsCategories from './ContactDetailsCategories'

const ContactDetail = ({ contact, onDelete }) => {
  const [infoType, setInfoType] = useState('contact-details')

  const { firstName, lastName, image } = contact

  return (
    <div className="contact_details-header">
      <img className="contact_details-image" src={image} alt="" />
      <h3>
        {firstName} {lastName}
      </h3>
      <ContactDetailsCategories setInfoType={setInfoType} />
      <div className="contact_info-section">
        {infoType === 'contact-details' ? (
          <ContactInfoDetails contactInfos={contact} />
        ) : (
          <PersonalInfoDetails contactInfos={contact} />
        )}
      </div>
      <div className="button-container">
        <button className="contact-button-delete" onClick={onDelete}>
          Remove Contact
        </button>
      </div>
    </div>
  )
}

export default ContactDetail
