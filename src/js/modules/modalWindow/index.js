import { connect } from 'react-redux'
import ModalWindow from './ModalWindow'
import * as actions from './actions'
import * as selectors from './selectors'

const mapStateToProps = state => ({
  show: selectors.getIsModalOpen(state),
})

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(actions.toggleModal()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWindow)
