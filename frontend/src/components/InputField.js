import React from 'react'

const InputField = ({
  text,
  type,
  placeholder = text,
  handleChange,
  name,
  id = name,
  required = false,
}) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input
        required={required}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  )
}

export default InputField
