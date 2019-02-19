import { takeEvery, put, call, take, apply } from 'redux-saga/effects'
import constants from '../../constants/constants'
import faker from 'faker'
import * as actions from './actions'
import { eventChannel } from 'redux-saga'

export let ws = null
let channel = null

export default function* watchChatSaga() {
  yield takeEvery(constants.SET_STATUS, setStatus)
  yield takeEvery(constants.ADD_NEW_USER, addNewUser)
  yield takeEvery(constants.INIT_CONNECTION, initConnection)
  yield takeEvery(constants.ADD_NEW_MESSAGE, sendMessage)
}

export function* sendMessage(action) {
  const message = yield apply(JSON, JSON.stringify, [action.payload])
  yield apply(ws, ws.send, [message])
}

export function* setStatus(action) {
  yield put(actions.setStatusStore(action.payload))
}

export function* addNewUser() {
  const payload = yield apply(faker, faker.internet.userName)

  yield put(
    actions.setNewUserStore({
      name: `@${payload.toLocaleLowerCase()}`,
      isSelected: false,
    })
  )
  yield put(
    actions.addNewMessageStore({
      text: 'HELLO EVERYBODY',
      author: `@${payload.toLocaleLowerCase()}`,
      datetime: new Date().getTime(),
    })
  )
}

export function* initConnection() {
  channel = yield call(createWebSocket)

  while (channel) {
    const eventAction = yield take(channel)
    yield put(eventAction)
  }
}

export function createWebSocket() {
  ws = new WebSocket('ws://localhost:3000')

  return eventChannel(emitter => {
    ws.onopen = () => {
      emitter(actions.setStatus('ONLINE'))
    }

    ws.onclose = () => {
      emitter(actions.setStatus('DISCONNECTED'))
    }

    ws.onmessage = response => {
      const responseData = JSON.parse(response.data)
      const { text, author, datetime } = responseData
      emitter(
        actions.addNewMessageStore({
          text,
          author,
          datetime,
        })
      )
    }

    return () => {
      closeWs()
    }
  })
}

export function setWs(socket) {
  ws = socket
}

export function closeWs() {
  channel.close()
  channel = null
}
