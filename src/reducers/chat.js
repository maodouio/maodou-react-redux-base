import { GET_CHATS_SUCCESS, ADD_CHAT_SUCCESS } from '../actions/actionTypes'

const defaultState = {
  chatsArray: [],
  addChatStatus: '',
}

export default (state = defaultState, action) => {
  console.log('[chat reducer]', state, action)
  const payload = action.payload

  switch (action.type) {
    case GET_CHATS_SUCCESS:
      return {
        ...state,
        chatsArray: payload,
        addChatStatus: '',
      }
    case ADD_CHAT_SUCCESS:
      return {
        ...state,
        addChatStatus: 'SUCCESS',
      }
    default:
      console.log('[reducer] default')
      return state
  }
}
