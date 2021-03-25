import React from 'react'
import { InputStyle } from './styles'

const Input = ({ text, type, value, setValue, name }) => {
  const setter = (e) => {
    const target = e.target.value
    setValue((prev) => {
      return { ...prev, [e.target.name]: target }
    })
  }


  return (
    <InputStyle
      name={name}
      onChange={(e) => setter(e)}
      value={value}
      type={type ? type : 'text'}
      placeholder={text}
    />
  )
}

export default Input
