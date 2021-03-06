import {
  SHOW_COURSE_SUCCESS,
  GET_COURSES_SUCCESS,
  SHOW_COURSE_FAILURE,
  SET_COURSE_ID,
} from '../actions/actionTypes'

const defaultState = {
  coursesArray: [],
  courseInfo: {},
  currentCourseId: '',
}

export default (state = defaultState, action) => {
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
    case SHOW_COURSE_FAILURE:
      return {
        ...state,
      }
    case SET_COURSE_ID:
      return {
        ...state,
        currentCourseId: payload,
      }
    default:
      return state
  }
}
