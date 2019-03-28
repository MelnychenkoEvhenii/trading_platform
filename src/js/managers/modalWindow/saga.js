import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { getQuestions } from '../../modules/header/selectors'
import constants from '../../constants/constants'
import { ru } from '../../languages/ru/ru'
import { en } from '../../languages/en/en'

function* checkAnswer(action) {
  const question = yield select(getQuestions)
  const answer = action.payload[1]
  const { correctAnswer } = question[action.payload[0]]

  if (answer === correctAnswer) {
    yield put({
      type: constants.CORRECT_ANSWER,
    })
  }
}

function* changeLanguage(action) {
  const payload = action.payload === 'ru' ? ru : en;
  yield put({
    type: constants.CHANGE_LANGUAGE_STORE,
    payload: payload
  });
}

export default function* modalSaga() {
  yield takeEvery(constants.CHECK_ANSWER_MODAL, checkAnswer)
  yield takeEvery(constants.CHANGE_LANGUAGE, changeLanguage)
}
