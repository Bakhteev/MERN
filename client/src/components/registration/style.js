import styled from 'styled-components'

export const RegistrationBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 54px);
`

export const RegistrationTitle = styled.h1`
  margin-bottom: 45px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: #566885;
`
export const RegistrationForm = styled.form`
  width: 500px;
  height: 300px;
  padding: 23px 33px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  input {
    margin-bottom: 20px;
  }
`
