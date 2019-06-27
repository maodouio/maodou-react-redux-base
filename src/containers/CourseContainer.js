import React, { Component } from 'react'

import fetchData from '../api/fetch'
import { bindActionCreators } from "redux"

import { actionShowCourse } from '../actions/course'
import { connect } from 'react-redux'

class CourseContainer extends Component {
	componentDidMount() {
		const {
	      match: { params }
	    } = this.props;

	    const course_id = params.id;
		this.props.fetchData(actionShowCourse(course_id));
	}

	render() {
		const { courseInfo } = this.props
		console.log('courseInfo', courseInfo)

		const c = courseInfo
		return (
			<div>
				<h3>{c.name}</h3>
				<img width='30px' alt={c.name} src={c.thumbnail} />
				<p>{c.author}</p>
				<p>{c.intro}</p>
				<a href={c.recordUrl && c.recordUrl.mp4}>视频回放链接</a>
				<hr />
				<video src={c.recordUrl && c.recordUrl.mp4} width="100%" controls autoPlay>
				    Sorry, your browser doesn't support embedded videos.
				</video>
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
)(CourseContainer)
