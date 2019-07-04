import React, { Component } from 'react'
import { connect } from 'react-redux'

class Top extends Component {
  state = {
    courseId: '',
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.courseId !== prevState.courseId) {
      return {
        courseId: nextProps.courseId,
      }
    }
  }

  render() {
    return <div></div>
  }
}

const mapStateToProps = state => {
  const { course } = state
  return { course: course.courseInfo, courseId: course.currentCourseId }
}

export default connect(
  mapStateToProps,
  null,
)(Top)
