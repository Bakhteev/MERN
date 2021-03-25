import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Login from './components/login'
import Registration from './components/registration'
import { AppGlobalStyles } from './app.styles'

const App = () => (
  <div>
    <AppGlobalStyles />
    <Header />
    <Switch>
      <Route exact path="/" render={()=> <h1>Максидинахуй</h1>}/>
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
    </Switch>
  </div>
)

export default App
