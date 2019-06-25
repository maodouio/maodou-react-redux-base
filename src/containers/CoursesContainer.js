import React from 'react'
import CoursesList from '../components/CoursesList'
import CourseItem from '../components/CourseItem'

const CoursesContainer = ({courses}) => (
	<CoursesList name='Maodou-Classes'>
		{courses.map(course => 
			<CourseItem
				key={course._id}
				course={course}
				onDeleteButtionClicked={() => console.log('[containers/CoursesContainer.js] Delete button clicked', course)}
			/>
		)}
	</CoursesList>
)

export default CoursesContainer