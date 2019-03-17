import { all, takeEvery, takeLatest } from 'redux-saga/effects'
import { getPosts, setPost } from '../modules/tradingComponent/news/saga'
import constants from '../constants/constants'

export default function* watchRootSaga() {
  yield all([
    takeLatest(constants.GET_POSTS_REQUEST, getPosts),
    takeEvery(constants.SET_SELECTED_POST_ID, setPost),
  ])
}
