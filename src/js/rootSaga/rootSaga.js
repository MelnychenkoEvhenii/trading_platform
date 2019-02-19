import { all } from 'redux-saga/effects';
import watchChatSaga from '../modules/chat/saga';

export default function* watchRootSaga() {
    yield all([
        watchChatSaga()
    ]);
}