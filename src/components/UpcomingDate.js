import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { GlobalContext } from '../assets/context/GlobalState'
import editIcon from '../assets/icons/edit.svg'

const UpcomingDate = ({ date, contactName }) => {
  const { editDate, removeDate } = useContext(GlobalContext)
  const parsedDate = dayjs(date.date)

  return (
    <div>
      <li className="date_item">
        <h3>
          {parsedDate.format('DD/MM/YYYY')} with
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

export default UpcomingDate
