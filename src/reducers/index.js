import { combineReducers } from 'redux'

import getCourses from '../api/'
const defaultState = getCourses()

const courses = (state = defaultState, action) => {
	console.log('[reducer]', state, action)

	switch (action.type) {
		case 'ADD_COURSE':
			return [
				...state,
				{
					_id: new Date().toLocaleString(),
					title: action.title,
					members: []
				}
			]
		case 'DEL_COURSE':
			return state.filter(c => c._id !== action.id)
		default:
			console.log('default')
			return state
	}
}

export default combineReducers({
	courses
})