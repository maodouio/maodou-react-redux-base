import React from 'react'
import Course from './Course'

const CourseItem = ({ course, handleClick }) => (
	<div>
		<Course 
			title={course.title} 
			members={course.members}
		/>
		<button onClick={handleClick}>
			删除课程
		</button>
		<p />
	</div>
)

export default CourseItem