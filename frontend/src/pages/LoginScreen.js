import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../assets/context/auth/authContext'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'

const LoginScreen = ({ location, history }) => {
  const authContext = useContext(AuthContext)
  const { login, error, clearErrors, userInfo } = authContext

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      clearErrors()
      history.push(redirect)
    }
  }, [userInfo, history, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    login(email, password)
    clearErrors()
  }

  return (
    <FormContainer>
      <h1 className="login-intro">Sign In</h1>
      {error && <h4>{error}</h4>}
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password || ''}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button-auth" type="sumit">
          Login
        </button>
      </form>

      <div>
        <span className="login_registry">
          Not registered, yet?
          <Link to={'/register'}>Click here</Link>
        </span>
      </div>
    </FormContainer>
  )
}

export default LoginScreen
