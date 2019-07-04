import React from 'react'
import { Link } from 'react-router-dom'
import { genTimeStr } from '../../utils'
import styles from './item.module.scss'

function optState(state) {
  switch (state) {
    case 'READY':
      return '未开始'
    case 'PLAYBACK':
      return '回放中'
    case 'LIVE':
      return '进行中'
    default:
      return '未开始'
  }
}

const CourseItem = ({ course }) => (
  <Link to={'/course/' + course._id} className={styles.itemWrap}>
    <img alt={course.name} src={course.thumbnail} className={styles.img} />
    <div className={styles.content}>
      <div className={styles.title}>{course.name}</div>
      <div>{course.author}</div>
      <div>直播{optState(course.state)}</div>
      <div>{course.duration ? '时长：' + genTimeStr(course.duration) : ''}</div>
    </div>
  </Link>
)

export default CourseItem
