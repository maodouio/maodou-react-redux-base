import React, { Component } from 'react'
import Hls from 'hls.js'
import styles from './course.module.scss'

export default class Playback extends Component {
  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }

  _playUrl(recordUrl, type) {
    if (type === 'liveVideo' || type === 'live') {
      return recordUrl.hls
    }
    return recordUrl.mp4
  }

  // 上传音视频
  _isUpload(type) {
    return type === 'video' || type === 'audio'
  }

  componentDidMount() {
    const { course } = this.props
    const video = this.videoRef.current
    if (this._isUpload(course.type)) {
      video.src = this._playUrl(course.recordUrl, course.type)
      video.addEventListener('loadedmetadata', function() {
        video.play()
      })
    } else {
      this.hls = new Hls()
      const url = this._playUrl(course.recordUrl, course.type)
      this.hls.loadSource(url)
      this.hls.attachMedia(video)
      this.hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play()
      })
    }

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
