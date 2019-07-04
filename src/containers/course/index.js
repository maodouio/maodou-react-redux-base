import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ChatsContainer from './Chat'
import Top from './Top'
import fetchData from '../../actions/fetchData'
import { actionShowCourse, setCourseId } from '../../actions/course'

class CourseContainer extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props
    const courseId = params.id
    this.props.setCourseId(courseId)
    this.props.fetchData(actionShowCourse(courseId))
  }

  componentWillUnmount() {
    this.props.setCourseId('')
  }

  render() {
    return (
      <div>
        <Top />
        <ChatsContainer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchData, setCourseId }, dispatch)

export default connect(
  null,
  mapDispatchToProps,
)(CourseContainer)
