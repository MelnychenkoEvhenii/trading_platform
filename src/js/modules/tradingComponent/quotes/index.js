import { connect } from 'react-redux'
import Component from './Quotes.jsx'
import * as selectors from './selectors'
import * as actions from './actions'

const mapStateToProps = state => ({
  rates: selectors.getRates(state),
  filter: selectors.getFilter(state),
})

const mapDispatchToProps = dispatch => ({
  hideQuotesBlock: () => dispatch(actions.hideQuotesBlock()),
  filterInstrument: payload => dispatch(actions.filterInstrumentName(payload)),
  filterMarketField: payload => dispatch(actions.filterMarketField(payload)),
  freezeInstruments: payload => dispatch(actions.freezeInstruments(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
