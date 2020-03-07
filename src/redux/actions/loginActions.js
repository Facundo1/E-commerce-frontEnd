import {
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_PENDING,
    IS_AUTH
} from './types'

export const loginAccount = data => {
    return dispatch => {
      dispatch({
        type: LOGIN_USER_PENDING
      })
      const options = {
        timeout: 25000,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: document.getElementById('inputName').value,
          password: document.getElementById('inputPassword').value
        })
      }
  
      return fetch('http://localhost:5000/api/user/signIn', options)
        .then(res => res.json())
        .then(res => {
          if (res.msg !== 'Invalid Email or password') {
            console.log(res);
  
            return dispatch({
              type: LOGIN_USER_SUCCESS,
              payload: res
            })
          } else {
            return dispatch({
              type: LOGIN_USER_ERROR,
              payload: res.error
            })
          }
        })
    }
  }