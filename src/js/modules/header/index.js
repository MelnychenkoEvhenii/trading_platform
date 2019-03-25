import { connect } from 'react-redux'
import Component from './Header.jsx'
import * as selectors from './selectors'
import * as actions from './actions'

const mapStateToProps = state => ({
  balance: selectors.getBalance(state),
})

const mapDispatchToProps = dispatch => ({
  openModalWindow: () => dispatch(actions.openModalWindow()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
