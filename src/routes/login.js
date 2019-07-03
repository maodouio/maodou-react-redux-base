import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/login'
import Wechat from '../pages/wechat'

export default () => {
  return (
    <Switch>
      <Route exact path="/base/login" component={Login} />
      <Route exact path="/base/wechat" component={Wechat} />
    </Switch>
  )
}
