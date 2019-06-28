import React, { Component } from 'react'

import fetchData from '../api/fetch'
import { bindActionCreators } from "redux"

import { actionShowCourse } from '../actions/course'
import { connect } from 'react-redux'

import Hls from 'hls.js'

class CourseContainer extends Component {
	componentDidMount() {
		const {
	      match: { params }
	    } = this.props;

	    const course_id = params.id;
		this.props.fetchData(actionShowCourse(course_id));

		var video = document.getElementById('maodou-live');
		if(Hls.isSupported()) {
			console.log('isSupported!')
			var hls = new Hls();
			hls.loadSource('https://hls.maodouapp.com/maodou/5d1339c3e6ac367ef8cb56f6@maodou_512k.m3u8');
			hls.attachMedia(video);
			hls.on(Hls.Events.MANIFEST_PARSED,function() {
				video.play();
			})
		}
	}

	render() {
		const { courseInfo } = this.props
		console.log('courseInfo', courseInfo)

		const c = courseInfo
		return (
			<div>
				<h3>{c.name}</h3>
				<img width='30px' alt={c.name} src={c.thumbnail} />
				<p>{c.author}</p>
				<p>{c.intro}</p>
				<p>{c.state}</p>
				{c.state === 'PLAYBACK' ?
						<div>
							<a href={c.recordUrl && c.recordUrl.mp4}>视频回放链接</a>
							<hr />
							<video src={c.recordUrl && c.recordUrl.mp4} width="100%" controls autoPlay>
							    Sorry, your browser doesn't support embedded videos.
							</video>
						</div>
					:
						<div>
							<video id='maodou-live'
								width="300" height="200"
								playsInline
								autoPlay controls preload="auto"
								x-webkit-airplay="true" x5-video-player-fullscreen="true" x5-video-player-typ="h5"
							>
							</video>
						</div>
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
	console.log('mapStateToProps', state)
	const { course } = state
	return course
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchData }, dispatch);


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CourseContainer)
