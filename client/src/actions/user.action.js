import axios from 'axios'

export const SET_USER = 'SET_USER'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
})

export const userLogOut = (payload) => ({
  type: USER_LOGOUT,
  payload,
})

export const registration = async (registerBody) => {
  try {
    const responce = await axios.post(
      'http://localhost:8080/api/auth/registration',
      { ...registerBody }
    )
    alert(responce.data.message)
  } catch (error) {
    alert(error)
  }
}

export const login = (body) => {
  return async (dispatch) => {
    try {
      const responce = await axios.post(
        'http://localhost:8080/api/auth/login',
        {
          ...body,
        }
      )
      dispatch(userLogin(responce.data.user))
      localStorage.setItem('token', responce.data.token)
      // alert(responce.data.message)
      // console.log(responce.data)
    } catch (error) {
      alert(error)
    }
  }
}

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8080/api/auth/auth', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      dispatch(userLogin(response.data.user))
      console.log(response.data)
    } catch (error) {
      localStorage.removeItem('token')
      alert(error, 'здесь')
    }
  }
}

