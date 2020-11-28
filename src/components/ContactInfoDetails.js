import React from 'react'

export const ContactInfoDetails = ({ contactInfos }) => {
  const { email, phone } = contactInfos

  return (
    <div>
      <section className="contact-details-info">
        <h3>
          Phone: <span>{phone}</span>
        </h3>
        <h3>
          Email: <span>{email}</span>
        </h3>
      </section>
    </div>
  )
}

export default ContactInfoDetails
