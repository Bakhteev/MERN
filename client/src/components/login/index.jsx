import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AuthBtn from '../authBtn'
import Input from '../input'
import { LoginForm, LoginTitle, LoginBody } from './style'
import { login } from '../actions/user.action'

const Login = () => {
  const dispatch = useDispatch()
  const [loginBody, setLoginBody] = useState({
    email: '',
    password: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(loginBody)
    dispatch(login(loginBody))
    setLoginBody({
      email: '',
      password: '',
    })
  }
  return (
    <LoginBody>
      <LoginForm action="" onSubmit={handleSubmit}>
        <LoginTitle>Авторизация</LoginTitle>
        <Input
          text="Введите адрес электронной почты..."
          name="email"
          type="text"
          value={loginBody.email}
          setValue={setLoginBody}
        />
        <Input
          text="Введите пароль..."
          name="password"
          type="password"
          value={loginBody.password}
          setValue={setLoginBody}
        />
        <AuthBtn text="Войти" />
      </LoginForm>
    </LoginBody>
  )
}

export default Login
