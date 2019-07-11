import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import ChatBox from '../../components/chat/ChatBox'
import ChatList from '../../components/chat/ChatList'
import { actionGetChats, actionAddChat } from '../../actions/chat'
import fetchData from '../../actions/fetchData'

class ChatsContainer extends Component {
  state = { chats: [], courseId: '' }

  componentDidMount() {
    const {
      match: { params },
    } = this.props
    this.setState({ courseId: params.id })
    this.props.fetchData(actionGetChats(params.id))
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.chatsArray.length) {
      return {
        chats: nextProps.chatsArray,
      }
    }
    return null
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.addChatStatus && this.props.addChatStatus === 'SUCCESS') {
      this.props.fetchData(actionGetChats(prevState.courseId))
    }
  }

  handleAddChat = content => {
    const nickname = 'Guest'
    this.props.fetchData(actionAddChat(this.state.courseId, nickname, content))
  }

  render() {
    const { chats } = this.state

    return (
      <Fragment>
        <ChatList chats={chats} />
        <ChatBox handleSubmit={this.handleAddChat} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  const { chat } = state
  return chat
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchData }, dispatch)

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ChatsContainer),
)
