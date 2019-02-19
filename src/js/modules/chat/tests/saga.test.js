import { takeEvery, put, call, take, apply } from 'redux-saga/effects';
import watchChatSaga, {createWebSocket} from '../saga';
import * as saga from '../saga';
import * as mockActions from '../../../mockData/mockActions';
import faker from 'faker';

describe('chatSaga watchChatSaga', () => {
    const generator = watchChatSaga();

    it('watchChatSaga should have takeEvery SET_STATUS', () => {
        assert.deepEqual(
            generator.next().value,
            takeEvery(mockActions.setStatus().type, saga.setStatus)
        );
    });

    it('watchChatSaga should have takeEvery ADD_NEW_USER', () => {
        assert.deepEqual(
            generator.next().value,
            takeEvery(mockActions.addNewUser().type, saga.addNewUser)
        );
    });

    it('watchChatSaga should have takeEvery INIT_CONNECTION', () => {
        assert.deepEqual(
            generator.next().value,
            takeEvery(mockActions.initConnection().type, saga.initConnection)
        );
    });

    it('watchChatSaga should have takeEvery ADD_NEW_MESSAGE', () => {
        assert.deepEqual(
            generator.next().value,
            takeEvery(mockActions.addNewMessage().type, saga.sendMessage)
        );
    });

    it('watchChatSaga should have finished', () => {
        assert.isTrue(generator.next().done);
    })
});

describe('chatSaga sendMessage', () => {
    const mockPayload = {
        text: 'text',
        author: 'author',
        datetime: 12345,
    };
    const mockAction = mockActions.addNewMessage(mockPayload);
    const generator = saga.sendMessage(mockAction);

    before(() => {
        const socket = {
            send: message => message,
        };
        saga.setWs(socket);
    });

    it('sendMessage should apply JSON.stringify', () => {
        assert.deepEqual(
            generator.next().value,
            apply(JSON, JSON.stringify, [mockPayload])
        );
    });

    it('sendMessage should apply ws.send', () => {
        assert.deepEqual(
            generator.next('message').value,
            apply(saga.ws, saga.ws.send, ['message'])
        );
    });

    it('sendMessage should have finished', () => {
        assert.isTrue(generator.next().done);
    })
});

describe('chatSaga setStatus', () => {
    const mockPayload = 'DISCONNECTED';
    const mockAction = mockActions.setStatus(mockPayload);
    const generator = saga.setStatus(mockAction);

    it('setStatus should put actions.setStatusStore', () => {
        assert.deepEqual(
            generator.next().value,
            put(mockActions.setStatusStore(mockPayload))
        );
    });

    it('setStatus should have finished', () => {
        assert.isTrue(generator.next().done);
    })
});

describe('chatSaga addNewUser', () => {
    let sandBox = null;
    const userName = 'VALERON';
    const payload = `@${userName.toLocaleLowerCase()}`;
    const generator = saga.addNewUser();

    before(() => {
        sandBox = sinon.createSandbox();
        sandBox.stub(faker.internet, 'userName').returns(userName);
    });

    // afterEach(() => {
    //     sandBox.resetHistory();
    // });

    after(() => {
        sandBox.restore();
    });

    it('addNewUser should apply faker.internet.userName', () => {
        assert.deepEqual(
            generator.next().value,
            apply(faker, faker.internet.userName)
        );
    });

    it('addNewUser should put actions.setNewUserStore', () => {
        assert.deepEqual(
            generator.next(userName).value,
            put(mockActions.setNewUserStore({
                name: payload,
                isSelected: false
            }))
        );
    });

    it('addNewUser should put actions.addNewMessageStore', () => {
        assert.deepEqual(
            generator.next().value,
            put(mockActions.addNewMessageStore({
                text: 'HELLO EVERYBODY',
                author: payload,
                datetime: new Date().getTime(),
            }))
        );
    });

    it('addNewUser should have finished', () => {
        assert.isTrue(generator.next().done);
    });
});

describe('chatSaga initConnection', () => {
    const generator = saga.initConnection();
    let channel = {
        take: () => {},
        close: () => {}
    };

    it('initConnection should call createWebSocket', () => {
        assert.deepEqual(
            generator.next().value,
            call(saga.createWebSocket)
        );
    });

    it('initConnection should take channel', () => {
        assert.deepEqual(
            generator.next(channel).value,
            take(channel)
        );
    });

    it('initConnection should put eventAction', () => {
        assert.deepEqual(
            generator.next({a: 1}).value,
            put({a: 1})
        );
    });

    it('initConnection should have finished', () => {
        saga.closeWs();
        assert.isTrue(generator.next().done);
    });
});