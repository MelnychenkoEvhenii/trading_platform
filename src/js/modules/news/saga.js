import { put, call } from 'redux-saga/effects'
import * as actions from './actions'
import { getMonthAgoInSec } from './utils'

export const NEWS_URL = 'http://informer.finversia.ru/newsapi/feed/ru'

export const DEFAULT_COUNT_POSTS = 10

export default function* getPosts() {
  try {
    const response = yield call(
      fetch,
      `${NEWS_URL}/${getMonthAgoInSec()}/${DEFAULT_COUNT_POSTS}`
    )
    const data = yield response.json()
    yield put(actions.getPostsSuccess(JSON.parse(data)))
  } catch (error) {
    yield put(actions.getPostsError(error))
  }
}
