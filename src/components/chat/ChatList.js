import React, { Component } from 'react'
import styles from './chat.module.scss'
import { defaultAvatar } from '../../config'

export default class ChatBox extends Component {
  _avatar(url) {
    if (url.indexOf('img/profile.jpg') > -1) {
      url = defaultAvatar
    }
    return url
  }

  render() {
    const { chats } = this.props
    return (
      <ul className={styles.chatlist}>
        {chats.map(item => (
          <li key={item._id} className={styles.item}>
            <img
              className={styles.img}
              src={this._avatar(item.headimgurl)}
              alt="avatar"
            />
            <div className={styles.user}>
              <p className={styles.name}>{item.nickname}</p>
              <p className={styles.content}>{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}
