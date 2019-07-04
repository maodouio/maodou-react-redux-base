import React from 'react'
import { CourseStateNames } from '../../config/constants'
import styles from './course.module.scss'

export default ({ course, isEmpty }) => {
  if (isEmpty) {
    return <div className={styles.wrap}></div>
  }
  const state = CourseStateNames[course.state]
  return (
    <div className={styles.wrap}>
      <img className={styles.cover} src={course.cover} alt="course-cover" />
      <p className={styles.state}>{state}</p>
    </div>
  )
}
