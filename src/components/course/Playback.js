import React, { Component } from 'react'
import styles from './course.module.scss'
import VideoPlayer from '../../packages/videoPlayer'

export default class Playback extends Component {
  _playUrl(recordUrl, course) {
    if (course.state === 'PLAYBACK') return recordUrl.mp4

    const type = course.type
    if (type === 'liveVideo' || type === 'live') {
      return recordUrl.hls
    }
  }

  render() {
    const { course } = this.props
    const url = this._playUrl(course.recordUrl, course)

    console.log('url', url)
    return (
      <div className={styles.wrap}>
        {/* <VideoPlayer src={url} /> */}
        <video controls autoPlay name="media">
          <source src={url} type="video/mp4"></source>
        </video>
      </div>
    )
  }
}
