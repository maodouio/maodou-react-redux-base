import React from 'react'
import { Link } from 'react-router-dom'
// !文件名为index.module.scss 样式会加载不出
import styles from './not.module.scss'

export default () => (
  <div className={styles.wrap}>
    <p className={styles.text}>抱歉！此页面不存在。</p>
    <Link to="/" className={styles.link}>
      返回首页
    </Link>
  </div>
)
