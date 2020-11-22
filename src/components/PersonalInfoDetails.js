import React from 'react'

const PersonalInfoDetails = ({ contactInfos }) => {
  const { addressLine, postalCode, city, birthday } = contactInfos

  return (
    <div className="grid">
      <section className="contact-info">
        <h3>
          Address: <span>{addressLine}</span>
        </h3>
        <h3>
          Postal Code:{' '}
          <span>
            {postalCode}, {city}
          </span>
        </h3>
        <h3>
          Birthday: <span>{birthday}</span>
        </h3>
      </section>
    </div>
  )
}

export default PersonalInfoDetails
