import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Debug from 'debug'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CourseItem from '../../components/common/CourseItem'
import fetchData from '../../actions/fetchData'
import { actionGetCourses } from '../../actions/course'

const debug = Debug('maodou:home')

class CoursesContainer extends Component {
  static propTypes = {
    coursesArray: PropTypes.array,
  }

  componentDidMount() {
    debug('[start fetching courses]')
    this.props.fetchData(actionGetCourses())
  }

  render() {
    const { coursesArray } = this.props
    return (
      <div>
        {coursesArray.map(course => (
          <CourseItem key={course._id} course={course} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { course } = state
  debug('[map course state to props]', course)
  return course
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchData }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoursesContainer)
