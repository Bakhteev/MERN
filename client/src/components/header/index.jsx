import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {
  HeaderWrapper,
  HeaderButton,
  HeaderContainer,
  LogoText,
  Logo,
} from './style'
import {userLogOut} from '../actions/user.action'
const Header = ({ isAuth }) => {
  const dispatch = useDispatch()
  const logout = () =>{
    if(window.confirm("вы уверены что хотите выйти?")){
      dispatch(userLogOut())
    }
  }
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo>
          <svg
            width="63"
            height="34"
            viewBox="0 0 63 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="31.5" cy="17" rx="31.5" ry="17" fill="#566885" />
          </svg>
          <LogoText>MERN CLOUD</LogoText>
        </Logo>
        <div>
          {!isAuth ? (
            <>
              <HeaderButton>
                <Link to="/login">Войти</Link>
              </HeaderButton>
              <HeaderButton>
                <Link to="/registration">Регистрация</Link>
              </HeaderButton>
            </>
          ) : (
            <HeaderButton>
              <Link to="/logout">выход</Link>
            </HeaderButton>
          )}
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
