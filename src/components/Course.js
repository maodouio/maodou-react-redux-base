import React from 'react'

const Course = ({ course }) => (
	<div>
		课程名称：<a href={'/course/'+course._id}>{course.name}</a>
		<br />
		讲师：{course.author}
		<br />
		{ course.duration ? '时长：' + course.duration + '分钟' : ''}
	</div>
)

export default Course