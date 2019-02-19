import { connect } from 'react-redux'
import Component from './Footer.jsx'
import * as selectors from './selectors'

const mapStateToProps = state => ({
  strings: selectors.getStrings(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
