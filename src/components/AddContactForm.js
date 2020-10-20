import React from 'react'
import { addContactFormFields } from '../assets/mocks/fields'
import Input from './Input'

const AddContactForm = () => {
  return (
    <form className="form">
      {addContactFormFields.map((field) => (
        <Input
          key={field.name}
          type={field.type}
          name={field.name}
          id={field.id}
          text={field.text}
          // handleChange={handleChange}
          placeholder={field.placeholder}
          required={field.required}
        />
      ))}
      <button>Add contact</button>
    </form>
  )
}

export default AddContactForm
