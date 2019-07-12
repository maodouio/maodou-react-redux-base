import React from 'react'
import { formatTime } from 'utils/'
import styles from './course.module.scss'

function courseTime(course) {
  let date = course.realStartAt || course.startTime
  return formatTime(new Date(date), true)
}

export default ({ course }) => {
  if (!course._id) {
    return <div className={styles.empty}>加载中</div>
  }

  return (
    <div className={styles.detailWrap}>
      <div>
        <div className={styles.user}>
          <img className={styles.avatar} src={course.authorCover} alt={course.author} />
          <p>{course.author}</p>
        </div>
        <div>主讲简介：{course.authorAbout}</div>
        <div className={styles.divider} />
        <div className={styles.title}>课程介绍</div>
        <div className={styles.time}>开始时间：{courseTime(course)}</div>
        <div className={styles.intro} dangerouslySetInnerHTML={{ __html: course.intro }} />

        {course.xcxQrcode && (
          <div className={styles.footer}>
            <div>长按在小程序里打开</div>
            <img className={styles.qrcode} src={course.xcxQrcode} alt="qrcode" />
          </div>
        )}
      </div>
    </div>
  )
}
