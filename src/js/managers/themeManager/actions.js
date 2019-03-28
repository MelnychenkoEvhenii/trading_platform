import constants from '../../constants/constants';

export const actionChangeTheme = payload => ({
  type: constants.CHANGE_THEME_STORE,
  payload,
})