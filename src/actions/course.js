import { API_URL } from '../api/config'
import {
  GET_COURSES_FAILURE,
  GET_COURSES_START,
  GET_COURSES_SUCCESS
} from "./actionTypes";

export const actionGetCourses = () => ({
  types: [
    GET_COURSES_START,
    GET_COURSES_SUCCESS,
    GET_COURSES_FAILURE
  ],
  url: API_URL + '/courses',
  method: "GET",
  data: {}
});