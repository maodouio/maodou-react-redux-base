import { GET_CHATS_SUCCESS, ADD_CHAT_SUCCESS, RESET_CHATS } from '../actions/actionTypes'

const defaultState = {
  chatsArray: [],
  addChatStatus: '',
}

export default (state = defaultState, action) => {
  const payload = action.payload

  switch (action.type) {
    case GET_CHATS_SUCCESS:
      return {
        ...state,
        chatsArray: payload.chats,
        addChatStatus: '',
      }
    case ADD_CHAT_SUCCESS:
      return {
        ...state,
        addChatStatus: 'SUCCESS',
      }
    case RESET_CHATS:
      return {
        ...state,
        chatsArray: [],
        addChatStatus: '',
      }
    default:
      return state
  }
}
