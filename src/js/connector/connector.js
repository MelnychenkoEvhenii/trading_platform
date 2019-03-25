import { eventChannel, } from 'redux-saga';
import { takeEvery, take, put, call } from 'redux-saga/effects';
import constants from '../constants/constants';

export let ws = null;
export let channel = {};
export const commands = {
    RATES_HISTORY: 'rates_history',
    RATES_UPDATE: 'rates_update',
};

export default function* watchConnectorSaga() {
    yield takeEvery(constants.INIT_CONNECTION, connectWebSocket);
}

export function* connectWebSocket() {
    ws = new WebSocket('ws://localhost:1010');
    channel = yield call(createWsChannel, ws);

    while (channel) {
        const eventAction = yield take(channel);
        yield put(eventAction);
    }
}

export function createWsChannel(wsInstance) {
    return eventChannel(emitter => {
        wsInstance.onopen = () => {
            console.log('Connection Open');
        };

        wsInstance.onclose = () => {};

        wsInstance.onerror = (error) => {};

        wsInstance.onmessage = response => {
            const responseData = JSON.parse(response.data);
            switch (responseData.cmd) {
                case commands.RATES_HISTORY:
                    emitter({type: 'RATES_HISTORY_STORE', payload: responseData.data});
                    break;

                case commands.RATES_UPDATE:
                    emitter({type: 'RATES_UPDATE', payload: responseData.data});
                    break;
            }
        };

        return () => {
            closeWs();
        };
    });
}

export function closeWs(customChannel) {
    if (customChannel) {
        customChannel && customChannel.close();
        customChannel = null;
    } else {
        channel && channel.close();
        channel = null;
    }
}
