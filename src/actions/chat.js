import { API_URL } from '../api/config'
import {
    GET_CHATS_START,
    GET_CHATS_SUCCESS,
    GET_CHATS_FAILURE
} from "./actionTypes"

import {
    ADD_CHAT_START,
    ADD_CHAT_SUCCESS,
    ADD_CHAT_FAILURE
} from "./actionTypes"

export const actionGetChats = (course_id) => ({
  types: [
    GET_CHATS_START,
    GET_CHATS_SUCCESS,
    GET_CHATS_FAILURE
  ],
  url: API_URL + '/course/chats?courseId=' + course_id,
  method: "GET",
  data: {}
})

export const actionAddChat = (course_id, nickname, content) => ({
  types: [
    ADD_CHAT_START,
    ADD_CHAT_SUCCESS,
    ADD_CHAT_FAILURE
  ],
  url: API_URL + '/course/new_chat?courseId=' + course_id +'&nickname='+nickname+'&content='+content,
  method: "GET",
  data: {}
})
