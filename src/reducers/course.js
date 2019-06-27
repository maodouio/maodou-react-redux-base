
const defaultState = {
	coursesArray: [],
}

//const course = (state = defaultState, action) => {
export default (state = defaultState, action) => {
	console.log('[reducer]', state, action)
	const payload = action.payload

	switch (action.type) {
		// case 'ADD_COURSE':
		// 	return [
		// 		...state,
		// 		{
		// 			_id: new Date().toLocaleString(),
		// 			title: action.title,
		// 			members: []
		// 		}
		// 	]
		// case 'DEL_COURSE':
		// 	return state.filter(c => c._id !== action.id)
		case 'GET_COURSES_SUCCESS':
			return {
				...state,
				coursesArray: payload
			}
		default:
			console.log('default')
			return state
	}
}
