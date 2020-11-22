import React from 'react'

const ContactDetailsCategories = ({ setInfoType }) => {
  return (
    <section className="grid">
      <div className="categories">
        <button
          onClick={() => setInfoType('contact-details')}
          className="btn-category"
        >
          Contact details
        </button>
        <button
          onClick={() => setInfoType('personal-info')}
          className="btn-category"
        >
          Personal info
        </button>
      </div>
    </section>
  )
}

export default ContactDetailsCategories
