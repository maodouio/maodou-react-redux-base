import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import LoginLayout from './layouts/LoginLayout'
import NotFound from './pages/404/'

export default () => (
  <Router>
    <Switch>
      <Route exact path="/404" component={NotFound} />
      <Route path="/base" component={LoginLayout} />
      <Route path="/" component={MainLayout} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
