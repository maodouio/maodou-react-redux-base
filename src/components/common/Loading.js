import React from 'react'
import styles from './base.module.scss'

const Loading = ({ text }) => <div className={styles.loading}>{text}</div>

Loading.defaultProps = {
  text: '加载中...',
}

export default Loading
