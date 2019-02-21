import { combineReducers } from 'redux'
import config from '../config/config'
import constants from '../constants/constants'
import lang from '../languages/english/en'
import mainTheme from '../themes/mainTheme'

const usersInitialState = [
  { name: '@john_123', isSelected: true },
  { name: '@alex_345', isSelected: false },
  { name: '@fred_678', isSelected: false },
]

const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case constants.SET_NEW_USER_STORE:
      return [...state, action.payload]
    case constants.CHANGE_STATE_SELECTED_USER:
      return state.map(user => {
        if (user.name === action.payload) {
          return { name: user.name, isSelected: true }
        }
        return { name: user.name, isSelected: false }
      })
    default: {
      return state
    }
  }
}

const messagesInitialState = [
  {
    text: 'Hello everyone',
    author: '@john_123',
    datetime: 1547303615302,
  },
  {
    text: 'Hi John',
    author: '@alex_345',
    datetime: 1547303815302,
  },
]

const messagesReducer = (state = messagesInitialState, action) => {
  switch (action.type) {
    case constants.ADD_NEW_MESSAGE_STORE:
      return [...state, action.payload]
    default: {
      return state
    }
  }
}

const configReducer = (state = config, action) => {
  switch (action.type) {
    case constants.TOGGLE_CHAT_MODULE: {
      return {
        ...state,
        activeBlocks: {
          ...state.activeBlocks,
          chat: !state.activeBlocks.chat,
        },
      }
    }
    case constants.SET_STATUS_STORE: {
      return {
        ...state,
        modules: {
          ...state.modules,
          header: {
            ...state.modules.header,
            status: action.payload,
          },
        },
      }
    }
    default: {
      return state
    }
  }
}

const languageReducer = (state = lang, action) => {
  switch (action.type) {
    case constants.CHANGE_LANGUAGE: {
      return { ...action.payload }
    }
    default: {
      return state
    }
  }
}

const themeReducer = (state = mainTheme, action) => {
  switch (action.type) {
    case constants.CHANGE_THEME_STORE: {
      return { ...action.payload }
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  users: usersReducer,
  theme: themeReducer,
  config: configReducer,
  strings: languageReducer,
  messages: messagesReducer,
})
