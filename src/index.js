import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// these are from redux
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
const middlewares = [thunk]

const composedEnhancers = compose(
  applyMiddleware(...middlewares)
)

const initialState = {}

const store = createStore(rootReducer, initialState, composedEnhancers)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
