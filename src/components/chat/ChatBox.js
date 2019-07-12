import React, { Component } from 'react'
import styles from './chat.module.scss'
// import chatEmoji from '../../assets/chat-emoji.png'

export default class ChatBox extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.chatBoxRef = React.createRef()
  }
  handleInput = () => {
    const input = this.inputRef.current
    const value = input.value.trim()
    if (value.length <= 50) {
      this.props.handleSubmit(value)
      input.value = ''
    }
  }

  handleBlur(e) {
    // this.chatBoxRef.current.style.visibility = 'visible'
  }
  handleFocus(e) {
    this.chatBoxRef.current.style.visibility = 'hidden'
    setTimeout(() => {
      this.chatBoxRef.current.style.visibility = 'visible'
    }, 300)
  }

  openEmojiList() {}

  render() {
    return (
      <div className={styles.chatbox} ref={this.chatBoxRef}>
        <div className={styles.box}>
          {/* <img
            onClick={this.openEmojiList.bind(this)}
            className={styles.logo}
            src={chatEmoji}
            alt="chat"
          /> */}
          <textarea
            onBlur={this.handleBlur.bind(this)}
            onFocus={this.handleFocus.bind(this)}
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
