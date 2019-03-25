import constants from '../../constants/constants'

export const showQuotesBlock = () => ({
  type: constants.CHANGE_VIEW_QUOTES,
  payload: true,
})
export const showRaceBlock = () => ({
  type: constants.CHANGE_VIEW_RACE,
  payload: true,
})
