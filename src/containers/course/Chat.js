import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AddChat from '../../components/ChatNew'
import { actionGetChats } from '../../actions/chat'
import fetchData from '../../actions/fetchData'
import { actionAddChat } from '../../actions/chat'

class ChatsContainer extends Component {
  // componentWillMount() {
  //   const course_id = this.props && this.props.course_id
  //   setInterval(() => {
  //     this.props.fetchData(actionGetChats(course_id))
  //   }, 5000)
  // }

  componentWillReceiveProps(props) {
    const { addChatStatus } = props
    const course_id = this.props && this.props.course_id

    if (this.props.addChatStatus !== 'SUCCESS' && addChatStatus === 'SUCCESS') {
      this.props.fetchData(actionGetChats(course_id))
    }
  }

  handleAddChat = content => {
    const course_id = this.props && this.props.course_id
    const nickname = 'Guest'

    this.props.fetchData(actionAddChat(course_id, nickname, content))
  }

  render() {
    const { chatsArray } = this.props
    const chats = chatsArray.chats

    return (
      <div>
        <AddChat handleSubmit={this.handleAddChat} />
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
  const { chat, course } = state
  return { ...chat, courseId: course.currentCourseId }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchData }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatsContainer)
