import { put, call } from 'redux-saga/effects'
import * as actions from './actions'
import { getMonthAgoInSec } from './utils'
import constants from '../../../constants/constants'

export const NEWS_URL = 'http://informer.finversia.ru/newsapi/feed/ru'

export function* getPosts() {
  try {
    const response = yield call(
      fetch,
      `${NEWS_URL}/${getMonthAgoInSec()}/${constants.DEFAULT_COUNT_POSTS}`
    )
    const data = yield response.json()
    yield put(actions.getPostsSuccess(JSON.parse(data)))
  } catch (error) {
    yield put(actions.getPostsError(error))
  }
}

export function* setPost(action) {
  yield put(actions.setSelectedPostId(action.payload))
}

export default null
