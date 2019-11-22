import React from 'react'
import styles from './course.module.scss'

export default ({ course }) => {
  return (
    <div className={styles.headerWrap}>
      <div className={styles.title}>
        {course.name}
        <div className={styles.time}>
          开始时间：{course.startTime && course.startTime.split('T')[0]}
        </div>
      </div>
    </div>
  )
}
