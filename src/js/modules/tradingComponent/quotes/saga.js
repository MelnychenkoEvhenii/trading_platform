import { takeLatest, select, put } from 'redux-saga/effects';
import constants from '../../../constants/constants';

export function normalize(string) {
  return string.replace(/[^A-Za-zА-Яа-я0-9]/g, '').toLowerCase();
}

// export function compare(arg1, arg2) => {
//   let result = 0;
//   if (arg1.FullName.toLowerCase() > arg2.FullName.toLowerCase()) {
//     result = 1;
//   }
//   if (arg1.FullName.toLowerCase() < arg2.FullName.toLowerCase()) {
//     result = -1;
//   }
//   return result;
// };

export function* watchFilterInstruments() {
  // yield takeLatest(constants.FILTER_INSTRUMENTS, filterInstruments);
}

export function* filterInstruments(action) {

  // yield put({type:constants.FILTER_INSTRUMENTS_STORE, payload: [...newArray] })
}