import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import MainComponent from './js/modules/mainComponent/index'
import rootReducer from './js/reducers/rootReducer'
import rootSaga from './js/rootSaga/rootSaga'
import * as actions from './js/modules/news/actions'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
window.store = store

store.dispatch(actions.getPostsRequest())

ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.getElementById('root')
)
