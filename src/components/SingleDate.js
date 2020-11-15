import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../assets/context/GlobalState'
import editIcon from '../assets/icons/edit.svg'

const SingleDate = ({ date, contactName }) => {
  const { editDate, removeDate } = useContext(GlobalContext)
  return (
    <div>
      <li className="date_item" key={date.date}>
        <h3>
          {date.date} with
          <span>{contactName(date)}</span>
        </h3>
      </li>
      <div className="button-container">
        <button
          className="contact-button-delete"
          onClick={() => removeDate(date.id)}
        >
          Remove Date
        </button>
        <Link to={`/edit-date/${date.id}`}>
          <button className="edit-icon" onClick={() => editDate(date.id)}>
            <img src={editIcon} alt="" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SingleDate
