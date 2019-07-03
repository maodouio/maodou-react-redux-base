import {
  SHOW_COURSE_SUCCESS,
  GET_COURSES_SUCCESS,
} from '../actions/actionTypes'

const defaultState = {
  coursesArray: [],
  courseInfo: {},
}

export default (state = defaultState, action) => {
  console.log('[course reducer]', state, action)
  const payload = action.payload

  switch (action.type) {
    case GET_COURSES_SUCCESS:
      return {
        ...state,
        coursesArray: payload,
      }
    case SHOW_COURSE_SUCCESS:
      return {
        ...state,
        courseInfo: payload,
      }
    default:
      console.log('[reducer] default')
      return state
  }
}
