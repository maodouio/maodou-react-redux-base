import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import fetchData from '../../actions/fetchData'
import { actionGetChats } from '../../actions/chat'
import { actionAddChat } from '../../actions/chat'

class TestContainer extends Component {
  componentDidMount() {
    console.log('this.props', this.props)
    const course_id = this.props && this.props.course_id
    console.log('course_id', course_id)
    this.props.fetchData(actionGetChats(course_id))
  }

  componentWillMount() {
    const course_id = this.props && this.props.course_id
    setInterval(() => {
      this.props.fetchData(actionGetChats(course_id))
    }, 5000)
  }

  componentWillReceiveProps(props) {
    const { addChatStatus } = props
    console.log('[componentWillReceiveProps] addChatStatus', addChatStatus)

    const course_id = this.props && this.props.course_id
    console.log('course_id', course_id)

    if (this.props.addChatStatus !== 'SUCCESS' && addChatStatus === 'SUCCESS') {
      this.props.fetchData(actionGetChats(course_id))
    }
  }

  handleAddChat = content => {
    console.log('handleAddChat', content)
    const course_id = this.props && this.props.course_id
    console.log('course_id', course_id)
    const nickname = 'Guest'

    this.props.fetchData(actionAddChat(course_id, nickname, content))
  }

  render() {
    console.log('this.props', this.props)
    const { chatsArray } = this.props
    console.log('chatsArray', chatsArray)
    const chats = chatsArray.chats
    console.log('chats', chats)

    return (
      <div>
        <h1>压力测试</h1>
        <hr />
        {chats &&
          chats.map(c => (
            <div key={c.createdAt}>
              <img src={c.headimgurl} alt="avatar" width="20px" /> &nbsp;
              {c.nickname}: {c.content}
            </div>
          ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('[TestContainer] mapStateToProps', state)
  const { chat } = state
  return chat
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchData }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestContainer)
