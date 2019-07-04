import React, { Component } from 'react'
import Hls from 'hls.js'
import styles from './course.module.scss'

export default class LiveVideo extends Component {
  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }
  _playUrl(liveUrl, type) {
    return liveUrl.hls_sd
  }

  componentDidMount() {
    const { course } = this.props
    const video = this.videoRef.current
    this.hls = new Hls()
    const url = this._playUrl(course.liveUrl, course.type)
    this.hls.loadSource(url)
    this.hls.attachMedia(video)
    this.hls.on(Hls.Events.MANIFEST_PARSED, function() {
      video.play()
    })

    // video.setAttribute('x5-playsinline', 'true')
    video.setAttribute('x-webkit-airplay', 'allow')
    video.setAttribute('webkit-playsinline', 'true')
    video.setAttribute('x5-video-player-type', 'h5-page')
    video.setAttribute('x5-video-player-fullscreen', 'true')
    video.setAttribute('playsinline', 'true')
  }

  componentWillUnmount() {
    if (this.hls) {
      this.hls.detachMedia()
    }
  }

  render() {
    return (
      <div className={styles.wrap}>
        <video
          ref={this.videoRef}
          height="100%"
          autoPlay
          controls
          preload="auto"
        ></video>
      </div>
    )
  }
}