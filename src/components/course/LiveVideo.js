import React, { Component } from 'react'
import VideoPlayer from '../../packages/videoPlayer'
import styles from './course.module.scss'

export default class LiveVideo extends Component {
  render() {
    const { course } = this.props
    const url = course.liveUrl
    return (
      <div className={styles.wrap}>
        <VideoPlayer src={url} live={true} />
      </div>
    )
  }
}
