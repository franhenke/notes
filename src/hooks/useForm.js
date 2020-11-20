import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

useForm.propTypes = {
  validate: PropTypes.object,
}

export default function useForm(submitCallback) {
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    event.persist()
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  }

  const Msg = () => (
    <div>
      <p>Date added</p>
    </div>
  )

  let history = useHistory()
  const handleSubmit = (event) => {
    event.preventDefault()
    submitCallback(inputs)

    toast(<Msg />, {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

    setInputs('')
    setTimeout(() => {
      history.push('/home')
    }, 2000)
  }

  return [inputs, handleChange, handleSubmit]
}
