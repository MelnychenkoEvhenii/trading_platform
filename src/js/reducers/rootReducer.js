import { combineReducers } from 'redux'
import config from '../config/config'
import constants from '../constants/constants'
import newsReducer from '../modules/tradingComponent/news/reducer';
import { ru } from '../languages/ru/ru'
import { lightTheme } from '../themes/lightTheme'

const modalWindowReducer = (state = config.modalWindow, action) => {
  switch (action.type) {
    case constants.CHANGE_BALANCE_MODAL_WINDOW_STATE: {
      return {
        ...state,
        balanceModalIsActive: action.payload,
      }
    }
    case constants.CHANGE_SETTING_MODAL_WINDOW_STATE: {
      return {
        ...state,
        settingsModalIsActive: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

const defaultBalance = 100

const balanceReducer = (state = defaultBalance, action) => {
  switch (action.type) {
    case constants.CHANGE_BALANCE_STORE: {
      return action.payload
    }
    case constants.CORRECT_ANSWER: {
      return state + 100
    }
    default: {
      return state
    }
  }
}

const questionReducer = (state = config.questions, action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}

const langReducer = (state = ru, action) => {
  switch (action.type) {
    case constants.CHANGE_LANGUAGE_STORE: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

const viewBlockReducer = (state = config, action) => {
  switch (action.type) {
    case constants.CHANGE_VIEW_NEWS: {
      return {
        ...state,
        modules: {
          ...state.modules,
          news: {
            isActive: !state.modules.news.isActive,
          },
        },
      }
    }
    case constants.CHANGE_VIEW_RACE: {
      return {
        modules: {
          ...state.modules,
          race: {
            isActive: !state.modules.race.isActive,
          },
        },
      }
    }
    case constants.CHANGE_VIEW_QUOTES: {
      return {
        modules: {
          ...state.modules,
          quotes: {
            isActive: !state.modules.quotes.isActive,
          },
        },
      }
    }
    default: {
      return state
    }
  }
}

const ratesReducer = (state = [], action) => {
  switch (action.type) {
    case constants.RATES_HISTORY_STORE: {
      return action.payload
    }
    case constants.RATES_UPDATE_STORE: {
      return action.payload
    }
    case constants.INSTRUMENT_ISFREEZE_STORE: {
      debugger;
        return {
          ...state,
        }
    }
    default: {
      return state
    }
  }
}

const themeReducer = ( state = lightTheme, action ) => {
  switch (action.type) {
    case constants.CHANGE_THEME_STORE: {
      return action.payload
    }
    default: {
      return state
    }
  }
};

const filterReducer = (
  state = { instruments: '', marketField: 'all' },
  action
) => {
  switch (action.type) {
    case constants.FILTER_INSTRUMENTS: {
      return {
        ...state,
        instruments: action.payload,
      }
    }
    case constants.FILTER_MARKET_FIELD: {
      return {
        ...state,
        marketField: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  modalWindowState: modalWindowReducer,
  balance: balanceReducer,
  questions: questionReducer,
  viewBlocks: viewBlockReducer,
  rates: ratesReducer,
  filter: filterReducer,
  translations: langReducer,
  theme: themeReducer,
  news: newsReducer,
})
