import React, { Component } from 'react'
import Routes from '../routes'
import styles from './main.module.scss'
export default class MainLayout extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        MainLayout
        <Routes />
      </div>
    )
  }
}
