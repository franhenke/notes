import React, { useState, useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import { useHistory } from 'react-router-dom'
import { addContactFormFields } from '../assets/mocks/fields'
import Input from './Input'

const AddContactForm = () => {
  const [formData, setFormData] = useState({})
  const { contacts, addContact } = useContext(GlobalContext)
  let history = useHistory()

  const handleChange = (event) => {
    const formDataCopy = { ...formData }
    formDataCopy[event.target.name] = event.target.value
    setFormData(formDataCopy)
    console.log(formData)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addContact(formData)
    history.push('/')
    console.log(contacts)
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {addContactFormFields.map((field) => (
        <Input
          key={field.name}
          type={field.type}
          name={field.name}
          id={field.id}
          text={field.text}
          handleChange={handleChange}
          placeholder={field.placeholder}
          required={field.required}
        />
      ))}
      <button className="button-add-contact">Add contact</button>
    </form>
  )
}

export default AddContactForm
