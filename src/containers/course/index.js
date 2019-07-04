import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ChatsContainer from './Chat'
import TopVideo from './TopVideo'
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
      <Fragment>
        <TopVideo />
        <ChatsContainer />
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchData, setCourseId }, dispatch)

export default connect(
  null,
  mapDispatchToProps,
)(CourseContainer)
