import React, { Component } from 'react'
import styles from './chat.module.scss'

export default class ChatBox extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  handleInput = () => {
    const input = this.inputRef.current
    const value = input.value.trim()
    if (value.length <= 50) {
      this.props.handleSubmit(value)
    }
  }

  render() {
    return (
      <div className={styles.chatbox}>
        <div className={styles.box}>
          <textarea
            placeholder="说点什么吧"
            ref={this.inputRef}
            className={styles.area}
          ></textarea>
          <div onClick={this.handleInput} className={styles.btn}>
            <span>发送</span>
          </div>
        </div>
        <div className={styles.action}></div>
      </div>
    )
  }
}
