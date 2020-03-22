import React, { Component } from 'react'
//import VideoPlayer from '../../packages/videoPlayer'
import styles from './course.module.scss'
import Reflv from './reflv'

export default class LiveVideo extends Component {
  render() {
    const { course } = this.props
    const live_flv_url = course.liveUrl.flv_sd

    return (
      <div className={styles.wrap}>
        {/* <VideoPlayer src={url} live={true} hidePlaybackRates={true} poster={''} /> */}
        {/* playlive {live_flv_url} */}
        <Reflv url={live_flv_url} type="flv" isLive cors />
      </div>
    )
  }
}
