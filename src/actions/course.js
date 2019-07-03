import { API_URL } from '../api/config'
import {
  GET_COURSES_START,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
} from './actionTypes'

import {
  SHOW_COURSE_START,
  SHOW_COURSE_SUCCESS,
  SHOW_COURSE_FAILURE,
} from './actionTypes'

export const actionGetCourses = () => ({
  types: [GET_COURSES_START, GET_COURSES_SUCCESS, GET_COURSES_FAILURE],
  url: API_URL + '/courses',
  method: 'GET',
  data: {},
})

export const actionShowCourse = course_id => ({
  types: [SHOW_COURSE_START, SHOW_COURSE_SUCCESS, SHOW_COURSE_FAILURE],
  url: API_URL + '/course/' + course_id,
  method: 'GET',
  data: {},
})
