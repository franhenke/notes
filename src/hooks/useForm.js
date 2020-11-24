import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function useForm(submitCallback) {
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    event.persist()
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
    console.log(inputs)
  }

  let history = useHistory()
  const handleSubmit = (event) => {
    event.preventDefault()
    submitCallback(inputs)

    setInputs('')
    setTimeout(() => {
      history.push('/home')
    }, 2000)
  }

  return [inputs, handleChange, handleSubmit]
}
