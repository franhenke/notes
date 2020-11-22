import React, { useState } from 'react'
import ContactInfoDetails from './ContactInfoDetails'
import PersonalInfoDetails from './PersonalInfoDetails'

export const ContactInfoToggler = () => {
  const [infoType, setInfoType] = useState('contact-details')
  return (
    <div className="contact_info-section">
      {infoType === 'contact-details' ? (
        <ContactInfoDetails />
      ) : (
        <PersonalInfoDetails />
      )}
    </div>
  )
}

export default ContactInfoToggler
