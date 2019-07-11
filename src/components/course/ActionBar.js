import React from 'react'
import { Link } from 'react-router-dom'
import styles from './course.module.scss'

export default ({ reloadPage }) => {
  return (
    <div className={styles.actionBarWrap}>
      <Link to="/" className={styles.item}>
        <span>首页</span>
      </Link>
      <div className={styles.item} onClick={() => reloadPage()}>
        <span>刷新</span>
      </div>
    </div>
  )
}
