import React, { Component } from 'react'
import PropTypes from 'prop-types'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import video_zhCN from 'video.js/dist/lang/zh-CN.json'

const Controls = {
  play: 'playToggle',
  volume: 'volumePanel',
  seekbar: 'progressControl',
  // currentTimer: 'currentTimeDisplay',
  // divider: 'timeDivider',
  // duration: 'durationDisplay',
  timer: 'remainingTimeDisplay',
  // live: 'liveDisplay',
  playbackrates: 'playbackRateMenuButton',
  fullscreen: 'fullscreenToggle',
  pictureinpicture: 'pictureInPictureToggle',
}

class VideoPlayer extends Component {
  constructor(props) {
    super(props)
    this.playerRef = React.createRef()
  }

  componentDidMount() {
    this.init_player(this.props)
    this.init_player_events(this.props)
  }

  init_player(props) {
    const videoNode = this.playerRef.current
    const playerOptions = this.generate_player_options(props)
    videojs.addLanguage('en', video_zhCN)
    this.player = videojs(videoNode, playerOptions)
    this.player.src(props.src)
    this.player.poster(props.poster)
    this.set_controls_visibility(this.player, props.hideControls)

    // videoNode.setAttribute('x5-playsinline', 'true')
    videoNode.setAttribute('x-webkit-airplay', 'allow')
    videoNode.setAttribute('webkit-playsinline', 'true')
    videoNode.setAttribute('x5-video-player-type', 'h5-page')
    videoNode.setAttribute('x5-video-player-fullscreen', 'true')
    videoNode.setAttribute('playsinline', 'true')
  }

  generate_player_options(props) {
    const playerOptions = {}
    playerOptions.controls = props.controls
    playerOptions.autoplay = props.autoplay
    playerOptions.preload = props.preload
    playerOptions.width = props.width
    playerOptions.height = props.height
    playerOptions.bigPlayButton = props.bigPlayButton
    const hidePlaybackRates =
      props.hidePlaybackRates || props.hideControls.includes('playbackrates')
    if (!hidePlaybackRates) playerOptions.playbackRates = props.playbackRates
    return playerOptions
  }

  set_controls_visibility(player, hidden_controls) {
    Object.keys(Controls).map(x => player.controlBar[Controls[x]].show())
    hidden_controls.map(x => player.controlBar[Controls[x]].hide())
  }

  init_player_events(props) {
    let currentTime = 0
    let previousTime = 0
    let position = 0

    this.player.ready(() => {
      props.onReady(this.player)
      window.player = this.player
    })
    this.player.on('play', () => {
      props.onPlay(this.player.currentTime())
    })
    this.player.on('pause', () => {
      props.onPause(this.player.currentTime())
    })
    this.player.on('timeupdate', e => {
      props.onTimeUpdate(this.player.currentTime())
      previousTime = currentTime
      currentTime = this.player.currentTime()
      if (previousTime < currentTime) {
        position = previousTime
        previousTime = currentTime
      }
    })
    this.player.on('seeking', () => {
      this.player.off('timeupdate', () => {})
      this.player.one('seeked', () => {})
      props.onSeeking(this.player.currentTime())
    })

    this.player.on('seeked', () => {
      let completeTime = Math.floor(this.player.currentTime())
      props.onSeeked(position, completeTime)
    })
    this.player.on('ended', () => {
      props.onEnd()
    })
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    const { bigPlayButtonCentered, className, fluid } = this.props
    return (
      <div data-vjs-player style={{ height: '100%' }}>
        <video
          className={`video-js ${
            bigPlayButtonCentered ? 'vjs-big-play-centered' : ''
          } ${className} ${fluid ? 'vjs-fluid' : ''} vjs-ehs`}
          ref={this.playerRef}
        />
      </div>
    )
  }
}

VideoPlayer.propTypes = {
  live: PropTypes.bool,
  type: PropTypes.string,
  src: PropTypes.string,
  poster: PropTypes.string,
  className: PropTypes.string,
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
  preload: PropTypes.oneOf(['auto', 'none', 'metadata']),
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  autoScale: PropTypes.bool,
  fluid: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  playbackRates: PropTypes.arrayOf(PropTypes.number),
  hidePlaybackRates: PropTypes.bool,
  hideControls: PropTypes.arrayOf(PropTypes.string),
  bigPlayButton: PropTypes.bool,
  bigPlayButtonCentered: PropTypes.bool,
  onReady: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onSeeking: PropTypes.func,
  onSeeked: PropTypes.func,
  onEnd: PropTypes.func,
}

VideoPlayer.defaultProps = {
  live: false,
  type: 'mp4', // mp4 flv hls
  src: null,
  poster: null,
  className: '',
  controls: true,
  autoplay: true,
  preload: 'auto',
  loop: false,
  muted: false,
  autoScale: true,
  width: 0,
  height: 0,
  fluid: true,
  playbackRates: [0.5, 1, 1.5, 2],
  hidePlaybackRates: false,
  hideControls: ['pictureinpicture'],
  bigPlayButton: true,
  bigPlayButtonCentered: true,
  onReady: () => {},
  onPlay: () => {},
  onPause: () => {},
  onTimeUpdate: () => {},
  onSeeking: () => {},
  onSeeked: () => {},
  onEnd: () => {},
}

export default VideoPlayer
