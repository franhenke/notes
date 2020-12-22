import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../constants/authConstants'
import { loadFromLocal, saveToLocal } from '../../services/localStorage'

const AuthState = ({ children }) => {
  const userInfoFromStorage = loadFromLocal('userInfo') || null

  const initialState = {
    userInfo: userInfoFromStorage,
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  }

  const [state, dispatch] = useReducer(
    authReducer,
    loadFromLocal('userInfo') || initialState
  )

  useEffect(() => {
    saveToLocal('userInfo', state)
  }, [])

  // // Function to load user. (Will check to see which user is logged in by hitting the auth endpoint to get the user data.)
  // const loadUser = async () => {
  //   // Loads token into global headers.
  //   setAuthToken(localStorage.token)

  //   try {
  //     const res = await axios.get('/api/auth')

  //     dispatch({
  //       type: USER_LOADED,
  //       payload: res.data,
  //     })
  //   } catch (err) {
  //     dispatch({ type: AUTH_ERROR })
  //   }
  // }

  // Function to register user. (Will sign the user up for the application and get a token for the user.)

  // Function to log in user. (Will log the user in for the application and get a token for the user.)
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
      const { data } = await axios.post(
        '/users/login',
        { email, password },
        config
      )

      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      })

      localStorage.setItem('userInfo', JSON.stringify(data))
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
        isAuthenticated: state.isAuthenticated,
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
