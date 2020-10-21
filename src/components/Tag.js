import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

const Tag = ({ label, onDelete }) => {
  return (
    <div className="add-date-tag">
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  )
}

export default Tag
