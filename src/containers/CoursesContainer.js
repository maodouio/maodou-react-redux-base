// these imports is used in pure React App
import React from 'react'
import CoursesList from '../components/CoursesList'
import CourseItem from '../components/CourseItem'

// these imports is used in class CoursesContainer
// import getCourses from '../api/'
import { Component } from 'react'

import AddCourse from '../components/CourseNew'
import { connect } from 'react-redux'

import { addCourse, delCourse } from '../actions'

class CoursesContainer extends Component {
	constructor(props) {
		super(props)
		// this.state = {
		// 	courses: getCourses()
		// }
	}

	handleClick(course) {
		console.log('[handleClick()] delete course', course)

		// const newCourses = this.props.courses.filter(c => c._id !== course._id)
		// console.log('[handleClick()] newCourses', newCourses)
		// this.setState({
		// 	courses: newCourses
		// })

		this.props.dispatch(delCourse(course._id))
	}

	handleAddCourse = (title) => {
		this.props.dispatch(addCourse(title))
	}

	render() {
		console.log('this.state', this.state)
		console.log('this.props', this.props)
		const { courses } = this.props
		//const course = {"_id":"abc", "title":"Class 4", "members": ["4a", "4b"]}
		//course._id = new Date().toLocaleString()
		// <AddCourse handleClick={(e) => this.handleAddCourse(course, e)}/>
		return (
			<div>
				<CoursesList name='Maodou-Classes'>
					{courses.map(course =>
						<CourseItem
							key={course._id}
							course={course}
							handleClick={(e) => this.handleClick(course, e)}
						/>
					)}
				</CoursesList>
				<hr/>
				<AddCourse handleSubmit={this.handleAddCourse}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	console.log(state)
	return state
}

// const mapDispatchToProps = dispatch =>
// 	bindActionCreators()

export default connect(
	mapStateToProps,
	null
)(CoursesContainer)
