import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer'
import rootSaga from '../rootSaga/rootSaga'

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware))
  const store = createStore(rootReducer, initialState, compose(enhancers))
  sagaMiddleware.run(rootSaga)
  return store
}
