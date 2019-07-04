import React from 'react'
import styles from './course.module.scss'

export default ({ handleNavBar, currentTab }) => {
  const isChat = currentTab === 'chat'

  return (
    <div className={styles.barWrap}>
      <div
        className={isChat ? `${styles.active} ${styles.item}` : styles.item}
        onClick={() => handleNavBar('chat')}
      >
        <span>互动交流</span>
      </div>
      <div
        className={isChat ? styles.item : `${styles.active} ${styles.item}`}
        onClick={() => handleNavBar('info')}
      >
        <span>课程详情</span>
      </div>
    </div>
  )
}
