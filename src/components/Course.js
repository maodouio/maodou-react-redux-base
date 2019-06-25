import React from 'react'

const Course = ({ title, members }) => (
	<div>
		课程名称：{title}
		<br />
		成员人数：{members.length}
		<br />
		名单：{members.map((m, index) => m + (index === members.length - 1 ?  '' : ', ') )}
	</div>
)

export default Course