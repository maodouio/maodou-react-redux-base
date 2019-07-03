import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import { isDev } from './config'
import 'styles/index.scss'

if (isDev) {
  localStorage.setItem('debug', 'maodou:*')
} else {
  localStorage.setItem('debug', '')
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
