import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'

const initialState = {}
const middlewares = [thunk]
const enhancers = []

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
)

export default createStore(rootReducer, initialState, composedEnhancers)
