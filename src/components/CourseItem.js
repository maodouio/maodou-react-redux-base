import React from 'react'
import Course from './Course'

const CourseItem = ({ course, handleClick }) => (
	<div>
		<Course 
			course={course}
		/>
		<button onClick={handleClick}>
			关注课程
		</button>
		<p />
	</div>
)

export default CourseItem