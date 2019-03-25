import { connect } from 'react-redux'
import Component from './Race'
import * as selectors from './selectors'
import * as actions from './actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  hideRaceBlock: () => dispatch(actions.hideRaceBlock()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
