import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../containers/HomeContainer'
//import Course from '../components/Course'
import CourseContainer from '../containers/CourseContainer'

export default () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/course/:id" component={CourseContainer} />
		</Switch>
	)
}
