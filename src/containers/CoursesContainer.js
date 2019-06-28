// these imports is used in pure React App
import React from 'react'
import CoursesList from '../components/CoursesList'
import CourseItem from '../components/CourseItem'
import { Component } from 'react'

import AddCourse from '../components/CourseNew'
import { connect } from 'react-redux'

import { actionGetCourses } from '../actions/course'

import fetchData from '../api/fetch'
import { bindActionCreators } from "redux"

class CoursesContainer extends Component {
	componentDidMount() {
		this.props.fetchData(actionGetCourses());
	}

	handleClick(course) {
		console.log('[handleClick()] add to my favorite course', course)
	}

	handleAddCourse = (title) => {
	}

	render() {
		console.log('this.props', this.props)
		const { coursesArray } = this.props
		console.log('coursesArray', coursesArray)

		return (
			<div>
				<CoursesList name='Maodou-Classes'>
					{coursesArray && coursesArray.map(course =>
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
	console.log('mapStateToProps', state)
	const { course } = state
	return course
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchData }, dispatch);


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CoursesContainer)
