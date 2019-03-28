import constants from '../../../constants/constants'

export const hideQuotesBlock = () => ({
  type: constants.CHANGE_VIEW_QUOTES,
  payload: false,
})

export const filterInstrumentName = payload => ({
  type: constants.FILTER_INSTRUMENTS,
  payload,
})

export const filterMarketField = payload => ({
  type: constants.FILTER_MARKET_FIELD,
  payload,
})

export const freezeInstruments = payload => ({
  type: constants.INSTRUMENT_ISFREEZE,
  payload,
})
