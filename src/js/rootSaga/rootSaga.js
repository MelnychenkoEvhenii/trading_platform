import { all, takeLatest } from 'redux-saga/effects'
import watchChatSaga from '../modules/chat/saga'
import getPosts from '../modules/news/saga'
import constants from '../constants/constants'

export default function* watchRootSaga() {
  yield takeLatest(constants.GET_POSTS_REQUEST, getPosts)
  yield all([watchChatSaga()])
}
