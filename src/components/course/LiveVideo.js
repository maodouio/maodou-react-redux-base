import React, { Component } from 'react'
import VideoPlayer from '../../packages/videoPlayer'
import styles from './course.module.scss'

export default class LiveVideo extends Component {
  render() {
    const { course } = this.props
    console.log('Live course', course)
    // const url = course.liveUrl.hls_sd
    const url = course.liveUrl.hls_ld

    console.log('Live url', url)
    return (
      <div className={styles.wrap}>
        <VideoPlayer src={url} live={true} hidePlaybackRates={true} poster={''} />
      </div>
    )
  }
}
