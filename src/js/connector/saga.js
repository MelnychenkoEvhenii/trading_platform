import { takeEvery, put, select, } from 'redux-saga/effects';
import constants from '../constants/constants';

export function* updatesRates(action) {
  const newRates = action.payload;
  const storeRates = yield select(state => state.rates);

  let rates = { ...storeRates };

  for (const symbol in newRates) {
    rates = {
      ...rates,
      [symbol]: {
        ...rates[symbol],
        ...newRates[symbol],
      },
    };
  }

  yield put({type: constants.RATES_UPDATE_STORE, payload: {...rates} })
}

export default function* watchUpdateRates() {
  yield takeEvery(constants.RATES_UPDATE, updatesRates);
}
