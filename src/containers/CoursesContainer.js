// these imports is used in pure React App
import React from 'react'
import CoursesList from '../components/CoursesList'
import CourseItem from '../components/CourseItem'

// these imports is used in class CoursesContainer
import getCourses from '../api/'
import { Component } from 'react'

class CoursesContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			courses: getCourses()
		}
	}

	handleClick(course) {
		console.log('[handleClick()] delete course', course)

		const newCourses = this.state.courses.filter(c => c._id !== course._id)
		console.log('[handleClick()] newCourses', newCourses)
		this.setState({
			courses: newCourses
		})
	}

	render() {
		const { courses } = this.state
		return (
			<CoursesList name='Maodou-Classes'>
				{courses.map(course =>
					<CourseItem
						key={course._id}
						course={course}
						handleClick={(e) => this.handleClick(course, e)}
					/>
				)}
			</CoursesList>
		)
	}
}

export default CoursesContainer
