import { connect } from 'react-redux'
import Component from './Sidebar.jsx'
import * as actions from './actions'
import * as selectors from './selectors'

const mapStateToProps = state => ({
  translations: selectors.getTranslations(state),
  theme: selectors.getTheme(state),
})

const mapDispatchToProps = dispatch => ({
  showQuotesBlock: () => dispatch(actions.showQuotesBlock()),
  showRaceBlock: () => dispatch(actions.showRaceBlock()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
