import { all } from 'redux-saga/effects';
import watchConnectorSaga from '../connector/connector';
// import watchRatesSaga from '../connector/ratesTable';
import watchUpdateRates from '../connector/saga';
import { watchTheme } from '../managers/themeManager/saga';

export default function* watchRootSaga() {
  yield all([
    watchConnectorSaga(),
    watchUpdateRates(),
    watchTheme(),
  ])
}
