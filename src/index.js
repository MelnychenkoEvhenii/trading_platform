import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MainComponent from './js/modules/mainComponent/index'
import * as actions from './js/modules/news/actions'
import getStore from './js/store/index'

const store = getStore()
store.dispatch(actions.getPostsRequest())

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.getElementById('root')
)
