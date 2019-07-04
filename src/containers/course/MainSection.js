import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CourseStates } from '../../config/constants'
import Ready from '../../components/course/Ready'
import Playback from '../../components/course/Playback'
import LiveVideo from '../../components/course/LiveVideo'

class MainSection extends Component {
  state = {
    course: {},
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.course !== prevState.course) {
  //     return {
  //       course: nextProps.course,
  //     }
  //   }
  //   return null
  // }

  render() {
    const { course } = this.props
    switch (course.state) {
      case CourseStates.READY:
      case CourseStates.PAUSED:
        return <Ready course={course} />
      case CourseStates.LIVE:
        return <LiveVideo course={course} />
      case CourseStates.PLAYBACK:
        return <Playback course={course} />
      default:
        return <Ready course={course} isEmpty={true} />
    }
  }
}

// const mapStateToProps = state => {
//   const { course } = state
//   return { course: course.courseInfo }
// }

export default connect(
  null,
  null,
)(MainSection)
