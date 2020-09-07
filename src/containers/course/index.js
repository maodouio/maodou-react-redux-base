import React, { Component, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Helmet from 'components/Helmet'
import Loading from 'components/common/Loading'
import Navbar from '../../components/course/Navbar'
import ActionBar from '../../components/course/ActionBar'
import Detail from '../../components/course/Detail'
import VideoHeader from '../../components/course/VideoHeader'
import fetchData from '../../actions/fetchData'
import { actionShowCourse, setCourseId } from '../../actions/course'

import styles from './courseLayout.module.scss'

const ChatsContainer = lazy(() => import('./Chat'))
const MainSection = lazy(() => import('./MainSection'))

class CourseContainer extends Component {
  state = {
    currentTab: 'chat',
  }

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

  handleNavBar(value) {
    this.setState({ currentTab: value })
  }

  handleReload() {
    window.location.reload()
  }

  render() {
    const { currentTab } = this.state
    const { course } = this.props

    return (
      <div className={styles.layoutWrap}>
        <Helmet title={course.name || '加载中'} />
        <div className={styles.leftWrap}>
          {/*
          <VideoHeader course={course}></VideoHeader>
          */}
          <Suspense fallback={<Loading />}>
            <MainSection course={course} />
          </Suspense>
        </div>
        {/*
        <div className={styles.rightWrap}>
          <Navbar currentTab={currentTab} handleNavBar={this.handleNavBar.bind(this)} />
          <Suspense fallback={<Loading />}>
            {currentTab === 'chat' ? <ChatsContainer /> : null}
          </Suspense>
          {currentTab === 'info' ? <Detail course={course} /> : null}
        </div>
        <ActionBar reloadPage={this.handleReload.bind(this)} />
        */}
      </div>
    )
  }
}

// const styles = {
//   wrap: {
//     height: '100vh',
//     overflow: 'hidden',
//     display: 'flex',
//     flexFlow: 'column nowrap',
//   },
// }

const mapStateToProps = state => {
  const { course } = state
  return { course: course.courseInfo }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchData, setCourseId }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer)
