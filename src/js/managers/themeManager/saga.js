import { takeLatest } from 'redux-saga/effects';
import constants from '../../constants/constants';
import lightTheme from '../themeManager/lightTheme';
import darkTheme from '../themeManager/darkTheme';
import { actionChangeTheme } from './actions.js';

export function* watchTheme () {
  yield takeLatest(constants.CHANGE_THEME, changeTheme);
}

export function* changeTheme(action) {
  switch (action.payload) {
    case 'light': yield put(actionChangeTheme(lightTheme));
    case 'dark': yield put(actionChangeTheme(darkTheme));
  }
}