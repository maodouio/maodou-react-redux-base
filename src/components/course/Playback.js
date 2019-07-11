import React, { Component } from 'react'
import styles from './course.module.scss'
import VideoPlayer from '../../packages/videoPlayer'

export default class Playback extends Component {
  _playUrl(recordUrl, type) {
    if (type === 'liveVideo' || type === 'live') {
      return recordUrl.hls
    }
    return recordUrl.mp4
  }

  render() {
    const { course } = this.props
    const url = this._playUrl(course.recordUrl, course.type)

    return (
      <div className={styles.wrap}>
        <VideoPlayer src={url} />
      </div>
    )
  }
}
