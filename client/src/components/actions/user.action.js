import axios from 'axios'

export const registration = async (registerBody) => {
  try {
    const responce = await axios.post(
      'http://localhost:8080/api/auth/registration',
      { ...registerBody }
    )
    // alert(responce.data.message)
  } catch (error) {
    alert(error)
  }
}

export const login = async (body) => {
  try {
    const responce = await axios.post('http://localhost:8080/api/auth/login', {
      ...body,
    })
    alert(responce.data.message)
  } catch (error) {
    alert(error)
  }
}
