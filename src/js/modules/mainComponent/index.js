import { connect } from 'react-redux'
import Component from './MainComponent'
import * as selectors from './selectors'

const mapStateToProps = state => ({
  modules: selectors.getModules(state),
})

const mapDispatchToProps = payload => dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
