import { combineReducers } from 'redux'
import config from '../config/config'
import constants from '../constants/constants'
// import lang from '../languages/english/en'
// import mainTheme from '../themes/mainTheme'
import newsReducer from '../modules/tradingComponent/news/reducer'

const modalWindow = {
  show: false,
}

const modalWindowReducer = (state = modalWindow, action) => {
  switch (action.type) {
    case constants.TOGGLE_MODAL: {
      return {
        ...state,
        show: !state.show,
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
            isActive: action.payload,
          },
        },
      }
    }
    case constants.CHANGE_VIEW_RACE: {
      return {
        modules: {
          ...state.modules,
          race: {
            isActive: action.payload,
          },
        },
      }
    }
    case constants.CHANGE_VIEW_QUOTES: {
      return {
        modules: {
          ...state.modules,
          quotes: {
            isActive: action.payload,
          },
        },
      }
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  // users: usersReducer,
  // theme: themeReducer,
  // config: configReducer,
  // strings: languageReducer,
  // messages: messagesReducer,
  news: newsReducer,
  modal: modalWindowReducer,
  balance: balanceReducer,
  viewBlocks: viewBlockReducer,
})
