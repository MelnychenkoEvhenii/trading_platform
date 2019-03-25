import { all } from 'redux-saga/effects';
import watchConnectorSaga from '../connector/connector';
// import watchRatesSaga from '../connector/ratesTable';
import watchUpdateRates from '../connector/saga';
import { watchTheme } from '../managers/themeManager/saga';
import { watchFilterInstruments } from '../modules/tradingComponent/quotes/saga';

export default function* watchRootSaga() {
  yield all([
    watchConnectorSaga(),
    watchUpdateRates(),
    watchTheme(),
    watchFilterInstruments(),
  ])
}
