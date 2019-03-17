export const setStatus = payload => ({ type: 'SET_STATUS', payload })
export const setStatusStore = payload => ({ type: 'SET_STATUS_STORE', payload })
export const addNewUser = () => ({ type: 'ADD_NEW_USER' })
export const addNewMessage = payload => ({ type: 'ADD_NEW_MESSAGE', payload })
export const initConnection = () => ({ type: 'INIT_CONNECTION' })
export const setNewUserStore = payload => ({
  type: 'SET_NEW_USER_STORE',
  payload,
})
export const addNewMessageStore = payload => ({
  type: 'ADD_NEW_MESSAGE_STORE',
  payload,
})
