import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from 'pages/home'
import Course from 'pages/course'
import Test from 'pages/test'

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/course/:id" component={Course} />
      <Route exact path="/course/description/:id" component={Course} />
      <Route exact path="/test" component={Test} />
      <Redirect to="/404" />
    </Switch>
  )
}
