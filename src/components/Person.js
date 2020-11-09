import React, { useState, useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import { Link } from 'react-router-dom'
import plusIcon from '../assets/icons/plus-circle.svg'

const Person = ({ person, toggleDate, setDate, addDate, removeDate }) => {
  const [newValue, setNewValue] = useState('')
  const { removeContact, editContact } = useContext(GlobalContext)

  return (
    <div className="contact-item">
      {person.image ? (
        <img src={person.image} alt="" className="contact-photo" />
      ) : (
        <img src={plusIcon} alt="" className="contact-photo" />
      )}

      <h3>
        First Name: <span className="contact-info">{person.firstName}</span>
      </h3>
      <h3>
        Last Name: <span className="contact-info">{person.lastName}</span>
      </h3>

      <h3>
        Phone Number: <span className="contact-info">{person.phone}</span>
      </h3>
      <h3>
        City: <span className="contact-info">{person.city}</span>
      </h3>
      <h3>
        Birthday: <span className="contact-info">{person.birthday}</span>
      </h3>
      <ul>
        {person.dates.map((date, index) => (
          <li key={index}>
            <button onClick={() => removeDate(index)}>delete</button>
            <input
              value={date.date}
              onChange={(event) => setDate(index, event.target.value)}
            />
            <input
              type="checkbox"
              checked={date.archived}
              onChange={() => toggleDate(index)}
            />
          </li>
        ))}

        <li>
          <button
            onClick={() => {
              addDate(newValue)
              setNewValue('')
            }}
          >
            add
          </button>
          <input
            type="date"
            value={newValue}
            onChange={(event) => setNewValue(event.target.value)}
          />
        </li>
      </ul>

      <div className="button-container">
        <Link to={`/edit/${person.id}`}>
          <button
            className="contact-button-edit"
            onClick={() => editContact(person.id)}
          >
            Edit Contact
          </button>
        </Link>
        <Link to={`/add-date/${person.id}`}>Add a date</Link>
        <button
          className="contact-button-delete"
          onClick={() => removeContact(person.id)}
        >
          Remove Contact
        </button>
      </div>
    </div>
  )
}

export default Person
