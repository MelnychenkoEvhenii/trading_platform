import config from '../config/config';
import constants from '../constants/constants';
import { combineReducers } from 'redux';

const modalWindow = {
    isActive: false,
};

const modalWindowReducer = (state = modalWindow, action) => {
    switch (action.type) {
        case constants.CHANGE_MODAL_WINDOW_STATE: {
            return {
                ...state,
                isActive: action.payload
            }
        }
        default: {
            return state;
        }
    }
};

const defaultBalance = 100;

const balanceReducer = (state = defaultBalance, action) => {
    switch (action.type) {
        case constants.CHANGE_BALANCE_STORE: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

const viewBlockReducer = (state = config, action) => {
    switch (action.type) {
        case constants.CHANGE_VIEW_NEWS: {
            return {
                ...state,
                modules: {
                    ...state.modules,
                    news: {
                        isActive: action.payload
                    },
                }
            }
        }
        case constants.CHANGE_VIEW_RACE: {
            return {
                modules: {
                    ...state.modules,
                    race: {
                        isActive: action.payload
                    },
                }
            }
        }
        case constants.CHANGE_VIEW_QUOTES: {
            return {
                modules: {
                    ...state.modules,
                    quotes: {
                        isActive: action.payload
                    },
                }
            }
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    isModalWindow: modalWindowReducer,
    balance: balanceReducer,
    viewBlocks: viewBlockReducer,
});