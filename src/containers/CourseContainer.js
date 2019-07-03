import React, { Component } from 'react'
import Hls from 'hls.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ChatsContainer from './ChatsContainer'
import fetchData from '../actions/fetchData'
import { actionShowCourse } from '../actions/course'
import { actionAddChat } from '../actions/chat'

class CourseContainer extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props
    const course_id = params.id
    this.props.fetchData(actionShowCourse(course_id))
  }

  render() {
    const { courseInfo } = this.props
    console.log('courseInfo', courseInfo)

    this.props.fetchData(
      actionAddChat(courseInfo._id, 'guest', courseInfo.commentCount + 1),
    )

    const c = courseInfo

    var video = document.getElementById('maodou-live')
    if (Hls.isSupported()) {
      console.log('isSupported!')
      var hls = new Hls()
      var url
      if (c.state === 'PLAYBACK') {
        url = c.recordUrl && c.recordUrl.hls
        console.log('PLAYBACK HLS URL is :', url)
      } else if (c.state === 'LIVE') {
        url = c.recordUrl && c.liveUrl.hls_sd
        console.log('LIVE HLS URL is :', url)
      }

      if (url) {
        hls.loadSource(url)
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
          video.play()
        })
      }
    }
    return (
      <div>
        <div>
          <video
            id="maodou-live"
            width="300"
            height="200"
            playsInline
            autoPlay
            controls
            preload="auto"
            x-webkit-airplay="true"
            x5-video-player-fullscreen="true"
            x5-video-player-typ="h5"
          ></video>
        </div>

        {c._id ? (
          <div>
            <ChatsContainer course_id={c._id} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('[CourseContainer] mapStateToProps', state)
  const { course } = state
  return course
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchData }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseContainer)
