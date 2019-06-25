import React from 'react'
import Course from './Course'

const CourseItem = ({ course, onDeleteButtionClicked }) => (
	<div>
		<Course 
			title={course.title} 
			members={course.members}
		/>
		<button onClick={onDeleteButtionClicked}>
			删除课程
		</button>
		<p />
	</div>
)

export default CourseItem