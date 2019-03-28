import constants from '../../constants/constants'

export const toggleBalanaceModal = payload => ({
  type: constants.CHANGE_BALANCE_MODAL_WINDOW_STATE,
  payload,
})

export const toggleSettingsModal = payload => ({
  type: constants.CHANGE_SETTING_MODAL_WINDOW_STATE,
  payload,
})

export const checkAnswer = payload => ({
  type: constants.CHECK_ANSWER_MODAL,
  payload,
})
