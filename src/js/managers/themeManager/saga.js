import { takeEvery, put } from 'redux-saga/effects'
import constants from '../../constants/constants'
import { darkTheme } from '../../themes/darkTheme'
import { lightTheme } from '../../themes/lightTheme'

export function* watchTheme() {
  yield takeEvery(constants.CHANGE_THEME, changeTheme)
}

export function* changeTheme(action) {
  const payload = action.payload === 'light' ? lightTheme : darkTheme;
  yield put({
    type: constants.CHANGE_THEME_STORE,
    payload: payload
  });

}
