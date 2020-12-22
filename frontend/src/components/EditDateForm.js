import React, { useState, useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import cancelIcon from '../assets/icons/cross.svg'

const EditDateForm = () => {
  const [editedDate, setEditedDate] = useState({
    id: null,
    date: '',
  })

  const { editDate } = useContext(GlobalContext)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setEditedDate({ ...editedDate, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    editDate(editedDate)
  }

  return (
    <div className="journal-form-wrapper">
      <button className="button-cancel">
        <img src={cancelIcon} alt="cancel" />
      </button>
      <h2>Edit journal entry</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={editedDate.date}
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}

export default EditDateForm
