import constants from '../../constants/constants'

export const setStatus = payload => ({ type: constants.SET_STATUS, payload })
export const setStatusStore = payload => ({
  type: constants.SET_STATUS_STORE,
  payload,
})
export const addNewUser = () => ({ type: constants.ADD_NEW_USER })
export const addNewMessage = payload => ({
  type: constants.ADD_NEW_MESSAGE,
  payload,
})
export const addNewMessageStore = payload => ({
  type: constants.ADD_NEW_MESSAGE_STORE,
  payload,
})
export const setNewUserStore = payload => ({
  type: constants.SET_NEW_USER_STORE,
  payload,
})
export const toggleChatModule = () => ({ type: constants.TOGGLE_CHAT_MODULE })
export const changeStateSelectedUser = payload => ({
  type: constants.CHANGE_STATE_SELECTED_USER,
  payload,
})
