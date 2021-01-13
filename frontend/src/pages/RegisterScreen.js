import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../assets/context/auth/authContext'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'

const RegisterScreen = ({ location, history }) => {
  const authContext = useContext(AuthContext)
  const { register, error, userInfo } = authContext

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [userInfo, history, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      register(name, email, password)
    }
  }

  return (
    <FormContainer>
      <h1 className="login-intro">Create a new account</h1>
      {error && <h4>{error}</h4>}
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name (Username)</label>
        <input
          type="name"
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name">Email</label>
        <input
          type="email"
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter a password"
          value={password || ''}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          placeholder="Please confirm your password"
          value={confirmPassword || ''}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {message && <div>{message}</div>}
        <button className="button-add" type="sumit">
          Sign Up
        </button>
      </form>

      <div>
        <span className="login_registry">
          Already a User?
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </span>
      </div>
    </FormContainer>
  )
}

export default RegisterScreen
