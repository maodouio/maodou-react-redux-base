import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../containers/HomeContainer'

import CourseContainer from '../containers/CourseContainer'
import TestContainer from '../containers/TestContainer'

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/course/:id" component={CourseContainer} />
      <Route exact path="/test" component={TestContainer} />
    </Switch>
  )
}
