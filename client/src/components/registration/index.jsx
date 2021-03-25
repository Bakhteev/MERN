import React, { useState } from 'react'
import AuthBtn from '../authBtn'
import Input from '../input'
import { RegistrationForm, RegistrationTitle, RegistrationBody } from './style'
import { registration } from '../actions/user.action'

const Registration = () => {
  const [registerBody, setRegisterBody] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(registerBody)
    registration(registerBody)
    setRegisterBody({
      name: '',
      email: '',
      password: '',
    })
  }

  return (
    <RegistrationBody>
      <RegistrationForm action="" onSubmit={handleSubmit}>
        <RegistrationTitle>Регистрация</RegistrationTitle>
        <Input
          setValue={setRegisterBody}
          value={registerBody.name}
          text="Введите имя..."
          name="name"
        />
        <Input
          setValue={setRegisterBody}
          value={registerBody.email}
          text="Введите адрес электронной почты..."
          name="email"
        />
        <Input
          setValue={setRegisterBody}
          value={registerBody.password}
          text="Введите пароль..."
          type="password"
          name="password"
        />
        <AuthBtn text="Войти" />
      </RegistrationForm>
    </RegistrationBody>
  )
}

export default Registration
