import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../constants/authConstants'
import { loadFromLocal, saveToLocal } from '../../services/localStorage'

const AuthState = ({ children }) => {
  const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

  const initialState = {
    userInfo: userInfoFromStorage,
    loading: true,
    error: null,
  }

  const [state, dispatch] = useReducer(
    authReducer,
    loadFromLocal('userInfo') || initialState
  )

  useEffect(() => {
    saveToLocal('userInfo', state)
  }, [state])

  const login = async (email, password) => {
    try {
      dispatch({
        type: LOGIN_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post('/users/login', { email, password }, config)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })

      localStorage.setItem('userInfo', JSON.stringify(res.data))
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  // Function to log out user. (Will destroy the user's token & clear any logged in user)
  const logout = () => {
    dispatch({ type: LOGOUT })
  }

  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS })
  }

  return (
    <AuthContext.Provider
      value={{
        userInfo: state.userInfo,
        loading: state.loading,
        user: state.user,
        error: state.error,
        login,
        logout,
        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
