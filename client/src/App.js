import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Login from './components/login'
import Registration from './components/registration'
import { AppGlobalStyles } from './app.styles'
import { useSelector } from 'react-redux'

const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth)
  return (
    <>
      <AppGlobalStyles />
      <Header isAuth={isAuth} />
      <Route exact path="/" render={() => <h1>Максидинахуй</h1>} />
      {!isAuth && (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>
      )}
    </>
  )
}

export default App
