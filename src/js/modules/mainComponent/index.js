import { connect } from 'react-redux'
import Component from './MainComponent'
import * as selectors from './selectors'
import * as actions from './actions'

const mapStateToProps = state => ({
  modules: selectors.getModules(state),
  theme: selectors.getTheme(state),
})

const mapDispatchToProps = dispatch => ({
  initConnection: dispatch(actions.initConnection()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
