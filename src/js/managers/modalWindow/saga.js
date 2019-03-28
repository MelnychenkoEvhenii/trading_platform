import {call, put, select, takeEvery, takeLatest} from 'redux-saga/effects'
import  { getQuestions } from '../../modules/header/selectors'
import constants from '../../constants/constants'

export function* checkAnswer(action) {
  const question = yield select(getQuestions);
  const answer = action.payload[1];
  const { correctAnswer } = question[action.payload[0]];

  if (answer === correctAnswer) {
    yield put({
      type: constants.CORRECT_ANSWER,
    })
  }
}

export default function* modalSaga() {
  yield takeEvery(constants.CHECK_ANSWER_MODAL, checkAnswer)
}
