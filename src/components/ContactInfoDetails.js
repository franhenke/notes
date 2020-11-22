import React from 'react'

export const ContactInfoDetails = ({ contactInfos }) => {
  const { email, phone } = contactInfos

  return (
    <div className="grid">
      <section className="contact-info">
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
