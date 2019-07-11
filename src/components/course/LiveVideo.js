import React, { Component } from 'react'
import VideoPlayer from '../../packages/videoPlayer'
import styles from './course.module.scss'

export default class LiveVideo extends Component {
  render() {
    const { course } = this.props
    const url = course.liveUrl.hls_sd

    return (
      <div className={styles.wrap}>
        <VideoPlayer src={url} live={true} hidePlaybackRates={true} poster={''} />
      </div>
    )
  }
}
