import React, { useState, useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import { useHistory } from 'react-router-dom'
import { addContactFormFields } from '../assets/mocks/fields'
import InputField from './InputField'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

const AddContactForm = () => {
  const [formData, setFormData] = useState({})
  const { contacts, addContact } = useContext(GlobalContext)
  const [image, setImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  let history = useHistory()

  const handleChange = (event) => {
    const formDataCopy = { ...formData }
    formDataCopy[event.target.name] = event.target.value
    setFormData(formDataCopy)
    console.log(formData)
  }

  async function uploadImage(event) {
    const newFormDataCopy = { ...formData }
    newFormDataCopy[event.target.name] = event.target.value
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', PRESET)
    setIsLoading(true)

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`,
      { method: 'POST', body: data }
    )
    const image = await response.json()
    setImage(image.secure_url)
    setIsLoading(false)
    formData.image = image.secure_url
    setFormData({ ...formData, [formData.image]: image })
    console.log(formData)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addContact(formData)
    setImage(formData)
    history.push('/')
    console.log(contacts)
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2 className="form-header">Add a new contact</h2>
      {addContactFormFields.map((field) => (
        <InputField
          key={field.id}
          type={field.type}
          name={field.name}
          id={field.id}
          text={field.text}
          handleChange={handleChange}
          placeholder={field.placeholder}
          required={field.required}
        />
      ))}
      <>
        <label>Photo</label>
        <div>
          {image ? (
            <img src={image} alt="profile" className="form-image-preview" />
          ) : (
            <input
              type="file"
              onChange={uploadImage}
              name="image"
              value={contacts.image}
            />
          )}
        </div>
        {isLoading && <p>image is loading...</p>}
      </>
      <button className="button-add-contact">Add contact</button>
    </form>
  )
}

export default AddContactForm
