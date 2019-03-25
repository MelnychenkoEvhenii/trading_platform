import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ThemeProvider } from 'styled-components'

import rootReducer from './js/reducers/rootReducer'
import MainComponent from './js/modules/mainComponent/index'
import rootSaga from './js/rootSaga/rootSaga';
import lightTheme from './js/managers/themeManager/lightTheme';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)
sagaMiddleware.run(rootSaga)
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <MainComponent/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
